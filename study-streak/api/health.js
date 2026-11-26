// GET /api/health — is sync set up? Shows storage variable NAMES (never values) and does a
// real write/read round-trip so a wrong token or unreachable database shows up clearly.
const S = require('./_lib/store');

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  const info = S.backendInfo();
  if (!S.configured()) {
    return res.status(200).json(Object.assign({ ok: false, problem: 'No database settings found. In Vercel: Storage → connect Upstash for Redis to this project, then Redeploy.' }, info));
  }
  try {
    const k = 'ss:health:' + Date.now();
    await S.cmd('SET', k, '1', 'EX', 60);
    const v = await S.cmd('GET', k);
    if (String(v) !== '1') throw new Error('read back ' + v);
    return res.status(200).json(Object.assign({ ok: true }, info));
  } catch (e) {
    return res.status(200).json(Object.assign({ ok: false, problem: 'Database settings found but the database did not answer: ' + String(e.message || e).slice(0, 160) }, info));
  }
};
