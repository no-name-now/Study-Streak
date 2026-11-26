/* New slides added 26 Nov 2026.
   1. INS 401 t12: "Project Execution, Control and Earned Value Analysis" (Dr Anthony Nwosu, 16 Nov deck).
   2. SEN 418 t8: "Lecture 10 – Arduino Mega Practical: Ultrasonic Sensor" (Lino Isawhe).
   Built only from the slides; anything beyond them is labelled additional context. */
(function(){
const P=window.COURSE_DATA.ins401;
P.topics.push({id:'t12',title:'Project Execution, Control and Earned Value Analysis',
why:'EVA is a sure calculation question: learn the 7 formulas and the slide example.',
cards:[
{h:'Project execution',b:`<p class="def">Performing the activities needed to complete the work defined in the <b>project management plan</b>.</p>
<p>Activities: direct and manage work · manage knowledge · provide deliverables · provide work performance data · acquire resources · develop and manage the team · conduct procurements · implement risk responses · manage communications · manage quality · manage stakeholder engagement.</p>`},
{h:'The 10 executing processes',b:`<ol><li>Direct and manage project work</li><li>Manage project knowledge</li><li>Manage quality</li><li>Acquire resources</li><li>Develop team</li><li>Manage team</li><li>Conduct procurements</li><li>Implement risk responses</li><li>Manage communications</li><li>Manage stakeholder engagement</li></ol>`},
{h:'Direct and Manage Project Work',b:`<p class="def">Leading and performing the work in the plan <b>and implementing approved changes</b> to achieve the objectives.</p>
<p><b>Key outputs:</b> deliverables · work performance data · issue log · change requests · plan updates · document updates.</p>
<ul><li><b>Deliverable:</b> any unique and verifiable product, result or capability required to complete a process, phase or project.</li><li><b>Work performance data:</b> raw data collected during execution and passed to the controlling processes.</li></ul>
<p><b>Tools:</b> expert judgement · PMIS · meetings. <b>Input to note:</b> approved change requests.</p>`},
{h:'Manage Project Knowledge',b:`<p class="def">Using existing knowledge and creating new knowledge to achieve objectives and support organisational learning.</p>
<p><b>Benefit:</b> past knowledge improves this project; this project's knowledge helps future ones.</p>
<p><b>Key output:</b> the <b>lessons learned register</b>, which records knowledge gained during the project for use now and in the lessons learned repository.</p>
<p><b>Tools:</b> expert judgement · knowledge management · information management · interpersonal skills (active listening, facilitation, leadership, networking, political awareness).</p>`},
{h:'Monitoring and control',b:`<p class="def">Tracking, reviewing and reporting overall progress, finding where the plan must change, and starting those changes.</p>
<p>Covers: controlling work · validating scope (formal acceptance of deliverables) · scope, cost and schedule baselines · quality of deliverables · risk responses and new risks.</p>`},
{h:'The 12 monitoring and controlling processes',b:`<ol><li>Monitor and control project work</li><li>Perform integrated change control</li><li>Validate scope</li><li>Control scope</li><li>Control schedule</li><li>Control quality</li><li>Control resources</li><li>Control costs</li><li>Monitor communications</li><li>Control procurements</li><li>Monitor risks</li><li>Monitor stakeholder engagement</li></ol>
<div class="hook">Executing processes say <b>manage/develop/conduct</b>; controlling ones say <b>control/monitor/validate</b>.</div>`},
{h:'Monitor and Control Project Work',b:`<ul><li><b>Monitoring</b> = collecting, measuring and assessing measurements and trends.</li><li><b>Control</b> = deciding corrective or preventive actions or replanning, then following up.</li></ul>
<p>Compares actual performance against the plan. <b>Key output:</b> work performance reports (sent to stakeholders per the communications plan), plus change requests.</p>
<p><b>Data analysis tools:</b> alternatives · cost-benefit · <b>earned value</b> · root cause · trend · variance. Decision making: voting.</p>`},
{h:'Perform Integrated Change Control',b:`<p class="def">Reviewing all change requests; approving and managing changes to deliverables, documents and the plan; communicating the decisions.</p>
<p>Once the project is <b>baselined</b>, every change request goes through it. A change request can be <b>approved, rejected or deferred</b> by the responsible authority (e.g. sponsor).</p>
<p><b>Key output:</b> approved change requests (which go back to Direct and Manage Project Work), plus change log updates.</p>
<div class="trap">Slide quiz: change requests are outputs of Direct and Manage Project Work and Monitor and Control Project Work (and the control processes in general).</div>`},
{h:'Earned value analysis: what it is',b:`<p class="def">A technique for measuring performance against the scope, schedule and cost baselines combined, called the <b>performance measurement baseline</b>.</p>
<p>Shows deviations from that baseline and <b>forecasts</b> completion cost and date.</p>`},
{h:'The terms',b:`<table><tr><th>Term</th><th>Meaning</th></tr>
<tr><td>PV</td><td>Value of work <b>planned</b> to date</td></tr><tr><td>EV</td><td>Value of work <b>actually done</b> to date</td></tr>
<tr><td>AC</td><td>Actual cost of the work done</td></tr><tr><td>BAC</td><td>Budget for the whole project</td></tr>
<tr><td>EAC</td><td>Forecast total cost</td></tr><tr><td>ETC</td><td>Forecast money still needed</td></tr><tr><td>VAC</td><td>Expected over/under budget at the end</td></tr></table>`},
{h:'The formulas',b:`<table><tr><th>Name</th><th>Formula</th><th>Read it</th></tr>
<tr><td>CV</td><td>EV − AC</td><td>− over budget, + under</td></tr><tr><td>SV</td><td>EV − PV</td><td>− behind, + ahead</td></tr>
<tr><td>CPI</td><td>EV / AC</td><td>&gt;1 good, &lt;1 bad</td></tr><tr><td>SPI</td><td>EV / PV</td><td>&gt;1 good, &lt;1 bad</td></tr>
<tr><td>EAC</td><td>BAC / CPI <i>or</i> AC + (BAC − EV)</td><td>forecast total</td></tr><tr><td>ETC</td><td>EAC − AC</td><td>still to spend</td></tr><tr><td>VAC</td><td>BAC − EAC</td><td>− means overrun</td></tr></table>
<div class="hook">Every variance and index starts with <b>EV</b>.</div>`},
{h:'Slide example worked',b:`<p>3 tasks, 1 day each, $2000 each. End of day 2: task 1 done ($2000), task 2 50% ($1200), task 3 not started.</p>
<p>PV = 4000 · EV = 3000 · AC = 3200 · BAC = 6000<br>CV = −200 (over budget) · CPI = 0.938<br>SV = −1000 (behind) · SPI = 0.75<br>EAC = 6000/0.9375 = <b>6400</b> · ETC = 3200 · VAC = −400</p>
<div class="trap">The slide prints EAC $6396, ETC $3196, VAC −$396 because it divided by the rounded CPI 0.938. Exact working gives 6400 / 3200 / −400. Show your CPI and either answer earns the marks.</div>`},
{h:'Common problems in execution',b:`<p>Scope creep · poor communications · unrealistic schedules and budgets · unclear goals · team conflicts · lack of stakeholder alignment · resource limits · weak quality assurance · poor risk management · material supply delays.</p>
<p><b>Conclusion slide:</b> the PM and team own efficient execution and control; robust stakeholder communication is essential throughout.</p>`}
],
recall:[
['Define project execution.','Performing the activities to complete the work defined in the project management plan.'],
['Name the key outputs of Direct and Manage Project Work.','Deliverables, work performance data, issue log, change requests, plan and document updates.'],
['What is a deliverable?','Any unique and verifiable product, result or capability required to complete a process, phase or project.'],
['Key output of Manage Project Knowledge?','The lessons learned register.'],
['Monitoring vs control?','Monitoring collects and assesses measurements and trends; control decides corrective/preventive actions or replanning and follows up.'],
['What happens to a change request in integrated change control?','It is approved, rejected or deferred by the responsible authority, and the decision is communicated.'],
['What is the performance measurement baseline?','Scope, schedule and cost baselines combined; EVA measures against it.'],
['Formulas for CV, SV, CPI, SPI?','CV = EV−AC, SV = EV−PV, CPI = EV/AC, SPI = EV/PV.'],
['Two formulas for EAC?','BAC/CPI, or AC + (BAC − EV).'],
['ETC and VAC?','ETC = EAC − AC; VAC = BAC − EAC.'],
['Name five common problems in project execution.','Scope creep, poor communication, unrealistic schedule/budget, unclear goals, team conflict (also stakeholder misalignment, resource limits, weak QA, poor risk management, supply delays).']
],
quiz:[
{k:'mcq',q:'Which is an EXECUTING process?',o:['Control costs','Validate scope','Manage team','Monitor risks'],a:2},
{k:'mcq',q:'Which is a MONITORING & CONTROLLING process?',o:['Acquire resources','Perform integrated change control','Conduct procurements','Develop team'],a:1},
{k:'mcq',q:'The key output of Manage Project Knowledge is:',o:['Issue log','Lessons learned register','Work performance reports','Risk register'],a:1},
{k:'mcq',q:'Raw data collected during execution and passed to the controlling processes is:',o:['Work performance data','Work performance report','Deliverable','Change log'],a:0},
{k:'mcq',q:'Work performance reports are an output of:',o:['Direct and manage project work','Monitor and control project work','Manage project knowledge','Develop team'],a:1},
{k:'tf',q:'A change request can be approved, rejected or deferred.',a:true},
{k:'tf',q:'Integrated change control is only needed before the project is baselined.',a:false},
{k:'mcq',q:'EVA measures performance against the:',o:['Risk register','Performance measurement baseline','Issue log','Communications plan'],a:1},
{k:'gap',q:'CPI = EV / ____',a:'AC',alt:['actual cost']},
{k:'gap',q:'SV = EV − ____',a:'PV',alt:['planned value']},
{k:'mcq',q:'EV = 3000, AC = 3200. The project is:',o:['Under budget','Over budget','Ahead of schedule','On budget'],a:1},
{k:'mcq',q:'SPI = 0.75 means:',o:['25% under budget','Ahead of schedule','Progressing at 75% of the planned rate','75% complete'],a:2},
{k:'mcq',q:'ETC =',o:['BAC − EAC','EAC − AC','EV − AC','BAC / CPI'],a:1},
{k:'tf',q:'A negative VAC means the project is expected to finish over budget.',a:true},
{k:'mcq',q:'Which is NOT listed on the slides as a common execution problem?',o:['Scope creep','Materials supply delays','Too many lessons learned','Team conflicts'],a:2}
],
theory:[
{q:'A software project has three tasks over three days, $2000 each, done one after the other. At the end of day 2: task 1 complete (spent $2000), task 2 50% complete (spent $1200), task 3 not started. Calculate PV, EV, AC, BAC, CV, CPI, SV, SPI, EAC, ETC and VAC, and interpret.',
pts:['PV 4000, EV 3000, AC 3200, BAC 6000','CV −200 over budget','CPI ≈0.94 <1','SV −1000 behind','SPI 0.75','EAC ≈6400 (BAC/CPI)','ETC ≈3200','VAC ≈−400 overrun','Interpretation and recommendation'],
model:`<p><b>Background.</b> EVA compares planned value, earned value and actual cost against the performance measurement baseline.</p>
<p><b>Answer and solution.</b> PV = 2 days × 2000 = 4000. EV = 2000 + 0.5×2000 = 3000. AC = 2000 + 1200 = 3200. BAC = 6000.<br>CV = 3000 − 3200 = −200 → over budget. CPI = 3000/3200 = 0.94 → spending more per unit of work than planned.<br>SV = 3000 − 4000 = −1000 → behind schedule. SPI = 0.75 → working at 75% of the planned rate.<br>EAC = 6000/0.9375 = 6400 (slide: 6396 using CPI 0.938). ETC = 6400 − 3200 = 3200. VAC = 6000 − 6400 = −400.</p>
<p><b>Scenario.</b> If day 3 runs like days 1–2, the team will finish late and about $400 over.</p>
<p><b>How they combine.</b> CV/CPI speak to cost and SV/SPI to schedule; EAC, ETC and VAC turn them into a forecast that feeds change requests via integrated change control.</p>
<p><b>Conclusion.</b> The project is over budget and behind schedule; the PM should find the root cause of task 2's overspend and consider a corrective change request.</p>`},
{q:'Describe Perform Integrated Change Control and explain how it links execution with monitoring and control.',
pts:['Definition','Applies once baselined; any change affecting a baseline','Approve/reject/defer by authority (sponsor/CCB)','Inputs: change requests, work performance reports, baselines','Output: approved change requests','Approved changes implemented in Direct and Manage Project Work','Communicated; change log updated'],
model:`<p><b>Background.</b> Once scope, schedule and cost are baselined, changes must be controlled.</p>
<p><b>Answer and solution.</b> The process reviews every change request, approves, rejects or defers it through the responsible authority (e.g. sponsor), manages changes to deliverables, documents and the plan, and communicates decisions. Inputs include the change and configuration management plans, the baselines and work performance reports; tools are expert judgement, change control tools, alternatives and cost-benefit analysis, decision making and meetings.</p>
<p><b>Scenario.</b> A client asks for an extra report screen mid-build; the request is assessed for cost and schedule impact before the sponsor decides.</p>
<p><b>How they combine.</b> Execution (Direct and Manage Project Work) and control (Monitor and Control Project Work) raise change requests; this process decides on them; approved changes flow back into execution.</p>
<p><b>Conclusion.</b> It is the gate that keeps the baselines meaningful and prevents scope creep.</p>`},
{q:'Discuss five common problems in project execution and how a project manager can prevent each.',
pts:['Five problems from the slide','A prevention for each','Link to communication (conclusion slide)'],
model:`<p><b>Background.</b> The slide lists ten common problems in execution.</p>
<p><b>Answer and solution.</b> Scope creep → integrated change control. Poor communication → a communications plan and regular status reports. Unrealistic schedule/budget → bottom-up estimates and EVA to catch slippage early. Team conflict → develop and manage team processes. Poor risk management → implement and monitor risk responses. <i>(The prevention measures link to other INS 401 topics.)</i></p>
<p><b>Scenario.</b> A campus app project slips because the client keeps adding features without approval.</p>
<p><b>How they combine.</b> Most problems are caught by monitoring and fixed by control.</p>
<p><b>Conclusion.</b> As the slides conclude, the PM and team own execution and control, and robust stakeholder communication underpins it all.</p>`}
]});
P.calc=(P.calc||[]).concat([
{t:'EVM (slides 16 Nov)',q:'BAC = $6000. PV = $4000, EV = $3000, AC = $3200. Find SPI (2 d.p.).',ans:0.75,tol:0.01,sol:'SPI = EV/PV = 3000/4000 = 0.75 → behind schedule.'},
{t:'EVM (slides 16 Nov)',q:'Same project: find EAC using BAC/CPI (nearest dollar).',ans:6400,tol:5,sol:'CPI = 3000/3200 = 0.9375. EAC = 6000/0.9375 = 6400 (slide shows 6396 using CPI 0.938).'},
{t:'EVM (slides 16 Nov)',q:'Same project: find VAC (nearest dollar).',ans:-400,tol:5,sol:'VAC = BAC − EAC = 6000 − 6400 = −400 → expected overrun.'}
]);

const S=window.COURSE_DATA.sen418;
S.topics.push({id:'t8',title:'Lecture 10: Arduino ultrasonic sensor practical',
why:'Practical code question: wiring, setup/loop and the distance formula.',
cards:[
{h:'How the HC-SR04 works',b:`<p>Like shouting in a room: sound travels, hits an object, returns as an echo. The Arduino times the echo and works out distance.</p>
<table><tr><th>Pin</th><th>Job</th><th>Wire to</th></tr><tr><td>VCC</td><td>Power (5V)</td><td>5V</td></tr><tr><td>TRIG</td><td>Sends the ultrasonic signal</td><td>Pin 12</td></tr><tr><td>ECHO</td><td>Receives the reflection</td><td>Pin 13</td></tr><tr><td>GND</td><td>Ground</td><td>GND</td></tr></table>`},
{h:'Components',b:`<p>Arduino board (deck title says Mega 2560; parts list says Uno) · HC-SR04 · breadboard · 4 jumper wires · USB cable · computer with Arduino IDE.</p><p><b>Goal:</b> object at 10 cm → reading 10 cm; move to 20 cm → reading changes.</p>`},
{h:'Variables and types',b:`<pre>const int echo = 13;
const int trig = 12;
long duration = 0;
float distance = 0;</pre><ul><li><b>long</b>: large whole numbers (time in µs).</li><li><b>float</b>: decimals, e.g. 15.75 cm.</li></ul>`},
{h:'setup() runs once',b:`<pre>pinMode(trig, OUTPUT);
pinMode(echo, INPUT);
Serial.begin(9600);</pre><p>TRIG is OUTPUT (Arduino sends), ECHO is INPUT (Arduino receives). <b>9600</b> is the <b>baud rate</b>, the serial speed to the computer.</p>`},
{h:'loop(): trigger the pulse',b:`<pre>digitalWrite(trig, LOW);  delayMicroseconds(2);
digitalWrite(trig, HIGH); delayMicroseconds(10);
digitalWrite(trig, LOW);</pre><p>LOW 2 µs clears the sensor; HIGH for <b>10 µs</b> makes it fire a sound pulse.</p>`},
{h:'Measure and calculate',b:`<pre>duration = pulseIn(echo, HIGH);
distance = (duration * 0.0343) / 2;</pre><ul><li><code>pulseIn</code> returns how long ECHO stays HIGH, in <b>microseconds</b>.</li><li>×0.0343: speed of sound ≈ 0.0343 cm/µs.</li><li>÷2: sound goes there <b>and back</b>.</li></ul>
<div class="trap">Forgetting the ÷2 doubles every reading.</div>`},
{h:'Display and wait',b:`<pre>Serial.print("Distance: ");
Serial.print(distance);
Serial.println(" cm");
delay(500);</pre><p><code>println</code> adds a new line. <code>delay(500)</code> = half a second between readings so the Serial Monitor isn't flooded.</p>`},
{h:'Run it',b:`<ol><li>Save, Verify, Upload.</li><li>Connect by USB.</li><li>Select the board and the COM port.</li><li>Upload and wait.</li><li>Open Serial Monitor at <b>9600</b> baud.</li></ol>`},
{h:'Task: red and green LEDs',b:`<table><tr><th>Distance</th><th>Red (pin 7)</th><th>Green (pin 6)</th></tr><tr><td>≤ 20 cm</td><td>ON</td><td>OFF</td></tr><tr><td>&gt;20 to 40 cm</td><td>OFF</td><td>ON</td></tr><tr><td>&gt; 40 cm</td><td>OFF</td><td>OFF</td></tr></table>
<p>Long leg = <b>anode (+)</b> to the pin; short leg = <b>cathode (−)</b> through a <b>220 Ω</b> resistor to the GND rail. Both share a common ground.</p>
<pre>if (distance &lt;= 20) { red HIGH; green LOW; }
else if (distance &lt;= 40) { red LOW; green HIGH; }
else { both LOW; }</pre><p>Also add <code>pinMode(redLED, OUTPUT); pinMode(greenLED, OUTPUT);</code> in setup().</p>`}
],
recall:[
['Name the four HC-SR04 pins and their jobs.','VCC power 5V, TRIG sends the signal, ECHO receives the reflection, GND ground.'],
['Which pins were TRIG and ECHO wired to?','TRIG pin 12, ECHO pin 13.'],
['Why is TRIG OUTPUT and ECHO INPUT?','The Arduino sends the trigger signal and receives the echo.'],
['What does Serial.begin(9600) do?','Opens serial communication with the computer at 9600 baud.'],
['How long is the trigger pulse?','HIGH for 10 microseconds (after 2 µs LOW).'],
['What does pulseIn(echo, HIGH) return?','How long ECHO stays HIGH, in microseconds.'],
['Distance formula and why ÷2?','distance = duration × 0.0343 / 2; the sound travels to the object and back.'],
['Why long for duration and float for distance?','long holds large whole numbers; float holds decimals.'],
['LED rules in the task?','≤20 cm red on; 20–40 cm green on; >40 cm both off.'],
['How is each LED wired?','Pin to long leg (anode); short leg (cathode) through 220 Ω to GND.']
],
quiz:[
{k:'mcq',q:'Which HC-SR04 pin receives the reflected signal?',o:['VCC','TRIG','ECHO','GND'],a:2},
{k:'mcq',q:'In the practical, TRIG was connected to:',o:['Pin 13','Pin 12','Pin 7','5V'],a:1},
{k:'tf',q:'ECHO is configured as OUTPUT.',a:false},
{k:'gap',q:'Serial.begin(9600): 9600 is the ____ rate.',a:'baud'},
{k:'mcq',q:'The trigger pulse is held HIGH for:',o:['2 µs','10 µs','500 ms','9600 µs'],a:1},
{k:'mcq',q:'pulseIn() measures time in:',o:['Seconds','Milliseconds','Microseconds','Clock cycles'],a:2},
{k:'mcq',q:'Why divide by 2 in the distance formula?',o:['To convert to cm','The sound travels there and back','To average two readings','The sensor has two pins'],a:1},
{k:'gap',q:'Speed of sound used in the code ≈ ____ cm per microsecond.',a:'0.0343'},
{k:'mcq',q:'duration = 1166 µs. Distance ≈',o:['40 cm','20 cm','10 cm','80 cm'],a:1},
{k:'tf',q:'setup() runs repeatedly; loop() runs once.',a:false},
{k:'mcq',q:'delay(500) waits:',o:['500 µs','Half a second','5 seconds','500 seconds'],a:1},
{k:'mcq',q:'Distance 30 cm. Which LED is on?',o:['Red only','Green only','Both','Neither'],a:1},
{k:'mcq',q:'The LED\'s longer leg is the:',o:['Cathode (−)','Anode (+)','Ground','Resistor'],a:1},
{k:'mcq',q:'Resistor value used with each LED:',o:['10 Ω','220 Ω','10 kΩ','1 MΩ'],a:1}
],
theory:[
{q:'Explain, step by step, how an Arduino with an HC-SR04 measures and displays distance. Include the wiring, setup(), the trigger, the measurement and the formula.',
pts:['Echo principle','Wiring VCC/TRIG12/ECHO13/GND','long vs float','setup: pinMode, Serial.begin 9600 baud','Trigger LOW 2µs, HIGH 10µs, LOW','pulseIn µs','distance = d×0.0343/2 with reasons','Serial print + delay(500)'],
model:`<p><b>Background.</b> An ultrasonic sensor works like an echo: it sends sound and times the reflection.</p>
<p><b>Answer and solution.</b> Wire VCC→5V, TRIG→pin 12, ECHO→pin 13, GND→GND. Declare <code>long duration</code> and <code>float distance</code>. In <code>setup()</code> (runs once) set TRIG as OUTPUT, ECHO as INPUT and start serial at 9600 baud. In <code>loop()</code>: TRIG LOW 2 µs, HIGH 10 µs, LOW, which fires a pulse. <code>pulseIn(echo, HIGH)</code> returns the round-trip time in µs. Distance = duration × 0.0343 ÷ 2 (speed of sound in cm/µs, halved because the sound goes there and back). Print with Serial.print/println, then delay(500).</p>
<p><b>Scenario.</b> An echo of 1166 µs gives 1166 × 0.0343 / 2 ≈ 20 cm.</p>
<p><b>How they combine.</b> Hardware wiring, pin modes and timing functions together turn a time measurement into a distance.</p>
<p><b>Conclusion.</b> The key ideas are the 10 µs trigger, pulseIn timing and the ÷2 in the formula.</p>`},
{q:'Extend the distance sensor with a red LED (pin 7) and a green LED (pin 6): red on at 20 cm or less, green on above 20 cm up to 40 cm, both off above 40 cm. Describe the wiring and write the extra code.',
pts:['Anode to pin, cathode via 220 Ω to GND rail','Common ground','pinMode OUTPUT for both','if/else if/else with ≤20 and ≤40','digitalWrite HIGH/LOW correctly'],
model:`<p><b>Background.</b> The sensor reading can drive outputs, turning a measurement into a warning system.</p>
<p><b>Answer and solution.</b> Each LED's long leg (anode) goes to its pin (red 7, green 6); the short leg (cathode) goes through its own 220 Ω resistor to the breadboard GND rail, which is linked to Arduino GND.</p>
<pre>const int redLED = 7, greenLED = 6;
// setup(): pinMode(redLED, OUTPUT); pinMode(greenLED, OUTPUT);
// loop(), after computing distance:
if (distance &lt;= 20) { digitalWrite(redLED, HIGH); digitalWrite(greenLED, LOW); }
else if (distance &lt;= 40) { digitalWrite(redLED, LOW); digitalWrite(greenLED, HIGH); }
else { digitalWrite(redLED, LOW); digitalWrite(greenLED, LOW); }</pre>
<p><b>Scenario.</b> A parking aid: green as the car approaches, red when too close.</p>
<p><b>How they combine.</b> Input (sensor) → processing (if/else) → output (LEDs) is the basic IoT sense-decide-act loop.</p>
<p><b>Conclusion.</b> The resistors protect the LEDs, and the order of conditions makes the ranges exclusive.</p>`}
]});
})();
