/* PAU 400L SEN — exam catalog. Times are Africa/Lagos (UTC+01:00).
   status: "full" = lessons written; "outline" = topic list only, lessons coming. */
window.CATALOG = {
  semesterLabel: "400L Software Engineering · 1st Semester 2026/27",
  // Class schedule for lecture week (minutes of study target per day handled in app)
  classDays: {
    "2026-11-23": "Class 12:30–2:30",
    "2026-11-24": "Class 8:30–5:30",
    "2026-11-25": "Class 9:30–12:30 & 2:30–5:30",
    "2026-11-26": "Class 10:30–12:30"
  },
  courses: [
    { id:"cos409", code:"COS 409", title:"Research Methodology & Technical Report Writing", short:"Research Methods",
      exam:"2026-12-08T15:00:00+01:00", examEnd:"2026-12-08T18:00:00+01:00", elective:false, color:"#2f5d50", status:"full",
      format:"Exam is 70 marks (syllabus). Expect fill-in-the-gaps, multiple choice and theory questions, plus calculations from the data-analysis topic.",
      topics:[
        "Projects: academic vs industry, types, stakeholders","Foundations of research","Research methods in computing",
        "Design Science Research (DSR)","Research proposal: problems, questions, hypotheses, SMART","The literature review",
        "Data collection and sampling","Data analysis (calculations)","Report writing, abstracts and APA referencing","Research ethics"] },
    { id:"ins401", code:"INS 401", title:"Project Management", short:"Project Mgmt",
      exam:"2026-12-09T12:00:00+01:00", examEnd:"2026-12-09T14:00:00+01:00", elective:false, color:"#3b5b92", status:"full",
      format:"Exam is 65 marks (CA 30, participation 5). Expect objective questions like CA1 plus theory (define, explain, distinguish, with examples).",
      topics:[] /* filled from data/ins401.js */ },
    { id:"sen412", code:"SEN 412", title:"Survey of Programming Languages", short:"Survey of PL",
      exam:"2026-12-10T15:00:00+01:00", examEnd:"2026-12-10T18:00:00+01:00", elective:false, color:"#8a5a14", status:"full",
      format:"Said in class (25 Nov):6 questions, answer 4. Q1 is compulsory and scenario-based: apply what was taught to a given case. Of the other 5 answer any 3: mostly theory (what is, define), plus one or two short scenario questions. Command words matter: 'define' wants a short answer; 'what is' and 'describe' want a long one. For comparison questions, cover every attribute asked (data types, binding, lifetime, scope), then end with a reflection and a conclusion that answers the question. Feb 2026 paper (2.5 hrs) matched this: Q1 (17 marks) and any three others (16 each). Expect binding and typing with code, storage allocation, ambiguous grammars and parse trees, scoping and closures, and operational/denotational semantics.",
      topics:["Preliminaries: the language schematics","Evolution of programming languages and trends","Describing syntax A: vocabulary and BNF",
        "Describing syntax B: derivations, parse trees, ambiguity, EBNF","Variables and bindings","Data types","Scope, storage bindings and semantics","Project defense prep (not examined)"] },
    { id:"sen401", code:"SEN 401", title:"Software Configuration & Maintenance", short:"Config & Maint.",
      exam:"2026-12-11T12:00:00+01:00", examEnd:"2026-12-11T14:00:00+01:00", elective:false, color:"#9b2f3a", status:"full",
      format:"New course, no past paper. Expect objective and theory questions; write any essay-style answer in the ethics structure: background, answer and solution, scenario, how they combine, conclusion.",
      topics:["Week 1: Why SCM matters, and SCM in DevOps","Organisational context, roles and governance in SCM","Planning for SCM: the SCMP","SCM plan development and surveillance",
        "Configuration identification and the software library","Configuration control I: change requests and the CCB",
        "Configuration control II: branches, pull requests, merge conflicts","Configuration status accounting","Configuration auditing",
        "Software maintenance: categories, cost and estimation","Week 12: Maintenance process and program comprehension","Week 13: Re-engineering, reverse engineering, migration and retirement"] },
    { id:"sen419", code:"SEN 419", title:"Advances in Web, Mobile & Blockchain Development", short:"Web/Mobile/Chain",
      exam:"2026-12-12T15:00:00+01:00", examEnd:"2026-12-12T18:00:00+01:00", elective:true, color:"#5b4a8c", status:"full",
      format:"Past paper (2 hrs, Q1 compulsory + any other): expect Convex schema & mutation code reviews, React/Zustand & Expo practicals, Vercel/Convex deployment strategy, plus AI prompt engineering, RAG architecture and ethics case studies. No blockchain slides were shared; a blockchain topic is included as additional context.",
      topics:["UI/UX and front-end development","Front-end practical","Backend development","Backend practical",
        "Mobile development","Deployment","Deployment practical","Blockchain and smart contracts (additional context)"] },
    { id:"sen408", code:"SEN 408", title:"Ethical & Legal Issues in Computer Science", short:"Ethics",
      exam:"2026-12-14T12:00:00+01:00", examEnd:"2026-12-14T14:00:00+01:00", elective:false, color:"#0f6e7a", status:"full",
      format:"Expect a scenario with follow-up questions. Essay structure: Background → Answer and solution → Scenario → How they combine → Conclusion. Sample paper (2 hrs): A — 10 True/False with 3-line justification (15). B — one-page version of your research paper + VSD essay with 3 fundamental principles (25). C — one of: 5 learning points, or 4 concerns of Big Data/Recommendation Engines (10).",
      topics:["What is computer ethics? (Moor)","Ethical inquiry and emerging technologies","Dilemmas, frameworks, fundamental principles",
        "Design ethics: VSD, HCD, Ethics by Design","Recommendation engines: bubbles and echo chambers (Nguyen)","Online manipulation (Susser et al.)",
        "Privacy and big data","AI in healthcare and intellectual debt (Zittrain)","Codes of ethics, associations and law","Intellectual property"] },
    { id:"csc420", code:"CSC 420", title:"Database Management II", short:"Database II",
      exam:"2026-12-15T12:00:00+01:00", examEnd:"2026-12-15T14:00:00+01:00", elective:true, color:"#6b6a1e", status:"full",
      format:"Past paper (2 hrs): Section A (answer Q1 or Q2 — 25m) + Section B (answer any two of Q3, Q4, Q5 — 20m each). Expect writing SQL & MQL (transactions, B+-tree simulation, composite types, arrays, JSONB, PL/pgSQL functions, stored procedures, MongoDB CRUD) plus short theory.",
      topics:["Transactions and ACID","Indexing","Complex types: arrays and JSON/JSONB","Functions, procedures and triggers",
        "SQL practice workbook","NoSQL data models","MongoDB basics"] },
    { id:"sen418", code:"SEN 418", title:"IoT & Edge Computing", short:"IoT & Edge",
      exam:"2026-12-16T12:00:00+01:00", examEnd:"2026-12-16T14:00:00+01:00", elective:true, color:"#a0451f", status:"full",
      format:"New course, no past paper. Expect objective and theory questions, plus scenario questions (edge vs cloud, protocol and board choice).",
      topics:["Introduction to IoT and edge computing","Domain-specific IoT","Evolution and architecture: protocols, models, M2M",
        "Embedded systems fundamentals","Cloud provisioning and deployment on Azure","Choosing the right board","Lectures 5–7 gap fill: edge/fog tiers, IoT data and security"] }
  ]
};
window.COURSE_DATA = window.COURSE_DATA || {};
