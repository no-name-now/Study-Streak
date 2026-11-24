[
{
 id:'t1', n:'Topic 1', title:'Introduction to Project Management',
 why:'The vocabulary for the whole course: project, PM, stakeholders, triple constraint, program vs portfolio, standards.',
 cards:[
 {h:'What is a project?', b:`
  <div class="def"><b>Definition — Project</b>A <b>temporary</b> endeavour (definite start and end) undertaken to create a <b>unique</b> product, service or result.</div>
  <div class="def"><b>Definition — Project management</b>The application of <b>knowledge, skills, tools and techniques</b> to project activities to meet the project requirements.</div>
  <table><tr><th>Project</th><th>Operations</th></tr><tr><td>Temporary, unique, time-bound</td><td>Ongoing, repetitive, business continuity</td></tr><tr><td>Building a new student portal</td><td>Running the portal every day</td></tr></table>
  <div class="trap">Temporary does not mean short. A 5-year project is still temporary because it has an end.</div>`},
 {h:'The project manager and stakeholders', b:`
  <p><b>PM roles (lecturer):</b> liaison · team leadership · managing resources · communication · business objectives and benefits · managing constraints (scope, schedule, budget, quality) · managing risks.</p>
  <div class="def"><b>Definition — Stakeholder</b>A person, group or organisation that may <b>affect or be affected by</b> the project.</div>
  <table><tr><th>Internal</th><th>External</th></tr><tr><td>Sponsor, PMO, program manager, resource manager, PMs of other projects</td><td>Customers, end users, <b>shareholders</b>, regulatory bodies, suppliers</td></tr></table>
  <div class="trap">On the lecturer's slides, shareholders are listed as <b>external</b>.</div>`},
 {h:'Triple constraint · program vs portfolio', b:`
  <p><b>Triple constraint:</b> scope, time, cost, with <b>quality in the centre</b>. Change one and the others move: add scope, and time and cost rise.</p>
  <table><tr><th>Program</th><th>Portfolio</th></tr><tr><td>A group of <b>related</b> projects managed together for benefits not available individually</td><td>Projects, programs <b>and operations</b> managed together to achieve <b>strategic objectives</b></td></tr></table>
  <div class="hook">Program = related. Portfolio = strategic (and can include operations).</div>`},
 {h:'Standards, certifications and the PMI framework', b:`
  <table><tr><th>Standard</th><th>Key fact</th></tr><tr><td>PMI / PMBOK</td><td>USA; most comprehensive</td></tr><tr><td>PRINCE2</td><td>UK government origin; simpler, process-based</td></tr><tr><td>IPMA</td><td>Germany; competence-based</td></tr><tr><td>ISO 21500</td><td>International guidance standard</td></tr></table>
  <p><b>Certifications:</b> CAPM → PMP → PgMP; PMI-ACP; PRINCE2 Foundation → Practitioner; MSP; IPMA levels D → A.</p>
  <p><b>PMI framework:</b> 5 process groups (Initiating, Planning, Executing, Monitoring & Controlling, Closing) × 10 knowledge areas (Integration, Scope, Schedule, Cost, Quality, Resource, Communications, Risk, Procurement, Stakeholder).</p>
  <div class="hook">Knowledge areas: "I Saw Six Cats Quietly Resting, Calmly Rubbing Paws Silently."</div>`},
 {h:'Why project management matters', b:`
  <p><b>Good PM gives:</b> clear objectives, efficient use of resources, risk control, on-time and on-budget delivery, stakeholder satisfaction, quality deliverables.</p>
  <p><b>Poor PM causes:</b> missed deadlines, cost overruns, scope creep, poor quality and rework, unhappy stakeholders, failure (the lecturer cited abandoned projects in Nigeria).</p>
  <p><b>Objective vs deliverable:</b> an objective is what the project aims to achieve (e.g. reduce registration time by 50%); a deliverable is a thing produced (the portal itself).</p>`}
 ],
 recall:[
  ['Define a project.','A temporary endeavour undertaken to create a unique product, service or result.'],
  ['Define project management.','The application of knowledge, skills, tools and techniques to project activities to meet project requirements.'],
  ['Give two differences between a project and operations.','Projects are temporary and unique; operations are ongoing and repetitive (business continuity).'],
  ['Define a stakeholder.','A person, group or organisation that may affect or be affected by the project.'],
  ['Are shareholders internal or external on the slides?','External.'],
  ['What sits at the centre of the triple constraint?','Quality (scope, time and cost are the sides).'],
  ['Program vs portfolio?','Program: related projects for combined benefits. Portfolio: projects, programs and operations aligned to strategic objectives.'],
  ['Name the 5 PMI process groups.','Initiating, Planning, Executing, Monitoring & Controlling, Closing.']
 ],
 theory:[
  {q:'Define a project and project management. Distinguish a project from operations, with examples.', pts:['Project definition: temporary + unique','PM definition: knowledge, skills, tools, techniques to meet requirements','Temporary vs ongoing','Unique vs repetitive','Example of each','Note: temporary ≠ short'],
   model:`<p>A <b>project</b> is a temporary endeavour undertaken to create a unique product, service or result. <b>Project management</b> is the application of knowledge, skills, tools and techniques to project activities to meet the project requirements.</p><table><tr><th>Project</th><th>Operations</th></tr><tr><td>Temporary: definite start and end.</td><td>Ongoing with no planned end.</td></tr><tr><td>Unique output.</td><td>Repetitive output.</td></tr><tr><td>Ends when objectives are met.</td><td>Sustains the business (continuity).</td></tr><tr><td>E.g. building a hostel booking app.</td><td>E.g. the IT unit running the app daily.</td></tr></table><p>Temporary does not mean short: a five-year project is still temporary.</p>`},
  {q:'Explain the triple constraint and distinguish a program from a portfolio.', pts:['Scope, time, cost named','Quality at the centre','Trade-off explained with example','Program definition','Portfolio definition (includes operations, strategic)','Clear contrast'],
   model:`<p>The <b>triple constraint</b> links scope, time and cost, with quality at the centre. Changing one affects the others: adding features (scope) to a portal raises time and cost, or reduces quality if time and cost are fixed.</p><p>A <b>program</b> is a group of related projects managed in a coordinated way to obtain benefits not available from managing them individually (e.g. a university digitisation program: portal, e-library, payment system). A <b>portfolio</b> is a collection of projects, programs and operations managed together to achieve strategic objectives; the projects need not be related.</p>`}
 ]
},
{
 id:'t2', n:'Topic 2', title:'The Project Management Life Cycle',
 why:'Phases, development approaches (predictive/adaptive/hybrid), the SDLC, and EEFs vs OPAs (a favourite trap).',
 cards:[
 {h:'The five life-cycle phases', b:`
  <div class="flow"><span>Initiation</span><em>→</em><span>Planning</span><em>→</em><span>Execution</span><em>→</em><span>Monitoring & Control</span><em>→</em><span>Closing</span></div>
  <table><tr><th>Phase</th><th>Key work</th></tr>
  <tr><td>Initiation</td><td>Authorise the project; project charter; appoint the PM; high-level scope</td></tr>
  <tr><td>Planning</td><td>Project management plan (scope, schedule, cost, risk…)</td></tr>
  <tr><td>Execution</td><td>Produce deliverables; acquire and manage resources</td></tr>
  <tr><td>Monitoring & Control</td><td>Track against baselines; validate scope; runs <b>alongside</b> execution</td></tr>
  <tr><td>Closing</td><td>Final report; lessons learned; release the team; hand over to operations</td></tr></table>`},
 {h:'Predictive vs adaptive vs hybrid', b:`
  <table><tr><th>Predictive (waterfall)</th><th>Adaptive (agile)</th><th>Hybrid</th></tr>
  <tr><td>Scope, time and cost fixed <b>early</b>; formal change control</td><td>Work in <b>iterations</b>; scope detailed per iteration; product backlog; high change</td><td>Predictive for fixed parts, adaptive for evolving parts</td></tr>
  <tr><td>Building a hostel</td><td>A new mobile app</td><td>E-library build (fixed) + ERP software (evolving)</td></tr></table>
  <div class="trig">"product backlog", "iterations" → adaptive · "fixed early", "formal change control" → predictive</div>`},
 {h:'The SDLC (seven phases)', b:`
  <div class="flow"><span>Planning</span><em>→</em><span>Analysis</span><em>→</em><span>Design</span><em>→</em><span>Development</span><em>→</em><span>Testing</span><em>→</em><span>Deployment</span><em>→</em><span>Maintenance</span></div>
  <ul><li><b>Planning:</b> feasibility</li><li><b>Analysis:</b> detailed requirements</li><li><b>Design:</b> layouts, <b>database design</b></li><li><b>Development</b> (= implementation): coding</li><li><b>Testing:</b> alpha (against design specs) and beta (with users)</li><li><b>Deployment:</b> release, training</li><li><b>Maintenance:</b> fix and improve; may loop back</li></ul>
  <div class="trap">CA1 asked: "creating databases" happens in which SDLC phase? The trap is Design (database <i>design</i>) vs Development (actually <i>creating</i> it). Read the verb.</div>`},
 {h:'EEFs vs OPAs', b:`
  <div class="def"><b>Enterprise Environmental Factors (EEFs)</b>Conditions <b>not under the control</b> of the project team that influence the project. Internal: culture, geographic distribution, <b>existing IT systems</b>, existing staff expertise. External: regulations, market, socio-cultural, financial (exchange rates).</div>
  <div class="def"><b>Organisational Process Assets (OPAs)</b>Plans, processes, policies, procedures (templates, change-control procedures) and knowledge bases (lessons learned, historical files) of the organisation.</div>
  <div class="trap">Existing IT systems and existing staff skills are <b>internal EEFs</b>, NOT OPAs. "Existing systems and culture" was a CA1 option.</div>`}
 ],
 recall:[
  ['Name the 5 project life-cycle phases.','Initiation, Planning, Execution, Monitoring & Control, Closing.'],
  ['What happens in Closing?','Final report, lessons learned, release the team, hand over to operations.'],
  ['Predictive vs adaptive life cycle?','Predictive: scope, time, cost fixed early with formal change control. Adaptive: iterations, scope defined per iteration, product backlog.'],
  ['When is a hybrid approach best?','When part of the project is fixed (predictive) and part is evolving (adaptive).'],
  ['Name the 7 SDLC phases.','Planning, Analysis, Design, Development, Testing, Deployment, Maintenance.'],
  ['Alpha vs beta testing?','Alpha: against design specifications (internal). Beta: with real users.'],
  ['Define EEFs.','Conditions not under the control of the project team that influence the project (internal or external).'],
  ['Are existing IT systems an EEF or OPA?','Internal EEF.']
 ],
 theory:[
  {q:'Describe the five phases of the project management life cycle.', pts:['Initiation: charter, PM appointed','Planning: PM plan','Execution: deliverables, resources','M&C: track vs baselines, alongside execution','Closing: lessons learned, release team, handover','Logical order and brief example'],
   model:`<ol><li><b>Initiation</b> — the project is authorised: business case reviewed, project charter issued, PM appointed, high-level scope set.</li><li><b>Planning</b> — the project management plan is developed: scope, schedule, cost, quality, risk, resources and communication.</li><li><b>Execution</b> — the team performs the work and produces deliverables; resources are acquired and managed.</li><li><b>Monitoring and controlling</b> — runs alongside execution: performance is tracked against baselines, changes are controlled, scope is validated.</li><li><b>Closing</b> — final report, lessons learned, team released, deliverables handed over to operations.</li></ol>`},
  {q:'Distinguish between Enterprise Environmental Factors and Organisational Process Assets, giving examples of each.', pts:['EEF definition (not under team control)','Internal EEF examples','External EEF examples','OPA definition (processes/policies + knowledge bases)','OPA examples','Trap: existing IT/HR expertise = EEF'],
   model:`<p><b>EEFs</b> are conditions not under the control of the project team that influence, constrain or direct the project. Internal: organisational culture, geographic distribution, existing IT systems, existing staff expertise. External: government regulations, market conditions, exchange rates, socio-cultural factors.</p><p><b>OPAs</b> are the organisation's own plans, processes, policies and procedures (templates, change-control procedures) and knowledge bases (lessons learned, historical project files).</p><p>Key distinction: an EEF is a <b>condition</b>; an OPA is a <b>document or record</b> the organisation owns. Existing IT systems are therefore an internal EEF, not an OPA.</p>`}
 ]
},
{
 id:'t3', n:'Topic 3', title:'Tools, Techniques and Processes',
 why:'ITTOs, the five process groups and their exceptions, tool vs technique, and the classic estimating techniques.',
 cards:[
 {h:'Processes and ITTOs', b:`
  <div class="def"><b>Process</b>A set of activities that turns <b>inputs</b> into <b>outputs</b> using <b>tools and techniques</b> (ITTO). An output becomes an input to another process or a deliverable.</div>
  <p><b>Process groups:</b> Initiating (2 processes: <b>Develop Project Charter</b>, <b>Identify Stakeholders</b>) · Planning · Executing · Monitoring & Controlling · Closing (1: <b>Close Project or Phase</b>).</p>
  <div class="trap">Exceptions to the "verb rule": <b>Identify Stakeholders = Initiating</b>; Identify Risks = Planning; <b>Develop Team, Manage Quality, Acquire Resources = Executing</b>; Validate Scope, Perform Integrated Change Control = M&C. Scope, Schedule and Cost have <b>no</b> executing processes.</div>`},
 {h:'Tool vs technique + key definitions', b:`
  <table><tr><th>Tool</th><th>Technique</th></tr><tr><td>Something <b>tangible</b>: template, software</td><td>A systematic <b>procedure</b> carried out by a person; may use tools</td></tr><tr><td>MS Project, a checklist template</td><td>Expert judgement, data gathering, inspection</td></tr></table>
  <ul><li><b>Analogous estimating:</b> uses a similar past project</li><li><b>Parametric:</b> algorithm + parameters (cost per line of code)</li><li><b>Decomposition:</b> break into smaller parts</li><li><b>Prototypes:</b> working model for early feedback</li><li><b>Trend analysis:</b> forecast from past performance · <b>Variance analysis:</b> baseline vs actual · <b>Root cause analysis:</b> underlying reason</li><li><b>Earned value analysis:</b> combines scope, schedule and cost</li><li><b>Inspection:</b> examine whether work conforms to standards</li></ul>
  <div class="trap">CA1 asked which is NOT a technique: <b>scheduling software</b> (a tool).</div>`},
 {h:'Work performance data → information → reports', b:`
  <div class="flow"><span>Data</span><em>(Direct & Manage Project Work)</em><em>→</em><span>Information</span><em>(controlling processes)</em><em>→</em><span>Reports</span><em>(Monitor & Control Project Work)</em></div>
  <p><b>Direct and Manage Project Work</b> outputs: deliverables, work performance data, issue log, change requests. (CA1: the assumption log is NOT an output.)</p>
  <p><b>PM software:</b> MS Project (enterprise), Asana (multiple views), ClickUp (sprints, flexible views), Trello (boards, lists, cards — Kanban), Jira (software teams, agile/scrum).</p>`}
 ],
 recall:[
  ['What does ITTO stand for?','Inputs, Tools & Techniques, Outputs.'],
  ['Which 2 processes are in the Initiating group?','Develop Project Charter and Identify Stakeholders.'],
  ['Which process group has only one process?','Closing (Close Project or Phase).'],
  ['Identify Stakeholders belongs to which process group?','Initiating.'],
  ['Tool vs technique?','A tool is tangible (template, software); a technique is a systematic procedure performed by a person.'],
  ['Analogous vs parametric estimating?','Analogous uses a similar past project; parametric uses an algorithm with parameters.'],
  ['Data → information → reports: which process produces work performance data?','Direct and Manage Project Work.'],
  ['Which PM tool uses boards, lists and cards (Kanban)?','Trello.']
 ],
 theory:[
  {q:'Explain the five process groups and identify the exceptions students commonly get wrong.', pts:['Five groups named and described','Initiating: charter + identify stakeholders','Closing: one process','Identify Stakeholders = Initiating','Develop Team / Manage Quality / Acquire Resources = Executing','Validate Scope = M&C'],
   model:`<p>PMI organises processes into five groups: <b>Initiating</b> (define and authorise: Develop Project Charter, Identify Stakeholders), <b>Planning</b> (establish scope, objectives and the plan), <b>Executing</b> (complete the work), <b>Monitoring and Controlling</b> (track, review and regulate performance) and <b>Closing</b> (Close Project or Phase — the only process).</p><p>Common exceptions: Identify Stakeholders is Initiating even though "identify" sounds like planning; Identify Risks is Planning; Develop Team, Manage Quality and Acquire Resources are Executing; Validate Scope and Perform Integrated Change Control are Monitoring and Controlling.</p>`},
  {q:'Distinguish between a tool and a technique, and explain four techniques used in project management.', pts:['Tool definition (tangible)','Technique definition (procedure)','Technique 1 explained','Technique 2 explained','Technique 3 explained','Technique 4 explained'],
   model:`<p>A <b>tool</b> is something tangible, such as a template or software program, used to produce an output. A <b>technique</b> is a defined, systematic procedure carried out by a person, which may use one or more tools.</p><ol><li><b>Expert judgement</b> — using people with specialised knowledge.</li><li><b>Analogous estimating</b> — estimating from a similar past project.</li><li><b>Parametric estimating</b> — using an algorithm and parameters (e.g. cost per square metre).</li><li><b>Variance analysis</b> — comparing baseline to actual performance to find deviations.</li></ol>`}
 ]
},
{
 id:'t4', n:'Topic 4', title:'Managing Project Teams I',
 why:'Resource processes, motivation, Goleman\'s six leadership styles and Tuckman\'s five stages.',
 cards:[
 {h:'The three team processes', b:`
  <table><tr><th>Process</th><th>Group</th><th>Key outputs</th></tr>
  <tr><td>Plan Resource Management</td><td>Planning</td><td>Resource management plan + <b>team charter</b></td></tr>
  <tr><td>Estimate Activity Resources</td><td>Planning</td><td>Resource requirements + <b>resource breakdown structure (RBS)</b></td></tr>
  <tr><td>Acquire Resources</td><td>Executing</td><td>Project team assignments + <b>resource calendars</b> (also an input)</td></tr></table>
  <p><b>Team charter</b> = team values, agreements and operating guidelines. Different from the <b>project charter</b> (authorises the project).</p>
  <p><b>Resource breakdown structure</b> = hierarchy of resources by <b>category and type</b> (labour, material, equipment, supplies).</p>
  <div class="trap">CA1: the team charter is an output of <b>Plan Resource Management</b>.</div>`},
 {h:'Motivating team members', b:`
  <p>Ten strategies: open communication · clear goals and roles · timely conflict management · build trust · team-building · lead by example · collaborative decisions · celebrate small wins · training and tools · <b>tailored</b> recognition and rewards.</p>
  <div class="hook">Tailored = different people are motivated by different rewards.</div>`},
 {h:'Goleman\'s six leadership styles', b:`
  <table><tr><th>Style</th><th>Phrase</th><th>When</th></tr>
  <tr><td>Commanding</td><td>"Do what I tell you"</td><td>Crisis; use sparingly</td></tr>
  <tr><td>Visionary</td><td>"Come with me"</td><td>New vision / direction needed</td></tr>
  <tr><td>Affiliative</td><td>"People come first"</td><td>Heal rifts, motivate in stress</td></tr>
  <tr><td>Democratic</td><td>"What do you think?"</td><td>Build buy-in; slow, not for urgency</td></tr>
  <tr><td>Pacesetting</td><td>"Do as I do, now"</td><td>Quick results from a competent team; use sparingly</td></tr>
  <tr><td>Coaching</td><td>"Try this"</td><td>Long-term development; time-consuming</td></tr></table>`},
 {h:'Tuckman\'s five stages', b:`
  <div class="flow"><span>Forming</span><em>→</em><span>Storming</span><em>→</em><span>Norming</span><em>→</em><span>Performing</span><em>→</em><span>Adjourning</span></div>
  <table><tr><th>Stage</th><th>What happens</th><th>Best style</th></tr>
  <tr><td>Forming</td><td>Get acquainted; ground rules</td><td>Visionary + coaching</td></tr>
  <tr><td>Storming</td><td>Conflict; members challenge roles</td><td>Affiliative + commanding</td></tr>
  <tr><td>Norming</td><td>Norms agreed; cohesion</td><td>Democratic</td></tr>
  <tr><td>Performing</td><td>Optimal output</td><td>Democratic</td></tr>
  <tr><td>Adjourning</td><td>Team disbands</td><td>—</td></tr></table>`}
 ],
 recall:[
  ['What are the 2 key outputs of Plan Resource Management?','Resource management plan and team charter.'],
  ['What does the resource breakdown structure show?','Resources in a hierarchy by category and type.'],
  ['Which process group is Acquire Resources in?','Executing.'],
  ['Which Goleman style says "Do as I do, now"?','Pacesetting.'],
  ['Which style heals rifts ("people come first")?','Affiliative.'],
  ['Name Tuckman\'s five stages.','Forming, Storming, Norming, Performing, Adjourning.'],
  ['In which stage do members challenge roles?','Storming.'],
  ['Team charter vs project charter?','Team charter: team values and operating guidelines. Project charter: formally authorises the project.']
 ],
 theory:[
  {q:'Explain Tuckman\'s five stages of team development and the leadership style suitable for each.', pts:['Forming + style','Storming + style','Norming + style','Performing + style','Adjourning','Practical example'],
   model:`<ol><li><b>Forming</b> — members meet and learn about the project; ground rules set. Visionary and coaching styles give direction.</li><li><b>Storming</b> — conflict as members compete and challenge roles. Affiliative style heals rifts; commanding if a crisis develops.</li><li><b>Norming</b> — norms agreed, trust builds. Democratic style invites participation.</li><li><b>Performing</b> — the team works at its best. Democratic style lets the team lead itself.</li><li><b>Adjourning</b> — work is complete and the team disbands; recognise contributions.</li></ol>`},
  {q:'Describe Goleman\'s six leadership styles and when each is appropriate.', pts:['Commanding','Visionary','Affiliative','Democratic','Pacesetting','Coaching','"Use sparingly" for commanding and pacesetting'],
   model:`<ul><li><b>Commanding</b> ("Do what I tell you") — crises; use sparingly.</li><li><b>Visionary</b> ("Come with me") — when a new vision or direction is needed.</li><li><b>Affiliative</b> ("People come first") — to heal rifts and motivate under stress.</li><li><b>Democratic</b> ("What do you think?") — to build buy-in; not ideal in urgent situations.</li><li><b>Pacesetting</b> ("Do as I do, now") — fast results from a highly competent team; use sparingly.</li><li><b>Coaching</b> ("Try this") — long-term development of people; time-consuming.</li></ul>`}
 ]
},
{
 id:'t5', n:'Topic 5', title:'Managing Project Teams II',
 why:'Power (French & Raven), conflict sources and strategies, virtual teams, communications management.',
 cards:[
 {h:'Six sources of power', b:`
  <table><tr><th>Power</th><th>Based on</th></tr>
  <tr><td>Legitimate</td><td>Position or rank</td></tr><tr><td>Reward</td><td>Ability to give rewards</td></tr><tr><td>Coercive</td><td>Threat of punishment</td></tr><tr><td>Expert</td><td>Expertise / knowledge</td></tr><tr><td>Referent</td><td>Admiration, personal connection</td></tr><tr><td>Informational</td><td>Controlling access to information</td></tr></table>
  <div class="trap">Expert = what you know. Informational = what information you control.</div>`},
 {h:'Conflict: sources and five strategies', b:`
  <p>Conflict is <b>inevitable</b> and not inherently good or bad. <b>Sources:</b> scarce resources · scheduling priorities · work styles · role/task ambiguity · poor communication · personality and values.</p>
  <table><tr><th>Strategy</th><th>Meaning</th></tr>
  <tr><td>Avoiding</td><td>Withdraw or postpone</td></tr><tr><td>Accommodating</td><td>Concede to the other side</td></tr>
  <tr><td>Compromising</td><td>Middle ground; <b>lose-lose</b> on the slides</td></tr>
  <tr><td>Forcing / competing</td><td>Use power; suits emergencies</td></tr>
  <tr><td>Collaborating</td><td>Problem-solve; <b>win-win</b>, fully satisfies everyone</td></tr></table>`},
 {h:'Global and virtual teams', b:`
  <p><b>Virtual team</b> = shared goal, little or no face-to-face contact (can still be local). <b>Global</b> = spread across countries.</p>
  <p><b>Benefits:</b> wider talent pool, expertise, home-based workers, shifts across time zones, inclusion of people with disabilities, no travel or office costs.</p>
  <p><b>Challenges:</b> language, time zones, tracking work, culture, knowledge gaps, labour laws.</p>
  <p><b>Solutions:</b> clear channels, clear goals, flexible schedules, inclusivity, technology tools, regular check-ins.</p>`},
 {h:'Communications management', b:`
  <table><tr><th>Process</th><th>Key output</th></tr>
  <tr><td>Plan Communications Management</td><td>Communications management plan</td></tr>
  <tr><td>Manage Communications</td><td>Project communications (collect, create, distribute, store, retrieve)</td></tr>
  <tr><td>Monitor Communications</td><td>Work performance information + change requests</td></tr></table>
  <p><b>Enhancing communication:</b> active listening · writing style · meeting management · presentations · open communication and feedback · appropriate media.</p>`}
 ],
 recall:[
  ['Name French and Raven\'s six power sources (as on the slides).','Legitimate, reward, coercive, expert, referent, informational.'],
  ['Power based on admiration?','Referent.'],
  ['Name 4 sources of conflict.','Any four: scarce resources, scheduling priorities, work styles, role ambiguity, poor communication, personality/values.'],
  ['Which strategy is win-win?','Collaborating.'],
  ['Which strategy is lose-lose on the slides?','Compromising.'],
  ['Avoiding vs accommodating?','Avoiding withdraws or postpones; accommodating concedes to the other party.'],
  ['Name the 3 communications processes.','Plan Communications Management, Manage Communications, Monitor Communications.'],
  ['Can a virtual team be local?','Yes. Virtual describes how they work (little face-to-face), not where.']
 ],
 theory:[
  {q:'Explain five strategies for managing conflict in project teams, stating when each is suitable.', pts:['Avoiding','Accommodating','Compromising (lose-lose)','Forcing (emergencies)','Collaborating (win-win)','Conflict is not inherently bad'],
   model:`<p>Conflict is inevitable in teams and is not inherently good or bad; it must be managed.</p><ol><li><b>Avoiding</b> — withdrawing or postponing; suitable when the issue is trivial or tempers need to cool.</li><li><b>Accommodating</b> — conceding to the other party; suitable when harmony matters more than the issue.</li><li><b>Compromising</b> — each side gives up something (lose-lose on the slides); suitable when time is short.</li><li><b>Forcing/competing</b> — using power to impose a solution; suitable in emergencies.</li><li><b>Collaborating</b> — working together for a solution that fully satisfies everyone (win-win); best when time allows and commitment matters.</li></ol>`},
  {q:'Discuss the benefits and challenges of virtual teams, and suggest ways to make them effective.', pts:['Definition','3+ benefits','3+ challenges','3+ solutions','Example'],
   model:`<p>A <b>virtual team</b> shares a goal but has little or no face-to-face contact.</p><p><b>Benefits:</b> access to a wider talent pool and expertise; home-based workers; work across time zones in shifts; inclusion of people with disabilities; lower travel and office costs.</p><p><b>Challenges:</b> language barriers, time-zone differences, difficulty tracking work, cultural differences, knowledge gaps and differing labour laws.</p><p><b>Solutions:</b> clear communication channels, clear goals, flexible schedules, inclusive practices, collaboration tools (Jira, Slack, Teams) and regular check-ins.</p>`}
 ]
},
{
 id:'t6', n:'Topic 6', title:'Project Initiation and Planning',
 why:'How organisations choose projects, the business case, the charter, and the project management plan.',
 cards:[
 {h:'Why organisations start projects', b:`
  <p>Four factors: (1) <b>regulatory, legal or social</b> requirements; (2) <b>stakeholder requests</b>; (3) <b>strategic</b> opportunities or business needs; (4) to <b>create, improve or fix</b> products, processes or services.</p>`},
 {h:'Pre-project documents', b:`
  <div class="flow"><span>Needs assessment</span><em>→</em><span>Business case</span><em>→</em><span>Benefits management plan</span><em>→</em><span>Project charter</span><em>→</em><span>PM plan</span></div>
  <table><tr><th>Document</th><th>Purpose</th></tr>
  <tr><td>Needs assessment</td><td>Identify problems/opportunities (SWOT, PESTEL)</td></tr>
  <tr><td>Business case</td><td>Justify the project: options incl. <b>"do nothing"</b>, ROI, <b>payback period</b></td></tr>
  <tr><td>Benefits management plan</td><td>How and when benefits are delivered: <b>benefits owner</b>, metrics, timeframe</td></tr></table>`},
 {h:'The project charter', b:`
  <div class="def"><b>Project charter</b>The document issued by the <b>sponsor</b> that <b>formally authorises</b> the project and gives the PM authority to apply organisational resources.</div>
  <p>Contains (high level): purpose, objectives and success criteria, high-level requirements and scope, risks, milestone schedule, budget, stakeholders, exit criteria, PM name and authority, sponsor.</p>
  <p><b>Initiating group:</b> Develop Project Charter (→ charter) + Identify Stakeholders (→ stakeholder register).</p>
  <div class="trap">CA1: the sponsor does NOT develop the team charter (the team does).</div>`},
 {h:'The project management plan', b:`
  <p>Describes how the project will be <b>executed, monitored, controlled and closed</b>. It integrates all subsidiary plans (scope, schedule, cost, quality, resource, communications, risk, procurement, stakeholder) and the <b>baselines</b> (scope, schedule, cost → together the performance measurement baseline).</p>
  <table><tr><th>Charter</th><th>PM plan</th></tr><tr><td>High level; authorises</td><td>Detailed; how the work will be done</td></tr><tr><td>Initiating</td><td>Planning</td></tr></table>`}
 ],
 recall:[
  ['Name the four factors that lead organisations to start projects.','Regulatory/legal/social requirements; stakeholder requests; strategy; create, improve or fix products/processes.'],
  ['Which document includes the "do nothing" option and payback period?','The business case.'],
  ['Who owns the benefits in the benefits management plan?','The benefits owner.'],
  ['Who issues the project charter?','The sponsor.'],
  ['What does the charter do?','Formally authorises the project and gives the PM authority to use resources.'],
  ['Charter vs PM plan?','Charter: high-level authorisation (Initiating). PM plan: detailed how-to with baselines (Planning).'],
  ['What three baselines make up the performance measurement baseline?','Scope, schedule and cost baselines.']
 ],
 theory:[
  {q:'Explain the documents produced before and during project initiation, from needs assessment to the project charter.', pts:['Needs assessment (SWOT/PESTEL)','Business case (do nothing, ROI, payback)','Benefits management plan (owner, metrics, timeframe)','Charter: sponsor, authorises, PM authority','Correct order','Example'],
   model:`<ol><li><b>Needs assessment</b> — identifies the problem or opportunity using tools such as SWOT and PESTEL.</li><li><b>Business case</b> — justifies the investment: compares options including "do nothing", and estimates ROI and payback period.</li><li><b>Benefits management plan</b> — states how and when benefits will be delivered and measured, the benefits owner, metrics and timeframe.</li><li><b>Project charter</b> — issued by the sponsor; formally authorises the project, names the PM and their authority, and records high-level objectives, scope, risks, milestones, budget and exit criteria.</li></ol><p>The PM plan then details how the project will be executed, monitored and controlled.</p>`}
 ]
}
]
