# Study Streak: handoff report (25 Nov 2026)

## Update, 25 Nov 2026 (afternoon)
- **Features:** dark/light/auto theme; 📥 Study guides page (21 downloadable files incl. newer SEN412/CSC420 exam guides, CSC420 lab guide, SEN401 weeks 2–5, INS401 short guide) + printable full guide per course; 🔴🟠🟢 topic confidence; 🌙 exam-eve sheet (shaky topics first, all traps and hooks); ✍️ five-part essay trainer; 🎓 sit the real past paper under exam time with self-marking; service worker now network-first so updates reach phones.
- **SEN412:** past paper replaced with the real Feb 2026 paper transcribed from the scan (16 parts, 81 marks: Q1 17 + four 16-mark questions) with model answers; defense prep topic for the C vs Python project (`noExam`).
- **Gap topics (additional context, no slides):** SEN401 weeks 1, 12, 13; SEN419 blockchain; SEN418 lectures 5–7. Real titles of SEN418 L5–7 are unknown.
- Route check: 1081 routes, 0 errors (one deliberate "undefined" JS quiz option in sen412 t7 can surface depending on shuffle).


Handoff for whoever continues this work. Read `CLAUDE.md` first: it has the app structure, data schema, content rules and the open-task list. This file covers everything completed across the 24–25 Nov 2026 sessions and what remains.

---

## 1. What was done

**Open task 1, the full 8-course coverage audit, is 100% COMPLETE.** Every course data file in `data/<cid>.js` was compared against all of the lecturer's source notes, slides, practical guides, assignments, CA papers and past exam papers in the `"1st Semester"` folder, and all missing points were added as cards, recall items, quiz items, 5-part essay questions and past-paper solutions.

| Course | Sources audited | Cards | Recall | Quiz | Essays | Calc / Past |
|---|---|---|---|---|---|---|
| **cos409** Research Methodology | Lecture notes 0–5 (PDF) + syllabus | 30 → 79 | 61 → 119 | 50 → 95 | 10 → 14 | Calc: 7 → 12 |
| **ins401** Project Management | All 11 slide decks (.pptx) | 62 → 115 | 102 → 187 | 0 → 131 | 29 (unchanged) | Calc: 10 → 14 |
| **sen412** Survey of PL | Decks 0, 1, 2, 3A, 3B, 5, 7 + class exercises 28 Oct and 17 Nov | 22 → 65 | 40 → 105 | 31 → 89 | 8 → 14 | 0 |
| **sen401** SCM & Maintenance | Week 2–6, 8–11 slides + teaching plan | 19 → 51 | 32 → 87 | 26 → 80 | 9 → 11 | Calc: 3 |
| **sen419** Web, Mobile & Blockchain | All 7 PDFs (UI/UX, Frontend Practical, Backend, Backend Practical Part 1, Mobile Dev, Deployment, Deployment Practical) + Feb 2026 Exam (`Exam.pdf`) | 11 → 47 | 23 → 88 | 17 → 77 | 7 → 15 | Past: 0 → 9 Qs |
| **sen408** Ethics & Legal Issues | All 16 PDFs (Moor, Class 1–2, VSD/HCD, UNESCO Ethics by Design, Nguyen, Susser, Barocas & Nissenbaum, Nissenbaum, Privacy, Zittrain, Healthcare AI, Codes of Ethics, ACM Code, BCS Code, IP) + CA2 + Feb 2026 Exam (`Exam (3).pdf`) | 19 → 44 | 36 → 99 | 25 → 82 | 10 → 18 | Past: 0 → 4 sections |
| **csc420** Database Management II | Compact syllabus, Lectures 1–6 PDFs, Practical Exam Lab Guide, `splendid_stores` SQL & Mongo JSON, CA1 Practical Test (`business_db` + official solutions) + Feb 2026 Exam (`Exam (1).pdf`) | 10 → 42 | 25 → 69 | 18 → 53 | 7 → 15 | Past: 0 → 6 (Exam Q1–Q5 + CA1 Q1–Q7) |
| **sen418** IoT & Edge Computing | Lectures 1, 2, 3, 4, 8, 9 (`.pptx`), Coursework Assignment (`PAU_CSC418_IoT_Assignment.pdf`), CA2 Azure AlmaLinux Report, Easy Study Guide & Exam Study Guide | 10 → 34 | 22 → 59 | 16 → 43 | 6 → 12 | 0 |

### Other fixes completed in this session
- **Pronoun fix (`HANDOFF.md` §3 #3):** Updated `CLAUDE.md` to use `she/her` for Omotayo everywhere.
- **`${q.q}` inspection (`HANDOFF.md` §3 #5):** Verified lines 533 and 574 of `index.html`. `past.qs[].q` and `calc[].q` intentionally use HTML (`<pre>`, `<table>`, `<p>`) in `ins401_past.js`, `sen419.js`, `sen408.js` and `csc420.js`, so keeping `${q.q}` unescaped there is required for past-paper formatting, while all plain-text quiz/theory prompts use `esc(q.q)`.
- **Headless route verification (`HANDOFF.md` §3 #1 & Open Task 6):** Installed `jsdom` in `build/` and created `build/routecheck.js`. Verified all **792 routes** across all 8 courses (`cos409`, `ins401`, `sen412`, `sen401`, `sen419`, `sen408`, `csc420`, `sen418`). Zero runtime errors, zero unexpected `"undefined"`, `"NaN"` or `"went wrong"` strings (only the 2 deliberate JavaScript quiz options in `sen412` t6/t7).
- **`merge_generic.js` enhancements:** Updated `build/audit/merge_generic.js` to load `<cid>_add1..3.js`, support `_past` and `_calc`, and normalize `{q, a}` recall items, `{q, o, a, e}` quiz items and `{q, model, rubric}` theory items into the app's exact array/object schema.
- **`catalog.js` format strings updated:** Updated `sen419` and `csc420` exam format descriptions to reflect the Feb 2026 past papers.

---

## 2. Notes, slides and past papers that disagree or have traps (flagged on cards)

### Previously audited (24 Nov)
- **COS409:** the slides give only the 68% figure of the 68–95–99.7 rule.
- **INS401:** a Slido question marks "existing IT expertise is an OPA" as false, because it is an internal EEF.
- **SEN412:** a slide says C `int x = "5" + 3;` is a compile error. Older GCC versions only warned; GCC 14 and later do make it an error.
- **SEN412:** the binding times on the slides include *link* time, which Sebesta's textbook list doesn't have.
- **SEN401:** the lecturer's six SCMP sections differ from the IEEE 828 headings the app already had.
- **SEN401:** the slides estimate maintenance with effort, risk and confidence, while the app's ACT formula comes from the textbook.

### Newly audited (25 Nov)
- **SEN419 (Express/Docker vs Convex/Vercel & Past-Paper AI/RAG):**
  - The pre-existing app had an Express REST snippet (`t4`) and a Dockerfile (`t7`), whereas the lecturer's practicals teach **Convex** (`defineSchema`, `query`, `mutation`, `action`, `internalMutation`, `.withIndex()`) + **React/Vite/Next.js + Zustand** + **Expo (EAS & local Gradle + CNG)** + **Vercel** (and the **Osisi** production stack: Next.js on Vercel, Convex, Cloudflare images, Resend emails, Paystack payments, Auth0 auth). Both old cards are now tagged with `.trap` boxes explaining the lecturer's actual stack.
  - The Feb 2026 past paper (`Exam.pdf`) tests **AI prompt engineering (Q1b)**, **50,000-student RAG architecture (Q3a)** and **AI credit-scoring ethics/CBN compliance (Q4b–c)** even though no AI or Blockchain slide deck was in the folder. Full model answers and cards are included and flagged in `.trap` boxes as additional context.
- **SEN408 (Copyright "Ideas" Trap, ACM Principle 2.9 & Zittrain PDF):**
  - **Section A Q.viii trap:** *"Copyright is a legal concept that defines rights to certain kinds of intellectual property, such as ideas for computer programs..."* Slide 17 of `Intellectual Property CSC 402.pdf` lists computer programs, databases and literary/artistic works under copyright, whereas Slides 8 and 19 explicitly emphasize the **Idea–Expression Dichotomy** (copyright protects *only* original tangible expression, *never* ideas themselves). Both the IP card (`t10`) and the past-paper key explain how to write the 3-line justification so it earns full marks under either marking key.
  - **Section A Q.x verbatim quote:** *"To ensure the system achieves its intended purpose, security features should be designed to be as intuitive and easy to use as possible"* is a word-for-word sentence from **ACM Code of Ethics Principle 2.9** (*Design and implement systems that are robustly and usably secure*, page 10 of `ACM code of Ethics.pdf`) → **TRUE**.
  - **`1 Zittrain.pdf` custom font encoding:** `pypdf` extracted garbled characters from `1 Zittrain.pdf` and no text from `ACM code of Ethics.pdf`; both were read visually via page screenshots so every case study (Modafinil/Provigil, Aspirin 1897→1995, MIT LabSix cat → 99.99% guacamole on Google Inception, Harvard/MIT skin-lesion adversarial fraud, Michael Eisen's $1.7M/$2.1M *The Making of a Fly* pricing-bot loop, 2010 $1T Flash Crash, Mohammed AlQuraishi protein folding, intellectual-debt balance sheet and algorithm escrow) is covered.
- **CSC420 (Composite Subfield Parentheses, MongoDB `$not` vs `$lte`, `$elemMatch` & Exam Q4 Missing `_id`):**
  - **Composite type subfield syntax (Exam Q2):** Updating a composite subfield in `SET` forbids parentheses (`UPDATE users SET profile.phone = '...'`), whereas reading/filtering a subfield in `SELECT`/`WHERE` requires parentheses around the column name (`DELETE FROM users WHERE (profile).address = 'Test Location'`).
  - **MongoDB `$not` vs `$lte` trap (Lecture 6 Slide 19):** `db.users.countDocuments({loyalty_points: {$lte: 100}})` returns `0`, whereas `{loyalty_points: {$not: {$gt: 100}}}` returns `9` because `$not` also matches documents where the `loyalty_points` field is missing!
  - **Array of subdocuments dot-notation vs `$elemMatch` (Lecture 6 Slides 25–26):** Filtering `"variations.price": {$lt: 5000}, "variations.qty_on_hand": {$lt: 100}` falsely matches Nestle Milo across two *different* variations; `$elemMatch` is required to force a *single* variation to satisfy both conditions.
  - **Exam Q4(d)(iv) JSON import without `_id`:** Importing Figure 2's `Meals`/`Orders` JSON where documents have `MealID`/`OrderID` but no `_id` causes MongoDB to generate random `ObjectId`s for `_id`, losing primary-key uniqueness on `MealID`/`OrderID` and allowing duplicate imports.
- **SEN418 (Slide 11 LED Blink Code Bug, Road Lighting 19% Statistic & 3.3V vs 5V Logic):**
  - **Lecture 9 Slide 11 Arduino Mega Blink Bug:** `setup()` configures `pinMode(6, OUTPUT)` and `loop()` runs `digitalWrite(6, HIGH); delay(1000); digitalWrite(12, LOW); delay(1000);`. Because `LOW` is written to **pin 12** instead of **pin 6**, the LED on pin 6 turns ON and **stays ON permanently**! Fix: `digitalWrite(6, LOW);`.
  - **Lecture 2 Slide 9 Road Lighting figure:** The slide states *"roading lighting is responsible for 19% of global electricity use and around 6% of global greenhouse gas emissions"* (in the underlying IEA source, 19% refers to *all* lighting globally). Flagged on the `t2` card so Omotayo can cite the slide's 19%/6% figure while noting the IEA context.
  - **Lecture 4 Slide 10 typo:** Lists `"Commercial Off the Shelf components (CoS)"` (standard acronym is **COTS**).
  - **Board hardware traps (Lecture 9):** Raspberry Pi 5 has **no onboard ADC** (requires an external ADC IC for analog sensors); ESP32 and Raspberry Pi 5 use **3.3V logic** (ESP32 GPIOs are **not 5V tolerant**), whereas Arduino Uno and Mega 2560 use **5V logic**; Uno R4 Minima is a **32-bit Arm Cortex-M4 @ 48 MHz** (not every Uno is an 8-bit AVR).

---

## 3. What is still open (non-blocking)

1. **SEN419 blockchain topic** (Open Task 4): Still no blockchain lecture notes in the `Blockchain` folder.
2. **SEN401 weeks 1, 12 and 13**: No slides in the folder yet; week 12–13 topics from the teaching plan are listed on a placeholder card.
3. **In-class transcripts** (Open Task 3): Add and tag `"Said in class"` when Omotayo provides them.
4. **Leaderboard on GitHub Pages** (Open Task 5): Guarded when `window.claude` is absent; can be hidden or wired to Supabase/Firebase later.
5. **Git repository warning:** The git root is still `C:\Users\Omotayo`. Do not run `git commit` from the user root without initializing a separate repo in `study-streak` or scoping paths explicitly.
