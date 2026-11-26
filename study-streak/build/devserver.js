// Local dev server: serves the static app and runs api/*.js like Vercel does.
// With no Upstash env vars it uses an in-memory store (data is lost when it stops).
// Usage: node build/devserver.js [port]   (default 5180)
process.env.SYNC_DEV_MEMORY = process.env.SYNC_DEV_MEMORY || '1';
const http = require('http'), fs = require('fs'), path = require('path');
const root = path.resolve(__dirname, '..');
const port = +process.argv[2] || 5180;
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.json': 'application/json', '.svg': 'image/svg+xml', '.pdf': 'application/pdf', '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', '.png': 'image/png' };

http.createServer((req, res) => {
  const url = new URL(req.url, 'http://x');
  if (url.pathname.startsWith('/api/')) {
    const name = url.pathname.slice(5).replace(/[^a-z0-9-]/gi, '');
    const file = path.join(root, 'api', name + '.js');
    if (!name || !fs.existsSync(file)) { res.writeHead(404); return res.end('{}'); }
    let raw = '';
    req.on('data', c => raw += c);
    req.on('end', async () => {
      try { req.body = raw ? JSON.parse(raw) : {}; } catch (e) { req.body = {}; }
      req.query = Object.fromEntries(url.searchParams);
      res.status = c => { res.statusCode = c; return res; };
      res.json = o => { res.setHeader('Content-Type', 'application/json'); res.end(JSON.stringify(o)); };
      try { await require(file)(req, res); } catch (e) { console.error(e); res.statusCode = 500; res.end('{}'); }
    });
    return;
  }
  let p = path.normalize(decodeURIComponent(url.pathname)).replace(/^([\\/])+/, '');
  if (!p) p = 'index.html';
  const f = path.join(root, p);
  if (!f.startsWith(root) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); return res.end('Not found'); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(f)] || 'application/octet-stream' });
  fs.createReadStream(f).pipe(res);
}).listen(port, '127.0.0.1', () => console.log('Study Streak dev server on http://localhost:' + port + ' (in-memory sync store)'));
