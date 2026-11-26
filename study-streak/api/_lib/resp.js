// Minimal Redis client over TCP/TLS (RESP2) for a REDIS_URL like rediss://default:pass@host:port.
// No npm dependency, so the static site needs no install step. One connection per warm function.
const net = require('net'), tls = require('tls');

function encode(args) {
  let s = '*' + args.length + '\r\n';
  for (const a of args) { const b = Buffer.from(String(a)); s += '$' + b.length + '\r\n' + b.toString('binary') + '\r\n'; }
  return Buffer.from(s, 'binary');
}

// Parse one reply from buf at pos; returns [value, nextPos] or null if incomplete.
function parse(buf, pos) {
  if (pos >= buf.length) return null;
  const end = buf.indexOf('\r\n', pos);
  if (end < 0) return null;
  const type = String.fromCharCode(buf[pos]), line = buf.toString('utf8', pos + 1, end);
  let p = end + 2;
  if (type === '+') return [line, p];
  if (type === '-') return [new Error(line), p];
  if (type === ':') return [parseInt(line, 10), p];
  if (type === '$') {
    const n = parseInt(line, 10);
    if (n < 0) return [null, p];
    if (buf.length < p + n + 2) return null;
    return [buf.toString('utf8', p, p + n), p + n + 2];
  }
  if (type === '*') {
    const n = parseInt(line, 10);
    if (n < 0) return [null, p];
    const out = [];
    for (let i = 0; i < n; i++) { const r = parse(buf, p); if (!r) return null; out.push(r[0]); p = r[1]; }
    return [out, p];
  }
  return [new Error('Unknown reply type ' + type), p];
}

function connect(url) {
  const u = new URL(url);
  const secure = u.protocol === 'rediss:';
  const opts = { host: u.hostname, port: +u.port || 6379, servername: u.hostname };
  const sock = secure ? tls.connect(opts) : net.connect(opts);
  sock.setTimeout(8000);
  let buf = Buffer.alloc(0); const queue = []; let dead = null;
  const fail = e => { dead = e || new Error('Redis connection closed'); while (queue.length) queue.shift().reject(dead); };
  sock.on('data', d => {
    buf = Buffer.concat([buf, d]);
    for (;;) { const r = parse(buf, 0); if (!r) break; buf = buf.subarray(r[1]); const q = queue.shift(); if (q) (r[0] instanceof Error ? q.reject(r[0]) : q.resolve(r[0])); }
  });
  sock.on('error', fail); sock.on('close', () => fail()); sock.on('timeout', () => sock.destroy(new Error('Redis timeout')));
  const send = args => new Promise((resolve, reject) => { if (dead) return reject(dead); queue.push({ resolve, reject }); sock.write(encode(args)); });
  const ready = (async () => {
    const user = decodeURIComponent(u.username || ''), pass = decodeURIComponent(u.password || '');
    if (pass) await send(user && user !== 'default' ? ['AUTH', user, pass] : ['AUTH', pass]);
  })();
  return { send: async args => { await ready; return send(args); }, isDead: () => !!dead };
}

let client = null;
async function redisCmd(url, args) {
  if (!client || client.isDead()) client = connect(url);
  return client.send(args);
}
module.exports = { redisCmd, parse, encode };
