module.exports = {
t7: {
cards: [
{h:'CSA: reading the record, not re-investigating',b:`<div class="def"><b>CSA (slides)</b>The recorded, reportable state of every configuration item and change request: a read of what identification and control already produced, not a fresh investigation.</div><p>Anyone (lecturer, CCB, new teammate) can ask "where do things stand?" without searching chat history.</p><table><tr><th>Panel-based</th><th>Manual chasing</th></tr><tr><td>Read Jira's Development panel once; anyone can reproduce the report</td><td>Ping each squad lead; piece answers from memory; no two reports count the same way</td></tr></table><div class="hook">If you have to ask someone to find out, the record isn't doing its job.</div>`},
{h:'The Jira Development panel',b:`<table><tr><th>Panel shows</th><th>Meaning</th><th>Report effect</th></tr><tr><td>Branch</td><td>Linked feature branch, existing or merged</td><td>Blank = Not Started</td></tr><tr><td>Pull request</td><td>Open, merged or absent; CODEOWNERS satisfied?</td><td>Merged = Closed</td></tr><tr><td>Build</td><td>Latest CI result: pass, fail, not run</td><td>Feeds pass rate</td></tr></table><p><b>Worked example:</b> SEN-31 opens with no branch → Not Started; feature/jane/SEN-31-fix appears → In Progress; PR merges → Closed; latest CI run becomes its build status.</p>`},
{h:'Compiling a status report',b:`<ol><li>Filter Jira to your squad's tickets this cycle</li><li>Read each ticket's Development panel</li><li>Tally open vs closed (closed <b>only once the PR has merged</b>)</li><li><b>Build pass rate</b> = passing runs ÷ total runs</li><li>Count commits this cycle across linked branches</li></ol><p><b>Pitfalls:</b> reporting guesses · double-counting (closing before merge) · stale snapshots (reusing last week's numbers).</p><div class="hook">An honest "still open" beats an optimistic "nearly there".</div>`}
],
recall: [
['Define CSA (slides).','The recorded, reportable state of every CI and change request: a read of what identification and control already produced.'],
['What three things does Jira\'s Development panel show per ticket?','Linked branch, pull request status, latest build (CI) result.'],
['When does a ticket count as closed?','Only once its PR has merged.'],
['Formula for build pass rate.','Passing runs ÷ total runs across the squad\'s branches.'],
['Three status-reporting pitfalls.','Reporting guesses, double-counting, stale snapshots.'],
['A ticket with no linked branch is reported as…','Not Started.']
],
quiz: [
{k:'mcq',q:'A ticket counts as closed when…',o:['The developer says it is done','Its PR has merged','The branch is created','The CCB approves it'],a:1},
{k:'mcq',q:'Reusing last week\'s numbers in this week\'s report is…',o:['Double-counting','A stale snapshot','Reporting guesses','A shadow process'],a:1},
{k:'tf',q:'Status accounting should re-investigate each change from scratch.',a:false,w:'It reads what identification and control already recorded.'},
{k:'gap',q:'Build pass rate = passing runs ÷ ___ runs.',a:'total'},
{k:'mcq',q:'In Jira, the tool that links each ticket to its branch, PR and build is the…',o:['Backlog','Development panel','Roadmap','Sprint board'],a:1}
]
},
t8: {
cards: [
{h:'Audits on the slides: record vs reality',b:`<div class="def"><b>Configuration audit (slides)</b>Verifies that what is documented (the SCMP, CODEOWNERS, the branch convention) still matches what exists in the repo and build.</div><table><tr><th>Functional audit</th><th>Physical audit</th></tr><tr><td>Does it <b>work</b>? Feature tested against the ticket's acceptance criteria, not just merged</td><td>Is the <b>record true</b>? Branch names, CODEOWNERS and main's build status match the documentation</td></tr></table><div class="hook">Functional asks if it works; physical asks if the record matches reality.</div>`},
{h:'What the squad audit checks',b:`<table><tr><th>Row</th><th>Question</th><th>Followed if</th></tr><tr><td>Naming</td><td>Do branches follow feature/&lt;user&gt;/&lt;ticket&gt;-&lt;slug&gt;?</td><td>All match; exceptions named</td></tr><tr><td>CODEOWNERS</td><td>Does it point to the right owners?</td><td>Updated after any squad reshuffle</td></tr><tr><td>Build</td><td>Does main still build and pass CI?</td><td>Latest CI run passing</td></tr></table><p>Verdict: <b>Followed / Drifted</b> per row, with one line of evidence. Worked example: branch hotfix-login breaks the convention → flagged Drifted, not deleted.</p>`},
{h:'Running the audit and its pitfalls',b:`<ol><li>Pull your Week 4 SCMP</li><li>List actual branches vs the convention</li><li>Diff CODEOWNERS against reality</li><li>Confirm main builds (latest CI run)</li><li>File the checklist with evidence</li></ol><p><b>Pitfalls:</b> auditing from memory · blaming the drift · skipping evidence.</p><p><b>Drift is normal</b> entropy, not sabotage. The audit surfaces it early while it is a one-line fix.</p>`}
],
recall: [
['Functional vs physical audit (slides).','Functional: does it work against its acceptance criteria? Physical: does the record (branch names, CODEOWNERS, build status) match reality?'],
['Three rows of the squad audit checklist.','Naming, CODEOWNERS, build.'],
['Two possible verdicts per audit row.','Followed or Drifted, with one line of evidence.'],
['Three auditing pitfalls.','Auditing from memory, blaming the drift, skipping evidence.'],
['Is drift a failure?','No. It is normal entropy; finding it means the audit is working.']
],
quiz: [
{k:'mcq',q:'"Does main\'s CODEOWNERS file name the right owners?" is part of a…',o:['Functional audit','Physical audit','Status report','Change request'],a:1},
{k:'mcq',q:'Testing a feature against its acceptance criteria is a…',o:['Physical audit','Functional audit','Spot-check','Baseline'],a:1},
{k:'tf',q:'A branch that breaks the naming convention should be deleted during the audit.',a:false,w:'It is flagged Drifted, not deleted.'},
{k:'mcq',q:'Reporting what the SCMP said without opening the repo is…',o:['Skipping evidence','Auditing from memory','Blaming the drift','A shadow process'],a:1},
{k:'gap',q:'Each audit row is marked Followed or ___.',a:'drifted'}
]
},
t9: {
cards: [
{h:'Maintenance on the slides',b:`<div class="def"><b>Software maintenance (slides)</b>Any change made to a system after its initial release: fixing bugs, adapting to a new OS or dependency, improving performance, or preventing future failures.</div><p>Industry studies put maintenance at <b>well over half</b> of lifecycle cost. "If you only budget for building it, you've only budgeted for the smaller half."</p><table><tr><th>Reactive</th><th>Proactive</th></tr><tr><td><b>Corrective</b>: bug users already hit · <b>Adaptive</b>: environment changed (new OS, dependency, regulation)</td><td><b>Perfective</b>: improve what already works (performance, readability, cleaner API) · <b>Preventive</b>: restructure now so a future failure never happens</td></tr></table>`},
{h:'What goes into an estimate',b:`<table><tr><th>Element</th><th>Rule</th></tr><tr><td><b>Effort</b></td><td>Engineer-days, from code you've read, not the ticket title</td></tr><tr><td><b>Risk</b></td><td>Low/Medium/High, naming what could blow it up</td></tr><tr><td><b>Confidence</b></td><td>How sure you are; low is a valid answer</td></tr><tr><td><b>Assumption</b></td><td>The riskiest unknown, stated so it can be checked</td></tr></table><p><b>Worked example:</b> Squad A's JWT/OAuth integration touches three services. Effort 6 engineer-days; risk High (refresh-race condition); confidence Medium (third-party provider unverified).</p>`},
{h:'Estimation pitfalls and the coming weeks',b:`<p><b>Pitfalls:</b> estimating the title · hiding the risk (one confident number for a wide range) · confidence by default (marking everything High).</p><p>Textbook cases have a clean answer key; real backlog items do not.</p><p><b>Teaching plan, weeks 12–13</b> (no slides yet): maintenance process and <b>program comprehension</b> (reading unfamiliar code via git log and git blame) · re-engineering, reverse engineering, migration and retirement.</p><div class="trap">The ACT formula on the earlier card is textbook material; the slides estimate with effort, risk and confidence instead. Learn both.</div>`}
],
recall: [
['Define software maintenance (slides).','Any change made to a system after its initial release.'],
['Which maintenance types are reactive and which proactive?','Reactive: corrective, adaptive. Proactive: perfective, preventive.'],
['Four elements of a maintenance estimate (slides).','Effort, risk, confidence, assumption.'],
['Unit of effort in the slide estimates.','Engineer-days.'],
['Three estimation pitfalls.','Estimating the title, hiding the risk, confidence by default.'],
['What share of lifecycle cost do the slides give to maintenance?','Well over half.'],
['Name four week 12–13 topics in the teaching plan.','Program comprehension, re-engineering, reverse engineering, migration, retirement (any four).']
],
quiz: [
{k:'mcq',q:'Updating an app because a regulation changed is…',o:['Corrective','Adaptive','Perfective','Preventive'],a:1},
{k:'mcq',q:'On the slides, perfective and preventive maintenance are…',o:['Reactive','Proactive','Corrective','Emergency'],a:1},
{k:'mcq',q:'Pricing a ticket from its one-line summary is…',o:['Hiding the risk','Estimating the title','Confidence by default','Gold plating'],a:1},
{k:'tf',q:'"Low confidence" is a valid part of a maintenance estimate.',a:true},
{k:'gap',q:'Slide estimates measure effort in engineer-___.',a:'days'},
{k:'mcq',q:'Fixing a bug users have already hit is…',o:['Preventive','Corrective','Perfective','Adaptive'],a:1},
{k:'mcq',q:'Restructuring code now so a future failure never happens is…',o:['Preventive','Corrective','Adaptive','Reactive'],a:0}
],
theory: [
{q:'Distinguish reactive from proactive maintenance, and explain how to produce a credible maintenance estimate for a real backlog item.',pts:['Maintenance defined','Reactive: corrective + adaptive with examples','Proactive: perfective + preventive with examples','Cost: over half of lifecycle','Estimate: effort, risk, confidence, assumption','Worked example','Pitfalls'],model:`<p><b>Background:</b> maintenance is any change after initial release and takes well over half of lifecycle cost.</p><p><b>Answer and solution:</b> <b>reactive</b> maintenance responds to something that already broke or changed: corrective (a bug users hit) and adaptive (a new OS, dependency or regulation). <b>Proactive</b> maintenance acts first: perfective (better performance, cleaner API) and preventive (restructuring to avoid future failure). A credible estimate names <b>effort</b> in engineer-days from code actually read, <b>risk</b> (Low/Medium/High and what could blow it up), <b>confidence</b>, and the <b>riskiest assumption</b>.</p><p><b>Scenario:</b> JWT/OAuth integration touches three services: 6 engineer-days, High risk (token-refresh race condition), Medium confidence (third-party provider untested).</p><p><b>How they combine:</b> the category tells you why the work exists; the estimate tells you what it will cost and how sure you are. Avoid estimating the title, hiding risk, or claiming high confidence by default.</p><p><b>Conclusion:</b> plan for maintenance as the larger half of cost, and estimate it with effort, risk and confidence, not a bare number.</p>`}
]
}
};
