// Headless route check. Usage: node routecheck.js cos409 ins401 sen412 sen401
const { JSDOM } = require('jsdom');
const path = require('path');
const cids = process.argv.slice(2);
const BAD = /undefined|NaN|went wrong/;
const IGNORE = [/JavaScript[^<]*"5" - 2/, /\bNaN\b.*\bundefined\b/];

(async () => {
  const fs = require('fs');
  const root = path.resolve(__dirname, '..');
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8').replace(
    /<script src="(data\/[^"]+)"><\/script>/g,
    (m, f) => '<script>' + fs.readFileSync(path.join(root, f), 'utf8').replace(/<\/script/gi, '<\\/script') + '</script>');
  const dom = new JSDOM(html, { url: 'http://localhost/',
    runScripts: 'dangerously', pretendToBeVisual: true,
    beforeParse(w) {
      w.scrollTo = () => {}; w.alert = () => {}; w.confirm = () => true;
      w.localStorage.setItem('pau400sen_v1', JSON.stringify({ v: 1, profile: { name: 'Test', electives: ['sen419', 'csc420', 'sen418'], created: '2026-11-24' } }));
    }
  });
  const w = dom.window;
  await new Promise(r => w.addEventListener('load', r));
  await new Promise(r => setTimeout(r, 500));
  const app = w.document.getElementById('app');
  const hits = []; let n = 0;
  const visit = (h) => {
    n++;
    w.location.hash = h;
    try { w.render(); } catch (e) { hits.push([h, 'THROW ' + e.message]); return; }
    const t = app.textContent, html = app.innerHTML;
    let m = t.match(BAD);
    if (m) {
      const i = t.search(BAD);
      hits.push([h, t.slice(Math.max(0, i - 50), i + 50).replace(/\s+/g, ' ')]);
    }
    if (/<\/?(div|p|ul|table)\b/i.test(t)) hits.push([h, 'RAW HTML in text']);
  };
  ['home', 'plan', 'courses', 'review', 'exams', 'board', 'me'].forEach(visit);
  for (const cid of cids) {
    const D = w.COURSE_DATA[cid];
    if (!D) { hits.push([cid, 'NO COURSE DATA']); continue; }
    ['course-', 'flash-', 'calc-', 'mock-', 'cheat-', 'past-'].forEach(p => {
      if (p === 'calc-' && !(D.calc && D.calc.length)) return;
      if (p === 'past-' && !D.past) return;
      visit(p + cid);
    });
    for (const t of D.topics) {
      visit(`recall-${cid}-${t.id}`);
      if (t.quiz && t.quiz.length) visit(`quiz-${cid}-${t.id}`);
      if (t.theory && t.theory.length) { visit(`theory-${cid}-${t.id}`); visit(`feyn-${cid}-${t.id}`); }
      for (let i = 0; i < (t.cards || []).length; i++) visit(`lesson-${cid}-${t.id}-${i}`);
    }
  }
  console.log('routes visited:', n, ' hits:', hits.length);
  hits.forEach(h => console.log(h[0], '=>', h[1]));
  w.close(); process.exit(0);
})().catch(e => { console.error(e); process.exit(2); });

