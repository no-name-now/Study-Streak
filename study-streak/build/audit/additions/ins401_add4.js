module.exports = {
t7: {
cards: [
{h:'Scope tools from the ITTO slides',b:`<table><tr><th>Process</th><th>Extra T&T on the slides</th></tr><tr><td>Plan Scope Mgmt</td><td>Expert judgement, <b>alternative analysis</b>, meetings (inputs: charter, quality plan, life cycle description, development approach)</td></tr><tr><td>Collect Requirements</td><td><b>Document analysis</b>, <b>benchmarking</b>, interpersonal skills (inputs include the <b>business case</b> and stakeholder register)</td></tr><tr><td>Define Scope</td><td>Alternative analysis, multicriteria decision analysis, facilitation, <b>product analysis</b></td></tr><tr><td>Validate Scope</td><td>Inspection, <b>voting</b></td></tr></table>`},
{h:'Requirements documentation and RTM: detail',b:`<p><b>Requirements documentation</b> describes how each requirement meets the business need. Format ranges from a simple list by stakeholder and <b>priority</b> to an elaborate document with an executive summary and attachments.</p><p>The <b>RTM</b> tracks requirements through the whole life cycle, so that requirements approved in the documentation are actually <b>delivered at the end</b>.</p><p>The scope statement documents the <b>entire scope</b>: project and product scope.</p>`},
{h:'Validate Scope outputs explained',b:`<p>Validate Scope brings <b>objectivity</b> to acceptance and raises the chance the final result is accepted.</p><ul><li><b>Accepted deliverables</b>: validated by the <b>customer or sponsor</b> as meeting acceptance criteria.</li><li><b>WPI</b>: which deliverables were accepted, which were not, and <b>why</b>.</li><li><b>Change requests</b>: unaccepted deliverables may need <b>defect repair</b>, processed through Perform Integrated Change Control.</li></ul><p><b>Inspection</b> = measuring, examining and validating work against requirements and acceptance criteria. <b>Variance analysis</b> checks if the variance is within <b>threshold</b> or needs corrective or preventive action.</p>`}
],
recall: [
['What extra data gathering technique appears on the scope tools slide?','Benchmarking (with brainstorming, interviews, focus groups, questionnaires and surveys).'],
['Which tool is unique to Define Scope on the slides?','Product analysis.'],
['What does the RTM ensure?','That requirements approved in the requirements documentation are delivered at the end of the project.'],
['Who validates accepted deliverables?','The customer or sponsor.'],
['Why might Validate Scope produce change requests?','Completed deliverables not formally accepted may need defect repair.'],
['What does variance analysis decide in Control Scope?','Whether the variance is within threshold or corrective/preventive action is needed.']
],
quiz: [
{k:'mcq',q:'Which process produces the requirements traceability matrix?',o:['Define Scope','Collect Requirements','Create WBS','Validate Scope'],a:1},
{k:'mcq',q:'The scope baseline consists of the scope statement, WBS and…',o:['Project charter','WBS dictionary','RTM','Schedule'],a:1},
{k:'gap',q:'The lowest level of the WBS is the work ___.',a:'package'},
{k:'mcq',q:'Key tool of Validate Scope?',o:['Variance analysis','Inspection','Decomposition','Benchmarking'],a:1},
{k:'mcq',q:'Validate Scope belongs to which process group?',o:['Planning','Executing','Monitoring and Controlling','Closing'],a:2},
{k:'tf',q:'A client\'s extra request that is logged, assessed and approved with new time and cost is scope creep.',a:false,w:'That is an approved change; creep is uncontrolled.'},
{k:'mcq',q:'Which component of the scope statement states what is OUT of scope?',o:['Acceptance criteria','Project exclusions','Deliverables','Scope description'],a:1},
{k:'gap',q:'Scope creep is the ___ expansion of scope without adjustments to time, cost and resources.',a:'uncontrolled'},
{k:'mcq',q:'Main output of Define Scope?',o:['Scope baseline','Project scope statement','Requirements documentation','Accepted deliverables'],a:1},
{k:'tf',q:'The WBS includes project management work.',a:true},
{k:'mcq',q:'Which is a data representation technique in Collect Requirements?',o:['Affinity diagrams','Inspection','Variance analysis','Decomposition'],a:0}
]
},
t8: {
cards: [
{h:'Schedule definitions you may be asked',b:`<ul><li><b>Plan Schedule Management</b>: establishes policies, procedures and documentation for planning, developing, managing and controlling the schedule.</li><li><b>Define Activities</b> output is the basis for estimating, scheduling, executing, monitoring and controlling.</li><li><b>Network diagram</b>: graphic of logical relationships (<b>dependencies</b>); manual or by software.</li><li><b>Duration estimates</b>: quantitative assessments of the likely number of time periods.</li><li><b>Schedule forecasts</b>: predictions of future conditions and events based on current knowledge.</li></ul>`},
{h:'Schedule ITTO extras',b:`<table><tr><th>Process</th><th>Extras on the slides</th></tr><tr><td>Sequence Activities</td><td>PDM, <b>dependency determination and integration</b>, leads and lags, PMIS</td></tr><tr><td>Estimate Durations</td><td>Analogous, parametric, three-point, bottom-up; <b>alternative and reserve analysis</b>; decision making</td></tr><tr><td>Develop Schedule</td><td>Outputs also include <b>schedule data</b> and <b>project calendars</b></td></tr><tr><td>Control Schedule</td><td><b>Performance reviews</b>, what-if analysis, burndown chart, earned value</td></tr></table>`},
{h:'CPM Example 1 from the slides',b:`<p>Paths from start to finish:</p><table><tr><th>Path</th><th>Days</th></tr><tr><td>A (5) → D (10)</td><td>15</td></tr><tr><td>B (8) → E (7) → D (10)</td><td>25</td></tr><tr><td>C (15) → F (20)</td><td><b>35: critical</b></td></tr></table><p>Project duration = 35 days. Path B-E-D has 10 days of float; A-D has 20.</p><div class="trap">The float figures are worked from the path lengths; the slide states only the critical path.</div>`},
{h:'PERT: steps and the full table',b:`<ol><li>Define tasks</li><li>Identify dependencies</li><li>Compute E = (O + 4M + P) ÷ 6</li><li>Draw the network diagram</li><li>Identify the critical path</li></ol><p>School example, missing rows: C install computers (1, 2, 3) → <b>2.0</b>; E test computers (1, 2, 3) → <b>2.0</b>. Path A-B-C-E-G = 3.0 + 4.2 + 2.0 + 2.0 + 2.0 = <b>13.2</b>.</p><p>Plot the critical path on a <b>Gantt chart</b>; scheduling software can draw both.</p>`},
{h:'Crashing examples and fast-tracking rule',b:`<p><b>Crashing</b> examples on the slides: approving <b>overtime</b> · adding people or equipment · <b>paying to expedite</b> delivery to critical-path activities.</p><p><b>Fast tracking</b> only works when activities on the <b>critical path</b> can be overlapped.</p><p>Conclusion slide: proper estimation of resources and durations is critical; software helps planning and tracking.</p>`}
],
recall: [
['Define Plan Schedule Management.','Establishing the policies, procedures and documentation for planning, developing, managing and controlling the project schedule.'],
['What is a project schedule network diagram?','A graphical representation of the logical relationships (dependencies) among schedule activities.'],
['Name the five PERT steps.','Define tasks, identify dependencies, compute expected times, draw the network diagram, identify the critical path.'],
['What are schedule forecasts?','Predictions of future project conditions and events based on information available at the time.'],
['Give three crashing examples.','Approving overtime, adding people or equipment, paying to expedite delivery.'],
['Name two outputs of Develop Schedule besides the baseline and schedule.','Schedule data, project calendars (also change requests).']
],
quiz: [
{k:'mcq',q:'What is the duration of a milestone?',o:['One day','Zero','Variable','One week'],a:1},
{k:'mcq',q:'"B cannot start until A finishes" is…',o:['SS','FF','FS','SF'],a:2},
{k:'mcq',q:'The rarest PDM relationship is…',o:['FS','SS','FF','SF'],a:3},
{k:'gap',q:'Waiting time between activities, such as concrete curing, is a ___.',a:'lag'},
{k:'mcq',q:'Paths: A-D = 15 days, B-E-D = 25, C-F = 35. The critical path is…',o:['A-D','B-E-D','C-F','None'],a:2},
{k:'tf',q:'The critical path is the shortest path through the network.',a:false,w:'It is the longest path, giving the shortest possible project duration.'},
{k:'mcq',q:'Which estimating technique is most accurate but slowest?',o:['Analogous','Parametric','Bottom-up','Three-point'],a:2},
{k:'mcq',q:'Overlapping activities normally done in sequence is…',o:['Crashing','Fast tracking','Resource levelling','Rolling wave'],a:1},
{k:'mcq',q:'Crashing mainly increases…',o:['Risk','Cost','Scope','Float'],a:1},
{k:'gap',q:'Planning near-term work in detail and later work at a higher level is ___ wave planning.',a:'rolling'},
{k:'mcq',q:'Main output of Sequence Activities?',o:['Activity list','Project schedule network diagram','Schedule baseline','Duration estimates'],a:1},
{k:'mcq',q:'Which is a Control Schedule tool?',o:['Iteration burndown chart','Decomposition','Rolling wave planning','Benchmarking'],a:0}
]
}
};
