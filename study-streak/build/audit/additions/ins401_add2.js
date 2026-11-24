module.exports = {
t3: {
cards: [
{h:'Process and process group: definitions',b:`<div class="def"><b>PM processes</b>A series of PM activities executed while managing the project life cycle. Each produces one or more outputs from one or more inputs using tools and techniques.</div><div class="def"><b>Process group</b>A logical grouping of PM processes to achieve specific project objectives. PMBOK has five.</div><p>Initiating = obtain <b>authorisation</b> to start a project or phase. Planning = establish scope, refine objectives, define the course of action. Executing = complete the work in the plan. M&C = track, review, regulate, and initiate changes. Closing = formally close the project, phase or contract.</p>`},
{h:'Processes in each group (slide lists)',b:`<p><b>Planning:</b> develop PM plan · collect requirements · define scope · create WBS · define activities · develop schedule · determine budget · plan resource management · identify risks · plan risk responses · plan stakeholder engagement · plan quality · plan communications · plan procurements.</p><p><b>Executing:</b> direct and manage project work · <b>manage project knowledge</b> · manage quality · acquire resources · develop team · manage team · conduct procurements · <b>implement risk responses</b> · manage communications · manage stakeholder engagement.</p><p><b>M&C:</b> monitor and control project work · perform integrated change control · validate scope · control scope, schedule, quality, resources, costs, procurements · monitor communications, risks, stakeholder engagement.</p><div class="trap">Slido: "Identify stakeholders is a planning process." False: it is Initiating.</div>`},
{h:'More techniques from the slides',b:`<table><tr><th>Technique</th><th>Meaning</th></tr><tr><td>Expert judgement</td><td>Judgement based on expertise in an area, discipline or industry</td></tr><tr><td>Data gathering</td><td>Collect data, e.g. <b>brainstorming, focus groups, interviews</b></td></tr><tr><td>Decision making</td><td>Choose among alternatives, e.g. <b>voting</b></td></tr><tr><td>Critical path method</td><td>Minimum duration and schedule flexibility</td></tr><tr><td>Decision tree analysis</td><td>Evaluate a chain of options under uncertainty</td></tr><tr><td>Resource optimisation</td><td>Adjust dates to balance resource demand and supply</td></tr><tr><td>Interpersonal and team skills</td><td>Build and keep relationships</td></tr></table><div class="trap">Slido: "Interview is a tool." False: interviewing is a data-gathering <b>technique</b>.</div>`},
{h:'PMIS',b:`<div class="def"><b>Project management information system (PMIS)</b>An information system of tools and techniques used to gather, integrate and disseminate the outputs of PM processes.</div><p>Examples: scheduling software, work authorisation systems, configuration management systems, interfaces to corporate knowledge repositories.</p><p>Conclusion slide: tools and techniques should be <b>tailored</b> to each process.</p>`},
{h:'ITTO examples: charter and PM plan',b:`<table><tr><th></th><th>Develop Project Charter (Initiating)</th><th>Develop PM Plan (Planning)</th></tr><tr><td>Inputs</td><td>Business documents (<b>business case</b>), agreements, EEFs, OPAs</td><td><b>Project charter</b>, outputs of other processes, EEFs, OPAs</td></tr><tr><td>T&T</td><td>Expert judgement, data gathering, interpersonal skills (conflict management, facilitation, meeting management), meetings</td><td>Same, plus <b>checklists</b></td></tr><tr><td>Outputs</td><td><b>Project charter</b>, <b>assumption log</b></td><td><b>Project management plan</b></td></tr></table>`},
{h:'ITTO examples: M&C and closing',b:`<p><b>Monitor and Control Project Work</b>: input = work performance <b>information</b>; T&T = data analysis (alternative, cost-benefit, earned value, root cause, trend, variance), decision making (voting); outputs = <b>work performance reports</b>, change requests, plan and document updates.</p><p><b>Close Project or Phase</b>: inputs include the charter, <b>accepted deliverables</b>, agreements and procurement documents; outputs = lessons learned register update, <b>final product, service or result transition</b>, <b>final report</b>, OPA updates.</p>`}
],
recall: [
['Define a process group.','A logical grouping of PM processes to achieve specific project objectives.'],
['Which group\'s processes obtain authorisation to start a project or phase?','Initiating.'],
['Name three executing processes besides Direct and Manage Project Work.','Manage project knowledge, manage quality, acquire resources, develop team, manage team, conduct procurements, implement risk responses, manage communications, manage stakeholder engagement (any three).'],
['Two outputs of Develop Project Charter.','Project charter and assumption log.'],
['Main input of Develop Project Management Plan.','The project charter.'],
['What does decision tree analysis evaluate?','The implications of a chain of multiple options under uncertainty.'],
['What is resource optimisation?','Adjusting activity start and finish dates to balance resource demand with available supply.'],
['Define PMIS and give two examples.','An information system of tools and techniques that gathers, integrates and disseminates PM process outputs; e.g. scheduling software, work authorisation systems, configuration management systems.'],
['Main output of Monitor and Control Project Work?','Work performance reports (plus change requests).'],
['Name two outputs of Close Project or Phase.','Final report, final product/service/result transition, lessons learned update, OPA updates (any two).']
],
quiz: [
{k:'tf',q:'"Identify stakeholders" is a process within the planning process group.',a:false,w:'It is in the Initiating group.'},
{k:'tf',q:'An interview is a tool that can be used for data gathering.',a:false,w:'Interviewing is a technique; tools are tangible things like templates or software.'},
{k:'mcq',q:'Which is a tool rather than a technique?',o:['Expert judgement','Scheduling software','Inspection','Root cause analysis'],a:1},
{k:'mcq',q:'Which is NOT an output of Direct and Manage Project Work?',o:['Deliverables','Work performance data','Issue log','Assumption log'],a:3},
{k:'mcq',q:'The outputs of Develop Project Charter are the project charter and the…',o:['Issue log','Assumption log','Risk register','WBS'],a:1},
{k:'mcq',q:'Which process produces work performance reports?',o:['Direct and Manage Project Work','Monitor and Control Project Work','Close Project or Phase','Develop Project Charter'],a:1},
{k:'gap',q:'Estimating cost from historical data of a similar project is ___ estimating.',a:'analogous'},
{k:'mcq',q:'Determining the cause and degree of difference between baseline and actual is…',o:['Trend analysis','Variance analysis','Earned value analysis','Decomposition'],a:1},
{k:'mcq',q:'Which group has only one process?',o:['Initiating','Planning','Closing','Executing'],a:2},
{k:'mcq',q:'Which PM tool uses boards, lists and cards based on Kanban?',o:['Jira','Trello','MS Project','Asana'],a:1},
{k:'mcq',q:'"Implement risk responses" belongs to which group?',o:['Planning','Executing','Monitoring and Controlling','Closing'],a:1},
{k:'gap',q:'Dividing scope and deliverables into smaller, manageable parts is called ___.',a:'decomposition'}
]
},
t4: {
cards: [
{h:'Three team processes: definitions',b:`<ul><li><b>Plan Resource Management</b>: defines how to estimate, acquire, manage and use team and physical resources.</li><li><b>Estimate Activity Resources</b>: estimates team resources and the type and quantity of material, equipment and supplies.</li><li><b>Acquire Resources</b>: obtains team members, facilities, equipment, materials and supplies.</li></ul><div class="def"><b>Resource management plan</b>A component of the PM plan describing how resources are acquired, allocated, monitored and controlled.</div>`},
{h:'What goes in a team charter',b:`<p>The team charter documents the team's <b>operating guidelines</b>. It may include:</p><ol><li>Team values</li><li>Communication guidelines</li><li>Decision-making criteria and process</li><li>Conflict resolution process</li><li>Meeting guidelines</li><li>Team agreements</li></ol><div class="hook">V-C-D-C-M-A: Values, Communication, Decisions, Conflict, Meetings, Agreements.</div>`},
{h:'Team process tools and outputs',b:`<table><tr><th>Process</th><th>Key T&T</th><th>Outputs</th></tr><tr><td>Plan Resource Mgmt</td><td>Hierarchical charts, <b>responsibility assignment matrix</b>, text-oriented formats, organisational theory</td><td>Resource mgmt plan, team charter</td></tr><tr><td>Estimate Activity Resources</td><td><b>Bottom-up</b>, analogous, parametric estimating; alternative analysis; PMIS</td><td>Resource requirements, <b>basis of estimates</b>, RBS</td></tr><tr><td>Acquire Resources</td><td>Multicriteria decision analysis, <b>negotiation</b>, <b>pre-assignment</b>, <b>virtual teams</b></td><td>Physical resource assignments, project team assignments, resource calendars, change requests</td></tr></table>`},
{h:'Resource requirements, team assignments, calendars',b:`<p><b>Resource requirements</b>: types and quantities of resources for each work package or activity; can be added up per work package, WBS branch and whole project.</p><p><b>Project team assignments</b>: documents the team, roles and responsibilities (team directory, names in org charts and schedules).</p><p><b>Resource calendar</b>: working days and shifts when each resource is available. Consider <b>time zones</b> and expertise.</p><div class="trap">Slido: resource calendar is both an input and an output of Acquire Resources. True.</div>`},
{h:'Motivation strategies explained',b:`<table><tr><th>Strategy</th><th>Why it works (slides)</th></tr><tr><td>Open communication</td><td>Everyone can speak up and give feedback</td></tr><tr><td>Clear goals and roles</td><td>Removes ambiguity, minimises conflict</td></tr><tr><td>Timely conflict management</td><td>Keeps the team focused</td></tr><tr><td>Build trust</td><td>Everyone respected and trusted</td></tr><tr><td>Lead by example</td><td>PM "walks the talk"</td></tr><tr><td>Collaborative decisions</td><td>Members feel important; ownership</td></tr><tr><td>Celebrate small wins</td><td>Boosts confidence</td></tr><tr><td>Training and tools</td><td>Confidence and performance</td></tr><tr><td>Tailored rewards</td><td>More roles, challenges, gifts, praise</td></tr></table>`},
{h:'Goleman: competences and weaknesses',b:`<table><tr><th>Style</th><th>EI competences</th><th>Weakness</th></tr><tr><td>Commanding</td><td>Drive, initiative, self-control</td><td>Stifles creativity, dependency</td></tr><tr><td>Visionary</td><td>Self-confidence, empathy, change catalyst</td><td>Other good ideas neglected</td></tr><tr><td>Affiliative</td><td>Empathy, relationships, communication</td><td>Low performance, mediocrity</td></tr><tr><td>Democratic</td><td>Collaboration, team leadership, communication</td><td>Slow decisions</td></tr><tr><td>Pacesetting</td><td>Conscientiousness, drive, initiative</td><td>Stress and <b>burnout</b></td></tr><tr><td>Coaching</td><td>Developing others, empathy, self-awareness</td><td>Time-consuming</td></tr></table><p>Commanding also suits a <b>turnaround</b> or <b>problem employees</b>. No style fits every situation: adapt to the team, the project and the culture.</p>`}
],
recall: [
['Define the resource management plan.','A component of the PM plan describing how project resources are acquired, allocated, monitored and controlled.'],
['Name four items in a team charter.','Team values, communication guidelines, decision-making process, conflict resolution process, meeting guidelines, team agreements (any four).'],
['Name the four T&T of Acquire Resources.','Multicriteria decision analysis, negotiation, pre-assignment, virtual teams.'],
['Name three outputs of Estimate Activity Resources.','Resource requirements, basis of estimates, resource breakdown structure.'],
['Define a resource calendar.','A calendar showing the working days and shifts when each resource is available.'],
['Is the resource calendar an input or output of Acquire Resources?','Both.'],
['Weakness of the pacesetting style?','High stress and burnout; use sparingly.'],
['Weakness of the affiliative style?','Too much focus on relationships can lead to low performance and mediocrity.'],
['Weakness of the visionary style?','Over-reliance on the leader\'s vision can neglect other good ideas.']
],
quiz: [
{k:'mcq',q:'The team charter is an output of…',o:['Acquire Resources','Plan Resource Management','Estimate Activity Resources','Develop Team'],a:1},
{k:'tf',q:'The resource calendar is both an input and an output of Acquire Resources.',a:true},
{k:'mcq',q:'A hierarchy of resources by category and type is the…',o:['WBS','RBS','RAM','OBS'],a:1},
{k:'mcq',q:'Acquire Resources is in which process group?',o:['Planning','Executing','Monitoring and Controlling','Initiating'],a:1},
{k:'mcq',q:'Which is a tool/technique of Acquire Resources?',o:['Pre-assignment','Decomposition','Bottom-up estimating','Inspection'],a:0},
{k:'mcq',q:'"Do what I tell you" is which Goleman style?',o:['Pacesetting','Commanding','Coaching','Visionary'],a:1},
{k:'mcq',q:'Best style to build buy-in and consensus?',o:['Democratic','Commanding','Pacesetting','Affiliative'],a:0},
{k:'mcq',q:'Which style risks burnout?',o:['Coaching','Pacesetting','Affiliative','Democratic'],a:1},
{k:'mcq',q:'In which Tuckman stage do members challenge each other\'s roles?',o:['Forming','Storming','Norming','Adjourning'],a:1},
{k:'gap',q:'Tuckman\'s final stage, when the team disbands, is ___.',a:'adjourning'},
{k:'mcq',q:'Which styles suit the forming stage?',o:['Visionary and coaching','Affiliative and commanding','Democratic','Pacesetting'],a:0},
{k:'gap',q:'A responsibility ___ matrix is a data representation technique in Plan Resource Management.',a:'assignment'}
]
}
};
