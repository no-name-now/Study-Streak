global.window = global;
const fs = require('fs'), path = require('path');
const [S, file, CID] = process.argv.slice(2);
require(path.resolve('data/catalog.js'));
require(path.resolve(file));
const d = COURSE_DATA[CID];
const orig = JSON.parse(JSON.stringify(d));

// Fix pre-existing &lt;/&gt; in plain-text fields: these are passed through esc(), so they showed literally.
const unent = s => typeof s === 'string' ? s.replace(/&lt;/g, '<').replace(/&gt;/g, '>') : s;
let fixed = 0;
d.topics.forEach(t => {
  t.recall = t.recall.map(r => r.map(x => { const y = unent(x); if (y !== x) fixed++; return y; }));
  t.quiz.forEach(q => {
    ['q', 'w'].forEach(k => { if (q[k]) { const y = unent(q[k]); if (y !== q[k]) fixed++; q[k] = y; } });
    if (q.o) q.o = q.o.map(unent);
  });
});

const before = {};
d.topics.forEach(t => before[t.id] = [t.cards.length, t.recall.length, t.quiz.length, t.theory.length]);
for (const n of [1, 2, 3]) {
  const A = require(S + '/add' + n + '.js');
  for (const [id, a] of Object.entries(A)) {
    const t = d.topics.find(x => x.id === id);
    ['cards', 'recall', 'quiz', 'theory'].forEach(k => { if (a[k]) t[k].push(...a[k]); });
  }
}

const sq = s => "'" + s.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n') + "'";
const bt = s => (s.includes('`') || s.includes('${')) ? sq(s) : '`' + s.replace(/\\/g, '\\\\') + '`';
const HTML = new Set(['b', 'model']);
const ser = (v, k) => Array.isArray(v) ? '[' + v.map(x => ser(x)).join(',') + ']'
  : (v && typeof v === 'object') ? '{' + Object.entries(v).map(([kk, x]) => kk + ':' + ser(x, kk)).join(',') + '}'
  : typeof v === 'string' ? (HTML.has(k) ? bt(v) : sq(v)) : String(v);
const topicSrc = t => {
  const { cards, recall, quiz, theory, ...head } = t;
  return ser(head).slice(0, -1) + ',\ncards:[\n' + cards.map(c => ser(c)).join(',\n') + '],\nrecall:' + ser(recall) +
    ',\nquiz:' + ser(quiz) + ',\ntheory:' + ser(theory) + '}';
};
const { topics, ...rest } = d;
const out = 'COURSE_DATA["' + CID + '"]={topics:[\n' + topics.map(topicSrc).join(',\n') + '\n],\n' +
  Object.entries(rest).map(([k, v]) => k + ':' + ser(v)).join(',\n') + '\n};\n';
fs.writeFileSync(S + '/' + CID + '.new.js', out);

// Verify by re-evaluating the generated source.
const box = {}; new Function('COURSE_DATA', out)(box);
const re = JSON.parse(JSON.stringify(box[CID]));
const J = x => JSON.stringify(x);
console.log('reparse ok; past unchanged:', J(re.past) === J(orig.past), '; entity fixes:', fixed);
let bad = 0;
re.topics.forEach((t, i) => {
  // original items must be preserved in order (modulo entity fix)
  const o = orig.topics[i];
  if (J(t.cards.slice(0, o.cards.length)) !== J(o.cards) || J(t.theory.slice(0, o.theory.length)) !== J(o.theory)) { bad++; console.log('original changed', t.id); }
  t.quiz.forEach(q => { if (q.k === 'mcq' && !(q.a >= 0 && q.a < q.o.length)) bad++; });
  t.cards.concat(t.theory.map(x => ({ h: x.q, b: x.model }))).forEach(c => {
    ['table', 'tr', 'td', 'th', 'ol', 'ul', 'li', 'div', 'p', 'b', 'pre', 'code'].forEach(tg => {
      const op = (c.b.match(new RegExp('<' + tg + '[ >]', 'g')) || []).length, cl = (c.b.match(new RegExp('</' + tg + '>', 'g')) || []).length;
      if (op !== cl) { bad++; console.log('unbalanced', t.id, c.h.slice(0, 40), tg); }
    });
  });
});
console.log('bad', bad, '; undefined/NaN', (J(re).match(/undefined|NaN|went wrong/g) || []).length);
re.topics.forEach(t => console.log(t.id, 'cards', before[t.id][0], '->', t.cards.length, 'recall', before[t.id][1], '->', t.recall.length,
  'quiz', before[t.id][2], '->', t.quiz.length, 'theory', before[t.id][3], '->', t.theory.length));
