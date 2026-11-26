module.exports = {
  t3: {
    cards: [
      {
        h: 'Things in IoT & Link Layer Protocols (802.3, 802.11, 802.16, 802.15.4)',
        b: '<p><b>Four Interfaces of an IoT Device (Slide 2):</b> (i) I/O interfaces for sensors, (ii) interfaces for Internet connectivity, (iii) memory and storage interfaces, and (iv) audio/video interfaces.</p><p><b>Link Layer Protocols (Slides 4–5):</b> Determine how packets are physically coded and signaled over the local medium (copper wire, coaxial cable, optical fiber, or radio wave):</p><table><tr><th>Standard</th><th>Sub-variants &amp; Frequency Bands</th><th>Data Rates</th></tr><tr><td><b>IEEE 802.3 (Ethernet)</b></td><td><code>802.3</code> (10BASE5 coax), <code>802.3i</code> (10BASE-T copper twisted-pair), <code>802.3j</code> (10BASE-F fiber), <code>802.3ae</code> (10 Gbit/s fiber)</td><td><b>10 Mb/s to 40 Gb/s+</b></td></tr><tr><td><b>IEEE 802.11 (Wi-Fi WLAN)</b></td><td><code>802.11a</code> (5 GHz), <code>802.11b/g</code> (2.4 GHz), <code>802.11n</code> (2.4/5 GHz), <code>802.11ac</code> (5 GHz), <code>802.11ad</code> (60 GHz)</td><td><b>1 Mb/s to 6.75 Gb/s</b></td></tr><tr><td><b>IEEE 802.16 (WiMAX)</b></td><td>Wireless broadband; <code>802.16m</code> delivers 100 Mb/s mobile and 1 Gb/s fixed</td><td><b>1.5 Mb/s to 1 Gb/s</b></td></tr><tr><td><b>IEEE 802.15.4 (LR-WPAN)</b></td><td>Low-Rate Wireless Personal Area Networks; foundation for <b>ZigBee</b> &amp; 6LoWPAN; low-cost, low-power</td><td><b>40 Kb/s to 250 Kb/s</b></td></tr></table>'
      },
      {
        h: 'Cellular Link Layer (2G/3G/4G & 5G NR Service Pillars)',
        b: '<ul><li><b>2G / 3G / 4G Mobile Communication (Slide 6):</b><ul><li><b>2G:</b> GSM and CDMA</li><li><b>3G:</b> UMTS and CDMA2000</li><li><b>4G:</b> LTE</li><li><b>Data rates:</b> <b>9.6 Kb/s (2G)</b> up to <b>100 Mb/s (4G)</b>.</li></ul></li><li><b>5G New Radio (5G NR — 3GPP Release 15+):</b><ul><li><b>Frequency Ranges:</b> <b>FR1 (Sub-6 GHz: 410 MHz to 7.125 GHz)</b> for wide-area coverage; <b>FR2 (mmWave: 24.25 GHz to 71 GHz)</b> for high-density, ultra-fast transfers.</li><li><b>Performance:</b> Peak data rates from <b>1 Gbps up to 20 Gbps</b> with latency as low as <b>1 ms</b>.</li><li><b>Three 5G IoT Service Pillars:</b><ol><li><b>eMBB (Enhanced Mobile Broadband):</b> High-bandwidth data/video transfers.</li><li><b>URLLC (Ultra-Reliable Low-Latency Communications):</b> Mission-critical ~1 ms control (autonomous vehicles, robotics, remote surgery).</li><li><b>mMTC (Massive Machine-Type Communications):</b> Connecting up to millions of low-power IoT sensors per square kilometre.</li></ol></li></ul></li></ul>'
      },
      {
        h: 'Network Layer (IPv4, IPv6, 6LoWPAN) & Transport Layer (TCP vs UDP)',
        b: '<p><b>Network / Internet Layer (Slides 8–9):</b> Performs host addressing and packet routing across networks:</p><ul><li><b>IPv4 (RFC 791):</b> 32-bit address scheme = $2^{32} = 4,294,967,296$ addresses; exhausted in <b>2011</b>. Does not guarantee delivery itself.</li><li><b>IPv6 (RFC 2460 on slide; updated by RFC 8200):</b> 128-bit address scheme = $2^{128} \\approx 3.4 \\times 10^{38}$ addresses.</li><li><b>6LoWPAN (IPv6 over Low-power Wireless Personal Area Networks):</b> Operates in the <b>2.4 GHz</b> band at <b>250 Kb/s</b> over <b>IEEE 802.15.4</b> and defines header <b>compression mechanisms</b> so IPv6 datagrams fit tiny low-power devices.</li></ul><p><b>Transport Layer (Slides 10–11):</b> End-to-end message transfer (error control, segmentation, flow control, congestion control):</p><table><tr><th>Feature</th><th>TCP (Transmission Control Protocol)</th><th>UDP (User Datagram Protocol)</th></tr><tr><td>Connection &amp; State</td><td><b>Connection-oriented</b> (handshake) &amp; <b>stateful</b></td><td><b>Connectionless</b> (no setup handshake) &amp; <b>stateless</b> (transaction-oriented)</td></tr><tr><td>Reliability &amp; Ordering</td><td>Guaranteed in-order delivery, duplicate elimination, lost-packet retransmission, flow &amp; congestion control</td><td>No guaranteed delivery, no ordering, no duplicate elimination; minimal overhead</td></tr><tr><td>Used by</td><td>HTTP/HTTPS, WebSocket, MQTT, SMTP, FTP</td><td><b>CoAP</b>, real-time/time-sensitive small IoT payloads</td></tr></table>'
      },
      {
        h: 'Application Layer Protocols: HTTP, CoAP, WebSocket, MQTT, XMPP',
        b: '<table><tr><th>Protocol</th><th>Transport</th><th>Model / Architecture</th><th>Key Slide Facts</th></tr><tr><td><b>HTTP</b></td><td>TCP (Port 80)</td><td>Request–Response (Client–Server, Stateless)</td><td>Commands: <code>GET, PUT, POST, DELETE, HEAD, TRACE, OPTIONS</code>; uses URIs.</td></tr><tr><td><b>CoAP</b> (Constrained Application Protocol)</td><td><b>UDP</b></td><td>Request–Response (Client–Server, Connectionless datagrams)</td><td>Designed for M2M constrained devices/networks; supports <code>GET, PUT, POST, DELETE</code> and easily interfaces with HTTP.</td></tr><tr><td><b>WebSocket</b></td><td>TCP</td><td><b>Exclusive Pair</b> (Full-duplex over a single persistent socket)</td><td>Starts with an <b>HTTP upgrade handshake</b>; once open, streams messages both ways without per-message setup/teardown overhead.</td></tr><tr><td><b>MQTT</b> (Message Queue Telemetry Transport)</td><td>TCP</td><td><b>Publish–Subscribe</b> (Client–Broker)</td><td>Lightweight for low memory/bandwidth; devices publish to <b>topics</b> on an <b>MQTT Broker</b>, which forwards to subscribed clients.</td></tr><tr><td><b>XMPP</b> (Extensible Messaging &amp; Presence Protocol)</td><td>TCP</td><td>Decentralized Client–Server &amp; Server–Server</td><td>Real-time streaming of small <b>XML chunks</b>; powers presence, messaging, chat, gaming, and real-time device-to-device data.</td></tr></table><div class="trap"><b>Additional context:</b> <b>DDS</b> (Data Distribution Service — real-time device-to-device pub-sub middleware) and <b>AMQP</b> (Advanced Message Queuing Protocol — enterprise point-to-point/pub-sub queuing) appear on the Lecture 3 protocol stack diagram.</div>'
      },
      {
        h: 'Logical Design: 6 Functional Blocks, 4 Comm Models & 5 REST Constraints',
        b: '<p><b>Six IoT Functional Blocks (Slides 16–17):</b></p><ol><li><b>Device:</b> Sensing, actuation, monitoring, and direct control hardware.</li><li><b>Communication:</b> Data transfer using network standards and protocols.</li><li><b>Services:</b> Device discovery, real-time monitoring, control pipelines, and data publishing utilities.</li><li><b>Management:</b> Governance features to manage, configure, and maintain the IoT infrastructure.</li><li><b>Security:</b> User authentication, access authorization, message validation, and data encryption.</li><li><b>Application:</b> User interface to monitor status, view analytics, and control devices remotely.</li></ol><p><b>Four Communication Models (Slides 18–19):</b></p><ul><li><b>Request–Response:</b> Client sends request, server fetches resource representation and replies; <b>stateless</b> (each pair is independent).</li><li><b>Publish–Subscribe:</b> Publishers send to <b>topics</b> on a <b>broker</b>; consumers subscribe to topics; publishers are unaware of consumers.</li><li><b>Push–Pull:</b> Producers push data to <b>queues</b> and consumers pull from queues; queues decouple them and act as a <b>buffer when push and pull rates mismatch</b>.</li><li><b>Exclusive Pair:</b> Bidirectional, <b>full-duplex</b>, persistent connection; <b>stateful</b> (server tracks all open connections until client closes).</li></ul><p><b>Five REST Architectural Constraints (Slides 20–22):</b> <b>1. Client–Server</b> (separation of UI vs storage concerns) &middot; <b>2. Stateless</b> (every request carries full info; session state kept entirely on client) &middot; <b>3. Cache-able</b> (responses labelled cacheable/non-cacheable for reuse) &middot; <b>4. Layered System</b> (components cannot see beyond the immediate layer; intermediaries can answer) &middot; <b>5. Uniform Interface</b> (resources identified by URIs, separate from representations; self-descriptive messages).</p>'
      },
      {
        h: 'M2M vs IoT & M2M Area Network Protocols',
        b: '<p><b>Machine-to-Machine (M2M — Slide 26):</b> Networking of machines/devices for remote monitoring, control, and data exchange.</p><ul><li><b>M2M Area Network:</b> Comprises M2M nodes with embedded hardware modules for sensing, actuation, and communication.</li><li><b>M2M Local Protocols:</b> <b>Bluetooth, ModBus, M-Bus, Wireless M-Bus, Power Line Communication (PLC), 6LoWPAN, IEEE 802.15.4</b>.</li><li><b>Key Architectural Difference (Local vs Remote M2M):</b> While <b>M2M area networks</b> typically use <b>proprietary or non-IP based communication protocols</b>, the <b>communication network</b> connecting remote M2M area networks uses wired or wireless <b>IP-based networks</b>.</li></ul>'
      }
    ],
    recall: [
      {
        q: 'Name the four types of interfaces an IoT device may consist of according to Lecture 3 Slide 2.',
        a: '1) I/O interfaces for sensors, 2) Interfaces for Internet connectivity, 3) Memory and storage interfaces, 4) Audio/video interfaces.'
      },
      {
        q: 'State the frequency bands, peak data rates, latency, and three service pillars of 5G NR from Lecture 3 Slide 6.',
        a: 'Frequency ranges: FR1 (Sub-6 GHz: 410 MHz to 7.125 GHz) and FR2 (mmWave: 24.25 GHz to 71 GHz). Peak data rates: 1 Gbps to 20 Gbps; latency as low as 1 ms. Service pillars: eMBB (Enhanced Mobile Broadband), URLLC (Ultra-Reliable Low-Latency Communications), and mMTC (Massive Machine-Type Communications).'
      },
      {
        q: 'Compare IPv4 and IPv6 bit lengths, total address counts, RFC numbers, and the year IPv4 exhausted.',
        a: 'IPv4 (RFC 791) uses 32-bit addresses (2^32 = 4,294,967,296 addresses) and was exhausted in 2011. IPv6 (RFC 2460 on slides) uses 128-bit addresses (2^128 = 3.4 x 10^38 addresses).'
      },
      {
        q: 'How does CoAP differ from HTTP at the transport layer, and why is it suited for M2M applications?',
        a: 'Like HTTP, CoAP uses a request-response model with GET, PUT, POST, and DELETE methods, but CoAP runs over connectionless UDP datagrams instead of TCP, eliminating TCP handshake overhead for constrained devices and networks.'
      },
      {
        q: 'Name the six IoT functional blocks in the logical design of IoT (Lecture 3 Slides 16–17).',
        a: '1) Device, 2) Communication, 3) Services, 4) Management, 5) Security, 6) Application.'
      },
      {
        q: 'What is the difference between the Publish-Subscribe and Push-Pull communication models?',
        a: 'In Publish-Subscribe, publishers send data to topics on a broker, which immediately pushes copies to all subscribed consumers. In Push-Pull, producers push messages into queues and consumers pull them at their own pace, so queues act as a buffer when producer push rates and consumer pull rates differ.'
      },
      {
        q: 'List the five REST architectural constraints on Lecture 3 Slides 20–22.',
        a: '1) Client-Server, 2) Stateless, 3) Cache-able, 4) Layered System, 5) Uniform Interface.'
      },
      {
        q: 'Name five M2M area network protocols from Lecture 3 Slide 26, and explain how the M2M area network differs from the M2M communication network.',
        a: 'Protocols: Bluetooth, ModBus, M-Bus, Wireless M-Bus, Power Line Communication (PLC), 6LoWPAN, IEEE 802.15.4. M2M area networks use proprietary or non-IP protocols locally, whereas the communication network linking remote M2M area networks is IP-based.'
      }
    ],
    quiz: [
      {
        q: 'Which 5G New Radio (5G NR) service pillar is specifically designed for connecting massive densities of low-power IoT sensors?',
        o: [
          'eMBB (Enhanced Mobile Broadband)',
          'URLLC (Ultra-Reliable Low-Latency Communications)',
          'mMTC (Massive Machine-Type Communications)',
          'WiMAX 802.16m'
        ],
        a: 2,
        e: 'mMTC (Massive Machine-Type Communications) targets high-density IoT sensor deployments; URLLC targets ultra-low-latency mission-critical control; eMBB targets high-bandwidth broadband.'
      },
      {
        q: 'Which statement accurately describes CoAP (Constrained Application Protocol)?',
        o: [
          'It is a publish-subscribe protocol that runs over TCP and uses XML streams.',
          'It is a request-response web transfer protocol supporting GET, PUT, POST, and DELETE that runs over connectionless UDP datagrams for constrained M2M environments.',
          'It is a link-layer standard operating at 60 GHz.',
          'It is a stateful full-duplex protocol initiated via an HTTP upgrade handshake.'
        ],
        a: 1,
        e: 'Slide 13 defines CoAP as an application-layer request-response protocol for constrained M2M devices that runs on top of UDP and supports GET, PUT, POST, and DELETE.'
      },
      {
        q: 'In the logical design of IoT (Lecture 3 Slides 16–17), which functional block provides device discovery, real-time monitoring, control pipelines, and data publishing mechanisms?',
        o: [
          'Device',
          'Services',
          'Management',
          'Application'
        ],
        a: 1,
        e: 'Slide 16 states that the Services functional block provides foundational utilities including device discovery, real-time monitoring, control pipelines, and data publishing mechanisms.'
      },
      {
        q: 'Which IoT communication model uses queues to decouple data producers from consumers and acts as a buffer when the producer push rate and consumer pull rate do not match?',
        o: [
          'Request–Response',
          'Publish–Subscribe',
          'Push–Pull',
          'Exclusive Pair'
        ],
        a: 2,
        e: 'Slide 19 explains that in the Push–Pull model, producers push data to queues and consumers pull from queues, buffering rate mismatches.'
      },
      {
        q: 'Which of the following is NOT one of the five REST architectural constraints on Lecture 3 Slides 20–22?',
        o: [
          'Stateless (session state is kept entirely on the client)',
          'Persistent server-side session state (server remembers every open client connection)',
          'Cache-able',
          'Layered System and Uniform Interface'
        ],
        a: 1,
        e: 'REST is strictly stateless (session state is kept on the client); persistent server-tracked connections belong to the Exclusive Pair (WebSocket) model.'
      }
    ],
    theory: [
      {
        q: 'A smart factory deploys 500 battery-powered vibration and temperature sensors that report small telemetry packets every 30 seconds to three backend services (a live operator dashboard, an alarm engine, and a historical database), while a maintenance engineer also needs a real-time bidirectional control panel to steer a robotic arm. Recommend and justify: (a) the Link and Network layer protocols for the battery sensors; (b) the Application protocol and communication model for the 500 sensors; and (c) the Application API/protocol and communication model for the robotic arm control panel.',
        model: '<p><b>Background:</b> Designing an industrial IoT communication stack requires matching each layer (Link, Network, Transport, Application) and logical communication model (Request–Response, Publish–Subscribe, Push–Pull, Exclusive Pair) to the power, bandwidth, fan-out, and latency constraints of each subsystem.</p><p><b>Answer and solution:</b></p><ol><li><b>(a) Link &amp; Network Layer for the 500 Battery Sensors — IEEE 802.15.4 + 6LoWPAN:</b><ul><li><b>Link Layer:</b> <b>IEEE 802.15.4 (LR-WPAN)</b> operating at 40–250 Kb/s is specifically engineered for low-cost, low-speed, power-constrained battery devices (unlike power-hungry Wi-Fi 802.11).</li><li><b>Network Layer:</b> <b>6LoWPAN</b> (IPv6 over Low-power Wireless Personal Area Networks) operates at 2.4 GHz (250 Kb/s) over 802.15.4 and applies header compression so full 128-bit IPv6 datagrams fit inside tiny low-power sensor frames.</li></ul></li><li><b>(b) Application Protocol &amp; Model for Telemetry Fan-Out — MQTT (Publish–Subscribe):</b><ul><li><b>Model:</b> <b>Publish–Subscribe</b>. The 500 sensors act as publishers sending telemetry to a topic (e.g., <code>factory/sensors/telemetry</code>) on an <b>MQTT Broker</b>.</li><li><b>Justification:</b> The three backend consumers (dashboard, alarm engine, historical database) all subscribe to the topic and receive every reading simultaneously. Publishers and consumers are completely decoupled, and MQTT\'s tiny header overhead saves battery and bandwidth compared to polling with HTTP Request–Response. (If any consumer processes data more slowly than sensors publish, a <b>Push–Pull</b> queue can buffer the rate mismatch).</li></ul></li><li><b>(c) Application API &amp; Model for the Live Robotic Arm Panel — WebSocket API (Exclusive Pair):</b><ul><li><b>Model:</b> <b>Exclusive Pair</b> via a <b>WebSocket API</b> over TCP.</li><li><b>Justification:</b> WebSocket begins with an HTTP upgrade handshake and then keeps a single persistent, stateful, <b>full-duplex</b> TCP connection open. Both the engineer\'s control panel and the robotic arm controller can stream commands and position feedback simultaneously with near-zero latency, avoiding the connection setup/teardown overhead of stateless REST calls.</li></ul></li></ol><p><b>Scenario:</b> When sensor #142 detects bearing overheating, it publishes one compact MQTT packet over 6LoWPAN/802.15.4 to the local gateway broker; within milliseconds the alarm service triggers a warning, the database logs the spike, and the engineer uses the open WebSocket control channel to throttle down the robotic arm in real time.</p><p><b>How they combine:</b> The local gateway bridges the constrained 802.15.4/6LoWPAN sensor mesh to the factory IP network, hosting the MQTT broker for one-to-many telemetry distribution while maintaining dedicated WebSocket streams for low-latency actuator control.</p><p><b>Conclusion:</b> Pairing 802.15.4 + 6LoWPAN at the lower layers with MQTT Publish–Subscribe for many-to-many sensor telemetry and WebSocket Exclusive Pair for bidirectional real-time control satisfies both battery longevity and sub-second industrial responsiveness.</p>',
        rubric: [
          'Selects IEEE 802.15.4 (Link) and 6LoWPAN (Network) with data rate (40-250 Kb/s) and IPv6 header compression justification',
          'Recommends MQTT with the Publish-Subscribe model for the 500 sensors reporting to 3 services, explaining broker topic decoupling',
          'Recommends WebSocket API with the Exclusive Pair model for the bidirectional control screen, noting the HTTP upgrade handshake and persistent full-duplex connection'
        ]
      }
    ]
  },
  t4: {
    cards: [
      {
        h: 'General-Purpose vs Embedded Systems & The Input–Processing–Output Model',
        b: '<table><tr><th>Dimension</th><th>General-Purpose Computer</th><th>Embedded System</th></tr><tr><td><b>Purpose</b></td><td>Designed to perform many different tasks (desktops, laptops)</td><td>Hardware + software integrated into a larger device to perform a <b>specific task or set of closely related functions</b></td></tr><tr><td><b>Software</b></td><td>User can install many varied applications on a GPOS</td><td>Firmware normally designed specifically for the device (bare-metal or RTOS)</td></tr><tr><td><b>Resources</b></td><td>Considerable processing power and memory</td><td>Selected tightly to fit the application\'s cost, power, and size limits</td></tr></table><p><b>Three Major Functional Stages (Slides 5–8):</b> <code>INPUT &gt;&gt; PROCESSING &gt;&gt; OUTPUT</code></p><ul><li><b>1. INPUT:</b> <i>Physical</i> (temp, pressure, motion, light, sound), <i>Electrical</i> (sensor voltage/current), <i>Digital</i> (data from another device), <i>User-generated</i> (buttons, keypad, touchscreen), or <i>Communication data</i> (UART, SPI, I<sup>2</sup>C, Ethernet, Wi-Fi, Bluetooth).</li><li><b>2. PROCESSING ("Decision-making"):</b> Performed by an <b>MCU, MPU, DSP, FPGA</b>, or dedicated hardware.</li><li><b>3. OUTPUT:</b> Control a physical device, display info, produce an audible signal, send data to another system, store info, or activate an actuator.</li></ul>'
      },
      {
        h: 'The 4 Core Categories: MPU, MCU, DSP, ASIC & PLD/FPGA',
        b: '<p><b>Four Broad Categories of Embedded Cores (Slide 10):</b> (1) General-purpose &amp; domain-specific processors (MPU, MCU, DSP); (2) Application Specific Integrated Circuits (<b>ASIC</b>); (3) Programmable Logic Devices (<b>PLD</b> — CPLD, FPGA); (4) Commercial Off-The-Shelf components (<b>COTS</b> — written as <i>"CoS"</i> on Slide 10).</p><table><tr><th>Core Type</th><th>Slide Definition, Strengths &amp; Examples</th></tr><tr><td><b>Microprocessor (MPU)</b></td><td>Processor IC that performs computation but <b>requires external memory and I/O interfaces</b> to form a complete system. Used in calculators, accounting systems, game machines, complex industrial controllers, military &amp; comm systems. (e.g., <b>Raspberry Pi 5</b> BCM2712).</td></tr><tr><td><b>Microcontroller (MCU)</b></td><td>Single-chip IC combining <b>processor core + memory (RAM/Flash) + peripheral I/O interfaces</b> for controlling a specific function. Families: <b>ARM Cortex-M, STM32, ESP32, AVR, PIC, 8051</b>. Used in washing machines, cameras, alarms, microwaves.</td></tr><tr><td><b>Digital Signal Processor (DSP)</b></td><td>Processor optimized for fast mathematical operations on digital signals (audio, video, telecommunications). Contains <b>program memory, data memory, computational engine, and I/O unit</b>.</td></tr><tr><td><b>ASIC</b></td><td>Integrated circuit custom-fabricated for one particular application. <b>Pros:</b> highest performance &amp; optimization. <b>Cons:</b> high development cost and cannot be altered after fabrication.</td></tr><tr><td><b>PLD / FPGA</b></td><td>IC whose logic functionality can be programmed/reconfigured by the designer (<b>CPLD, FPGA</b>). An <b>FPGA</b> contains configurable logic resources and interconnections for <b>hardware acceleration, parallel processing, high-speed specialized digital logic, and reconfigurable hardware</b>.</td></tr></table>'
      },
      {
        h: 'Communication Interfaces (Chip-Level vs External) & 3 Classifications',
        b: '<p><b>Communication Interfaces (Slide 16):</b></p><ul><li><b>Chip-Level Interfaces:</b><ul><li><b>I<sup>2</sup>C (Inter-Integrated Circuit):</b> Two-wire synchronous serial interface designed for communication between ICs on a board.</li><li><b>SPI (Serial Peripheral Interface):</b> Synchronous serial interface with a shared clock for relatively fast communication between a controller and peripherals (displays, sensors, flash memory, ADC/DAC).</li><li><b>UART (Universal Asynchronous Receiver Transmitter):</b> Serial communication <b>without requiring a shared clock signal</b>.</li><li><b>Others on slide:</b> <b>1-Wire</b> and <b>Parallel bus</b>.</li></ul></li><li><b>External Interfaces:</b> <i>Wired:</i> <b>RS-232C, RS-485, parallel port, USB, IEEE 1394 (FireWire)</b>. <i>Wireless:</i> <b>Infrared (IrDA), Bluetooth, Wi-Fi, ZigBee, GPRS</b>.</li></ul><p><b>Three Embedded System Classifications (Slides 17–20):</b></p><ol><li><b>By Triggering:</b> <b>Event-Triggered</b> (dynamic task execution driven by external events) vs <b>Time-Triggered</b> (follows a statically computed schedule with allocated time slots; predictable).</li><li><b>By Deterministic Behaviour (Real-Time):</b> <b>Soft Real-Time</b> (missing a deadline or small errors are not critical and can be tolerated to a degree, e.g., video streaming) vs <b>Hard Real-Time</b> (missing a task execution deadline causes <b>catastrophic consequences</b> such as financial loss or human loss of life, e.g., airbag, pacemaker, aircraft control).</li><li><b>By Complexity &amp; Performance:</b><ul><li><b>Small Scale:</b> 8-bit or 16-bit processor/controller, low cost, not time-critical, may or may not have an OS.</li><li><b>Medium Scale:</b> 16-bit or 32-bit MCU/MPU or DSP, slightly complex hardware/firmware, may run GPOS or RTOS.</li><li><b>Large Scale / Complex:</b> High-performance 32-bit or 64-bit RISC processors, RSoC (Reconfigurable SoC), multi-core processors, PLDs, and hardware accelerators offloading work from the main processor.</li></ul></li></ol>'
      }
    ],
    recall: [
      {
        q: 'Name the four broad categories of embedded system cores listed on Lecture 4 Slide 10.',
        a: '1) General-purpose and domain-specific processors (MPU, MCU, DSP), 2) Application Specific Integrated Circuits (ASIC), 3) Programmable Logic Devices (PLD — CPLD, FPGA), 4) Commercial Off-The-Shelf components (COTS / "CoS").'
      },
      {
        q: 'List the six microcontroller families named on Lecture 4 Slide 12 and answer Slide 11\'s question: "Where does Raspberry Pi 5 fall into?"',
        a: 'MCU families: ARM Cortex-M, STM32, ESP32, AVR, PIC, and 8051. The Raspberry Pi 5 is a Single-Board Computer (SBC) built around a microprocessor (Broadcom BCM2712 quad-core Cortex-A76) with external RAM running Linux, rather than a single-chip microcontroller.'
      },
      {
        q: 'Compare a DSP, an ASIC, and an FPGA according to Lecture 4 Slides 13–15.',
        a: 'A DSP is a processor with program memory, data memory, computational engine, and I/O optimized for math on digital audio/video/telecom signals. An ASIC is a custom-fabricated chip for one application (high performance, but expensive and fixed after fabrication). An FPGA is a Programmable Logic Device with configurable logic blocks and interconnections for parallel processing, hardware acceleration, and reconfigurable digital hardware.'
      },
      {
        q: 'Contrast I2C, SPI, and UART chip-level interfaces.',
        a: 'I2C is a serial interface for chip-to-chip communication; SPI is a synchronous serial interface for fast communication with displays, sensors, flash memory, and ADC/DACs; UART is an asynchronous serial interface that operates without a shared clock signal.'
      },
      {
        q: 'How are embedded systems classified by (a) triggering, (b) deterministic behaviour, and (c) complexity/performance?',
        a: '(a) Triggering: Event-triggered (dynamic, event-driven) vs Time-triggered (statically computed schedule/time slots, predictable). (b) Determinism: Soft real-time (missed deadlines tolerable) vs Hard real-time (missed deadlines cause catastrophic financial or human life loss). (c) Complexity: Small scale (8/16-bit), Medium scale (16/32-bit or DSP, GPOS/RTOS), Large scale (32/64-bit RISC, RSoC, multi-core, PLD/accelerators).'
      }
    ],
    quiz: [
      {
        q: 'Which chip-level communication interface provides serial communication WITHOUT requiring a shared clock signal?',
        o: [
          'SPI (Serial Peripheral Interface)',
          'I2C (Inter-Integrated Circuit)',
          'UART (Universal Asynchronous Receiver Transmitter)',
          'Parallel bus'
        ],
        a: 2,
        e: 'Slide 16 states that UART (Universal Asynchronous Receiver Transmitter) provides serial communication without requiring a shared clock signal.'
      },
      {
        q: 'An automotive airbag controller and an implantable cardiac pacemaker must execute their safety tasks within strict millisecond deadlines or human lives could be lost. How are they classified?',
        o: [
          'Soft real-time, small-scale systems',
          'Hard real-time systems',
          'Non-deterministic general-purpose systems',
          'Best-effort cloud batch systems'
        ],
        a: 1,
        e: 'Slide 18 defines Hard Real-Time systems as those where missing a task execution deadline can have catastrophic consequences (financial loss, human loss of life).'
      },
      {
        q: 'Which embedded core category offers custom hardware acceleration, parallel processing, and digital logic that can still be reconfigured by the designer after manufacturing?',
        o: [
          'ASIC (Application Specific Integrated Circuit)',
          'FPGA (Field-Programmable Gate Array, a type of PLD)',
          '8051 8-bit Microcontroller',
          'RS-232C Serial Port'
        ],
        a: 1,
        e: 'Slide 15 explains that an FPGA (a Programmable Logic Device) has configurable logic resources and interconnections for hardware acceleration, parallel processing, and reconfigurable hardware, whereas an ASIC is fixed after fabrication.'
      },
      {
        q: 'According to Lecture 4 Slide 20, which processor architectures are used in Large-Scale / Complex embedded systems?',
        o: [
          '8-bit PIC and 8051 microcontrollers without an OS',
          'High-performance 32- or 64-bit RISC processors/controllers, RSoC, multi-core processors, PLDs, and hardware accelerators',
          'Only passive analog resistors and capacitors',
          '16-bit calculators only'
        ],
        a: 1,
        e: 'Slide 20 defines Large-Scale/Complex embedded systems around 32- or 64-bit RISC processors, RSoC, multi-core processors, PLDs, and co-units/hardware accelerators.'
      }
    ],
    theory: [
      {
        q: 'Compare the five embedded processing core options covered in Lecture 4 (Microprocessor, Microcontroller, DSP, ASIC, and PLD/FPGA), and explain how embedded systems are classified by triggering mechanism, real-time determinism, and complexity/performance scale.',
        model: '<p><b>Background:</b> Every embedded system follows the <code>INPUT &gt;&gt; PROCESSING &gt;&gt; OUTPUT</code> model inside a host product. Selecting the right computational core and real-time architecture determines whether the device meets its latency deadlines, power envelope, and manufacturing budget.</p><p><b>Answer and solution:</b></p><p><b>1. Comparison of Embedded Processing Cores (Slides 10–15):</b></p><ul><li><b>Microprocessor (MPU):</b> A CPU integrated circuit that requires external RAM, storage, and I/O chips (e.g., Raspberry Pi 5\'s Cortex-A76 running Linux); best for complex OS-driven controllers and data acquisition.</li><li><b>Microcontroller (MCU):</b> Combines the CPU core, RAM, Flash/ROM, and I/O peripherals on a single chip (e.g., ARM Cortex-M, STM32, ESP32, AVR, PIC, 8051); best for low-power dedicated control (appliances, sensors).</li><li><b>Digital Signal Processor (DSP):</b> Contains separate program memory, data memory, computational engine, and I/O optimized for high-speed math on audio, video, and telecommunications signals.</li><li><b>Application Specific Integrated Circuit (ASIC):</b> Custom-fabricated chip tailored to one function; delivers maximum speed and energy efficiency but has high non-recurring development cost and zero post-fabrication flexibility.</li><li><b>Programmable Logic Device (PLD / CPLD / FPGA):</b> Contains configurable logic blocks and interconnections that can be reprogrammed in the field for parallel hardware acceleration and high-speed custom digital logic.</li></ul><p><b>2. Three Classifications of Embedded Systems (Slides 17–20):</b></p><ol><li><b>By Triggering:</b> <i>Event-triggered</i> systems execute dynamically in response to external interrupts/events (e.g., button press or motion alarm), whereas <i>Time-triggered</i> systems execute tasks in statically computed time slots for strict predictability.</li><li><b>By Deterministic Behaviour:</b> <i>Hard real-time</i> systems cannot miss a deadline without catastrophic financial or life-safety consequences (e.g., car airbag), whereas <i>Soft real-time</i> systems tolerate occasional deadline misses with graceful quality degradation (e.g., video playback).</li><li><b>By Complexity &amp; Performance:</b> <i>Small-scale</i> (8/16-bit MCUs, simple tasks, often bare-metal), <i>Medium-scale</i> (16/32-bit MCUs or DSPs running an RTOS/GPOS), and <i>Large-scale</i> (32/64-bit multi-core RISC, RSoC, PLDs, and hardware accelerators).</li></ol><p><b>Scenario:</b> In an autonomous drone, a <b>small/medium-scale STM32 MCU</b> runs a <b>time-triggered, hard real-time</b> flight-stabilization loop reading gyroscopes over <b>SPI</b>, while an onboard <b>FPGA/DSP</b> accelerates camera obstacle-avoidance vision in parallel.</p><p><b>How they combine:</b> High-speed synchronous <b>SPI</b> and two-wire <b>I<sup>2</sup>C</b> buses link the sensors and ADC/DACs to the MCU/FPGA cores, allowing the hard real-time control loop and the parallel signal-processing pipeline to coordinate seamlessly.</p><p><b>Conclusion:</b> Matching the processing core (MCU, MPU, DSP, ASIC, FPGA) with the appropriate triggering and real-time classification prevents both hardware over-engineering and catastrophic deadline failures.</p>',
        rubric: [
          'Distinguishes MPU, MCU (naming families like STM32/ESP32/AVR/PIC/8051), DSP (four internal blocks), ASIC (pros/cons), and PLD/FPGA (parallel reconfigurable logic)',
          'Explains Event-triggered vs Time-triggered and Soft vs Hard real-time systems with examples',
          'Contrasts Small-scale (8/16-bit), Medium-scale (16/32-bit + DSP + RTOS), and Large-scale (32/64-bit RISC + RSoC + PLD accelerators)'
        ]
      }
    ]
  }
};
