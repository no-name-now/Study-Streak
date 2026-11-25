// Shared helpers for the sync and leaderboard functions.
// Storage: Upstash Redis over its REST API (added from Vercel → Storage → Upstash).
// Vercel injects KV_REST_API_URL / KV_REST_API_TOKEN (or UPSTASH_REDIS_REST_URL / _TOKEN).
// Local dev: SYNC_DEV_MEMORY=1 uses an in-memory store (see build/devserver.js).
const crypto = require('crypto');

const URL_ = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
const USE_MEM = !(URL_ && TOKEN) && process.env.SYNC_DEV_MEMORY === '1';

const MAX_STATE_BYTES = 900 * 1024;          // one student's progress
const USER_TTL = 60 * 60 * 24 * 400;         // keep synced progress ~13 months after last write
const BOARD_TTL = 60 * 60 * 24 * 45;         // drop leaderboard rows idle for 45 days

function configured() { return !!(URL_ && TOKEN) || USE_MEM; }

/* ---------- in-memory Redis subset for local testing ---------- */
const mem = global.__ssMem || (global.__ssMem = { kv: new Map(), z: new Map() });
function memCmd([c, ...a]) {
  c = c.toUpperCase();
  if (c === 'GET') return mem.kv.has(a[0]) ? mem.kv.get(a[0]) : null;
  if (c === 'SET') { if (a.includes('NX') && mem.kv.has(a[0])) return null; mem.kv.set(a[0], a[1]); return 'OK'; }
  if (c === 'DEL') { let n = 0; a.forEach(k => { if (mem.kv.delete(k)) n++; }); return n; }
  if (c === 'INCR') { const v = (+mem.kv.get(a[0]) || 0) + 1; mem.kv.set(a[0], String(v)); return v; }
  if (c === 'EXPIRE') return 1;
  if (c === 'MGET') return a.map(k => mem.kv.has(k) ? mem.kv.get(k) : null);
  if (c === 'ZADD') { const z = mem.z.get(a[0]) || new Map(); z.set(a[2], +a[1]); mem.z.set(a[0], z); return 1; }
  if (c === 'ZREM') { const z = mem.z.get(a[0]); return z && z.delete(a[1]) ? 1 : 0; }
  if (c === 'ZREVRANGE') { const z = mem.z.get(a[0]) || new Map(); return [...z.entries()].sort((x, y) => y[1] - x[1]).slice(+a[1], +a[2] + 1).map(x => x[0]); }
  throw new Error('mem: unsupported ' + c);
}

async function cmd(...args) {
  if (USE_MEM) return memCmd(args.map(String));
  const r = await fetch(URL_, { method: 'POST', headers: { Authorization: 'Bearer ' + TOKEN }, body: JSON.stringify(args) });
  const j = await r.json();
  if (j.error) throw new Error(j.error);
  return j.result;
}

/* ---------- sync codes ---------- */
const WORDS = ('ACORN AMBER APPLE ARROW ATLAS BADGE BAMBOO BANJO BASIL BEACON BERRY BISON BLAZE BLOOM BRAVE BREEZE BRICK BROOK CACTUS CAMEL CANDLE CANOE CEDAR CHALK CHERRY CHESS CLOUD CLOVER COBALT COCOA COMET CORAL COTTON CRANE CRYSTAL DAISY DELTA DOLPHIN DRAGON DRUM EAGLE EMBER FALCON FERN FIG FLAME FOREST FOX GALAXY GARDEN GECKO GINGER GLACIER GOLD GRAPE HARBOR HAWK HAZEL HONEY IVORY JADE JAGUAR JASMINE KAYAK KITE KOALA LAGOON LANTERN LEMON LILY LION LOTUS MANGO MAPLE MARBLE MEADOW MELON MINT MOON NECTAR NOVA OAK OCEAN OLIVE ORBIT OTTER PALM PANDA PAPAYA PEACH PEARL PEBBLE PEPPER PIANO PINE PLANET PLUM POLAR PRISM QUARTZ RAVEN REEF RIVER ROBIN ROCKET SAFARI SAGE SALSA SAPPHIRE SHELL SILVER SKY SPARROW SPRUCE STAR STONE SUMMIT SUNNY SWAN TANGO TIGER TOPAZ TULIP UMBER VALLEY VELVET VIOLET WALNUT WAVE WILLOW WOLF ZEBRA ZEST').split(' ');
function newCode() {
  const w = () => WORDS[crypto.randomInt(WORDS.length)];
  return `${w()}-${w()}-${w()}-${String(crypto.randomInt(10000)).padStart(4, '0')}`;
}
// Same code typed with spaces, lowercase or no dashes still works.
function normCode(c) { return String(c || '').toUpperCase().replace(/[^A-Z0-9]/g, ''); }
function hashCode(c) { return crypto.createHash('sha256').update('study-streak:' + normCode(c)).digest('hex'); }
const userKey = h => 'ss:u:' + h;
const boardKey = h => 'ss:b:' + h;

/* ---------- request helpers ---------- */
function clientIp(req) { return String(req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'x').split(',')[0].trim(); }
async function rateLimit(req, limit = 90) {
  const k = 'ss:rl:' + clientIp(req) + ':' + Math.floor(Date.now() / 60000);
  const n = await cmd('INCR', k);
  if (n === 1) await cmd('EXPIRE', k, 120);
  return n <= limit;
}
function body(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  try { return JSON.parse(req.body || '{}'); } catch (e) { return {}; }
}
function cleanBoardEntry(e) {
  if (!e || typeof e !== 'object') return null;
  const n = v => Math.max(0, Math.min(1e7, Math.floor(+v || 0)));
  const name = String(e.name || '').replace(/[<>\u0000-\u001f]/g, '').trim().slice(0, 24);
  if (!name) return null;
  return { name, xp: n(e.xp), streak: n(e.streak), mastered: n(e.mastered), updated: new Date().toISOString().slice(0, 10) };
}
async function putBoard(h, entry) {
  const e = cleanBoardEntry(entry);
  if (!e) return;
  await cmd('SET', boardKey(h), JSON.stringify(e), 'EX', BOARD_TTL);
  await cmd('ZADD', 'ss:board', e.xp, h);
}
async function dropBoard(h) { await cmd('ZREM', 'ss:board', h); await cmd('DEL', boardKey(h)); }

module.exports = { cmd, configured, newCode, normCode, hashCode, userKey, boardKey, rateLimit, body, putBoard, dropBoard, MAX_STATE_BYTES, USER_TTL };
