module.exports = {
t4: {
cards: [
{h:'What counts as a CI (slides)',b:`<div class="def"><b>Configuration item (slides)</b>Anything placed under configuration control because the team needs to track its versions and changes over time. If losing it or silently changing it would break or confuse the project, it is probably a CI.</div><table><tr><th>Usually yes</th><th>Usually no</th></tr><tr><td>Source code, build/deploy scripts, infrastructure-as-code, requirements and design docs, test suites, third-party dependency versions</td><td>Generated build output, personal scratch branches, local-only config, anything fully reproducible from tracked CIs</td></tr></table><p>Rule of thumb: if it is in the repo and something depends on its exact version, it is a CI.</p>`},
{h:'CI types at a glance',b:`<table><tr><th>Source code</th><th>Documentation</th><th>Configuration</th><th>Test assets</th></tr><tr><td>Application and library code; build/deploy scripts</td><td>Requirements and design docs; the SCMP itself</td><td>Environment/IaC files; dependency version list</td><td>Test suites and fixtures; CI/CD pipeline definitions</td></tr></table><p><b>Identification pitfalls:</b> too granular (tracking temp files and IDE settings) · too coarse (one giant CI) · inconsistent naming (hurts status accounting and audits).</p>`},
{h:'The software library: three properties',b:`<ul><li><b>Single source of truth</b>: one authoritative copy of every CI, not "whoever's laptop has the latest".</li><li><b>Access control</b>: who can read, who can write, who must go through a pull request.</li><li><b>Version history</b>: a permanent record of what changed, when and by whom.</li></ul><p><b>Lab setup:</b> create the repo (pau-sen-401 org) → README and .gitignore → <b>branch protection</b> (no direct pushes to main) → invite teammates with least access → first commit and push.</p>`},
{h:'A good baseline and how to tag it',b:`<p>A good baseline is <b>reviewed</b> before it is set, <b>stable</b> (nothing half-finished), <b>reproducible</b> from the repository alone, and <b>clearly tagged</b>. It is a fixed point that changes move forward from, never silently backward.</p><ol><li>Commit is reviewed and merged to main</li><li><code>git tag -a v1.0 -m "message"</code> (annotated: who, when, why)</li><li><code>git push --tags</code> (publish to the team)</li><li>Record it in the baseline log (for status accounting)</li></ol><div class="hook">If you can't reproduce it from the tag alone, it isn't really a baseline.</div>`}
],
recall: [
['Slide rule of thumb for a CI.','If it is in the repository and something depends on its exact version, it is a CI.'],
['Give three things that are usually NOT CIs.','Generated build output, personal scratch branches, local-only config, anything reproducible from tracked CIs (any three).'],
['Three properties of a software library.','Single source of truth, access control, version history.'],
['Four qualities of a good baseline.','Reviewed, stable, reproducible from the repo alone, clearly tagged.'],
['Git commands to tag and share a baseline.','git tag -a v1.0 -m "message", then git push --tags.'],
['Three configuration identification pitfalls.','Too granular, too coarse, inconsistent naming.'],
['What does branch protection on main enforce?','No direct pushes: every change must come through a pull request.']
],
quiz: [
{k:'mcq',q:'Which is usually NOT a configuration item?',o:['Build scripts','Dependency version list','Generated build output','Test suites'],a:2},
{k:'mcq',q:'Which Git command creates an annotated tag?',o:['git tag v1.0','git tag -a v1.0 -m "msg"','git push --tags','git commit -a'],a:1},
{k:'tf',q:'Any commit on main is automatically a baseline.',a:false,w:'A baseline must be reviewed, stable, reproducible and tagged.'},
{k:'mcq',q:'Tracking every temp file and IDE setting is which pitfall?',o:['Too coarse','Too granular','Inconsistent naming','Stale baseline'],a:1},
{k:'gap',q:'The software library is the single source of ___.',a:'truth'},
{k:'mcq',q:'Is the SCMP itself a CI?',o:['No, it is only a plan','Yes, as documentation','Only after release','Only in waterfall'],a:1},
{k:'mcq',q:'In a baseline, which happens after tagging and pushing?',o:['Delete the branch','Record it in the baseline log','Raise a change request','Run an audit'],a:1}
]
},
t5: {
cards: [
{h:'Controlled vs uncontrolled change',b:`<table><tr><th>With change control</th><th>Without change control</th></tr><tr><td>Proposed in Jira, justified, reviewed by the CCB, approved with a ticket key before any branch is cut</td><td>Someone edits main directly because "it seemed small", with no record</td></tr><tr><td>Every change traces to a reason and an authority</td><td>Two squads silently touch the same file the same week</td></tr></table><div class="def"><b>Change request (slides)</b>A formal proposal to modify a CI that is already baselined, stating what, why and impact <b>before</b> any code is touched.</div><p>"If it isn't logged and reviewed first, it isn't change control; it's just an edit."</p>`},
{h:'Anatomy of a change request',b:`<table><tr><th>Field group</th><th>Contents</th></tr><tr><td><b>Identification</b> (what)</td><td>Affected CI/file(s); linked repo and squad</td></tr><tr><td><b>Justification</b> (why)</td><td>Bug, feature or risk; one sentence, no hedging</td></tr><tr><td><b>Impact</b></td><td>Scope and effort estimate; other squads touched?</td></tr><tr><td><b>Disposition</b></td><td>Approved/rejected; ticket key (e.g. SEN-23)</td></tr></table><p>A good CR names one CI, has a justification the CCB can evaluate, is one coherent change, and flags its own impact honestly.</p>`},
{h:'Inside the CCB review: four questions',b:`<ol><li><b>Is the CI already baselined?</b> If not, it is day-one setup, not a change.</li><li><b>Is the justification specific?</b> "It's better this way" fails.</li><li><b>What is the impact?</b> Scope, risk, whose work it touches.</li><li><b>Approve, reject or request more info.</b> A ticket key is issued only once the CCB is satisfied.</li></ol><p>In this course <b>Jira</b> is the system of record; the ticket key is your authorisation.</p>`},
{h:'Raising a CR and the pitfalls',b:`<p><b>Lab steps:</b> pick a task from the squad's task bank → squad lead opens a Jira issue of type "Change Request" linked to the repo → describe what, why, impact → submit to the CCB (lecturer + TA, live) → receive the ticket key.</p><table><tr><th>Pitfall</th><th>Meaning</th></tr><tr><td>Vague justification</td><td>"Clean-up" tells the CCB nothing</td></tr><tr><td>Skipping the queue</td><td>Starting work before a ticket key exists</td></tr><tr><td>No impact assessment</td><td>Not checking who else touches that file</td></tr></table>`}
],
recall: [
['Define a change request (slides).','A formal proposal to modify an already-baselined CI, stating what, why and impact before any code is touched.'],
['Four field groups of a change request.','Identification, justification, impact, disposition.'],
['The CCB\'s four questions.','Is the CI baselined? Is the justification specific? What is the impact? Approve, reject or request more info.'],
['What is the system of record for change requests in the course?','Jira; the ticket key (e.g. SEN-23) is the authorisation.'],
['Three change control pitfalls.','Vague justification, skipping the queue, no impact assessment.'],
['If a CI is not yet baselined, is editing it a change?','No. It is day-one setup, not a change.']
],
quiz: [
{k:'mcq',q:'A change request is raised…',o:['After the code is written','Before any code is touched','Only at release','Only for bugs'],a:1},
{k:'mcq',q:'"Clean-up" as a CR justification is which pitfall?',o:['Skipping the queue','Vague justification','No impact assessment','Too granular'],a:1},
{k:'mcq',q:'The ticket key (e.g. SEN-23) belongs to which CR field group?',o:['Identification','Justification','Impact','Disposition'],a:3},
{k:'tf',q:'Work may start before the ticket key is issued if the change is small.',a:false,w:'That is "skipping the queue": there is no authorisation.'},
{k:'gap',q:'A deviation is authorised before production; a ___ is authorised after.',a:'waiver'},
{k:'mcq',q:'Which is NOT one of the CCB\'s four questions?',o:['Is the CI baselined?','Is the justification specific?','Who wrote the original code?','What is the impact?'],a:2}
]
},
t6: {
cards: [
{h:'Feature branches done right',b:`<p>A feature branch is an isolated copy of main, cut once the CR is approved, named <code>feature/&lt;username&gt;/&lt;ticket&gt;-&lt;slug&gt;</code> so it traces to its authorisation. One ticket, one branch.</p><table><tr><th>Disciplined</th><th>Undisciplined</th></tr><tr><td>One ticket, descriptive slug, merged within days, rebased on main along the way</td><td>Outlives its ticket, picks up unrelated fixes, drifts weeks behind main</td></tr></table>`},
{h:'Anatomy of a pull request',b:`<ul><li><b>Reference</b>: title and description link to the ticket (SEN-23).</li><li><b>Diff</b>: scoped to exactly what the ticket described.</li><li><b>Checks</b>: required <b>CODEOWNERS</b> approval plus a passing CI run; branch protection blocks the merge otherwise.</li></ul><p>Steps: branch from main → implement → push and open PR → request CODEOWNERS review → merge once CI passes.</p><p><b>PR checklist:</b> branch cut from latest main · title references ticket · diff scoped to ticket · CODEOWNERS approval · no unresolved comments · CI passing · no conflicts with main.</p>`},
{h:'Resolving the CHANGELOG conflict',b:`<p>Every squad edits the same CHANGELOG.md line on purpose: conflicts are routine on shared repos.</p><ol><li>Pull main and merge it into your branch (<code>git pull origin main</code>)</li><li>Git marks both entries between &lt;&lt;&lt;&lt;&lt;&lt;&lt; and &gt;&gt;&gt;&gt;&gt;&gt;&gt;</li><li><b>Talk to the other author</b>; agree a combined entry</li><li>Resolve, commit the merge, push</li></ol><p><b>Pitfalls:</b> giant PRs · <b>force-pushing</b> shared history (erases teammates' commits) · merging without review.</p><div class="hook">A merge conflict is Git asking a question, not a sign of failure.</div>`}
],
recall: [
['Feature branch naming pattern in the course.','feature/<username>/<ticket>-<slug>.'],
['Three parts of a pull request.','Reference (ticket key), diff (scoped to the ticket), checks (CODEOWNERS approval + passing CI).'],
['What does CODEOWNERS enforce?','The owner of a path must approve a PR that touches it before it can merge.'],
['Four steps to resolve a merge conflict (slides).','Pull and merge main; Git flags the conflict; talk to the other author; resolve, commit, push.'],
['Why is force-pushing shared history a pitfall?','It rewrites history and erases teammates\' commits.'],
['Three branching/PR pitfalls.','Giant PRs, force-pushing history, merging without review.']
],
quiz: [
{k:'mcq',q:'Which branch name follows the course convention?',o:['fix-stuff','feature/ada/SEN-23-add-login','main2','ada-branch'],a:1},
{k:'mcq',q:'Branch protection blocks a merge without…',o:['A CODEOWNERS approval and passing CI','A release tag','A waiver','A status report'],a:0},
{k:'tf',q:'When a merge conflict appears, you should pick your own version and force-push.',a:false,w:'Resolve it with the other author; never force-push shared history.'},
{k:'mcq',q:'Bundling several tickets into one PR is the pitfall of…',o:['Giant PRs','Stale baselines','Shadow process','Too coarse CIs'],a:0},
{k:'gap',q:'A merge conflict is Git asking a ___.',a:'question'},
{k:'mcq',q:'A disciplined branch is merged…',o:['Within days','After the semester','Only at release','Never'],a:0}
]
}
};
