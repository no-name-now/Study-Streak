module.exports = {
t11: {
cards: [
{h:'Quality outputs defined',b:`<ul><li><b>Test and evaluation documents</b> (Manage Quality): describe the activities used to check whether the product meets the quality objectives.</li><li><b>Quality control measurements</b> (Control Quality): the documented results of QC activities.</li><li><b>WPI</b> (Control Quality): requirements fulfilment, causes of rejection, rework needed, verified deliverables, need for process adjustments.</li></ul><p>Manage Quality uses <b>QC data</b> to report the overall quality status to stakeholders.</p>`},
{h:'Quality tools by process (slides)',b:`<table><tr><th>Process</th><th>Extra T&T on the slides</th></tr><tr><td>Plan Quality</td><td>Benchmarking, cost-benefit, cost of quality, MCDA, <b>flowcharts</b>, <b>matrix diagrams</b>, mind mapping, <b>test and inspection planning</b></td></tr><tr><td>Manage Quality</td><td>Checklists, document and process analysis, root cause analysis, affinity and <b>cause-and-effect</b> diagrams, flowcharts, <b>audits</b>, <b>problem solving</b>, quality improvement methods</td></tr><tr><td>Control Quality</td><td>Checklists, check sheets, <b>statistical sampling</b>, questionnaires, performance reviews, inspection, testing, <b>control charts</b>, <b>histograms</b>, <b>scatter diagrams</b></td></tr></table>`},
{h:'Cost of quality: the slide definitions',b:`<ul><li><b>Prevention</b>: preventing poor quality in the project's products or services.</li><li><b>Appraisal</b>: evaluating, measuring, <b>auditing</b> and testing them.</li><li><b>Failure</b> (internal or external): non-conformance to stakeholder needs or expectations.</li></ul><p>More fishbone causes on the slide: <b>improper handling</b> and <b>delay in arrival</b> (material), <b>suboptimal manufacturing methods</b> (process).</p><p>Benchmarking also provides a <b>basis for measuring performance</b>.</p>`},
{h:'Quality: the conclusion slide',b:`<ol><li>Quality management applies to <b>all</b> projects, whatever the deliverables.</li><li>Quality measures and techniques are <b>specific to the type of deliverable</b>.</li></ol><p>In DMAIC Analyse, data is used to establish <b>cause and effect</b> and find the root cause of the defect.</p>`}
],
recall: [
['What are test and evaluation documents?','Documents describing the activities used to determine whether the product meets the quality objectives in the quality plan (output of Manage Quality).'],
['What are quality control measurements?','The documented results of Control Quality activities.'],
['Name three data representation tools in Control Quality.','Cause-and-effect diagrams, control charts, histograms, scatter diagrams (any three).'],
['Which process uses audits?','Manage Quality.'],
['Define appraisal costs.','Costs of evaluating, measuring, auditing and testing the project\'s products, deliverables or services.'],
['Two points from the quality conclusion slide.','Quality management applies to all projects; quality measures are specific to the type of deliverable.']
],
quiz: [
{k:'mcq',q:'Quality (PMBOK) is the degree to which a set of inherent characteristics…',o:['Exceeds expectations','Fulfils requirements','Uses premium materials','Satisfies the PM'],a:1},
{k:'mcq',q:'Manage Quality belongs to which process group?',o:['Planning','Executing','Monitoring and Controlling','Closing'],a:1},
{k:'mcq',q:'Which process produces verified deliverables?',o:['Manage Quality','Control Quality','Validate Scope','Plan Quality'],a:1},
{k:'tf',q:'Change requests are an output of Plan Quality Management.',a:false},
{k:'mcq',q:'Testing is which cost of quality?',o:['Prevention','Appraisal','Internal failure','External failure'],a:1},
{k:'mcq',q:'Warranty work is…',o:['Prevention','Appraisal','Internal failure','External failure'],a:3},
{k:'mcq',q:'Rework found by the team before delivery is…',o:['Appraisal','Internal failure','External failure','Prevention'],a:1},
{k:'mcq',q:'Which chart shows the most frequent defects by category?',o:['Fishbone','Pareto','Control chart','Scatter diagram'],a:1},
{k:'gap',q:'Six Sigma quality means fewer than 3.4 defects per ___ opportunities.',a:'million'},
{k:'gap',q:'DMAIC: Define, Measure, Analyse, Improve, ___.',a:'control'},
{k:'mcq',q:'The fishbone diagram is also called…',o:['Pareto chart','Ishikawa diagram','Control chart','Affinity diagram'],a:1},
{k:'mcq',q:'Which is a Control Quality tool?',o:['Statistical sampling','Audits','Benchmarking','Test and inspection planning'],a:0},
{k:'tf',q:'Training staff is a cost of conformance.',a:true,w:'Training is a prevention cost.'}
]
}
};
module.exports.calc = [
{t:'CPM',q:'Paths: A(5)→D(10); B(8)→E(7)→D(10); C(15)→F(20). Project duration in days?',ans:35,tol:0.01,sol:'A-D = 15; B-E-D = 25; C-F = <b>35</b> (critical path).'},
{t:'EMV',abs:true,q:'Lecture: in-house costs ₦4m, 30% chance of a ₦20m late penalty. EMV in ₦m? (sign optional)',ans:-10,tol:0.01,sol:'0.3 × (−24) + 0.7 × (−4) = −7.2 − 2.8 = <b>−₦10m</b>.'},
{t:'EMV',abs:true,q:'Lecture: outsource costs ₦8m, 5% chance of the ₦20m penalty. EMV in ₦m? (sign optional)',ans:-9,tol:0.01,sol:'0.05 × (−28) + 0.95 × (−8) = −1.4 − 7.6 = <b>−₦9m</b>. Lower expected cost, so outsource.'},
{t:'PERT',q:'Lecture school project: B purchase items, O = 3, M = 4, P = 6. Expected time (1 decimal)?',ans:4.2,tol:0.05,sol:'(3 + 16 + 6) ÷ 6 = 25 ÷ 6 = <b>4.2</b> days.'}
];
