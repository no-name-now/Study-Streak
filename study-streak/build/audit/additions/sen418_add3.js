module.exports = {
  t5: {
    cards: [
      {
        h: 'Azure Provisioning Terminologies & 5 Infrastructure Components',
        b: '<p><b>Nine Key Terminologies (Lecture 8 Slide 2):</b></p><ul><li><b>Infrastructure Provisioning:</b> Creating and configuring VMs, networks, storage, and access policies.</li><li><b>Azure Subscription:</b> Provides authenticated and authorized access to an Azure account (billing &amp; quota boundary).</li><li><b>Resource:</b> An individually managed Azure service instance (e.g., a VM or storage account).</li><li><b>Resource Group:</b> A logical container to manage and aggregate related resources as a single unit.</li><li><b>Region:</b> A geographic area containing Azure data centres (e.g., <i>South Africa North</i>).</li><li><b>Availability Zone:</b> A physically separate data-centre location within a supported region designed to improve resilience against power/cooling/network failures.</li><li><b>Infrastructure as Code (IaC):</b> Defining infrastructure in version-controlled, repeatable files instead of manual clicks.</li><li><b>Telemetry:</b> Measurements or events produced by devices and systems (temperature, device status).</li><li><b>ARM (Azure Resource Manager):</b> The management layer that enables creating, updating, and deleting resources in an Azure subscription.</li></ul><p><b>Five Infrastructure Components &amp; Exact Azure Examples (Slide 3):</b></p><table><tr><th>Component</th><th>Purpose</th><th>Azure Examples on Slide</th></tr><tr><td><b>Compute</b></td><td>Runs OS, app code, and processing jobs</td><td><b>Azure Virtual Machines, Container Apps, AKS, Azure Functions</b></td></tr><tr><td><b>Storage</b></td><td>Persists files, objects, databases, and telemetry</td><td><b>Azure Blob Storage, Azure Files, Azure SQL Database</b></td></tr><tr><td><b>Networking</b></td><td>Connects resources and controls traffic</td><td><b>Virtual Network (VNet), Subnets, Network Security Groups (NSGs), Load Balancer</b></td></tr><tr><td><b>Identity &amp; Security</b></td><td>Controls who or what can access resources</td><td><b>Microsoft Entra ID, Azure RBAC, Managed Identities, Key Vault</b></td></tr><tr><td><b>Monitoring</b></td><td>Collects logs, metrics, traces, and alerts</td><td><b>Azure Monitor, Log Analytics, Application Insights</b></td></tr></table>'
      },
      {
        h: 'Shared Responsibility, 7 Provisioning Steps & Manual vs Automated Approaches',
        b: '<p><b>Shared Responsibility Model (Slide 4):</b> Azure operates the physical cloud infrastructure, while customers remain responsible for configuration decisions, identities, data, app code, and permissions:</p><ul><li><b>IaaS:</b> Customer manages <b>OS configuration and patching</b>, application software, identities, data, and network rules.</li><li><b>PaaS:</b> Customer manages application code, data, identities, and service configuration; Azure manages the OS and platform.</li><li><b>Managed Containers / Serverless:</b> Customer manages application logic, container images or function code, permissions, data, and deployment settings.</li></ul><p><b>Seven Provisioning Steps on Azure (Slide 5):</b> <b>1. Gather requirements</b> (workload, capacity, region, security, availability, budget) &rarr; <b>2. Design architecture</b> &rarr; <b>3. Organize resources</b> (subscriptions, resource groups, naming conventions, tags) &rarr; <b>4. Define configuration</b> &rarr; <b>5. Provision resources</b> (Portal, CLI, PowerShell, ARM/Bicep) &rarr; <b>6. Validate</b> (connectivity, permissions, health, security) &rarr; <b>7. Operate</b> (monitor, patch, back up, scale, review costs, remove unused resources).</p><table><tr><th>Approach (Slide 6)</th><th>Strengths</th><th>Limitations</th></tr><tr><td><b>Azure Portal</b></td><td>Accessible for learning and one-off tasks</td><td>Harder to reproduce exactly; risk of human error and <b>configuration drift</b></td></tr><tr><td><b>Azure CLI / PowerShell</b></td><td>Scriptable and useful for repeatable operations</td><td>Scripts require testing, versioning, and secure parameter handling</td></tr><tr><td><b>ARM Templates / Bicep</b></td><td><b>Declarative, reviewable, and repeatable</b> infrastructure</td><td>Requires template design, validation, and lifecycle management</td></tr><tr><td><b>CI/CD Pipeline</b></td><td>Automates checks and controlled deployments</td><td>Pipeline permissions and secrets must be secured</td></tr></table>'
      },
      {
        h: 'VM Design Decisions, Security Checklist, Scalability vs Elasticity & VMs vs Containers',
        b: '<ul><li><b>Seven VM Design Decisions (Slide 7):</b> <b>1. OS</b> (Windows/Linux image) &middot; <b>2. Size</b> (CPU, RAM, storage throughput, network capacity) &middot; <b>3. Disks</b> (distinguish <b>OS disk, temporary disk, and persistent data disks</b>; plan backup/recovery) &middot; <b>4. Networking</b> (VNet, subnets, restrict inbound access) &middot; <b>5. Identity</b> (prefer <b>managed identities</b>; avoid embedding credentials in scripts) &middot; <b>6. Availability</b> (availability zones, availability sets, or VM scale sets) &middot; <b>7. Operations</b> (patching, monitoring, backups, cost controls).</li><li><b>Six-Item VM Security Checklist (Slide 9):</b> (1) Avoid exposing <b>SSH (TCP 22) or RDP (TCP 3389)</b> broadly to the internet; (2) Use controlled admin access, strong auth, and <b>least privilege</b>; (3) Apply OS and app security updates; (4) Use <b>Network Security Groups (NSGs)</b> and network segmentation; (5) Enable logging, monitoring, backup, and alerting; (6) Store secrets in a dedicated secret-management service (<b>Azure Key Vault</b>) rather than source code.</li><li><b>Scalability vs Elasticity (Slide 8):</b> <b>Scalability</b> is the ability to handle increased workload by adding resources or capacity. <b>Elasticity</b> is the ability to adjust resources dynamically as demand changes — <b>including scaling down automatically when demand falls</b>. <b style="color:#b91c1c">Exam Rule:</b> <i>"A system can scale without being elastic if capacity is increased manually and never reduced automatically."</i></li></ul><table><tr><th>Characteristic (Slide 10)</th><th>Virtual Machine (VM)</th><th>Container</th></tr><tr><td><b>Operating System</b></td><td>Each VM has its own full <b>guest OS</b> on virtualized hardware</td><td>Containers <b>share the host OS kernel</b> and isolate application processes</td></tr><tr><td><b>Startup &amp; Footprint</b></td><td>Heavier and slower to start</td><td>Lighter and faster to start</td></tr><tr><td><b>Isolation &amp; Best Fit</b></td><td>Virtualized hardware boundary; best for OS-level control, legacy workloads, custom kernels</td><td>Process-level isolation; best for portable app packaging and repeatable releases</td></tr><tr><td><b>Azure Examples</b></td><td><b>Azure Virtual Machines, VM Scale Sets</b></td><td><b>Azure Container Apps, AKS, Azure Container Instances</b></td></tr></table>'
      },
      {
        h: 'CA2 Practical Walkthrough: AlmaLinux VM & Apache on Azure',
        b: '<p>In the CA2 Practical Task, you deployed <b><code>PAUCSC418-AlmaLinux-VM</code></b> in resource group <b><code>PAUCSC418-RG</code></b> (<b>South Africa North, Availability Zone 1</b>, size <b><code>Standard_B2ats_v2</code></b>: 2 vCPUs, 1 GiB RAM; 30 GiB Standard SSD OS disk):</p><ul><li><b>NSG Ports:</b> <b>TCP 22 (SSH)</b> for remote CLI administration (restrict to trusted IPs to prevent automated brute-force scans); <b>TCP 80 (HTTP)</b> for plaintext web traffic; <b>TCP 443 (HTTPS)</b> for TLS-encrypted web traffic.</li><li><b>Why opening Port 443 in NSG is NOT enough for HTTPS:</b> The NSG only lets packets reach the VM; Apache also needs an <b>SSL/TLS certificate</b> (e.g., Let\'s Encrypt), <b><code>mod_ssl</code></b> installed/configured, and Apache listening on port 443.</li><li><b>Linux Verification Commands:</b> <code>whoami</code> (current user), <code>hostname</code>, <code>cat /etc/os-release</code> (AlmaLinux 9.9), <code>free -h</code> (~1 GiB RAM), <code>df -h</code> (30 GiB root disk), <code>ip addr</code> (shows only private IP <code>172.16.0.4</code> on <code>eth0</code> because Azure maps the public IP <code>102.37.17.124</code> at the network edge via <b>NAT</b>!), <code>uptime</code>.</li><li><b>Apache Setup &amp; SELinux:</b><pre>sudo dnf update -y &amp;&amp; sudo dnf install httpd php -y\nsudo systemctl enable --now httpd   # enable = start at boot; start/--now = run immediately\nsudo cp ~/index.php /var/www/html/\nsudo restorecon -Rv /var/www/html   # restore SELinux security contexts\nsudo systemctl restart httpd</pre></li><li><b>Public IP vs Azure DNS Name:</b> A dynamic public IP is hard to remember and can change when a VM is deallocated; an Azure DNS label (e.g., <code>myvm.southafricanorth.cloudapp.azure.com</code>) gives a stable, human-readable FQDN.</li></ul>'
      }
    ],
    recall: [
      {
        q: 'Distinguish between an Azure Region, an Availability Zone, and a Resource Group.',
        a: 'A Region is a geographic area containing Azure data centres (e.g., South Africa North). An Availability Zone is a physically separate data-centre location within a supported region with independent power/cooling/networking for fault resilience. A Resource Group is a logical container used to manage and aggregate related Azure resources as a single unit.'
      },
      {
        q: 'According to Lecture 8 Slide 8, what is the exact difference between Scalability and Elasticity, and can a system be scalable without being elastic?',
        a: 'Scalability is the ability to handle increased workload by adding resources or capacity. Elasticity is the ability to adjust resources automatically as demand changes, including scaling down when demand falls. Yes: a system scales without being elastic if capacity is increased manually and never reduced automatically.'
      },
      {
        q: 'Under the Lecture 8 Shared Responsibility Model, how does customer responsibility differ across IaaS, PaaS, and Managed Containers/Serverless?',
        a: 'In IaaS (Azure VMs), the customer is responsible for OS configuration and patching, application software, identities, data, and network rules. In PaaS, Azure manages the OS and platform while the customer manages app code, data, identities, and service config. In Managed Containers/Serverless, the customer manages app logic, container images/function code, permissions, data, and deployment settings.'
      },
      {
        q: 'Compare Virtual Machines and Containers across OS architecture, startup speed, isolation boundary, and Azure service examples.',
        a: 'VMs run a full guest OS per VM on virtualized hardware (heavier, slower startup, hardware-boundary isolation; e.g., Azure Virtual Machines, VM Scale Sets). Containers share the host OS kernel and isolate application processes (lighter, faster startup, portable packaging; e.g., Azure Container Apps, AKS, Azure Container Instances).'
      },
      {
        q: 'In the CA2 Azure Linux practical, why does running ip addr inside the VM show only the private IP (172.16.0.4) and not the public IP (102.37.17.124), and what is the difference between systemctl start httpd and systemctl enable httpd?',
        a: 'Azure binds the public IP at the virtual network edge and translates it to the NIC\'s private IP via NAT, so the guest OS only sees its private IP on eth0. systemctl start httpd starts the service immediately for the current session only, whereas systemctl enable httpd configures it to start automatically at boot (systemctl enable --now httpd does both).'
      },
      {
        q: 'In the CA2 practical, why does allowing inbound TCP port 443 in the Azure Network Security Group (NSG) not automatically make your Apache website work over HTTPS?',
        a: 'An NSG is only a network firewall that allows packets on port 443 to reach the VM. For HTTPS to work, Apache inside the VM must also be configured to listen on port 443 with mod_ssl installed and a valid SSL/TLS certificate.'
      }
    ],
    quiz: [
      {
        q: 'An administrator manually resizes an Azure VM to handle holiday traffic and leaves it at the larger size permanently. According to Lecture 8 Slide 8, this system demonstrates:',
        o: [
          'Elasticity without scalability',
          'Scalability without elasticity',
          'Both full elasticity and serverless auto-scaling',
          'Neither scalability nor availability'
        ],
        a: 1,
        e: 'Slide 8 explicitly states: "A system can scale without being elastic if capacity is increased manually and never reduced automatically."'
      },
      {
        q: 'Under the Azure Shared Responsibility Model (Lecture 8 Slide 4), in which service model is the CUSTOMER responsible for operating-system configuration and OS security patching?',
        o: [
          'IaaS (e.g., Azure Virtual Machines)',
          'PaaS (e.g., Azure App Service)',
          'Serverless (e.g., Azure Functions)',
          'SaaS (e.g., Microsoft 365)'
        ],
        a: 0,
        e: 'In IaaS, the customer manages the guest OS (including patching), runtime, applications, identities, network rules, and data.'
      },
      {
        q: 'Which Azure provisioning approach on Lecture 8 Slide 6 is described as "Declarative, reviewable and repeatable infrastructure" that avoids manual configuration drift?',
        o: [
          'Clicking manually through the Azure Portal',
          'ARM templates / Bicep',
          'Unversioned ad-hoc SSH commands',
          'Azure Monitor alerts'
        ],
        a: 1,
        e: 'Slide 6 lists "Declarative, reviewable and repeatable infrastructure" as the key strength of ARM templates / Bicep (Infrastructure as Code).'
      },
      {
        q: 'How do Containers differ from Virtual Machines on Lecture 8 Slide 10?',
        o: [
          'Each container boots its own separate guest OS kernel, making containers slower than VMs.',
          'Containers share the host operating-system kernel and isolate application processes, making them lighter and faster to start than full VMs.',
          'Containers cannot run on Microsoft Azure.',
          'Virtual machines use process-level isolation while containers virtualize physical hardware.'
        ],
        a: 1,
        e: 'Slide 10 explains that a VM virtualizes a complete OS environment (each VM has its own guest OS), whereas containers share the host OS kernel and isolate application processes.'
      },
      {
        q: 'In the CA2 AlmaLinux Azure deployment, which command BOTH starts the Apache web server immediately AND configures it to start automatically on every future reboot?',
        o: [
          'sudo systemctl status httpd',
          'sudo systemctl start httpd',
          'sudo systemctl enable --now httpd',
          'sudo restorecon -Rv /var/www/html'
        ],
        a: 2,
        e: '`systemctl enable --now httpd` combines `enable` (start at boot) and `start` (run right now).'
      }
    ],
    theory: [
      {
        q: 'An IoT logistics startup wants to deploy its cloud backend on Microsoft Azure. (a) Map the five infrastructure component categories from Lecture 8 Slide 3 to concrete Azure services. (b) Compare manual Azure Portal provisioning against ARM Templates/Bicep (IaC). (c) Compare deploying their microservices on Azure Virtual Machines vs Containers, and explain the difference between Scalability and Elasticity when traffic spikes every morning.',
        model: '<p><b>Background:</b> Provisioning a production IoT cloud backend on Microsoft Azure requires organizing compute, storage, networking, identity, and monitoring resources inside a subscription and resource group while balancing operational overhead under the Shared Responsibility Model.</p><p><b>Answer and solution:</b></p><p><b>(a) Five Azure Infrastructure Components &amp; Services (Slide 3):</b></p><ol><li><b>Compute (runs OS, app code, processing jobs):</b> Azure Virtual Machines, Azure Container Apps, Azure Kubernetes Service (AKS), or Azure Functions.</li><li><b>Storage (persists files, objects, databases, telemetry):</b> Azure Blob Storage, Azure Files, or Azure SQL Database.</li><li><b>Networking (connects resources and controls traffic):</b> Virtual Network (VNet), Subnets, Network Security Groups (NSGs), and Azure Load Balancer.</li><li><b>Identity &amp; Security (controls access and secrets):</b> Microsoft Entra ID, Azure Role-Based Access Control (RBAC), Managed Identities, and Azure Key Vault.</li><li><b>Monitoring (collects logs, metrics, traces, alerts):</b> Azure Monitor, Log Analytics, and Application Insights.</li></ol><p><b>(b) Manual Portal Provisioning vs ARM Templates / Bicep (IaC — Slide 6):</b></p><ul><li><b>Azure Portal:</b> Easy for learning and one-off tasks, but difficult to reproduce across dev/staging/prod, prone to human error, and suffers from <b>configuration drift</b>.</li><li><b>ARM Templates / Bicep (Infrastructure as Code):</b> Defines infrastructure declaratively in version-controlled files that can be peer-reviewed, tested in CI/CD pipelines, and deployed repeatably with zero drift.</li></ul><p><b>(c) Virtual Machines vs Containers &amp; Scalability vs Elasticity (Slides 8 &amp; 10):</b></p><ul><li><b>VMs vs Containers:</b> Each <b>VM</b> runs its own full guest OS on virtualized hardware (heavier footprint, slower startup, customer must patch the guest OS under IaaS; best for legacy software or custom OS kernels). <b>Containers</b> share the host OS kernel and isolate application processes (lightweight, start in seconds, package app + dependencies portably; deployed on <b>Azure Container Apps</b> or <b>AKS</b>).</li><li><b>Scalability vs Elasticity:</b> <b>Scalability</b> is adding capacity to handle growth; <b>Elasticity</b> is automatically scaling out during the 8 a.m. telemetry spike <i>and</i> scaling back down when traffic drops at night. Manually adding VMs and never shrinking them is scalable but <b>not elastic</b>.</li></ul><p><b>Scenario:</b> During the 8 a.m. rush when 20,000 delivery trucks start streaming GPS telemetry, hosting the ingestion API on <b>Azure Container Apps</b> defined via <b>Bicep</b> allows Azure to elastically spin up container replicas in seconds and scale them back to zero/minimum off-peak, while authenticating to <b>Azure SQL Database</b> using passwordless <b>Managed Identities</b> and <b>Key Vault</b>.</p><p><b>How they combine:</b> Bicep templates provision the VNet, NSGs, Storage, and Container Apps inside one Resource Group via Azure Resource Manager (ARM), while Azure Monitor and Application Insights feed live metrics to trigger elastic autoscale rules.</p><p><b>Conclusion:</b> Combining declarative IaC (Bicep) with containerized compute and elastic autoscaling minimizes IaaS patching overhead, prevents configuration drift, and aligns cloud cost strictly with live IoT demand.</p>',
        rubric: [
          'Lists all five infrastructure component categories from Slide 3 with accurate Azure service examples',
          'Contrasts Azure Portal (configuration drift, manual error) with ARM Templates/Bicep (declarative, version-controlled, repeatable IaC)',
          'Compares VMs (guest OS per VM, IaaS patching) vs Containers (shared host kernel, fast startup) and distinguishes Scalability from Elasticity'
        ]
      }
    ]
  },
  t6: {
    cards: [
      {
        h: 'MCU vs SBC & The 5 Hardware Selection Parameters',
        b: '<p><b>Preventing Hardware Misallocation (Lecture 9 Slide 2):</b> Before picking a board, engineers must decide between a <b>Microcontroller Unit (MCU)</b> (Arduino Uno, Arduino Mega 2560, ESP32) and a <b>Single-Board Computer (SBC)</b> (Raspberry Pi 5). Using a Linux SBC for simple LED/relay control wastes power, cost, and complexity; using an 8-bit MCU for computer vision or local databases fails due to tiny RAM and clock speed.</p><p><b>The Five Board Selection Parameters (Slide 3):</b></p><ol><li><b>Processing Power</b> (CPU bit-width, clock speed, cores, RAM, Flash)</li><li><b>Connectivity</b> (USB-only vs on-chip Wi-Fi, Bluetooth/BLE, Gigabit Ethernet)</li><li><b>GPIO &amp; Hardware Interfaces</b> (Digital I/O count, PWM pins, ADC/DAC channels, UART/SPI/I<sup>2</sup>C buses, 5V vs 3.3V logic level)</li><li><b>Community &amp; Ease of Learning</b> (Beginner bare-metal Arduino IDE vs Linux OS terminal &amp; administration)</li><li><b>Power Consumption</b> (Milliamps &amp; microamp deep sleep for batteries vs multi-watt active cooling on mains power)</li></ol>'
      },
      {
        h: 'Exact Hardware Specs: Arduino Uno (R3 vs R4), Mega 2560, Raspberry Pi 5 & ESP32',
        b: '<table><tr><th>Parameter</th><th>Arduino Uno (R3 &amp; R4 Minima)</th><th>Arduino Mega 2560</th><th>ESP32 (Espressif SoC)</th><th>Raspberry Pi 5 (SBC)</th></tr><tr><td><b>Category &amp; Ease</b></td><td>8-bit MCU (R3) / 32-bit MCU (R4) &middot; <b>High</b> ease</td><td>8-bit MCU &middot; <b>High</b> ease (same workflow as Uno)</td><td>32-bit Wireless SoC MCU &middot; <b>Moderate</b> ease (3.3V quirks)</td><td>64-bit Linux SBC &middot; <b>Moderate–Advanced</b> ease</td></tr><tr><td><b>CPU &amp; Clock</b></td><td><b>R3:</b> ATmega328P (8-bit AVR RISC) @ <b>16 MHz</b><br><b>R4 Minima:</b> Renesas RA4M1 (32-bit Arm Cortex-M4 w/ FPU) @ <b>48 MHz</b></td><td><b>ATmega2560</b> (8-bit AVR RISC) @ <b>16 MHz</b></td><td><b>Tensilica Xtensa Dual-Core 32-bit LX6</b> @ up to <b>240 MHz</b> + <b>ULP co-processor</b></td><td><b>Broadcom BCM2712 Quad-core 64-bit Arm Cortex-A76</b> @ <b>2.4 GHz</b></td></tr><tr><td><b>Memory &amp; Storage</b></td><td><b>R3:</b> <b>2 KB SRAM, 32 KB Flash</b><br><b>R4:</b> 32 KB SRAM, 256 KB Flash</td><td><b>8 KB SRAM, 256 KB Flash, 4 KB EEPROM</b></td><td><b>520 KB SRAM</b> + <b>4 MB to 16 MB</b> external SPI Flash</td><td><b>4 GB, 8 GB, or 16 GB LPDDR4X SDRAM</b>; MicroSD / <b>PCIe 2.0 NVMe SSD</b></td></tr><tr><td><b>Connectivity</b></td><td>USB Type-B/C only. <b>No native Wi-Fi/BT</b> (needs shields)</td><td>USB Type-B only. <b>No native Wi-Fi/BT</b> (needs shields)</td><td>On-chip <b>Wi-Fi 802.11 b/g/n (150 Mbps)</b> + <b>Bluetooth v4.2 BR/EDR &amp; BLE</b></td><td><b>Dual-band 802.11ac Wi-Fi</b>, <b>BT 5.0 &amp; BLE</b>, <b>Gigabit Ethernet (PoE+ via HAT)</b>, 2&times;USB 3.0, 2&times;USB 2.0, 2&times;4K60 micro-HDMI, PCIe 2.0</td></tr><tr><td><b>GPIO, ADC &amp; Logic Level</b></td><td><b>14 Digital I/O (6 PWM)</b>, <b>6 Analog inputs (ADC)</b> &middot; <b>5V logic</b></td><td><b>54 Digital I/O (15 PWM)</b>, <b>16 Analog inputs (10-bit ADC)</b> &middot; <b>5V logic</b></td><td><b>~34 Digital GPIO</b>, <b>18-ch 12-bit ADC</b>, <b>2-ch 8-bit DAC</b>, capacitive touch &middot; <b style="color:#b91c1c">3.3V logic (NOT 5V tolerant!)</b></td><td><b>40-pin GPIO header</b>, 2&times;4-lane MIPI camera/display &middot; <b style="color:#b91c1c">NO onboard ADC!</b> &middot; <b>3.3V logic</b></td></tr><tr><td><b>Bus Interfaces</b></td><td><b>1&times; UART, 1&times; SPI, 1&times; I<sup>2</sup>C</b></td><td><b>4&times; Hardware UART, 1&times; SPI, 1&times; I<sup>2</sup>C</b></td><td><b>3&times; UART, 2&times; SPI, 2&times; I<sup>2</sup>C, 2&times; I<sup>2</sup>S</b> (digital audio)</td><td>Software/hardware configurable UART, SPI, I<sup>2</sup>C, I<sup>2</sup>S</td></tr><tr><td><b>Power Draw</b></td><td><b>~45 mA (~0.22 W)</b> at 5V DC; sleep down to &mu;A</td><td><b>~70 mA (~0.35 W)</b> at 5V DC (higher due to USB chip &amp; larger breakout)</td><td>Active Wi-Fi TX: <b>160–260 mA (~0.8–1.3 W)</b>; Idle: 20–50 mA; <b>Deep Sleep: ~10–15 &mu;A</b></td><td>Idle: <b>~2.7–3.0 W</b>; Full load: <b>8 W to 12 W+</b> (needs <b>5V/5A PSU</b> &amp; active fan cooling)</td></tr></table>'
      },
      {
        h: 'Slide 11 Trap: The Bug in the Arduino Mega Blinking LED Code',
        b: '<p>Lecture 9 Slide 11 shows a sample sketch intended to blink an LED on the Arduino Mega:</p><pre>void setup() {\n  pinMode(6, OUTPUT);\n}\nvoid loop() {\n  digitalWrite(6, HIGH);\n  delay(1000);\n  digitalWrite(12, LOW);   // &lt;-- BUG ON SLIDE 11!\n  delay(1000);\n}</pre><div class="trap"><b>What the Slide Code Actually Does vs How to Fix It:</b><ul><li><b>The Bug:</b> <code>setup()</code> configures <b>pin 6</b> as an <code>OUTPUT</code> and <code>loop()</code> sets <b>pin 6 <code>HIGH</code></b>, waits 1000 ms (1 second), and then calls <code>digitalWrite(12, LOW)</code> on <b>pin 12</b> instead of pin 6!</li><li><b>Visible Effect:</b> Because pin 6 is never set to <code>LOW</code>, <b>the LED on pin 6 turns on and stays on continuously (it never blinks!)</b>. Writing <code>LOW</code> to unconfigured pin 12 has no effect on pin 6.</li><li><b>The Fix:</b> Change <code>digitalWrite(12, LOW);</code> to <b><code>digitalWrite(6, LOW);</code></b> so pin 6 stays on for 1 s and off for 1 s (a 2-second period = 0.5 Hz blink rate).</li></ul></div>'
      }
    ],
    recall: [
      {
        q: 'List the five parameters for choosing a suitable edge development board from Lecture 9 Slide 3.',
        a: '1) Processing power, 2) Connectivity, 3) GPIO & hardware interfaces, 4) Community & ease of learning, 5) Power consumption.'
      },
      {
        q: 'Compare the CPU, clock speed, SRAM, and Flash memory of the Arduino Uno Classic R3 versus the Arduino Uno R4 Minima (Lecture 9 Slide 5).',
        a: 'Classic R3: Microchip ATmega328P (8-bit AVR RISC) @ 16 MHz, 2 KB SRAM, 32 KB Flash. R4 Minima: Renesas RA4M1 (32-bit Arm Cortex-M4 with FPU) @ 48 MHz, 32 KB SRAM, 256 KB Flash.'
      },
      {
        q: 'Compare the GPIO pin count, PWM count, Analog input (ADC) count, Hardware UART count, and baseline current draw of the Arduino Uno R3 vs Arduino Mega 2560.',
        a: 'Uno R3: 14 digital I/O (6 PWM), 6 analog inputs, 1 UART, ~45 mA (~0.22 W) at 5V. Mega 2560 (ATmega2560, 8 KB SRAM, 256 KB Flash, 4 KB EEPROM): 54 digital I/O (15 PWM), 16 analog inputs (10-bit ADC), 4 hardware UARTs, ~70 mA (~0.35 W) at 5V.'
      },
      {
        q: 'State the CPU, SRAM, ADC/DAC channels, logic voltage tolerance, and deep-sleep current of the ESP32 from Lecture 9 Slides 9–10.',
        a: 'CPU: Tensilica Xtensa Dual-Core 32-bit LX6 @ up to 240 MHz + ULP co-processor. Memory: 520 KB SRAM + 4–16 MB external SPI Flash. Analog: 18 channels of 12-bit ADC and 2 channels of 8-bit DAC. Logic level: 3.3V (NOT 5V tolerant!). Power: 160–260 mA active Wi-Fi TX, 20–50 mA idle, and ~10–15 microamps in Deep Sleep mode.'
      },
      {
        q: 'State the processor, RAM options, power requirements, and analog sensor limitation of the Raspberry Pi 5 from Lecture 9 Slides 7–8.',
        a: 'Processor: Broadcom BCM2712 Quad-core 64-bit Arm Cortex-A76 @ 2.4 GHz. RAM: 4 GB, 8 GB, or 16 GB LPDDR4X. Power: ~2.7–3.0 W idle, 8 W to 12 W+ under full load (requires dedicated 5V/5A power supply and active fan cooling). Analog limitation: it has NO onboard ADC, so reading an analog sensor requires an external ADC IC (or a companion MCU).'
      },
      {
        q: 'What bug exists in the Arduino Mega LED blink code on Lecture 9 Slide 11, and what happens when the code runs?',
        a: 'The code configures pinMode(6, OUTPUT) and sets digitalWrite(6, HIGH), but then calls digitalWrite(12, LOW) instead of digitalWrite(6, LOW). Because pin 6 is never set LOW, the LED on pin 6 turns on and remains on permanently instead of blinking.'
      }
    ],
    quiz: [
      {
        q: 'Which board from Lecture 9 has NO onboard Analog-to-Digital Converter (ADC) and therefore requires an external ADC integrated circuit to read analog sensors?',
        o: [
          'Arduino Uno R3 (6 ADC pins)',
          'Arduino Mega 2560 (16 ADC pins)',
          'ESP32 (18 channels of 12-bit ADC)',
          'Raspberry Pi 5 (40-pin digital GPIO header only)'
        ],
        a: 3,
        e: 'Lecture 9 Slide 8 explicitly states that the Raspberry Pi 5 has "No onboard Analog-to-Digital Converter (ADC); requires an external ADC IC for analog reading."'
      },
      {
        q: 'How many dedicated hardware UART serial ports do the Arduino Uno, ESP32, and Arduino Mega 2560 have respectively (Lecture 9)?',
        o: [
          'Uno: 1, ESP32: 3, Mega 2560: 4',
          'Uno: 4, ESP32: 1, Mega 2560: 2',
          'Uno: 2, ESP32: 2, Mega 2560: 2',
          'Uno: 0, ESP32: 1, Mega 2560: 1'
        ],
        a: 0,
        e: 'Uno has 1 hardware UART (Slide 5), ESP32 has 3 UARTs (Slide 10), and Mega 2560 has 4 dedicated hardware UART ports (Slide 6).'
      },
      {
        q: 'Which statement about operating logic voltages on Lecture 9 is TRUE?',
        o: [
          'All four boards (Uno, Mega, ESP32, Raspberry Pi 5) use 5V logic and are 5V tolerant.',
          'Arduino Uno and Mega operate at 5V logic, whereas ESP32 and Raspberry Pi 5 operate at 3.3V logic (and ESP32 GPIOs are NOT 5V tolerant).',
          'ESP32 operates at 12V logic while Arduino Uno operates at 3.3V logic.',
          'Raspberry Pi 5 requires 24V logic on its 40-pin GPIO header.'
        ],
        a: 1,
        e: 'Uno and Mega use 5V logic; ESP32 and Raspberry Pi 5 use 3.3V logic, and Slide 10 warns that ESP32 GPIOs are "3.3V logic level, not 5V tolerant".'
      },
      {
        q: 'What is the visible behaviour of the Lecture 9 Slide 11 sketch where `setup()` has `pinMode(6, OUTPUT);` and `loop()` runs `digitalWrite(6, HIGH); delay(1000); digitalWrite(12, LOW); delay(1000);`?',
        o: [
          'The LED on pin 6 blinks on and off every 1 second.',
          'The LED on pin 6 turns ON and stays ON continuously because `LOW` is mistakenly written to pin 12 instead of pin 6.',
          'The Arduino Mega fails to compile and throws a syntax error.',
          'Both pin 6 and pin 12 blink alternately at 10 Hz.'
        ],
        a: 1,
        e: 'Because `digitalWrite(12, LOW)` targets pin 12 rather than pin 6, pin 6 remains `HIGH` forever and the LED never turns off.'
      },
      {
        q: 'Which board features a Tensilica Xtensa Dual-Core 32-bit LX6 processor @ 240 MHz, 520 KB SRAM, integrated Wi-Fi + BLE, an Ultra-Low-Power (ULP) co-processor, and a ~10–15 µA Deep Sleep mode?',
        o: [
          'Arduino Uno R3',
          'Arduino Mega 2560',
          'ESP32',
          'Raspberry Pi 5'
        ],
        a: 2,
        e: 'Slides 9–10 list these exact specifications for the Espressif ESP32.'
      }
    ],
    theory: [
      {
        q: 'Using the five hardware selection parameters from Lecture 9, compare the Arduino Uno, Arduino Mega 2560, ESP32, and Raspberry Pi 5. Then recommend and justify the optimal board for: (a) a battery-powered wireless soil sensor reporting hourly for a year; (b) a wired CNC/3D-printer controller wiring 45 digital limit/stepper lines, 12 analog thermistors, and 3 UART modules; and (c) a local edge gateway running Linux, an MQTT broker, and dual MIPI camera video analytics. Finally, identify and fix the code bug in Slide 11\'s LED blink sketch.',
        model: '<p><b>Background:</b> Selecting embedded hardware begins by distinguishing a bare-metal <b>Microcontroller Unit (MCU)</b> from a Linux-capable <b>Single-Board Computer (SBC)</b> to avoid hardware misallocation. Lecture 9 evaluates boards across five parameters: <b>(1) Processing power, (2) Connectivity, (3) GPIO &amp; hardware interfaces, (4) Community &amp; ease of learning, and (5) Power consumption</b>.</p><p><b>Answer and solution:</b></p><p><b>1. Four-Board Comparison Across the 5 Parameters:</b></p><ul><li><b>Arduino Uno (R3 / R4 Minima):</b> 8-bit ATmega328P @ 16 MHz with 2 KB SRAM &amp; 32 KB Flash (R4: 32-bit Cortex-M4 @ 48 MHz, 32 KB SRAM, 256 KB Flash); USB only (no native wireless); 14 digital I/O (6 PWM), 6 ADC inputs, 1 UART/1 SPI/1 I<sup>2</sup>C at 5V logic; ~45 mA (~0.22 W); highest ease of learning.</li><li><b>Arduino Mega 2560:</b> 8-bit ATmega2560 @ 16 MHz, 8 KB SRAM, 256 KB Flash, 4 KB EEPROM; USB only; <b>54 digital I/O (15 PWM), 16 analog inputs (10-bit ADC), 4 hardware UARTs</b> at 5V logic; ~70 mA (~0.35 W); same beginner-friendly Arduino workflow.</li><li><b>ESP32:</b> Dual-core 32-bit Xtensa LX6 @ 240 MHz + ULP co-processor, 520 KB SRAM + 4–16 MB SPI Flash; <b>on-chip Wi-Fi (802.11 b/g/n) + Bluetooth 4.2/BLE</b>; ~34 GPIOs (3.3V logic, not 5V tolerant), <b>18-ch 12-bit ADC, 2-ch 8-bit DAC</b>, capacitive touch, 3 UART/2 SPI/2 I<sup>2</sup>C/2 I<sup>2</sup>S; 160–260 mA active TX but <b>~10–15 &mu;A in Deep Sleep</b>.</li><li><b>Raspberry Pi 5 (SBC):</b> Quad-core 64-bit Arm Cortex-A76 (BCM2712) @ 2.4 GHz, 4/8/16 GB LPDDR4X RAM, PCIe 2.0 NVMe/MicroSD, running full Linux; Dual-band 802.11ac Wi-Fi, BT 5.0/BLE, Gigabit Ethernet (PoE+); 40-pin 3.3V GPIO header, 2&times;4-lane MIPI camera/display, <b>NO onboard ADC</b>; draws 2.7–3.0 W idle and <b>8–12 W+ full load</b> (5V/5A PSU + active cooling).</li></ul><p><b>2. Scenario Recommendations:</b></p><ul><li><b>(a) Battery Wireless Soil Sensor &rarr; ESP32:</b> Needs native Wi-Fi/BLE connectivity, a 12-bit ADC for the soil probe, and a <b>10–15 &mu;A deep-sleep mode</b> so it can wake once an hour, transmit, and sleep for multi-year battery life.</li><li><b>(b) 45-Digital-Pin / 12-Analog / 3-UART Wired Controller &rarr; Arduino Mega 2560:</b> Needs 54 digital I/O pins (&gt; 45), 16 analog ADC inputs (&gt; 12), and 4 hardware UARTs (&ge; 3) with deterministic 5V bare-metal timing and no wireless overhead.</li><li><b>(c) Linux Edge Gateway with MQTT Broker &amp; Dual Cameras &rarr; Raspberry Pi 5:</b> Requires a 64-bit Linux OS, 4–16 GB RAM, Gigabit Ethernet/Wi-Fi, and dual 4-lane MIPI camera transceivers.</li></ul><p><b>3. Slide 11 Blink Sketch Bug &amp; Fix:</b></p><p>In Slide 11\'s <code>loop()</code>, <code>digitalWrite(6, HIGH)</code> turns pin 6 on, but <code>digitalWrite(12, LOW)</code> writes <code>LOW</code> to <b>pin 12</b> instead of pin 6. As a result, the LED on pin 6 stays on permanently. Fixing <code>digitalWrite(12, LOW);</code> to <b><code>digitalWrite(6, LOW);</code></b> makes the LED blink cleanly (1 s ON, 1 s OFF).</p><p><b>Scenario:</b> In a smart campus farm, 20 solar/battery <b>ESP32</b> soil nodes wake from 15 &mu;A deep sleep every hour to publish moisture readings over Wi-Fi to a mains-powered <b>Raspberry Pi 5</b> edge gateway, while an <b>Arduino Mega 2560</b> inside the greenhouse control panel drives 30 relay valves and reads 12 analog sensors.</p><p><b>How they combine:</b> Each board operates in its sweet spot — the ESP32 and Mega 2560 handle low-power wireless sensing and high-pin-count deterministic I/O at the perception/edge layer, while the Raspberry Pi 5 aggregates their streams and bridges to Azure.</p><p><b>Conclusion:</b> Evaluating processing, connectivity, GPIO/ADC/logic levels, ease of use, and power draw systematically eliminates hardware misallocation across any IoT deployment.</p>',
        rubric: [
          'Compares Uno, Mega 2560, ESP32, and Raspberry Pi 5 across all 5 parameters with exact figures (clock, RAM, ADC count, UART count, logic voltage, power draw)',
          'Selects ESP32 for (a), Arduino Mega 2560 for (b), and Raspberry Pi 5 for (c) with parameter-based justifications',
          'Identifies the pin 6 vs pin 12 bug in Slide 11\'s blink sketch, explains that the LED stays permanently ON, and gives the corrected digitalWrite(6, LOW) line'
        ]
      }
    ]
  }
};
