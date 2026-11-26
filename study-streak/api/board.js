// GET /api/board — top 50 of the class leaderboard (only students who opted in).
// Each row has a short id (first 12 hex chars of the code's hash) so a browser can spot its own row.
const S = require('./_lib/store');

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'GET') return res.status(405).json({ error: 'Use GET.' });
  if (!S.configured()) return res.status(503).json({ error: 'The live board is not set up on this site yet.' });
  try {
    if (!(await S.rateLimit(req))) return res.status(429).json({ error: 'Too many requests.' });
    const ids = await S.cmd('ZREVRANGE', 'ss:board', 0, 49);
    if (!ids || !ids.length) return res.status(200).json({ rows: [] });
    const vals = await S.cmd('MGET', ...ids.map(S.boardKey));
    const rows = [];
    ids.forEach((h, i) => {
      if (!vals[i]) { S.cmd('ZREM', 'ss:board', h).catch(() => {}); return; } // expired row
      const r = JSON.parse(vals[i]);
      rows.push({ id: h.slice(0, 12), name: r.name, xp: r.xp, streak: r.streak, mastered: r.mastered, updated: r.updated });
    });
    return res.status(200).json({ rows });
  } catch (e) {
    return res.status(500).json({ error: 'Board unavailable right now.' });
  }
};
