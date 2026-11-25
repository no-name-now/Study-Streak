/* SEN 418 addition (25 Nov 2026): gap topic for Lectures 5–7.
   ADDITIONAL CONTEXT. The folder has decks for Lectures 1–4, 8 and 9 only, and neither study
   guide names Lectures 5–7. This topic covers what sits between "embedded systems" (L4) and
   "cloud provisioning" (L8) in a standard IoT & Edge course: edge/fog tiers, the IoT data
   pipeline, IoT cloud platforms, and IoT security. Sources: OWASP IoT Top 10 (2018), Microsoft
   Azure IoT Hub docs, NIST IoT guidance. Replace when the real decks are shared. */
(function(){
const D=window.COURSE_DATA.sen418;
const NOTE='<div class="trap">Additional context. Lectures 5–7 were not in your folder, so their real titles are unknown. This topic fills the most likely gap between embedded systems (L4) and Azure provisioning (L8). Check with classmates what L5–7 covered.</div>';
D.topics.push({id:'t7',title:'Lectures 5–7 gap fill: edge/fog tiers, IoT data and security',
why:'Bridges Lecture 4 (the device) and Lecture 8 (the cloud): where processing happens, how data flows, and how to secure it. Scenario questions about edge vs cloud lean on all three.',
cards:[
{h:'Three tiers of processing',b:NOTE+`<div class="flow"><span>Device edge (sensor + MCU)</span><em>→</em><span>Fog / gateway (local server, Raspberry Pi)</span><em>→</em><span>Cloud (Azure)</span></div>
<table><tr><th>Tier</th><th>Latency</th><th>Compute</th><th>Typical job</th></tr>
<tr><td>Device edge</td><td>Microseconds–ms</td><td>Tiny</td><td>Read sensor, threshold trigger, actuate</td></tr>
<tr><td>Fog / gateway</td><td>Milliseconds</td><td>Medium</td><td>Aggregate many devices, filter, local AI, protocol translation</td></tr>
<tr><td>Cloud</td><td>100 ms+</td><td>Huge</td><td>Long-term storage, dashboards, model training, fleet management</td></tr></table>
<div class="hook">Respond at the edge, combine at the fog, scale in the cloud (Lecture 1's trifecta).</div>`},
{h:'Fog computing and MEC',b:`<div class="def"><b>Fog computing</b>A layer of compute, storage and networking between devices and the cloud, usually on the local network (Cisco's term).</div>
<div class="def"><b>Multi-access edge computing (MEC)</b>Compute placed inside the mobile operator's network, at the base station, so 4G/5G devices get very low latency.</div>
<div class="trig">“Hundreds of sensors, unreliable internet, need local decisions” → fog/gateway tier.</div>`},
{h:'The IoT data pipeline',b:`<div class="flow"><span>Sense</span><em>→</em><span>Ingest (MQTT broker / IoT Hub)</span><em>→</em><span>Stream processing</span><em>→</em><span>Store (time-series DB)</span><em>→</em><span>Analyse & visualise</span><em>→</em><span>Act</span></div>
<ul><li><b>Ingest:</b> devices publish to a broker; the cloud subscribes.</li><li><b>Stream processing:</b> filter, aggregate and alert in real time (e.g. Azure Stream Analytics).</li><li><b>Time-series storage:</b> data indexed by timestamp.</li><li><b>Act:</b> send a command back to an actuator.</li></ul>`},
{h:'Reduce data at the edge',b:`<p>Sending every raw reading to the cloud wastes bandwidth and money. Edge nodes:</p><ul><li><b>Filter:</b> drop readings that have not changed.</li><li><b>Aggregate:</b> send a 5-minute average, not 300 readings.</li><li><b>Event-only:</b> send only when a threshold is crossed.</li><li><b>Edge AI (TinyML):</b> run a small model on the device and send only the result (“person detected”).</li></ul>
<div class="hook">Move the decision to the data, not the data to the decision.</div>`},
{h:'IoT cloud platforms (Azure IoT Hub)',b:`<ul><li><b>Device identity:</b> each device is registered with its own credentials (keys or X.509 certificate).</li>
<li><b>Device-to-cloud telemetry</b> and <b>cloud-to-device commands</b> over MQTT, AMQP or HTTPS.</li>
<li><b>Device twin:</b> a JSON document in the cloud holding the device's desired and reported settings.</li>
<li><b>Device Provisioning Service (DPS):</b> registers thousands of devices automatically at first boot.</li></ul>
<p>Links to Lecture 8: IoT Hub is one more resource you provision in a resource group.</p>`},
{h:'Why IoT devices get hacked',b:`<p>OWASP IoT Top 10 (2018) starts with:</p><ol><li>Weak, guessable or hard-coded passwords</li><li>Insecure network services</li><li>Insecure ecosystem interfaces (web, API, cloud, mobile)</li><li>Lack of secure update mechanism</li></ol>
<p><b>Case:</b> the Mirai botnet (2016) logged into cameras and routers using factory default passwords and used them to knock major websites offline through an attack on the DNS provider Dyn.</p>`},
{h:'Securing an IoT system, layer by layer',b:`<table><tr><th>Layer</th><th>Control</th></tr>
<tr><td>Device</td><td>Unique credentials, no defaults; secure boot; signed over-the-air (OTA) updates</td></tr>
<tr><td>Network</td><td>Encrypt with TLS (MQTT over TLS, port 8883) or DTLS for CoAP; segment IoT on its own network</td></tr>
<tr><td>Cloud</td><td>Per-device identity and least privilege; monitoring and alerts</td></tr>
<tr><td>Data</td><td>Collect only what is needed; protect personal data (NDPA)</td></tr></table>
<div class="trap">Encryption protects data in transit. It does not fix a default password on the device.</div>`}
],
recall:[
['Three processing tiers in an IoT system?','Device edge, fog/gateway, cloud.'],
['Define fog computing.','A layer of compute, storage and networking between devices and the cloud, usually on the local network.'],
['What is MEC?','Multi-access edge computing: compute inside the mobile operator\'s network near the base station for very low latency.'],
['Stages of the IoT data pipeline?','Sense, ingest, stream processing, store (time-series), analyse/visualise, act.'],
['Four ways to reduce data at the edge?','Filter unchanged readings, aggregate, send events only, run edge AI and send results.'],
['What is a device twin?','A JSON document in Azure IoT Hub holding a device\'s desired and reported settings.'],
['What does Azure DPS do?','Automatically registers (provisions) large numbers of devices to IoT Hub at first boot.'],
['Number one OWASP IoT risk (2018)?','Weak, guessable or hard-coded passwords.'],
['How did Mirai spread?','By logging into IoT devices with factory default passwords.'],
['Secure MQTT port?','8883 (MQTT over TLS).'],
['Name three device-level IoT security controls.','Unique credentials (no defaults), secure boot, signed OTA updates.']
],
quiz:[
{k:'mcq',q:'A farm has 300 soil sensors and patchy internet. Where should irrigation decisions run?',o:['Cloud only','Fog/gateway on the farm','On a user\'s phone','Nowhere: send raw data'],a:1},
{k:'mcq',q:'The number one OWASP IoT Top 10 (2018) risk is…',o:['Insecure updates','Weak, guessable or hard-coded passwords','Lack of physical hardening','Insecure default settings'],a:1},
{k:'tf',q:'Encrypting traffic with TLS protects a device that still uses its factory default password.',a:false,w:'Attackers log in with the default password; encryption in transit does not stop that.'},
{k:'gap',q:'In Azure IoT Hub, the JSON document holding a device\'s desired and reported state is the device ____.',a:'twin'},
{k:'mcq',q:'Which MQTT port is used with TLS?',o:['1883','8883','5683','443 only'],a:1},
{k:'mcq',q:'Running a small ML model on the microcontroller and sending only “person detected” is…',o:['Cloud analytics','Edge AI / TinyML','Data reverse engineering','Polling'],a:1},
{k:'gap',q:'The 2016 botnet that hijacked IoT cameras with default passwords was called ____.',a:'Mirai'},
{k:'mcq',q:'Compute placed in the mobile operator\'s network near the base station is…',o:['Fog computing','MEC','SaaS','Serverless'],a:1},
{k:'tf',q:'Sending a 5-minute average instead of every reading is an edge data-reduction technique.',a:true}
],
theory:[
{q:'A hospital wants IoT patient monitors that alert nurses within one second. Design the edge/fog/cloud architecture and its security.',
 pts:['Latency requirement drives edge/fog placement','Device: wearable sensors + MCU, threshold alert locally','Fog: ward gateway aggregates, runs alert logic, works if internet fails','Cloud (Azure IoT Hub): storage, dashboards, analytics, device management','Protocols: BLE/Wi-Fi to gateway, MQTT over TLS to cloud','Security: unique device identity, no default passwords, signed OTA, network segmentation, NDPA','Conclusion'],
 model:`<p><b>Background.</b> Patient alerts are mission-critical: a cloud round trip and an internet outage are both unacceptable, so processing must sit close to the patient (Lecture 1: edge for respond, cloud for scale).</p>
<p><b>Answer and solution.</b> <b>Device:</b> a wearable with heart-rate and SpO₂ sensors and an ESP32 checks thresholds itself and sends readings over Wi-Fi or BLE. <b>Fog:</b> a gateway per ward collects all monitors, runs the alert rules and sounds the nurses' station in under a second, even if the internet is down. <b>Cloud:</b> the gateway forwards aggregated data over MQTT/TLS (port 8883) to Azure IoT Hub for records, dashboards, trend analytics and device management (device twins, DPS).</p>
<p><b>Scenario.</b> At 2 a.m. a patient's SpO₂ drops below 90%. The wearable flags it, the ward gateway raises the alarm locally in milliseconds, and the cloud logs the event for the doctor's morning review.</p>
<p><b>How they combine.</b> The edge gives speed, the fog gives reliability and local coordination, the cloud gives history and scale. Security runs through every tier: unique device certificates, no default passwords, signed OTA updates, the IoT network separated from guest Wi-Fi, and patient data minimised and protected under the NDPA.</p>
<p><b>Conclusion.</b> Place each decision as close to the patient as its deadline requires, and secure every layer.</p>`}
]});
})();
