# Study Streak — PAU 400L SEN exam prep

Static web app (no build step) that helps PAU 400-level Software Engineering students pass all 1st-semester exams (target 50+/65 in each). Owner: Omotayo Ayeni. Moved here from a claude.ai artifact on 24 Nov 2026 to save tokens.

## Run it
Open `index.html` in a browser, or `npx serve .`. To publish: push to GitHub and enable GitHub Pages on the main branch root.

## Files
- `index.html`: the whole engine (HTML + CSS + JS in one file).
  - Router: `render()` reads `location.hash`. Routes: `home, plan, courses, course-<cid>, lesson-<cid>-<tid>-<n>, recall-, quiz-, theory-, feyn-, past-<cid>, review, flash-<cid>, calc-<cid>, mock-<cid>, cheat-<cid>, exams, board, me`.
  - State: `localStorage` key `pau400sen_v1`. Backup/restore codes (base64 JSON) are under Me.
  - Leaderboard: uses `window.claude.use('db')`, which exists only inside claude.ai artifacts. The code is guarded, so on GitHub Pages the live board is inert. Replacing it (e.g. Supabase/Firebase) is an open task. The WhatsApp share card works everywhere.
- `data/catalog.js`: exam timetable, electives, class days, formats, topic titles, `status`.
- `data/<course>.js`: one file per course. Each needs a `<script src>` tag in index.html.
- `build/`: one-off scripts used to assemble INS401 from an older app.

## Course data schema
```js
COURSE_DATA["id"] = {
  topics: [{ id:'t1', title, why,
    cards:  [{ h, b /* HTML; classes .def .hook .trap .trig .flow, tables */ }],
    recall: [[question, answer]],
    quiz:   [{k:'mcq',q,o:[...],a:idx,w?} | {k:'tf',q,a:bool,w?} | {k:'gap',q,a,alt?:[...]}],
    theory: [{ q, pts:[marking points], model /* HTML */ }] }],
  calc: [{ t, q, ans, tol, sol }],
  past: { title, note, qs:[{ h, marks, q, pts, model }] }
}
```
Mocks take 10 objective items (from `quiz`) and `mockTheory` (default 4) theory questions.

## Courses and exams (Africa/Lagos)
| id | Course | Exam | Notes |
|---|---|---|---|
| cos409 | Research Methodology | Tue 8 Dec 3–6pm | gap-fill, MCQ, theory, calc |
| ins401 | Project Management | Wed 9 Dec 12–2pm | has past paper; quiz items added 24 Nov |
| sen412 | Survey of PL | Thu 10 Dec 3–6pm | past paper; topic 7 is extra context |
| sen401 | SCM & Maintenance | Fri 11 Dec 12–2pm | new course |
| sen419 | Web/Mobile/Blockchain (elective) | Sat 12 Dec 3–6pm | no blockchain notes yet |
| sen408 | Ethics | Mon 14 Dec 12–2pm | scenario + 5-part essays |
| csc420 | Database II (elective) | Tue 15 Dec 12–2pm | mostly SQL queries |
| sen418 | IoT & Edge (elective) | Wed 16 Dec 12–2pm | new course |

## Content rules (from Omotayo)
- Use the lecturers' notes as the primary source. Label anything from outside the notes as additional context. Never invent exam patterns.
- Every essay-style answer in any course uses: Background → Answer and solution → Scenario → How they combine → Conclusion.
- COS409: fill-in-the-gaps, MCQ, theory. Ethics: scenario with follow-up questions. CSC420: queries.
- Courses without past papers follow the style of the papers that exist.
- He has ADHD: short cards, one idea each, quick wins.

## Daily goals
120 min on class days (23–26 Nov), 210 on free days, 240 in exam week, 60 on an exam day.

## Open tasks
1. **Coverage audit (priority).** Omotayo found notes missing from the app. Compare each course against its source notes (slides/PDFs/study guides in his "1st Semester" folder) and add missing points as cards, recall items and quiz items. Keep the existing schema. Done 24 Nov: cos409 (Lectures 0–5 + syllabus) ins401 (all 11 slide decks) and sen412 (decks 0–3, 5, 7 + class exercises 28 Oct and 17 Nov; decks 1–2 are image-only PDFs, read from extracted slide images) and sen401 (weeks 2–6, 8–11 slides + teaching plan; weeks 1, 12, 13 have no slides yet). Next: sen408, csc420, sen418, sen419.
2. ~~Add `quiz` items to INS401 topics so its mock has a Section A.~~ Done 24 Nov (131 items).
3. Add in-class transcripts when he provides them; tag those points "Said in class".
4. SEN419 blockchain topic once notes exist.
5. Replace the claude.ai leaderboard with a real backend, or hide the live board on GitHub Pages.
6. After each edit, open every route headlessly and check for "undefined", "NaN" or "went wrong".

## Token-saving habits
- Edit one course file at a time; don't reread index.html unless changing the engine.
- Use `grep -n` to find a topic before editing it.
- Validate data quickly with:
  `node -e "global.window=global;require('./data/catalog.js');require('./data/cos409.js');console.log(COURSE_DATA.cos409.topics.length)"`
