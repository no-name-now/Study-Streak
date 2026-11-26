module.exports = {
  t1: {
    cards: [
      {
        h: 'The Human Body Analogy & The IoT–Edge–Cloud Trifecta',
        b: '<p>Lecture 1 anchors the entire course with the <b>Human Body vs Computing Systems</b> analogy (touching a hot object):</p><table><tr><th>Human Body Part</th><th>Role</th><th>Computing Equivalent</th><th>Trifecta Slogan</th></tr><tr><td><b>Eyes / Skin</b></td><td>Detects physical stimuli</td><td><b>Sensors</b> (IoT perception)</td><td><b>Connect</b> (IoT connects the physical world)</td></tr><tr><td><b>Nervous System</b></td><td>Carries information</td><td><b>Network &amp; Gateways</b></td><td>Bridges local devices to edge/cloud</td></tr><tr><td><b>Local Reflexes</b></td><td>Immediate local reaction (jerks hand away)</td><td><b>Edge Computing</b></td><td><b>Respond</b> (processes close to the physical world)</td></tr><tr><td><b>Central Brain</b></td><td>Complex thought &amp; long-term memory</td><td><b>Cloud Infrastructure</b></td><td><b>Scale</b> (large-scale compute, storage, analytics)</td></tr></table><p><b>Slide formula:</b> <code>Physical things + Sensors + Connectivity + Data + Action = IoT</code></p>'
      },
      {
        h: 'What Makes Something IoT? & The 5 Key Characteristics',
        b: '<p><b>Traditional Thermometer vs IoT Temperature Sensor (Slide 8):</b></p><ul><li><b>Traditional:</b> <code>Temperature &rarr; Display &rarr; Human reads it</code></li><li><b>IoT Sensor:</b> <code>Temperature &rarr; Sensor &rarr; Processing &rarr; Network &rarr; Edge/Cloud &rarr; Application &rarr; Action</code> (collects, transmits, processes, triggers actions, and talks to other systems automatically).</li></ul><p><b>Five Key Characteristics of IoT (Slide 9):</b></p><ol><li><b>Interconnectivity:</b> Devices communicate with one another and with other systems over networks.</li><li><b>Dynamic Nature:</b> Device states (sleeping/awake, connected/disconnected) and environments change continuously.</li><li><b>Scale:</b> Massive numbers of devices (thousands to millions), creating device-management and data-processing challenges.</li><li><b>Heterogeneity:</b> Devices with different hardware, operating systems, protocols, and capabilities interoperate.</li><li><b>Self-Adapting Behaviour:</b> Systems respond automatically to changing conditions (e.g., turning on a fan when temperature exceeds a threshold).</li></ol>'
      },
      {
        h: 'The 4 Ecosystem Layers & 3 Types of Actuators',
        b: '<p><b>Four Layers of an IoT Ecosystem (Slide 12):</b></p><ol><li><b>Sensors &amp; Actuators:</b> Sensors ("eyes and ears" — temperature, humidity, motion, light, camera, GPS, pressure) detect physical stimuli; Actuators ("muscles" — relays, motors, valves, locks) perform physical actions.</li><li><b>IoT Gateways:</b> Physical device or software acting as a secure bridge between local devices and remote networks/cloud, translating protocols and routing data (e.g., Raspberry Pi, industrial smart router).</li><li><b>Cloud / Server:</b> Centralized historical storage, heavy databases, AI model training, and global analytics.</li><li><b>Applications:</b> User dashboards, mobile apps, automated alert systems, and enterprise decision support.</li></ol><p><b>Three Types of Actuators (Slide 14):</b></p><table><tr><th>Actuator Type</th><th>Energy Source</th><th>Mechanism &amp; Use Case</th></tr><tr><td><b>Electric</b></td><td>Electrical current</td><td>Drives motors/solenoids for precise, clean movement</td></tr><tr><td><b>Hydraulic</b></td><td>Pressurized liquid</td><td>Lifts or moves heavy industrial loads</td></tr><tr><td><b>Pneumatic</b></td><td>Compressed air</td><td>Operates fast-acting industrial valves and switches</td></tr></table>'
      },
      {
        h: 'Cloud Problems (Latency & Bandwidth), Edge Benefits & Privacy Warning',
        b: '<p><b>Cloud Computing (Slides 18–19):</b> On-demand delivery of compute, storage, databases, networking, and software over the Internet. Advantages: no upfront hardware ownership, rapid vertical/horizontal scaling, high availability. <b>Two limitations for IoT:</b></p><ul><li><b>Latency (Delay):</b> Time between sending data and receiving a response. A self-driving car waiting for <code>Car &rarr; Internet &rarr; Cloud &rarr; Processing &rarr; Internet &rarr; Car &rarr; Brake</code> cannot tolerate multi-second cloud round-trips when milliseconds are critical.</li><li><b>Bandwidth (Pipe Width, measured in bps):</b> Maximum data transfer rate. Thousands of CCTV cameras streaming raw video cause high bandwidth consumption, high costs, network congestion, and unnecessary data transmission.</li></ul><p><b>Three Benefits of Edge Computing (Slides 29–30):</b></p><ol><li><b>Low Latency:</b> <code>Data &rarr; Edge &rarr; Decision</code> locally in milliseconds.</li><li><b>Bandwidth Savings:</b> Filters, summarizes, or compresses locally — e.g., <b><code>Camera produces 100 GB raw data &rarr; Edge &rarr; 2 GB useful information &rarr; Cloud</code></b> (98% reduction!).</li><li><b>Privacy:</b> Keeps sensitive medical, camera, conversation, and location data local. <b style="color:#b91c1c">Slide 30 Warning:</b> <i>"Edge computing does not automatically make a system private or secure. Security and privacy still need to be designed into the system."</i></li></ol>'
      },
      {
        h: 'Debunking the 3 IoT/Edge Architecture Myths (Objective 6)',
        b: '<p>Lecture 1 Objective 6 highlights three common architecture misconceptions:</p><ol><li><b>Myth 1 — "Everything must go to the cloud":</b> False. Time-critical reflex decisions (autonomous braking, machine safety shutoffs) must execute at the edge to avoid network latency and internet outages.</li><li><b>Myth 2 — "Standalone edge systems replace the cloud completely":</b> False. Edge nodes have limited storage and compute; the cloud is still required for long-term historical archiving, fleet-wide dashboards, and heavy AI model training.</li><li><b>Myth 3 — "All raw sensor data must be transmitted":</b> False. Streaming raw high-frequency telemetry wastes bandwidth; edge gateways filter, aggregate, and transmit only anomalies or compact summaries (e.g., 100 GB raw video &rarr; 2 GB events).</li></ol><div class="trap"><b>Additional context:</b> Fog computing (mentioned in our earlier summary card) is an industry term (Cisco) for intermediate local gateway nodes between edge devices and the cloud; on the lecturer\'s Lecture 1 slides, local gateways and local servers are grouped directly under <b>Edge Computing</b>.</div>'
      }
    ],
    recall: [
      {
        q: 'In the Lecture 1 human-body analogy, what do (a) eyes/skin, (b) nervous system, (c) local reflexes, and (d) central brain correspond to?',
        a: '(a) Eyes/skin = Sensors; (b) Nervous system = Network gateways; (c) Local reflexes = Edge computing (immediate local reaction); (d) Central brain = Cloud infrastructure (complex thought and long-term storage).'
      },
      {
        q: 'Write the five-part simple formula for IoT from Lecture 1 Slide 6.',
        a: 'Physical things + Sensors + Connectivity + Data + Action = IoT'
      },
      {
        q: 'Name the five key characteristics of IoT listed in Lecture 1 Slide 9.',
        a: '1) Interconnectivity, 2) Dynamic nature, 3) Scale, 4) Heterogeneity, 5) Self-adapting behaviour.'
      },
      {
        q: 'Distinguish between Electric, Hydraulic, and Pneumatic actuators.',
        a: 'Electric actuators use electrical current to drive motors for precise, clean movement; Hydraulic actuators use pressurized liquid to lift or move heavy loads; Pneumatic actuators use compressed air to operate fast-acting industrial valves and switches.'
      },
      {
        q: 'Define latency versus bandwidth, and state the Lecture 1 camera data-reduction example for edge bandwidth savings.',
        a: 'Latency is the time delay between sending information and receiving a response. Bandwidth is the maximum rate of data transfer over a network (in bps). On Slide 29, a camera produces 100 GB of raw data, the Edge filters/analyzes it, and sends only 2 GB of useful information to the Cloud.'
      },
      {
        q: 'What important caveat does Lecture 1 Slide 30 state about Edge Computing and privacy/security?',
        a: 'Edge computing does NOT automatically make a system private or secure — security and privacy still need to be explicitly designed into the system.'
      }
    ],
    quiz: [
      {
        q: 'In the Lecture 1 human-body analogy, which pair is CORRECT?',
        o: [
          'Nervous system = Cloud infrastructure; Central brain = Network gateways',
          'Local reflexes = Edge computing; Central brain = Cloud infrastructure',
          'Eyes/skin = Actuators; Local reflexes = Sensors',
          'Central brain = Edge computing; Local reflexes = Cloud infrastructure'
        ],
        a: 1,
        e: 'Eyes/skin are sensors, the nervous system is network gateways, local reflexes are edge computing, and the central brain is cloud infrastructure.'
      },
      {
        q: 'A smart home fan automatically turns on whenever the room temperature exceeds 30 °C. Which Lecture 1 IoT characteristic does this directly illustrate?',
        o: [
          'Heterogeneity',
          'Scale',
          'Self-adapting behaviour',
          'Static configuration'
        ],
        a: 2,
        e: 'Slide 9 defines self-adapting behaviour as responding automatically to changing conditions, using the exact example of turning on a fan when temperature exceeds a threshold.'
      },
      {
        q: 'Which type of actuator uses compressed air to operate fast-acting industrial valves and switches?',
        o: [
          'Hydraulic actuator',
          'Pneumatic actuator',
          'Electric actuator',
          'Piezoelectric sensor'
        ],
        a: 1,
        e: 'Pneumatic actuators use compressed air; hydraulic actuators use pressurized liquid; electric actuators use electrical current.'
      },
      {
        q: 'According to Lecture 1 Slide 30, which statement about Edge Computing and privacy is TRUE?',
        o: [
          'Processing data at the edge automatically guarantees full security and privacy.',
          'Local processing reduces the need to send sensitive raw data to the cloud, but edge computing does NOT automatically make a system private or secure.',
          'Edge computing requires sending 100% of raw medical and camera data to the public cloud first.',
          'Privacy can only be achieved by turning off all local gateways.'
        ],
        a: 1,
        e: 'Slide 30 warns that while local processing reduces raw data transmission, edge computing does not automatically make a system private or secure.'
      }
    ],
    theory: [
      {
        q: 'Using the Lecture 1 Human Body Analogy and the "Connect, Respond, Scale" Trifecta, explain why relying solely on Cloud Computing fails for autonomous vehicles and CCTV networks, and show how combining IoT, Edge, and Cloud resolves these limitations.',
        model: '<p><b>Background:</b> An IoT system is an ecosystem modelled on the human body: sensors act as the eyes and skin detecting stimuli, network gateways act as the nervous system carrying signals, edge computing acts as local spinal reflexes reacting immediately, and cloud infrastructure acts as the central brain performing deep analysis and long-term memory storage.</p><p><b>Answer and solution:</b></p><ol><li><b>Why Cloud-Only Fails:</b><ul><li><b>The Latency Problem:</b> Latency is the delay between sending data and receiving a response. In a cloud-only path (<code>Car &rarr; Internet &rarr; Cloud &rarr; Processing &rarr; Internet &rarr; Car &rarr; Brake</code>), wide-area network round-trips take tens or hundreds of milliseconds (or fail entirely during connectivity drops), which is fatal when obstacle braking requires millisecond reflexes.</li><li><b>The Bandwidth Problem:</b> Bandwidth is the maximum data transfer rate (in bps) of a network link. Streaming raw video continuously from thousands of CCTV cameras saturates network links, causes congestion, increases cloud ingestion costs, and transmits redundant footage.</li></ul></li><li><b>The IoT + Edge + Cloud Trifecta ("Connect, Respond, Scale"):</b><ul><li><b>IoT (Connect):</b> Sensors and actuators interface directly with the physical world (<code>Physical things + Sensors + Connectivity + Data + Action = IoT</code>).</li><li><b>Edge (Respond):</b> Computing nodes near the source (vehicle computers, Raspberry Pi gateways, intelligent cameras) process telemetry locally for sub-millisecond decisions, filter out noise (e.g., reducing <b>100 GB of raw camera video to 2 GB of useful event data</b>), and keep sensitive raw data local for privacy.</li><li><b>Cloud (Scale):</b> Centralized data centres store historical summaries, train machine-learning models, and serve global dashboards.</li></ul></li></ol><p><b>Scenario:</b> In a smart campus surveillance and shuttle system at PAU, onboard shuttle computers (Edge) process LiDAR and camera feeds locally to brake within 10 ms if a pedestrian steps onto the road, while campus CCTV edge nodes filter 100 GB of daily video down to 2 GB of anomaly clips before uploading to Azure (Cloud) for monthly security trend analytics.</p><p><b>How they combine:</b> Edge computing does not replace the cloud; rather, local gateways bridge the perception layer and the cloud — executing real-time reflex rules locally while forwarding compressed, high-value telemetry upstream when bandwidth allows.</p><p><b>Conclusion:</b> Combining IoT to connect devices, Edge to respond with low latency and 98% bandwidth savings, and Cloud to scale storage and analytics delivers a resilient end-to-end architecture.</p>',
        rubric: [
          'Maps the four human-body parts (eyes/skin, nervous system, reflexes, central brain) to Sensors, Gateways, Edge, and Cloud',
          'Explains both the Latency problem (self-driving car braking path) and Bandwidth problem (CCTV raw video congestion)',
          'Cites the three edge benefits (low latency, 100 GB -> 2 GB bandwidth savings, privacy with the security design caveat) and the Connect-Respond-Scale trifecta'
        ]
      }
    ]
  },
  t2: {
    cards: [
      {
        h: 'Home Automation & Smart Cities: Sensors, Protocols & Slide Facts',
        b: '<table><tr><th>Application</th><th>Sensors / Technologies on Slides</th><th>How It Works &amp; Key Slide Facts</th></tr><tr><td><b>Smart Lighting (Home)</b></td><td>Solid-state lighting (LEDs), IP-enabled lights, occupancy &amp; temperature sensors</td><td>Adapts spectral/temporal light characteristics (intensity, colour) to ambient conditions and human movement; controllable via mobile/web app.</td></tr><tr><td><b>Smart Appliances</b></td><td><b>RFID tags</b> (inside smart refrigerator), smart thermostat, washer/dryer</td><td>Washer notifies when cycle ends; thermostat learns user preferences; fridge tracks items via RFID and alerts when stock is low.</td></tr><tr><td><b>Intrusion Detection</b></td><td><b>PIR (Passive Infrared)</b> sensors, door sensors, security cameras, <b>UPnP</b></td><td>Sends SMS/email alerts with image grab or short video clip; cloud location-aware services alert occupants, security post, or police; UPnP + image processing recognizes intrusions.</td></tr><tr><td><b>Smoke / Gas Detectors</b></td><td><b>Optical, ionization, or air-sampling</b> (smoke); <b>CO &amp; LPG</b> sensors (gas)</td><td>Smart detectors give human-voice alerts stating where the problem is and send SMS/email to the user and fire safety department.</td></tr><tr><td><b>Smart Parking</b></td><td>Per-slot occupancy sensors + local controller</td><td>Local controller aggregates slot status and updates cloud database; drivers check smartphones, tablets, or in-car navigation, reducing traffic congestion.</td></tr><tr><td><b>Smart Road Lighting</b></td><td>Internet-connected adaptive street lights</td><td>Slide states road lighting accounts for <b>19% of global electricity use and ~6% of global greenhouse gas emissions</b>. Supports custom schedules for foggy days or festivals and light-to-light sensor communication.</td></tr><tr><td><b>Smart Roads &amp; Structural Health</b></td><td>Road condition nodes; bridge/building <b>vibration sensors</b></td><td>Smart roads warn drivers hundreds of metres or dozens of miles ahead. Structural health monitoring analyses vibration levels to detect cracks, locate damage, and calculate <b>remaining life</b> of bridges/buildings.</td></tr></table><div class="trap"><b>Slide Fact Flag:</b> Lecture 2 Slide 9 states <i>"roading lighting is responsible for 19% of global electricity use and around 6% of global greenhouse gas emissions"</i> (in the original IEA report, 19% is for <i>all</i> lighting globally). In the exam, quote the slide\'s <b>19% / 6%</b> figures while noting the IEA context if asked!</div>'
      },
      {
        h: 'Environment, Retail, Logistics, Agriculture & Health Details',
        b: '<table><tr><th>Domain &amp; App</th><th>Specific Sensors / Tech</th><th>Slide Mechanism &amp; Outcomes</th></tr><tr><td><b>Environment: Air &amp; Noise Pollution</b></td><td>Gaseous &amp; meteorological sensors (<b>CO<sub>2</sub>, CO, NO, NO<sub>2</sub></b>); city noise sensors</td><td>Air quality stations communicate wirelessly with backend server via <b>M2M communication</b>. Noise data is aggregated into <b>urban noise maps</b> for policy makers (noise causes sleep disruption and stress).</td></tr><tr><td><b>Environment: River Floods &amp; Forest Fires</b></td><td><b>Ultrasonic sensors</b> (water level) + <b>flow velocity sensors</b> (flow rate); forest nodes (temp, humidity, light)</td><td>Flood alerts trigger on rapid water-level and flow-rate rise from continuous rainfall. Forest fire nodes enable early detection (causes: lightning, human negligence, volcanic eruptions, rock-fall sparks).</td></tr><tr><td><b>Retail: Inventory &amp; Smart Payment</b></td><td><b>RFID tags &amp; shelf/warehouse readers</b>; <b>NFC + Bluetooth</b></td><td>RFID tracks stock in real time. In contactless smart payment, <b>NFC (low speed) initiates initial pairing</b> by proximity/touch, while <b>actual data transfer takes place over Bluetooth</b>.</td></tr><tr><td><b>Logistics: Fleet &amp; Shipment Monitoring</b></td><td><b>GPS</b> (fleet); container <b>temperature, pressure, humidity</b> sensors + truck positioning</td><td>Fleet tracking detects route deviations and supply-chain bottlenecks. Shipment monitoring tracks fresh food with a limited time budget and <b>dynamically re-routes trucks to closer destinations</b> before spoilage occurs.</td></tr><tr><td><b>Agriculture &amp; Health</b></td><td>Greenhouse (temp, humidity, soil moisture, light, <b>CO<sub>2</sub></b> + valves &amp; fan switches); Wearables (<b>Google Glass, Moto 360</b>, Android smartwatches)</td><td>Smart irrigation releases pipe water only when soil moisture drops below a threshold. Wearables monitor heart rate, calories burnt, and run mobile OS apps.</td></tr></table>'
      },
      {
        h: 'End-to-End Assignment Architecture Blueprint (Flood, Cold-Chain, Greenhouse)',
        b: '<p>The PAU CSC418 Coursework Assignment requires designing a 4-layer end-to-end pipeline (<b>Perception &rarr; Edge/Gateway &rarr; Network Protocol &rarr; Cloud Backend/Dashboard</b>) with explicit sensors, actuators, and thresholds:</p><table><tr><th>Scenario</th><th>Sensors &amp; Thresholds</th><th>Edge Action &amp; Actuators</th><th>Network &amp; Cloud Layer</th></tr><tr><td><b>A: River Flood Early Warning</b></td><td>Ultrasonic sensor (water level &gt; 3.5 m critical offset) + flow velocity sensor (&gt; 2.5 m/s rise rate)</td><td>ESP32/STM32 node triggers local siren/strobe beacon &amp; closes floodgate actuator within milliseconds</td><td>LoRaWAN / Cellular + <b>MQTT</b> publish to cloud broker &rarr; SMS/dashboard alert to residents &amp; emergency services</td></tr><tr><td><b>B: Cold-Chain Food Shipment</b></td><td>Container temperature (&gt; 4 °C ceiling for dairy/meat), humidity (&gt; 85%), pressure + GPS</td><td>In-truck edge gateway activates backup compressor relay &amp; sounds cab buzzer immediately</td><td>4G/5G cellular + <b>MQTT/CoAP</b> to cloud &rarr; calculates remaining shelf-life budget &amp; re-routes truck to nearest depot</td></tr><tr><td><b>C: Automated Greenhouse &amp; Irrigation</b></td><td>Soil moisture (&lt; 25% VWC threshold), air temp (&gt; 32 °C), humidity, light, CO<sub>2</sub> (&lt; 400 ppm)</td><td>ESP32 edge controller opens solenoid water valve when moisture &lt; 25% and switches exhaust fans on when temp &gt; 32 °C</td><td>Wi-Fi/LoRa + <b>MQTT</b> to cloud server &rarr; correlates yield productivity with micro-climate control strategies</td></tr></table>'
      }
    ],
    recall: [
      {
        q: 'In Lecture 2 river flood detection, which exact sensor measures water level and which measures flow rate?',
        a: 'Ultrasonic sensors measure water level, and flow velocity sensors measure flow rate.'
      },
      {
        q: 'In Lecture 2 smart payment systems, how do NFC and Bluetooth work together when a customer taps their smartphone?',
        a: 'NFC (which operates at very short range and low speeds) initiates the initial pairing of the devices, while the actual higher-speed data transfer takes place over Bluetooth.'
      },
      {
        q: 'What are the three smoke-detection techniques and two harmful gases named on Lecture 2 Slide 7?',
        a: 'Smoke detectors use optical detection, ionization, or air-sampling techniques. Gas detectors monitor carbon monoxide (CO) and liquid petroleum gas (LPG).'
      },
      {
        q: 'What percentage of global electricity use and greenhouse gas emissions does Lecture 2 Slide 9 attribute to road lighting, and what is the real-world source nuance?',
        a: 'Slide 9 states road lighting accounts for 19% of global electricity use and around 6% of global greenhouse gas emissions (in the underlying IEA report, 19% refers to all lighting globally).'
      },
      {
        q: 'What four gases are monitored in Lecture 2 air pollution monitoring, and what technology do the distributed stations use to talk to the backend server?',
        a: 'CO2, CO, NO, and NO2 (using gaseous and meteorological sensors), communicating wirelessly with the backend server via Machine-to-Machine (M2M) communication.'
      },
      {
        q: 'What five parameters are sensed inside an automated IoT greenhouse on Lecture 2 Slide 21, and which two actuators control the climate?',
        a: 'Sensed parameters: temperature, humidity, soil moisture, light, and carbon dioxide (CO2) levels. Actuators: valves for releasing water and switches for controlling fans.'
      }
    ],
    quiz: [
      {
        q: 'In an IoT river flood detection system (Lecture 2 Slide 15), which pair of sensors is used to monitor water level and flow rate respectively?',
        o: [
          'PIR sensor and RFID reader',
          'Ultrasonic sensor and flow velocity sensor',
          'Barometric pressure sensor and gyroscope',
          'Optical ionization sensor and thermocouple'
        ],
        a: 1,
        e: 'Slide 15 specifies ultrasonic sensors for water level and flow velocity sensors for water flow rate.'
      },
      {
        q: 'How do NFC and Bluetooth collaborate in a Lecture 2 smart payment system when a customer taps their phone at a point-of-sale terminal?',
        o: [
          'Bluetooth initiates pairing at 10 metres, and NFC transfers the bulk data.',
          'NFC (which offers low speeds) initiates the initial pairing by proximity, while the actual data transfer takes place over Bluetooth.',
          'NFC and Bluetooth are mutually exclusive and cannot be used together.',
          'NFC reads RFID tags on the shelves while Bluetooth controls the warehouse doors.'
        ],
        a: 1,
        e: 'Slide 18 states that NFC (low speed) initiates initial pairing of devices to establish a Bluetooth connection while the actual data transfer takes place over Bluetooth.'
      },
      {
        q: 'In a smart refrigerator (Lecture 2 Slide 5) and retail inventory management (Slide 17), which technology is attached to products to track stock levels automatically?',
        o: [
          'PIR (Passive Infrared) tags',
          'RFID (Radio Frequency Identification) tags',
          'Ultrasonic transducers',
          'Pneumatic valves'
        ],
        a: 1,
        e: 'Both smart refrigerators (Slide 5) and retail shelves/warehouses (Slide 17) use RFID tags and RFID readers to track items and alert when stock is low.'
      },
      {
        q: 'What is the primary output generated from aggregating city-wide IoT noise pollution sensor data on Lecture 2 Slide 14?',
        o: [
          'Real-time seismic earthquake alerts',
          'Urban noise maps used by policy makers and urban planners to control noise near residential areas, schools, and parks',
          'Automated traffic light switching schedules',
          'Bridge remaining-life calculations'
        ],
        a: 1,
        e: 'Slide 14 states that aggregated noise sensor data is used to generate urban noise maps to help policy makers protect residential areas, schools, and parks from sleep disruption and stress.'
      }
    ],
    theory: [
      {
        q: 'Coursework Assignment Scenario: Design an end-to-end IoT architecture for EITHER (a) a Real-Time River Flood Early Warning System OR (b) Cold-Chain Food Shipment Monitoring. Specify the exact sensors, actuators, operational thresholds, 4-layer data pipeline (Perception -> Edge/Gateway -> Network Protocol -> Cloud/Dashboard), and explain how it outperforms manual monitoring.',
        model: '<p><b>Background:</b> Domain-specific IoT systems transform reactive, error-prone manual inspections into closed-loop, self-adapting infrastructures. Whether protecting urban watercourses from flash floods or preventing perishable food spoilage in transit, every robust deployment follows a four-layer pipeline from physical perception to edge reflex control, network transport, and cloud analytics.</p><p><b>Answer and solution:</b></p><p><b>1. Sensors, Actuators &amp; Operational Thresholds:</b></p><ul><li><b>Option A (River Flood Early Warning):</b><ul><li><b>Sensors:</b> <b>Ultrasonic sensors</b> mounted beneath bridges to measure river water level continuously, paired with <b>flow velocity sensors</b> measuring water speed and rain gauges.</li><li><b>Threshold Parameters:</b> Warning threshold at water level &ge; 2.8 m or flow velocity &ge; 1.8 m/s; critical flood intervention threshold at water level &ge; 3.5 m or rapid rise &gt; 0.5 m within 15 minutes.</li><li><b>Actuators:</b> High-decibel outdoor warning sirens/voice alarms, automated road-barrier gates blocking low-lying bridge approaches, and motorized sluice/floodgate valves.</li></ul></li><li><b>Option B (Cold-Chain Food Shipment Monitoring):</b><ul><li><b>Sensors:</b> Inside the refrigerated container: <b>temperature, humidity, and pressure sensors</b> plus door-open contact switches; on the truck: <b>GPS module</b> for real-time location.</li><li><b>Threshold Parameters:</b> Temperature ceiling &gt; 4.0 °C for chilled produce (or &gt; &minus;15 °C for frozen goods) for more than 10 minutes; relative humidity outside 85%–90%.</li><li><b>Actuators:</b> Secondary refrigeration compressor relay, audible/visual driver cab alarm, and automated vents.</li></ul></li></ul><p><b>2. Four-Layer Architectural Pipeline &amp; Connectivity Protocols:</b></p><ol><li><b>Perception Layer:</b> Sensors sample physical metrics every 10–30 seconds and feed raw electrical/digital readings via I<sup>2</sup>C/UART to the local node.</li><li><b>Edge / Gateway Layer:</b> An <b>ESP32</b> or industrial gateway filters sensor noise, evaluates threshold rules locally in milliseconds, and immediately triggers the local actuator (sounding the flood siren or starting the backup chiller) even if cellular coverage drops.</li><li><b>Network Protocol Layer:</b> Field nodes transmit compact JSON payloads over <b>LoRaWAN</b> or <b>4G/5G cellular</b> links using the lightweight <b>MQTT publish-subscribe</b> protocol (or <b>CoAP over UDP</b>) to a cloud message broker.</li><li><b>Cloud Backend &amp; Application Layer:</b> The cloud ingests telemetry into time-series storage, runs predictive models (calculating flood arrival times or remaining food shelf-life budget to dynamically <b>re-route the food truck to a closer destination</b>), and dispatches SMS/mobile push alerts to authorities, drivers, and distributors.</li></ol><p><b>Scenario:</b> During heavy rainfall in Lagos (or a refrigerator compressor fault on the Sagamu–Benin expressway), manual human inspection would only discover the crisis hours later after floodwaters breach homes or the cargo rots. In our IoT architecture, the edge node reacts within 50 ms of crossing the threshold while MQTT immediately notifies downstream stakeholders.</p><p><b>How they combine:</b> Local edge threshold checks guarantee zero-latency physical protection during internet blackouts, while cloud aggregation correlates multi-node trends (upstream river gauges or fleet traffic bottlenecks) to coordinate city-wide warnings or dynamic supply-chain re-routing.</p><p><b>Conclusion:</b> By uniting specific perception sensors (ultrasonic/flow or temp/humidity/GPS), deterministic edge actuation, lightweight MQTT/LoRaWAN transport, and predictive cloud dashboards, the IoT architecture eliminates human observation delay and prevents catastrophic loss.</p>',
        rubric: [
          'Identifies the exact lecture sensors (ultrasonic + flow velocity for floods; temperature + humidity + pressure + GPS for shipment monitoring)',
          'Specifies concrete numerical threshold limits and at least one physical actuator (siren/floodgate or backup chiller relay/cab alarm)',
          'Traces data across all four layers (Perception -> Edge/Gateway -> Network Protocol such as LoRaWAN/Cellular + MQTT/CoAP -> Cloud/Dashboard)',
          'Explains how automated real-time edge actuation and predictive cloud re-routing/early warning outperform manual inspection'
        ]
      }
    ]
  }
};
