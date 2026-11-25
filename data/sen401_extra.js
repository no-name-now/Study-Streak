/* SEN 401 additions (25 Nov 2026): weeks 1, 12 and 13.
   No slides exist for these weeks in the course folder. Topics follow the headings in
   SEN401_Teaching_Plan.docx; content is ADDITIONAL CONTEXT from SWEBOK v3 (ch. 5 Software
   Maintenance, ch. 6 SCM), ISO/IEC/IEEE 14764 and Sommerville (Software Engineering, legacy
   systems). Replace or tag "From the slides" when the lecturer's decks arrive. */
(function(){
const D=window.COURSE_DATA.sen401;
const NOTE='<p class="kbd">📎 <b>Additional context:</b> no slides for this week were in your folder. Built from the teaching-plan headings plus SWEBOK v3 and IEEE 14764. Check against the lecturer\'s slides if they are shared.</p>';

D.topics.unshift({id:'t10',title:'Week 1: Why SCM matters, and SCM in DevOps',
why:'Week 1 (orientation): the definition and importance of SCM, and where it sits in a modern DevOps pipeline. Good for the opening paragraph of any SCM essay.',
cards:[
{h:'Why SCM exists: the three classic problems',b:NOTE+`<p>When several people change the same software without control, three things go wrong (Babich's classic list):</p>
<ol><li><b>Shared data problem:</b> one developer's change breaks another's work without warning.</li>
<li><b>Double maintenance:</b> the same fix must be made in several copies, and one copy gets missed.</li>
<li><b>Simultaneous update:</b> two people edit the same file and the second save wipes out the first.</li></ol>
<div class="hook">Shared, Double, Simultaneous: “SDS”, the three ways a team without SCM loses work.</div>`},
{h:'Importance of SCM',b:`<ul><li><b>Integrity:</b> you always know exactly what is in a release.</li>
<li><b>Traceability:</b> every change links back to a request, a person and a reason.</li>
<li><b>Reproducibility:</b> any past version can be rebuilt exactly.</li>
<li><b>Controlled change:</b> changes are evaluated before they happen, not discovered afterwards.</li>
<li><b>Coordination:</b> many developers can work in parallel safely.</li>
<li><b>Audit readiness:</b> the record proves what was built, tested and delivered.</li></ul>
<div class="trig">“State the importance of SCM” → integrity, traceability, reproducibility, controlled change, coordination, audits.</div>`},
{h:'The SCM activities (SWEBOK map)',b:`<div class="flow"><span>Management of the SCM process</span><em>→</em><span>Identification</span><em>→</em><span>Control</span><em>→</em><span>Status accounting</span><em>→</em><span>Auditing</span><em>→</em><span>Release management & delivery</span></div>
<p>Your weeks 2–10 follow this map in order. Release management is the one area with no week of its own: it covers building the software from the controlled library and delivering the right version to users.</p>`},
{h:'Release management and software building',b:`<div class="def"><b>Software building</b>Combining the correct versions of configuration items, using the right build data and tools, into an executable for delivery or testing.</div>
<div class="def"><b>Release management</b>Identifying, packaging and delivering a product version: release notes, version number, the exact baseline it came from, and where it went.</div>
<div class="trap">A release must be rebuildable from the library. If it was built from a developer's laptop with untracked files, the release is not under configuration control.</div>`},
{h:'SCM in a DevOps pipeline',b:`<table><tr><th>SCM activity</th><th>DevOps practice</th></tr>
<tr><td>Identification</td><td>Everything in Git: code, tests, infrastructure-as-code, pipeline files; semantic-version tags (v1.2.0)</td></tr>
<tr><td>Control</td><td>Pull requests, required reviews, protected main branch</td></tr>
<tr><td>Status accounting</td><td>CI dashboards, Jira development panel, commit history</td></tr>
<tr><td>Auditing</td><td>Automated checks in CI; comparing a release tag with what is deployed</td></tr>
<tr><td>Release management</td><td>Continuous delivery: pipeline builds, tests and deploys a tagged version</td></tr></table>
<div class="hook">DevOps does not replace SCM. It automates it.</div>`},
{h:'Centralised vs distributed version control',b:`<table><tr><th></th><th>Centralised (e.g. Subversion)</th><th>Distributed (e.g. Git)</th></tr>
<tr><td>History</td><td>One server holds it</td><td>Every clone holds the full history</td></tr>
<tr><td>Offline work</td><td>Limited</td><td>Commit, branch and view history offline</td></tr>
<tr><td>Branching</td><td>Heavier</td><td>Cheap and fast</td></tr>
<tr><td>Single point of failure</td><td>The server</td><td>Any clone can restore the repository</td></tr></table>
<p>The course uses Git/GitHub as the main tool, with Jira for change tracking (teaching plan).</p>`}
],
recall:[
['Three classic problems SCM solves?','Shared data problem, double maintenance, simultaneous update.'],
['What is the simultaneous update problem?','Two people edit the same item and the second save overwrites the first person\'s change.'],
['What is double maintenance?','The same fix has to be applied to several copies, and one copy gets missed.'],
['List four reasons SCM is important.','Integrity, traceability, reproducibility, controlled change (also coordination and audit readiness).'],
['Six SCM activity areas in SWEBOK?','Management of the SCM process; identification; control; status accounting; auditing; release management and delivery.'],
['What is software building?','Combining the correct versions of configuration items, with the right build data and tools, into an executable.'],
['What does release management cover?','Identifying, packaging and delivering a product version, with release notes and the baseline it came from.'],
['How does DevOps relate to SCM?','DevOps automates SCM: Git for identification, pull requests for control, CI dashboards for status accounting, CD for release.'],
['One advantage of distributed over centralised version control?','Every clone has the full history, so you can work offline and there is no single point of failure.'],
['Primary SCM tool used in SEN401?','Git/GitHub (with Jira for change tracking).']
],
quiz:[
{k:'mcq',q:'Two developers save edits to the same file and the second save erases the first. This is the…',o:['Shared data problem','Double maintenance problem','Simultaneous update problem','Baseline drift'],a:2},
{k:'mcq',q:'Which SWEBOK SCM area covers packaging and delivering a version to users?',o:['Status accounting','Release management and delivery','Configuration identification','Surveillance'],a:1},
{k:'tf',q:'DevOps pipelines remove the need for configuration management.',a:false,w:'DevOps automates SCM activities; it does not replace them.'},
{k:'gap',q:'A fix that must be made in several copies of the code, with one copy missed, is called double ____.',a:'maintenance'},
{k:'mcq',q:'In a DevOps pipeline, protected branches and required reviews mainly implement…',o:['Configuration control','Status accounting','Auditing','Identification'],a:0},
{k:'tf',q:'In a distributed version control system every clone holds the full project history.',a:true},
{k:'mcq',q:'A release built from a laptop with untracked files is a problem mainly because…',o:['It is slower','It cannot be reproduced from the controlled library','It has no tests','It uses Git'],a:1},
{k:'gap',q:'The SCM benefit of linking every change to a request, a person and a reason is called ____.',a:'traceability'}
],
theory:[
{q:'Explain the importance of software configuration management in a modern DevOps environment.',
 pts:['Definition of SCM','Problems without SCM (shared data, double maintenance, simultaneous update)','Benefits: integrity, traceability, reproducibility, controlled change','Mapping of SCM activities to DevOps practices','Scenario with Git/PRs/CI','Conclusion: DevOps automates SCM'],
 model:`<p><b>Background.</b> SCM is the discipline of identifying a system's configuration at points in time and controlling changes to it, so its integrity and traceability are kept throughout the life cycle.</p>
<p><b>Answer and solution.</b> Without SCM, teams hit the shared data problem, double maintenance and simultaneous updates. SCM gives integrity (we know what is in each release), traceability (each change links to a request), reproducibility (any version can be rebuilt) and controlled change. In DevOps each activity is automated: identification through Git and version tags, control through pull requests and protected branches, status accounting through CI dashboards and Jira, auditing through automated checks, and release through continuous delivery.</p>
<p><b>Scenario.</b> A fintech team ships daily. A developer opens a PR linked to Jira ticket TB-42; CI builds and tests it; two reviewers approve; it merges to main, gets tag v2.3.1 and deploys. When a bug appears, the tag shows exactly which commits shipped.</p>
<p><b>How they combine.</b> Each DevOps step is an SCM activity run by a machine, so speed does not cost control.</p>
<p><b>Conclusion.</b> SCM is more important in DevOps, not less: it is what makes fast releases safe.</p>`}
]});

D.topics.push({id:'t11',title:'Week 12: Maintenance process and program comprehension',
why:'Week 12: how maintenance work is organised (IEEE 14764 process) and how maintainers understand code they did not write.',
cards:[
{h:'The maintenance process (IEEE 14764)',b:NOTE+`<div class="flow"><span>Process implementation</span><em>→</em><span>Problem & modification analysis</span><em>→</em><span>Modification implementation</span><em>→</em><span>Maintenance review / acceptance</span><em>→</em><span>Migration</span><em>→</em><span>Retirement</span></div>
<div class="hook">“I Analyse, Implement, Review, then Move or Retire.”</div>`},
{h:'What each step does',b:`<ul><li><b>Process implementation:</b> write the maintenance plan and procedures; set up how requests arrive.</li>
<li><b>Problem and modification analysis:</b> reproduce the problem, analyse impact, estimate cost, propose options.</li>
<li><b>Modification implementation:</b> change code and documents, and test (including regression tests).</li>
<li><b>Maintenance review/acceptance:</b> confirm with the requester that the change is correct and complete.</li>
<li><b>Migration:</b> move the software to a new environment.</li>
<li><b>Retirement:</b> withdraw the software from use in a planned way.</li></ul>`},
{h:'Activities unique to maintenance',b:`<ul><li><b>Transition:</b> the controlled handover of software from developers to maintainers.</li>
<li><b>Modification request acceptance/rejection:</b> some requests are too big or out of scope and go back to the developer or a new project.</li>
<li><b>Help desk:</b> users' first contact; requests are logged and prioritised.</li>
<li><b>Impact analysis:</b> finding everything a change will affect before making it.</li>
<li><b>Service level agreements (SLAs):</b> agreed response and fix times.</li></ul>
<div class="trap">Impact analysis comes <i>before</i> the change. Regression testing comes <i>after</i> it. Don't swap them.</div>`},
{h:'Impact analysis in four steps',b:`<ol><li>Analyse the modification request or problem report.</li><li>Replicate or verify the problem.</li><li>Develop options for the change.</li><li>Document the results, scope and cost; get authorisation.</li></ol>
<p>The output feeds the CCB (week 7): it decides with the impact analysis in hand.</p>`},
{h:'Program comprehension',b:`<div class="def"><b>Program comprehension</b>The activity of understanding existing code well enough to change it safely.</div>
<p>Maintainers spend a large share of their time, often quoted as about half, just reading and understanding code. Poor documentation and unclear code make it the most expensive part of many changes.</p>`},
{h:'Three comprehension strategies',b:`<table><tr><th>Strategy</th><th>How it works</th><th>Use when</th></tr>
<tr><td>Top-down</td><td>Start from a hypothesis about what the system does and confirm it in the code</td><td>You know the domain</td></tr>
<tr><td>Bottom-up</td><td>Read statements, group them into chunks, build up meaning</td><td>The code is unfamiliar</td></tr>
<tr><td>Opportunistic (integrated)</td><td>Switch between both, reading only what the task needs</td><td>Real maintenance work</td></tr></table>
<div class="hook">Top-down = guess then check. Bottom-up = read then build.</div>`},
{h:'Comprehension tools and techniques',b:`<ul><li>Read the README, tests and API docs first.</li><li>Code browsers / IDE “go to definition”, call hierarchy.</li><li>Debugger and logs: watch it run.</li><li><code>git log</code> / <code>git blame</code>: why a line changed.</li><li>Program slicing: keep only the statements that affect one variable.</li><li>Static analysis and visualisation (call graphs, class diagrams).</li></ul>
<div class="trig">Lab: “comprehension report on an unfamiliar codebase” → structure, entry points, data flow, risky areas, questions.</div>`},
{h:'Scenario: your reading-assignment project',b:`<p>Your Spring Boot project in the SEN401 folder shows the layers a maintainer would trace:</p>
<div class="flow"><span>AssignmentController</span><em>→</em><span>AssignmentService</span><em>→</em><span>ReadingAssignmentRepository</span><em>→</em><span>database</span></div>
<p>To change how progress is updated, start top-down from the REST endpoint, follow the call into the service, then read the tests (<code>AssignmentServiceTest</code>) to see the expected behaviour before editing.</p>`}
],
recall:[
['Six steps of the IEEE 14764 maintenance process?','Process implementation; problem and modification analysis; modification implementation; maintenance review/acceptance; migration; retirement.'],
['What is transition in maintenance?','The controlled handover of software from the developers to the maintainers.'],
['What is impact analysis?','Identifying everything a proposed change will affect, before making it.'],
['Four steps of impact analysis?','Analyse the request; replicate/verify the problem; develop options; document scope and cost and get authorisation.'],
['Define program comprehension.','Understanding existing code well enough to change it safely.'],
['Top-down comprehension?','Form a hypothesis about what the program does and confirm it in the code.'],
['Bottom-up comprehension?','Read statements, group them into meaningful chunks and build up understanding.'],
['Opportunistic comprehension?','Switching between top-down and bottom-up, reading only what the task needs.'],
['Name three program comprehension tools.','Code browser/IDE navigation, debugger, git blame/log (also slicing, static analysis, call graphs).'],
['What is program slicing?','Keeping only the statements that affect a chosen variable at a chosen point.'],
['Why is comprehension costly?','Maintainers spend a large share of their time (often quoted as about half) understanding code, especially poorly documented code.']
],
quiz:[
{k:'mcq',q:'Which IEEE 14764 step estimates cost and analyses impact?',o:['Process implementation','Problem and modification analysis','Maintenance review/acceptance','Migration'],a:1},
{k:'mcq',q:'Handing software over from the development team to the maintenance team is called…',o:['Migration','Transition','Retirement','Baselining'],a:1},
{k:'tf',q:'Impact analysis is done after the change, to check nothing broke.',a:false,w:'That is regression testing. Impact analysis comes before the change.'},
{k:'mcq',q:'A maintainer who knows the banking domain guesses “this module computes interest” and checks the code to confirm. This is…',o:['Bottom-up comprehension','Top-down comprehension','Program slicing','Reverse engineering'],a:1},
{k:'gap',q:'Keeping only the statements that affect one variable is called program ____.',a:'slicing'},
{k:'mcq',q:'Which command shows who last changed each line of a file and in which commit?',o:['git status','git blame','git stash','git init'],a:1},
{k:'tf',q:'Some modification requests are rejected during maintenance and sent back as new development.',a:true},
{k:'gap',q:'Agreed response and fix times between maintainer and customer are set in a service level ____.',a:'agreement',alt:['agreements','sla']},
{k:'mcq',q:'The last step of the IEEE 14764 maintenance process is…',o:['Migration','Retirement','Review','Implementation'],a:1}
],
theory:[
{q:'Describe the software maintenance process and explain how program comprehension supports it.',
 pts:['Six IEEE 14764 steps named in order','Purpose of analysis (impact analysis, cost)','Implementation with regression testing; review/acceptance','Program comprehension defined','Top-down vs bottom-up (vs opportunistic)','Tools: debugger, git blame, slicing, tests','Scenario + conclusion'],
 model:`<p><b>Background.</b> Maintenance is changing software after delivery. IEEE 14764 organises it into a process so changes are controlled and costed.</p>
<p><b>Answer and solution.</b> The steps are: process implementation (plan and procedures); problem and modification analysis (replicate the problem, impact analysis, cost, options); modification implementation (change and regression-test); maintenance review/acceptance (requester confirms); migration (new environment); retirement (planned withdrawal). Program comprehension underpins analysis and implementation: the maintainer must understand the code before judging impact. Strategies are top-down (hypothesis first), bottom-up (statements into chunks) and opportunistic (both, as needed), supported by IDE navigation, debuggers, git blame and program slicing.</p>
<p><b>Scenario.</b> A user reports that reading progress over 100% is accepted. The maintainer traces the endpoint top-down to <code>AssignmentService</code>, uses git blame to see when validation was removed, analyses which screens use the value, fixes it, adds a regression test and the user confirms.</p>
<p><b>How they combine.</b> Comprehension makes the impact analysis accurate, and the process makes the fix traceable.</p>
<p><b>Conclusion.</b> Good maintenance is mostly good understanding, done inside a controlled process.</p>`}
]});

D.topics.push({id:'t12',title:'Week 13: Re-engineering, reverse engineering, migration and retirement',
why:'Week 13: the maintenance techniques for old (legacy) systems, plus course review. Expect “distinguish” questions here.',
cards:[
{h:'Legacy systems',b:NOTE+`<div class="def"><b>Legacy system</b>An older system that is still business-critical but costly or risky to change or replace.</div>
<p>Organisations keep them because they hold years of business rules and data. The question is what to do with each one.</p>`},
{h:'Four strategies for a legacy system',b:`<table><tr><th></th><th>Low business value</th><th>High business value</th></tr>
<tr><th>Low quality</th><td><b>Scrap</b> it</td><td><b>Re-engineer</b> or replace</td></tr>
<tr><th>High quality</th><td>Replace with off-the-shelf, scrap, or keep</td><td><b>Keep</b> with normal maintenance</td></tr></table>
<p>Sommerville's options: scrap; keep with regular maintenance; re-engineer; replace.</p>`},
{h:'Reverse engineering',b:`<div class="def"><b>Reverse engineering</b>Analysing software to identify its components and their relationships, and to create representations of it in another form or at a higher level of abstraction.</div>
<p>It is <b>passive</b>: it does not change the software. Kinds: <b>redocumentation</b> (new docs from code), <b>design recovery</b> (recover the design), <b>data reverse engineering</b> (recover the logical schema from a database).</p>
<div class="trap">Reverse engineering only looks. Re-engineering changes.</div>`},
{h:'Re-engineering, refactoring and forward engineering',b:`<div class="def"><b>Re-engineering</b>Examining and altering software to rebuild it in a new form. It is the most radical and expensive form of change.</div>
<div class="flow"><span>Reverse engineering</span><em>→</em><span>restructure</span><em>→</em><span>Forward engineering</span></div>
<ul><li><b>Forward engineering:</b> the normal path from requirements and design down to code.</li>
<li><b>Refactoring:</b> restructuring code without changing its external behaviour (small, continuous).</li></ul>
<div class="hook">Re-engineering = reverse engineering + forward engineering.</div>`},
{h:'Migration',b:`<div class="def"><b>Migration</b>Moving software to a new environment (hardware, OS, database, cloud) while it keeps working.</div>
<p>IEEE 14764 migration activities: a migration plan; notify users of the plan; <b>parallel operation</b> of old and new environments; training; notify users when migration is done; post-operation review; archive the old data.</p>
<p>Strategies (additional context): big-bang (all at once) or incremental, e.g. the <b>strangler fig</b> pattern, replacing one piece at a time behind the same interface.</p>`},
{h:'Retirement',b:`<p>Planned withdrawal of software from use:</p><ol><li>Retirement plan (when, what replaces it, what happens to data).</li><li>Notify users in advance.</li><li>Parallel operation with the replacement, if needed.</li><li>Archive data and documentation.</li><li>End user support at the announced date.</li></ol>
<div class="trig">“Distinguish migration and retirement” → migration keeps the software alive somewhere new; retirement ends its life.</div>`},
{h:'Course review: one-line map',b:`<ul><li><b>SCM:</b> organisational context → planning (SCMP) → surveillance → identification (CIs, baselines, library) → control (CR, CCB, branches, PRs) → status accounting → auditing (FCA/PCA) → release.</li>
<li><b>Maintenance:</b> categories (corrective, adaptive, perfective, preventive) → key issues and cost (estimation, ACT) → process (IEEE 14764) and comprehension → techniques (reverse/re-engineering, migration, retirement).</li></ul>`}
],
recall:[
['Define a legacy system.','An older system that is still business-critical but costly or risky to change or replace.'],
['Four strategies for a legacy system?','Scrap it; keep it with regular maintenance; re-engineer it; replace it.'],
['Low quality but high business value legacy system: what to do?','Re-engineer it (or replace it).'],
['Define reverse engineering.','Analysing software to identify components and relationships and represent it in another form or higher abstraction, without changing it.'],
['Three kinds of reverse engineering?','Redocumentation, design recovery, data reverse engineering.'],
['Define re-engineering.','Examining and altering software to rebuild it in a new form; reverse engineering plus forward engineering.'],
['Refactoring vs re-engineering?','Refactoring restructures code without changing behaviour, in small steps; re-engineering rebuilds the system in a new form and is far bigger.'],
['Define migration.','Moving software to a new environment while it keeps working.'],
['Name four IEEE 14764 migration activities.','Migration plan, user notification, parallel operation, training (also post-operation review and archiving old data).'],
['What is the strangler fig pattern?','Incremental migration: replace one piece of the old system at a time behind the same interface until the old system is gone.'],
['Steps in retirement?','Retirement plan, notify users, parallel operation if needed, archive data, end support.']
],
quiz:[
{k:'mcq',q:'Which technique changes nothing in the software but produces higher-level representations of it?',o:['Re-engineering','Reverse engineering','Refactoring','Migration'],a:1},
{k:'mcq',q:'Re-engineering is best described as…',o:['Forward engineering only','Reverse engineering followed by forward engineering','Deleting the old system','Adding comments'],a:1},
{k:'tf',q:'Refactoring changes a program\'s external behaviour.',a:false,w:'Refactoring keeps external behaviour the same.'},
{k:'mcq',q:'A legacy payroll system is badly written but the business depends on it. The usual strategy is…',o:['Scrap it','Leave it alone','Re-engineer or replace it','Retire it immediately'],a:2},
{k:'gap',q:'Running the old and new environments side by side during migration is called ____ operation.',a:'parallel'},
{k:'mcq',q:'Recovering the logical schema of an undocumented database is…',o:['Data reverse engineering','Forward engineering','Refactoring','Baselining'],a:0},
{k:'tf',q:'Retirement should include archiving the system\'s data and documentation.',a:true},
{k:'mcq',q:'Replacing one feature at a time behind the same interface is the…',o:['Big-bang migration','Strangler fig pattern','Waterfall model','Spiral model'],a:1},
{k:'gap',q:'Producing new documentation from existing source code is called ____.',a:'redocumentation',alt:['re-documentation']}
],
theory:[
{q:'Distinguish reverse engineering, re-engineering, migration and retirement, with an example for each.',
 pts:['Reverse engineering: analysis only, higher-level representation (redocumentation, design recovery)','Re-engineering: rebuild in a new form = reverse + forward engineering; most radical','Migration: move to a new environment; plan, notify, parallel operation, training, review','Retirement: planned withdrawal; plan, notify, archive, end support','Legacy strategy choice (value vs quality)','Scenario covering all four','Conclusion'],
 model:`<p><b>Background.</b> Legacy systems hold critical business rules but are costly to change. Four maintenance techniques deal with them.</p>
<p><b>Answer and solution.</b></p><ol>
<li><b>Reverse engineering</b> analyses the software to produce higher-level representations without changing it: redocumentation, design recovery, data reverse engineering.</li>
<li><b>Re-engineering</b> rebuilds the software in a new form: reverse engineering to understand it, then forward engineering to rebuild. It is the most radical and expensive option.</li>
<li><b>Migration</b> moves working software to a new environment, using a migration plan, user notification, parallel operation, training and a post-operation review.</li>
<li><b>Retirement</b> withdraws software from use in a planned way: notify users, archive data, end support.</li></ol>
<p><b>Scenario.</b> A Nigerian bank's 20-year-old COBOL loan system is critical but hard to change. Analysts reverse-engineer it to recover the business rules and data schema. The team re-engineers the loan logic as Java services and migrates them to the cloud piece by piece, running old and new in parallel. When the last piece moves, the COBOL system is retired and its data archived for regulators.</p>
<p><b>How they combine.</b> The techniques form a sequence: understand (reverse), rebuild (re-engineer), move (migrate), end (retire).</p>
<p><b>Conclusion.</b> Choose the technique by the system's business value and technical quality; high value with low quality usually means re-engineering.</p>`}
]});
})();
