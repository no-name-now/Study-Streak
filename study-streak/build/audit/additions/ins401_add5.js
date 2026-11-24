module.exports = {
t9: {
cards: [
{h:'Cost ITTO extras',b:`<table><tr><th>Process</th><th>Extras on the slides</th></tr><tr><td>Plan Cost Mgmt</td><td>Expert judgement, <b>alternative analysis</b>, meetings</td></tr><tr><td>Estimate Costs</td><td>Reserve analysis, <b>cost of quality</b>, alternative analysis, voting; inputs include the quality plan, scope baseline, schedule, team assignments, risk register</td></tr><tr><td>Determine Budget</td><td>Cost aggregation, <b>historical information review</b>, <b>funding limit reconciliation</b>, financing; inputs include the <b>business case</b> and <b>benefits management plan</b></td></tr></table>`},
{h:'Resources: the extra slide points',b:`<ul><li><b>Human</b>: the team works collectively toward a <b>shared goal</b>; experts can be brought in as needed.</li><li><b>Financial</b>: funding problems come from <b>poor budgeting, unforeseen expenses or scope changes</b>. Overspending can threaten the project's <b>viability</b>.</li><li><b>Time</b>: accurate estimation helps allocate resources; <b>real-time tracking</b> finds bottlenecks so resources can be reallocated.</li></ul><p>Constrained resources = insufficient personnel, tight deadlines, tight budget. Levelling and smoothing are both <b>resource optimisation</b> techniques.</p>`},
{h:'The smoothing slide constraints',b:`<p>The smoothing diagram on the slide has two constraints:</p><ol><li>Only <b>5</b> people can work on activity A at any time (<b>scarce resource</b>).</li><li>At most <b>6</b> people on the whole project at any time (<b>predefined resource limit</b>).</li></ol><p>A uses 5 a day; B's 2-person days push the total to 7. B has <b>free float</b>, so it is spread at 1 person a day. The total stays at 6 and the end date does not move.</p>`}
],
recall: [
['Name two tools of Determine Budget besides cost aggregation.','Reserve analysis, historical information review, funding limit reconciliation, financing (any two).'],
['Which business documents are inputs to Determine Budget?','The business case and the benefits management plan.'],
['Three causes of funding problems (slides).','Poor budgeting, unforeseen expenses, changes in scope.'],
['What do levelling and smoothing have in common?','Both are resource optimisation techniques for managing resource constraints.'],
['How does real-time tracking help manage time as a resource?','It identifies bottlenecks so resources can be reallocated to keep the project on track.']
],
quiz: [
{k:'mcq',q:'Project budget = cost baseline + …',o:['Contingency reserve','Management reserve','Funding requirements','Control accounts'],a:1},
{k:'mcq',q:'The contingency reserve covers…',o:['Unknown unknowns','Identified risks (known unknowns)','Scope creep only','Inflation only'],a:1},
{k:'tf',q:'The cost baseline includes the management reserve.',a:false,w:'The cost baseline excludes management reserves.'},
{k:'mcq',q:'"Time-phased budget, excluding management reserve" describes the…',o:['Project budget','Cost baseline','Funding requirements','Cost estimate'],a:1},
{k:'mcq',q:'Which technique may change the critical path?',o:['Resource smoothing','Resource levelling','Both','Neither'],a:1},
{k:'mcq',q:'Resource smoothing relies on…',o:['Adding staff','Activity float','Crashing','Extending the end date'],a:1},
{k:'mcq',q:'Main constraint in resource smoothing?',o:['Critical resources','Project duration','Budget','Scope'],a:1},
{k:'gap',q:'Ordering low-quality material may cause a high rate of recalls or ___.',a:'rework'},
{k:'mcq',q:'Which is a tool of Estimate Costs?',o:['Cost of quality','Funding limit reconciliation','Decomposition','Inspection'],a:0},
{k:'mcq',q:'Forecast costs to be paid, derived from the cost baseline, are…',o:['Cost estimates','Project funding requirements','Management reserve','Control accounts'],a:1},
{k:'mcq',q:'Which is NOT one of the four types of project resources?',o:['Human','Physical','Financial','Political'],a:3}
]
},
t10: {
cards: [
{h:'Risk definitions in full',b:`<p>Risks are <b>inherent in all projects</b>, but complexity varies with size and nature.</p><ul><li><b>Plan Risk Management</b> makes the <b>degree, type and visibility</b> of risk management proportionate to the risks and the project's importance.</li><li><b>Risk management plan</b>: describes how risk activities will be structured and performed.</li><li><b>Risk register</b>: a repository of risk process outputs, updated by the other risk processes.</li><li><b>Quantitative analysis</b> quantifies <b>overall risk exposure</b>. Where used, it runs <b>throughout</b> the project.</li><li><b>Implement Risk Responses</b> ensures agreed responses are executed as planned.</li><li><b>Monitor Risks</b> lets decisions use <b>current information</b>; tools include <b>audits</b>.</li></ul>`},
{h:'Risk register: the template rows',b:`<table><tr><th>Risk</th><th>L / I / S</th><th>Owner</th><th>Action</th></tr><tr><td>Delay in critical materials</td><td>M / H / H</td><td>PM</td><td>Avoid a single vendor; late-delivery penalty</td></tr><tr><td>Incomplete design and deliverables</td><td>L / H / H</td><td>PM</td><td>Design review workshop with experts</td></tr><tr><td>Exchange rate depreciation</td><td>M / H / H</td><td>Sponsor</td><td>Contingency reserve; monitor rates</td></tr><tr><td>Scope creep</td><td>L / M / M</td><td>PM</td><td>Strict change control</td></tr><tr><td>Contractor delays</td><td>M / H / H</td><td>PM</td><td>Communicate schedule early; delay penalty in contracts</td></tr></table><p>L = likelihood, I = impact, S = severity.</p>`},
{h:'Decision tree: how to read it',b:`<p>A decision tree helps choose the best of several courses of action. <b>Branches</b> are decisions or events, each with costs and risks.</p><p>Compute the EMV of each option. Choose the <b>lower expected cost</b> or the <b>higher expected benefit</b>.</p><p>Lecture tree: in-house (−₦4m) → delay 30% (−₦24m) or none 70% (−₦4m); outsource (−₦8m) → delay 5% (−₦28m) or none 95% (−₦8m). Each delay outcome adds the ₦20m penalty to the option's cost.</p>`},
{h:'RBS level 2 and P×I matrix',b:`<table><tr><th>Level 1</th><th>Level 2 examples</th></tr><tr><td>Technical</td><td>Scope, requirements, estimates and assumptions, technical processes, technology, interfaces</td></tr><tr><td>Management</td><td>PM, program/portfolio, operations, organisation, resourcing, communication</td></tr><tr><td>Commercial</td><td>Contract terms, internal procurement, suppliers, subcontracts, client stability, partnerships</td></tr><tr><td>External</td><td>Legislation, exchange rates, site, weather, competition, regulatory</td></tr></table><p>An organisation can use a <b>generic</b> RBS or tailor one. The <b>P×I matrix</b> maps each risk's probability and impact on schedule, cost, quality and performance to give a <b>priority level</b>.</p>`},
{h:'Response strategy fine print',b:`<ul><li><b>Avoid</b>: remove the cause of the threat, or remove the tasks that contain it.</li><li><b>Mitigate</b>: also adopt <b>less complex processes</b>; backups and cloud storage reduce data-loss impact.</li><li><b>Accept</b>: suits <b>low-priority</b> threats, or when no other response is possible or cost-effective.</li><li><b>Escalate</b>: to the sponsor, a director or another senior stakeholder.</li></ul><p>Plan Risk Responses also covers <b>strategies for opportunities</b> and for <b>overall project risk</b>, using alternative analysis, cost-benefit analysis and multicriteria decision analysis.</p>`}
],
recall: [
['What does Plan Risk Management make proportionate?','The degree, type and visibility of risk management, proportionate to the risks and the project\'s importance.'],
['Define the risk management plan.','A component of the PM plan describing how risk management activities will be structured and performed.'],
['When is quantitative risk analysis performed, if used?','Throughout the project.'],
['In a decision tree, which option do you choose?','The one with the lower expected cost or higher expected benefit.'],
['Name two level-2 items under commercial risk in the RBS.','Contract terms, internal procurement, suppliers and vendors, subcontracts, client stability, partnerships (any two).'],
['When is risk acceptance suitable?','For low-priority threats, or when no other response is possible or cost-effective.'],
['Name the two tools of Monitor Risks besides meetings.','Data analysis (technical performance analysis, reserve analysis) and audits.'],
['Mitigating action for "delay in critical materials" in the template?','Avoid using one vendor for critical supplies; include a penalty for late delivery.']
],
quiz: [
{k:'mcq',q:'A risk that is already happening is…',o:['A threat','An issue','An opportunity','A residual risk'],a:1},
{k:'mcq',q:'A new technology that lets the project finish early is…',o:['A negative risk','A positive risk (opportunity)','An issue','An assumption'],a:1},
{k:'mcq',q:'Migrating from servers to the cloud risks data loss. Risk type?',o:['Scope','Technical','External','Operational'],a:1},
{k:'mcq',q:'Working during the rainy season is which risk type?',o:['External','Operational','Resource','Schedule'],a:0},
{k:'mcq',q:'Buying insurance for shipped items is…',o:['Avoid','Mitigate','Transfer','Escalate'],a:2},
{k:'mcq',q:'Choosing a proven technology instead of a new one is…',o:['Avoid','Accept','Transfer','Mitigate'],a:0},
{k:'mcq',q:'A threat beyond the PM\'s authority goes to the sponsor. Strategy?',o:['Transfer','Escalate','Accept','Avoid'],a:1},
{k:'gap',q:'Setting aside extra time for weather delays is ___ acceptance.',a:'active'},
{k:'mcq',q:'Which document gives sources of overall project risk and summary information?',o:['Risk register','Risk report','Risk management plan','RBS'],a:1},
{k:'mcq',q:'Which is a quantitative risk analysis tool?',o:['P×I matrix','Sensitivity analysis','Risk categorisation','SWOT'],a:1},
{k:'tf',q:'Quantitative risk analysis is required for every project.',a:false,w:'It is not required for every project.'},
{k:'gap',q:'EMV = probability × ___.',a:'impact'},
{k:'mcq',q:'P = 0.9, I = 0.4. Risk score?',o:['0.36','1.3','0.5','0.04'],a:0},
{k:'mcq',q:'Which is a Level-1 RBS category?',o:['Commercial','Budget','Quality','Testing'],a:0}
]
}
};
