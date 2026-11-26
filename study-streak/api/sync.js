// POST /api/sync — save and load a student's progress by sync code (no login).
// Actions: create {state, board?} → {code, rev}
//          get    {code}           → {state, rev, updated}
//          put    {code, rev, state, board?} → {rev}  or 409 {state, rev} when the server has newer data
//          leave-board {code}      → {ok}
// The code is the only secret: it is never stored, only its SHA-256 hash.
const S = require('./_lib/store');

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') return res.status(405).json({ error: 'Use POST.' });
  if (!S.configured()) return res.status(503).json({ error: 'Sync is not set up on this site yet.' });
  try {
    if (!(await S.rateLimit(req))) return res.status(429).json({ error: 'Too many requests. Wait a minute and try again.' });
    const b = S.body(req);
    const action = b.action;

    if (action === 'create') {
      const state = JSON.stringify(b.state || {});
      if (state.length > S.MAX_STATE_BYTES) return res.status(413).json({ error: 'Progress is too large to sync.' });
      for (let i = 0; i < 5; i++) {
        const code = S.newCode(), h = S.hashCode(code);
        const doc = JSON.stringify({ state: b.state || {}, rev: 1, updated: Date.now() });
        const ok = await S.cmd('SET', S.userKey(h), doc, 'NX', 'EX', S.USER_TTL);
        if (ok) { if (b.board) await S.putBoard(h, b.board); return res.status(200).json({ code, rev: 1 }); }
      }
      return res.status(500).json({ error: 'Could not create a code. Try again.' });
    }

    const norm = S.normCode(b.code);
    if (norm.length < 8) return res.status(400).json({ error: 'That does not look like a sync code.' });
    const h = S.hashCode(norm), key = S.userKey(h);
    const raw = await S.cmd('GET', key);
    const cur = raw ? JSON.parse(raw) : null;

    if (action === 'get') {
      if (!cur) return res.status(404).json({ error: 'No progress found for that code. Check the spelling.' });
      return res.status(200).json(cur);
    }

    if (action === 'put') {
      if (!cur) return res.status(404).json({ error: 'No progress found for that code.' });
      if ((+b.rev || 0) < cur.rev) return res.status(409).json(cur); // client must merge, then retry
      const state = JSON.stringify(b.state || {});
      if (state.length > S.MAX_STATE_BYTES) return res.status(413).json({ error: 'Progress is too large to sync.' });
      const next = { state: b.state || {}, rev: cur.rev + 1, updated: Date.now() };
      await S.cmd('SET', key, JSON.stringify(next), 'EX', S.USER_TTL);
      if (b.board) await S.putBoard(h, b.board);
      return res.status(200).json({ rev: next.rev, updated: next.updated });
    }

    if (action === 'leave-board') {
      if (!cur) return res.status(404).json({ error: 'No progress found for that code.' });
      await S.dropBoard(h);
      return res.status(200).json({ ok: true });
    }

    return res.status(400).json({ error: 'Unknown action.' });
  } catch (e) {
    return res.status(500).json({ error: 'Sync server error. Try again shortly.' });
  }
};
