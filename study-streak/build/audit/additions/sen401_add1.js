module.exports = {
t1: {
cards: [
{h:'SCM depends on its organisation',b:`<p>SCM is <b>more than a toolset</b>. It sits alongside development, QA and project management, and is shaped by:</p><ul><li>team size and structure</li><li>process model (agile, waterfall, DevOps)</li><li>criticality of the system</li><li>existing tooling and infrastructure</li></ul><p>A 5-person startup and a 200-engineer regulated enterprise both need SCM, but formality and tooling differ. Design SCM to fit the organisation, not fight it.</p>`},
{h:'Two organisational models',b:`<table><tr><th>Centralised SCM</th><th>Embedded / DevOps</th></tr><tr><td>A dedicated SCM/release team owns tooling, branching policy and the change process for the whole organisation</td><td>SCM is built into each product team's daily work; engineers own pipelines and branching, guided by shared standards</td></tr><tr><td>Large, regulated, multi-team organisations needing consistency and audit trails</td><td>Agile and DevOps-native organisations</td></tr></table>`},
{h:'Where constraints come from',b:`<table><tr><th>Level</th><th>Examples</th></tr><tr><td><b>External</b></td><td>Industry standards (ISO/IEC, IEEE), regulation and compliance, client contracts</td></tr><tr><td><b>Internal</b></td><td>Company tooling standards, security and data-protection policy, legacy infrastructure</td></tr><tr><td><b>Project-level</b></td><td>Team size and skills, timeline and budget, criticality and risk tolerance</td></tr></table><p><b>Guidance documents:</b> (1) SCM policy · (2) SCMP · (3) branching and coding standards · (4) Definition of Done / release checklist. They give the CCB something concrete to measure every change against.</p>`},
{h:'Roles on the slides',b:`<ul><li><b>Configuration Manager</b>: plans SCM, sets up and maintains the software library and baselines, reports configuration status.</li><li><b>CCB</b>: a small group (technical leads, QA, product/project management) that <b>approves, rejects or defers</b> changes.</li><li><b>Development team</b>: raises change requests, implements approved changes, follows the branching workflow.</li><li><b>QA/Test</b>: verifies a change works before release approval.</li><li><b>Release/DevOps engineer</b>: packages, deploys and monitors changes in CI/CD.</li><li><b>Project manager</b>: balances scope, schedule and risk.</li></ul><p>Together they turn "anyone can change anything" into a controlled, auditable process.</p>`},
{h:'Who does what in each SCM activity',b:`<table><tr><th>Activity</th><th>Owners</th></tr><tr><td>Identification</td><td>Configuration Manager (leads); development team (proposes CIs)</td></tr><tr><td>Control</td><td>CCB (approves); development team (implements)</td></tr><tr><td>Status accounting</td><td>Configuration Manager (leads); automated CI/CD tooling</td></tr><tr><td>Audit</td><td>Configuration Manager (leads); QA or an independent auditor</td></tr></table><p><b>Case study:</b> a fintech developer wants to merge an untested demo fix straight to production. The CCB and QA should say no: the change is unapproved and unverified. A startup might allow a faster path; a regulated bank would not.</p>`}
],
recall: [
['Four factors that shape SCM in an organisation.','Team size and structure, process model, system criticality, existing tooling and infrastructure.'],
['Centralised vs embedded SCM?','Centralised: a dedicated SCM/release team owns tooling and change process (large, regulated). Embedded/DevOps: each product team owns its pipelines under shared standards (agile).'],
['Three levels of SCM constraints with an example each.','External (ISO/IEEE standards, regulation), internal (security policy, legacy systems), project-level (team size, budget, risk tolerance).'],
['Four guidance documents for SCM.','SCM policy, SCMP, branching and coding standards, Definition of Done / release checklist.'],
['What can the CCB decide on a change?','Approve, reject or defer it.'],
['Who leads identification, status accounting and audit?','The Configuration Manager.'],
['Who implements approved changes?','The development team.']
],
quiz: [
{k:'mcq',q:'A dedicated release team owning branching policy for the whole company is…',o:['Embedded SCM','Centralised SCM','DevOps SCM','Ad hoc SCM'],a:1},
{k:'mcq',q:'Regulatory compliance requirements are which level of constraint?',o:['External','Internal','Project-level','Personal'],a:0},
{k:'mcq',q:'Team size and risk tolerance are…',o:['External constraints','Internal constraints','Project-level constraints','Guidance documents'],a:2},
{k:'gap',q:'The CCB can approve, reject or ___ a change.',a:'defer'},
{k:'mcq',q:'Who packages, deploys and monitors approved changes in CI/CD?',o:['CCB','Release/DevOps engineer','QA','Project manager'],a:1},
{k:'tf',q:'Only large regulated enterprises need SCM.',a:false,w:'Startups need it too; only the formality differs.'},
{k:'mcq',q:'In status accounting, who works alongside the Configuration Manager?',o:['The CCB','Automated CI/CD tooling','The customer','The project manager'],a:1}
]
},
t2: {
cards: [
{h:'SCM planning: objectives and scope',b:`<div class="def"><b>SCM planning</b>Deciding, in writing and before work starts, how configuration management will be carried out on a specific project: who does what, with which tools, to what standard. Its output is the <b>SCMP</b>.</div><p><b>Objectives</b> (what the plan must achieve): identify what is controlled, define the SCM processes, assign clear responsibility.</p><p><b>Scope</b> (what it covers): which products, life-cycle phases, teams, environments and tools. Too broad = unusable; too narrow = things slip through.</p>`},
{h:'The lecturer\'s six SCMP sections',b:`<ol><li><b>Introduction</b>: purpose, scope, definitions</li><li><b>SCM Management</b>: organisation, roles, responsibilities, policies</li><li><b>SCM Activities</b>: identification, control, status accounting, audits and reviews</li><li><b>Tools, Techniques and Environment</b>: repository, automation, infrastructure</li><li><b>Supplier/Subcontractor Control</b>: bringing external components under control</li><li><b>Records Collection and Retention</b>: baseline schedules, what is kept, where, how long</li></ol><p><b>Three pillars:</b> organisation and responsibilities · activities and procedures · schedules and resources.</p><div class="trap">The earlier card lists IEEE 828 headings (schedules, resources, plan maintenance). In this exam, use the lecturer's six.</div>`},
{h:'Good SCMP vs common pitfalls',b:`<p>A strong SCMP reads like an <b>instruction manual</b>, not a policy statement.</p><p>Vague: "changes will be managed appropriately". Concrete: "the CCB meets weekly; all merges to main require one approval".</p><table><tr><th>Pitfall</th><th>Meaning</th></tr><tr><td>Too vague</td><td>Tells no one what to do</td></tr><tr><td>Written once, never updated</td><td>Drifts from reality; the SCMP is a <b>living document</b></td></tr><tr><td>Disconnected from practice</td><td>If the CCB never meets as described, the plan has failed</td></tr></table>`}
],
recall: [
['Define SCM planning (slides).','Deciding in writing, before work starts, how SCM will be done on a project: who does what, with which tools, to what standard.'],
['Objectives vs scope of an SCMP?','Objectives: what the plan must achieve. Scope: what it covers (products, phases, teams, environments, tools).'],
['The six SCMP sections on the slides.','Introduction; SCM management; SCM activities; tools, techniques and environment; supplier/subcontractor control; records collection and retention.'],
['Three pillars of an SCMP.','Organisation and responsibilities; activities and procedures; schedules and resources.'],
['Three common SCM planning pitfalls.','Too vague; written once and never updated; disconnected from practice.']
],
quiz: [
{k:'mcq',q:'Which is one of the lecturer\'s six SCMP sections?',o:['Marketing plan','Supplier/subcontractor control','Risk register','Test cases'],a:1},
{k:'mcq',q:'"Changes will be tracked appropriately" is an example of which pitfall?',o:['Too vague','Too narrow','Disconnected from practice','Over-scoped'],a:0},
{k:'tf',q:'The SCMP should be frozen at project kickoff.',a:false,w:'It is a living document.'},
{k:'gap',q:'A strong SCMP reads like an instruction ___, not a policy statement.',a:'manual'},
{k:'mcq',q:'Which section says how long baselines are kept?',o:['Introduction','SCM management','Records collection and retention','SCM activities'],a:2}
]
},
t3: {
cards: [
{h:'Developing the plan: top-down meets bottom-up',b:`<p>Developing an SCMP = turning each outline bullet into a <b>testable, specific</b> commitment: named tools, named people, real dates.</p><table><tr><th>Top-down (required controls)</th><th>Bottom-up (team reality)</th></tr><tr><td>Policy and standards</td><td>Tools used daily</td></tr><tr><td>Contract and compliance</td><td>People and skills</td></tr><tr><td>Audit expectations</td><td>Workflow and cadence</td></tr></table><p>Practical test: would this draft satisfy an audit <b>and</b> guide the team's work tomorrow?</p>`},
{h:'Pre-submission checklist',b:`<ol><li><b>Named owners</b> for every activity</li><li><b>Named tools</b> (Git, GitHub, Jira, not "a repository")</li><li><b>Real cadence</b> (a CCB meeting schedule, not "as needed")</li><li><b>Testable audits</b> someone could check this week</li><li><b>No section skipped</b></li></ol><p>Practical flow: expand → swap and review → submit.</p>`},
{h:'SCM surveillance on the slides',b:`<div class="def"><b>Surveillance</b>The ongoing activity of verifying that SCM is carried out as the SCMP says: a continuous check, not a one-off audit. Run by the Configuration Manager, using evidence from existing tools (commit history, CI/CD logs, issue tracker).</div><p><b>Four everyday mechanisms:</b> CI/CD dashboards · issue-tracker audits (every merge traces to an approved ticket) · periodic spot-checks · sprint/retro review.</p>`},
{h:'Surveillance table and failure modes',b:`<table><tr><th>Control</th><th>Evidence</th><th>Failure signal</th></tr><tr><td>Authorised changes</td><td>Approved ticket linked to each merge</td><td>A merge with no approved request</td></tr><tr><td>Builds and deploys</td><td>CI/CD logs</td><td>Missing or unexplained pipeline activity</td></tr><tr><td>Baseline integrity</td><td>Release tag vs deployed version</td><td>Deployed version no longer matches the tag</td></tr><tr><td>Process adherence</td><td>Spot-checks, retrospectives</td><td>Direct pushes, bypassed approvals</td></tr></table><p><b>Three quiet failure modes:</b> shadow process (side-channel changes) · stale baselines · silent scope creep (CCB approving outside the SCMP's scope).</p><div class="hook">Surveillance is not watching the team; it compares planned controls with visible evidence.</div>`}
],
recall: [
['What two inputs must a good SCMP balance?','Top-down required controls (policy, compliance, audit) and bottom-up team reality (tools, people, workflow).'],
['Five items on the pre-submission checklist.','Named owners, named tools, real cadence, testable audits, no section skipped.'],
['Define SCM surveillance (slides).','The continuous activity of verifying that SCM is carried out as the SCMP says, using evidence from existing tools.'],
['Four everyday surveillance mechanisms.','CI/CD dashboards, issue-tracker audits, periodic spot-checks, sprint/retro review.'],
['Three signs a plan is not being followed.','Shadow process, stale baselines, silent scope creep.'],
['Failure signal for baseline integrity?','The deployed version no longer matches the tagged baseline.']
],
quiz: [
{k:'mcq',q:'Who runs SCM surveillance?',o:['The CCB','The Configuration Manager','The customer','External auditors only'],a:1},
{k:'tf',q:'Surveillance is a one-off audit at the end of the project.',a:false,w:'It is continuous.'},
{k:'mcq',q:'A change pushed directly after a DM approval is a…',o:['Stale baseline','Shadow process','Waiver','Baseline'],a:1},
{k:'mcq',q:'Evidence that every merge traces to an approved ticket comes from…',o:['Issue-tracker audits','Release notes','Burndown charts','Unit tests'],a:0},
{k:'gap',q:'When the tagged baseline no longer matches production, the baseline is ___.',a:'stale'},
{k:'mcq',q:'"The CCB has an actual meeting schedule" satisfies which checklist item?',o:['Named tools','Real cadence','Named owners','Testable audits'],a:1}
],
theory: [
{q:'Explain SCM surveillance. Describe four mechanisms used in practice and three signs that an SCMP is not being followed.',pts:['Definition: continuous verification against the SCMP','Owner: Configuration Manager','Evidence from existing tools','Four mechanisms','Surveillance table example (control, evidence, failure signal)','Three failure modes'],model:`<p><b>Background:</b> a submitted SCMP proves a team can write a plan; surveillance proves they use it.</p><p><b>Answer and solution:</b> surveillance is the continuous check, led by the Configuration Manager, that SCM happens as the SCMP says, using evidence already in the tools. Mechanisms: CI/CD dashboards (every build and deploy is visible); issue-tracker audits (each merge links to an approved ticket); periodic spot-checks of recent changes; sprint and retro reviews where the team flags breakdowns. Signs of failure: a <b>shadow process</b> (changes through side channels), <b>stale baselines</b> (deployed version differs from the tag) and <b>silent scope creep</b> (the CCB approves changes outside the plan's scope).</p><p><b>Scenario:</b> on the reading-assignment app, the Configuration Manager checks weekly that each merge to main has a Jira ticket approved by the CCB; a merge without one is the failure signal.</p><p><b>How they combine:</b> each control is paired with evidence, an owner, a cadence and a warning sign before monitoring begins.</p><p><b>Conclusion:</b> surveillance compares planned controls with visible evidence and acts when they diverge; it is not about watching people.</p>`}
]
}
};
