# Study Streak: handoff report (24 Nov 2026)

Handoff for whoever continues this work on another account. Read `CLAUDE.md` first: it has the app structure, data schema, content rules and the open-task list. This file covers only what changed in the 24 Nov session and what is left.

---

## 1. What was done

**Open task 1, the coverage audit**, is done for 4 of 8 courses. For each one, the course data file was compared against the lecturer's source notes in the "1st Semester" folder, and the missing points were added as cards, recall items, quiz items and some essay questions. The schema is unchanged.

| Course | Sources audited | Cards | Recall | Quiz | Essays | Calc |
|---|---|---|---|---|---|---|
| cos409 Research Methodology | Lecture notes 0–5 (PDF) + syllabus | 30 → 79 | 61 → 119 | 50 → 95 | 10 → 14 | 7 → 12 |
| ins401 Project Management | All 11 slide decks (.pptx) | 62 → 115 | 102 → 187 | 0 → 131 | 29 (unchanged) | 10 → 14 |
| sen412 Survey of PL | Decks 0, 1, 2, 3A, 3B, 5, 7 + class exercises 28 Oct and 17 Nov | 22 → 65 | 40 → 105 | 31 → 89 | 8 → 14 | 0 |
| sen401 SCM & Maintenance | Week 2–6, 8–11 slides + teaching plan | 19 → 51 | 32 → 87 | 26 → 80 | 9 → 11 | 3 (unchanged) |

**Other changes**

- **Open task 2 is done.** INS401 had no quiz items, so its mock exam had no Section A. It now has 131.
- **SEN412 display fix.** One recall answer showed `&lt;ident_list&gt;` as literal text and now shows `<ident_list>`. All other course files were checked and are clean.
- **SEN412 file reformatted.** `data/sen412.js` and `data/sen401.js` were rewritten by a script, so their line layout changed. The content was verified identical apart from the additions.
- **CLAUDE.md updated.** The open-tasks section records the audit progress, and task 2 is marked done.

**Content rules followed**

- The lecturer's notes are treated as the main source. Anything from outside them is labelled in a `.trap` box as additional context, a textbook point or a worked answer.
- Every new essay answer uses the five-part format: Background → Answer and solution → Scenario → How they combine → Conclusion.
- Cards are short, one idea each. No em dashes were used.

**Notes and slides that disagree** (each one is flagged on a card)

- **COS409:** the slides give only the 68% figure of the 68–95–99.7 rule.
- **INS401:** a Slido question marks "existing IT expertise is an OPA" as false, because it is an internal EEF.
- **SEN412:** a slide says C `int x = "5" + 3;` is a compile error. Older GCC versions only warned; GCC 14 and later do make it an error.
- **SEN412:** the binding times on the slides include *link* time, which Sebesta's textbook list doesn't have.
- **SEN401:** the lecturer's six SCMP sections differ from the IEEE 828 headings the app already had.
- **SEN401:** the slides estimate maintenance with effort, risk and confidence, while the app's ACT formula comes from the textbook.

**Files saved for the next session** (in `build/audit/`)

- `pptx2txt.py`, `docx2txt.py`: extract text from slides and Word documents using the Python standard library only. Run them with `python -I`.
- `pdfimg.py`: pulls embedded slide images out of image-only PDFs, so the Read tool can view them. pdftoppm isn't installed on this machine.
- `merge_generic.js`: merges `add1.js` to `add3.js` into a course file, rewrites it, and checks that the original content is unchanged, every HTML tag is closed, and no "undefined", "NaN" or "went wrong" text appears. Usage: `node merge_generic.js <dir-with-add-files> data/<cid>.js <cid>`. It loads `add1` to `add3` only, so edit the `[1, 2, 3]` list if you need more files.
- `additions/`: every addition file, by course.
- `backups/<cid>.before-audit.js`: each data file as it was before the audit. Copy one back over `data/<cid>.js` to undo that course's changes.

---

## 2. What is still missing

1. **Coverage audit for 4 courses:** sen419, sen408, csc420, sen418, in exam order: SEN419 Sat 12 Dec, SEN408 Mon 14 Dec, CSC420 Tue 15 Dec, SEN418 Wed 16 Dec.
2. **SEN419 blockchain topic** (open task 4). There are still no blockchain notes.
3. **SEN401 weeks 1, 12 and 13** have no slides. A card lists the week 12–13 topics from the teaching plan (program comprehension, re-engineering, reverse engineering, migration, retirement) without content. Add cards when the notes arrive. Deviations and waivers are in the teaching plan but not on the slides, so only the app's textbook card covers them.
4. **INS401 past papers** (`Project Management/Past questions/Exam.pdf`, `CA1.pdf`) are scanned images. They were not read because there is no OCR tool. They were already partly used in `ins401_past.js`.
5. **Study-guide .docx files** in each course folder were not compared, because only the lecturer's own notes were used. They may be useful for a second pass.
6. **In-class transcripts** (open task 3): none have been provided yet. Tag those points "Said in class".

---

## 3. Errors and risks to fix

| # | Issue | Where | Fix |
|---|---|---|---|
| 1 | **Nothing was checked in a browser.** CLAUDE.md task 6 (open every route and look for "undefined", "NaN" or "went wrong") could not run: auto mode blocked starting a local server, and the browser pane can't script `file://` pages. Only data-level checks were done. | All 4 audited courses | Run `npx serve .` and open every `course-`, `lesson-`, `recall-`, `quiz-`, `theory-`, `mock-`, `flash-`, `cheat-` and `calc-` route for cos409, ins401, sen412 and sen401. Pay special attention to the INS401 mock, whose Section A is new. |
| 2 | **Deliberate quiz answer options will trip the error check:** "NaN" (sen412 t6, JavaScript `"5" - 2`) and "undefined" (sen412 t7, from before the audit). | `data/sen412.js` | Ignore these two hits when running the check, or make the check skip quiz options. |
| 3 | **CLAUDE.md calls Omotayo "he"/"his"** (for example "He has ADHD", "his 1st Semester folder"). Omotayo uses she/her. | `CLAUDE.md` | Change to she/her. |
| 4 | **Older essay answers don't use the five-part format**, which the content rules require. | All courses, essay items from before this audit | Rewrite the old `model` answers into the five parts. |
| 5 | **One place in the engine shows `q.q` without escaping** (`${q.q}`), while every other place uses `esc()`. A `<` in that text would be treated as HTML. | `index.html` (grep `\${q.q}`) | Use `esc(q.q)`, or make sure no question text there contains `<`. |
| 6 | **The git repository is the whole user folder** (`C:\Users\Omotayo`), and it has many unrelated deleted files (SWAP/Inventory_app). Nothing from this session was committed. | — | Before committing, make study-streak its own repository (`git init` inside it) or commit only these paths. Don't commit from the home folder root. |
| 7 | **Leaderboard** only works inside claude.ai artifacts and does nothing on GitHub Pages (open task 5). | `index.html` | Replace it with Supabase/Firebase, or hide the live board when `window.claude` is missing. |
| 8 | **Shell tip:** in this Git Bash, heredocs sometimes lose backslashes (two scripts broke this way). | — | Write scripts with the Write tool, not `cat <<EOF`. |

---

## 4. Features still to build

- Replace or hide the live leaderboard (task 5).
- Data checks on every route without a browser (task 6), for example jsdom or Playwright in `build/`, so each audit can be verified on its own.
- Optional: a `calc` set for sen412 (none yet), and more calculations for ins401 and sen401 drawn from the slides' worked examples.

---

## 5. Prompt for the new chat

Copy everything below the line into the first message of the new chat. Open it with the working directory set to `...\1st Semester\study-streak\study-streak` and the `1st Semester` folder added.

---

> You're continuing work on my exam-prep web app, Study Streak. Read `CLAUDE.md` first, then `HANDOFF.md`, which is the report from the previous session.
>
> Context: I'm Omotayo (she/her), a PAU 400-level Software Engineering student. Exams run 8–16 Dec 2026. The app's course data lives in `data/<course>.js`. The lecturer's notes are in the course folders under `..\..\` (the "1st Semester" folder).
>
> Do these in order:
> 1. Fix the small issues in HANDOFF.md section 3: change the pronouns in CLAUDE.md to she/her (#3) and the unescaped `${q.q}` in index.html (#5).
> 2. Verify the audited courses (cos409, ins401, sen412, sen401). Serve the app with `npx serve .` if your permissions allow, open every route for those courses, and report any "undefined", "NaN" or "went wrong" text. The NaN and undefined quiz options listed in HANDOFF.md #2 are expected. If you can't run a server, tell me and continue.
> 3. Continue open task 1, the coverage audit, for **SEN419** next (exam Sat 12 Dec), then SEN408, CSC420 and SEN418. For each course:
>    - Compare `data/<cid>.js` against that course's lecturer notes. Use the helpers in `build/audit/`: `pptx2txt.py` and `docx2txt.py` for text, and `pdfimg.py` for image-only PDFs, then view the images.
>    - Write the missing points as add files and merge them with `build/audit/merge_generic.js`. Back up the course file first.
>    - Follow the content rules in CLAUDE.md: lecturer notes first, label any outside material, five-part essay answers, short one-idea cards, no em dashes, no invented exam patterns. Add quiz items as well as cards and recall.
>    - Then show me a table of before and after counts, what you added per topic, and anything in the notes that conflicts with the app.
> 4. Update CLAUDE.md and HANDOFF.md as you go.
>
> Don't commit anything without asking, because the git repository is my whole user folder (see HANDOFF.md #6).
