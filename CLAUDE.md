# Study Streak — PAU 400L SEN exam prep

Static web app (no build step) that helps PAU 400-level Software Engineering students pass all 1st-semester exams (target 50+/65 in each). Owner: Omotayo Ayeni. Moved here from a claude.ai artifact on 24 Nov 2026 to save tokens.

## Run it
Open `index.html` in a browser, or `npx serve .`. To publish: push to GitHub and enable GitHub Pages on the main branch root.

## Files
- `index.html`: the whole engine (HTML + CSS + JS in one file).
  - Router: `render()` reads `location.hash`. Routes: `home, plan, courses, course-<cid>, lesson-<cid>-<tid>-<n>, recall-, quiz-, theory-, feyn-, past-<cid>, review, flash-<cid>, calc-<cid>, mock-<cid>, cheat-<cid>, exams, board, me, guides, guide-<cid>, eve-<cid>, essay-<cid>[-<tid|past>-<i>], sit-<cid>`.
  - Features added 25 Nov: dark mode (🌓 button; `localStorage` key `pau400sen_theme`; colours are CSS variables on `:root`), Study guides page (downloads from `assets/course-guides/<cid>/`, listed in `COURSE_GUIDES`) and a printable full guide per course, topic confidence dots (`ST.conf`) feeding the exam-eve sheet, the five-part essay trainer (`ST.essays`, drafts autosave), and "Sit the real paper" (`ST.sitDraft` / `ST.sits`; timed, resumable, self-marked).
  - A topic with `noExam:true` is kept out of mocks and the roadmap (used for SEN412 defense prep).
  - State: `localStorage` key `pau400sen_v1`. Backup/restore codes (base64 JSON) are under Me.
  - Leaderboard: uses `window.claude.use('db')`, which exists only inside claude.ai artifacts. The code is guarded, so on GitHub Pages the live board is inert. Replacing it (e.g. Supabase/Firebase) is an open task. The WhatsApp share card works everywhere.
- `data/catalog.js`: exam timetable, electives, class days, formats, topic titles, `status`.
- `data/<course>.js`: one file per course. Each needs a `<script src>` tag in index.html and an entry in `sw.js` CORE.
- `data/*_extra.js`, `data/sen419_chain.js`: additions pushed onto existing courses (SEN412 Feb 2026 paper + defense prep, SEN401 weeks 1/12/13, SEN419 blockchain, SEN418 lectures 5–7 gap).
- `data/past_rules.js`: per-paper `rule`, `mins`, `compulsory` used by sit mode. Questions group by the start of `h` (`Q1`, `Exam Q2`, `Section A`, `CA1`).
- `sw.js`: network-first for app + data, cache-first for `assets/`. Bump `CACHE` when the file list changes.
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
| sen419 | Web/Mobile/Blockchain (elective) | Sat 12 Dec 3–6pm | Feb 2026 past paper added; no blockchain notes yet |
| sen408 | Ethics | Mon 14 Dec 12–2pm | Feb 2026 past paper + scenario & 5-part essays |
| csc420 | Database II (elective) | Tue 15 Dec 12–2pm | Feb 2026 past paper + CA1 practical test + SQL & MQL |
| sen418 | IoT & Edge (elective) | Wed 16 Dec 12–2pm | Lectures 1–4, 8–9 + assignment + CA2 Azure report |

## Content rules (from Omotayo)
- Use the lecturers' notes as the primary source. Label anything from outside the notes as additional context. Never invent exam patterns.
- Every essay-style answer in any course uses: Background → Answer and solution → Scenario → How they combine → Conclusion.
- COS409: fill-in-the-gaps, MCQ, theory. Ethics: scenario with follow-up questions. CSC420: queries.
- Courses without past papers follow the style of the papers that exist.
- She has ADHD: short cards, one idea each, quick wins.

## Daily goals
120 min on class days (23–26 Nov), 210 on free days, 240 in exam week, 60 on an exam day.

## Open tasks
1. ~~**Coverage audit (priority).** Omotayo found notes missing from the app. Compare each course against its source notes (slides/PDFs/study guides in her "1st Semester" folder) and add missing points as cards, recall items and quiz items. Keep the existing schema.~~ **Done for all 8 courses (24–25 Nov):**
   - `cos409` (Lectures 0–5 + syllabus)
   - `ins401` (all 11 slide decks)
   - `sen412` (decks 0–3, 5, 7 + class exercises 28 Oct and 17 Nov)
   - `sen401` (weeks 2–6, 8–11 slides + teaching plan; weeks 1, 12, 13 have no slides yet)
   - `sen419` (all 7 slide/practical PDFs: UI/UX, Frontend Practical, Backend, Backend Practical Part 1, Mobile Dev, Deployment, Deployment Practical + Feb 2026 Exam past paper)
   - `sen408` (all 16 PDFs including Moor, Zittrain, Nguyen, Susser, Barocas & Nissenbaum, Nissenbaum, UNESCO Ethics by Design, ACM & BCS Codes of Ethics, IP, VSD/HCD, Healthcare AI + CA2 + Feb 2026 Exam past paper)
   - `csc420` (Lectures 1–6 PDFs, Compact syllabus, Practical Exam Lab Guide, CA1 Practical Test & official SQL solutions + Feb 2026 Exam past paper)
   - `sen418` (Lectures 1, 2, 3, 4, 8, 9 `.pptx` decks, Coursework Assignment, CA2 Azure AlmaLinux report, and study guides)
2. ~~Add `quiz` items to INS401 topics so its mock has a Section A.~~ Done 24 Nov (131 items).
3. Add in-class transcripts when she provides them; tag those points "Said in class".
4. ~~SEN419 blockchain topic~~ Added 25 Nov as additional context (t8). Replace if the lecturer shares notes. Same for SEN401 weeks 1/12/13 (t10–t12) and SEN418 lectures 5–7 (t7): built from the teaching plan + standard sources because no slides exist.
5. Replace the claude.ai leaderboard with a real backend, or hide the live board on GitHub Pages.
6. ~~After each edit, open every route headlessly and check for "undefined", "NaN" or "went wrong".~~ Automated via `node build/routecheck.js <cids...>` (JSDOM headless route verifier; also covers guides, eve, essay and sit write/mark phases). Takes ~2 min for all 8.

## Token-saving habits
- Edit one course file at a time; don't reread index.html unless changing the engine.
- Use `grep -n` to find a topic before editing it.
- Validate data quickly with:
  `node -e "global.window=global;require('./data/catalog.js');require('./data/cos409.js');console.log(COURSE_DATA.cos409.topics.length)"`
