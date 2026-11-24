COURSE_DATA["sen419"]={topics:[
{id:'t1',title:'UI/UX and front-end development',why:'UI vs UX, design principles and the front-end stack.',
cards:[
{h:'UI vs UX',b:`<table><tr><th>UI</th><th>UX</th></tr><tr><td>The look: layout, colour, typography, buttons</td><td>The whole experience: ease, efficiency, satisfaction</td></tr></table><p>UX process: research → personas → user flows → wireframes → prototypes → usability testing → iterate.</p><p>Principles: consistency, visual hierarchy, feedback, affordance, accessibility (WCAG: contrast, alt text, keyboard use), responsive design.</p>`},
{h:'Front-end stack',b:`<p><b>HTML</b> = structure · <b>CSS</b> = presentation (Flexbox, Grid, media queries) · <b>JavaScript</b> = behaviour (DOM, events, fetch). Frameworks: React (components, props, state, virtual DOM), Vue, Angular. Tooling: npm, Vite.</p>`}],
recall:[['UI vs UX?','UI is the visual interface; UX is the overall experience of using the product.'],['Role of HTML, CSS and JS.','Structure, presentation, behaviour.'],['What is responsive design?','Layouts adapt to screen size, using fluid grids and media queries.'],['Name three WCAG practices.','Sufficient contrast, alt text, keyboard navigation.']],
quiz:[{k:'mcq',q:'Which CSS feature adapts styles to screen width?',o:['Media queries','Selectors','Variables','Animations'],a:0},{k:'tf',q:'A wireframe is a high-fidelity, fully interactive design.',a:false},{k:'gap',q:'React updates a virtual ___ before touching the real page.',a:'dom'}],
theory:[{q:'Distinguish UI from UX and describe the UX design process for a campus food-ordering app.',pts:['UI def','UX def','Research/personas','Wireframes','Prototype','Usability testing','Iterate'],model:'<p>UI is the visual layer; UX is the whole experience. For a campus food app: interview students, create personas, map ordering flows, wireframe, build a clickable prototype, test with students and iterate on pain points such as checkout steps.</p>'}]},
{id:'t2',title:'Front-end practical',why:'Hands-on lab: expect "write the code" questions.',
cards:[
{h:'DOM and events',b:`<pre>const btn = document.querySelector('#add');
btn.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = input.value;
  list.appendChild(li);
});</pre><p>Fetch API: <code>const res = await fetch('/api/items'); const data = await res.json();</code></p>`},
{h:'React component',b:`<pre>function Counter(){
  const [count, setCount] = useState(0);
  return &lt;button onClick={() =&gt; setCount(count + 1)}&gt;{count}&lt;/button&gt;;
}</pre><p><b>Props</b> pass data down; <b>state</b> is local, changing state re-renders. <code>useEffect</code> runs side effects (fetching).</p>`}],
recall:[['How do you attach a click handler in plain JS?','element.addEventListener("click", handler).'],['Props vs state?','Props are passed in from the parent and read-only; state is local and changing it re-renders.'],['Which hook fetches data after render?','useEffect.']],
quiz:[{k:'mcq',q:'Which method parses a fetch response body as JSON?',o:['res.text()','res.json()','JSON.stringify()','res.body()'],a:1},{k:'gap',q:'In React, useState returns the value and a ___ function.',a:'setter',alt:['set','update']}],
theory:[{q:'Write a React component that fetches a list of courses from /api/courses and displays them.',pts:['useState for list','useEffect with fetch','await res.json()','map to li with key','Loading/error handling'],model:'<pre>function Courses(){\n  const [items,setItems]=useState([]);\n  useEffect(()=>{ fetch("/api/courses").then(r=>r.json()).then(setItems); },[]);\n  return &lt;ul&gt;{items.map(c=>&lt;li key={c.id}&gt;{c.title}&lt;/li&gt;)}&lt;/ul&gt;;\n}</pre>'}]},
{id:'t3',title:'Backend development',why:'Client–server, REST, HTTP methods and status codes, databases, auth.',
cards:[
{h:'Client–server and REST',b:`<p>The backend handles business logic, data storage, authentication and APIs. <b>REST</b>: resources at URLs, stateless requests, standard HTTP methods.</p><table><tr><th>Method</th><th>Use</th></tr><tr><td>GET</td><td>Read</td></tr><tr><td>POST</td><td>Create</td></tr><tr><td>PUT/PATCH</td><td>Replace/update</td></tr><tr><td>DELETE</td><td>Remove</td></tr></table><p>Status codes: 200 OK · 201 Created · 400 Bad Request · 401 Unauthorized · 403 Forbidden · 404 Not Found · 500 Server Error.</p>`},
{h:'Stack pieces',b:`<p>Runtimes/frameworks: Node.js + Express, Spring Boot, Django, Laravel. Databases: SQL (PostgreSQL, MySQL) vs NoSQL (MongoDB). <b>ORM</b> maps tables to objects. Auth: sessions vs <b>JWT</b> tokens; hash passwords (bcrypt). Middleware: functions that run on each request (logging, auth).</p>`}],
recall:[['Name the four main HTTP methods and their uses.','GET read, POST create, PUT/PATCH update, DELETE remove.'],['401 vs 403?','401: not authenticated; 403: authenticated but not allowed.'],['What does "stateless" mean in REST?','Each request carries all information needed; the server stores no client session state between requests.'],['What is an ORM?','A layer that maps database tables to programming-language objects.']],
quiz:[{k:'mcq',q:'Creating a new user returns which status code?',o:['200','201','204','404'],a:1},{k:'tf',q:'Passwords should be stored encrypted so they can be decrypted later.',a:false,w:'They should be hashed (bcrypt), not reversibly encrypted.'},{k:'gap',q:'JWT stands for JSON Web ___.',a:'token'}],
theory:[{q:'Design a REST API for a library\'s books resource, with methods, endpoints and status codes.',pts:['GET /books','GET /books/:id','POST /books → 201','PUT/PATCH /books/:id','DELETE /books/:id','Error codes 400/404','Auth'],model:'<p>GET /books (200), GET /books/{id} (200 or 404), POST /books (201, 400 on invalid data), PUT /books/{id} (200), DELETE /books/{id} (204). Protect write routes with JWT auth (401/403).</p>'}]},
{id:'t4',title:'Backend practical',why:'Expect to write a route handler.',
cards:[
{h:'Express route',b:`<pre>const express = require('express');
const app = express();
app.use(express.json());
app.get('/api/books', async (req, res) => {
  const books = await Book.find();
  res.json(books);
});
app.post('/api/books', async (req, res) => {
  const book = await Book.create(req.body);
  res.status(201).json(book);
});
app.listen(3000);</pre><p><code>express.json()</code> parses JSON bodies; <code>req.params</code> for path values; <code>req.query</code> for ?query strings.</p>`}],
recall:[['Which middleware parses JSON bodies in Express?','express.json().'],['req.params vs req.query?','params: path segments (/books/:id); query: ?key=value.']],
quiz:[{k:'mcq',q:'In /books/42, how do you read 42 with route /books/:id?',o:['req.query.id','req.params.id','req.body.id','req.id'],a:1},{k:'tf',q:'res.status(201).json(obj) sends a Created response with JSON.',a:true}],
theory:[{q:'Write Express routes to get one book by id and delete it, handling not-found.',pts:['GET /:id','404 if missing','DELETE','204','async/await'],model:'<pre>app.get("/api/books/:id", async (req,res)=>{\n  const b = await Book.findById(req.params.id);\n  if(!b) return res.status(404).json({error:"Not found"});\n  res.json(b);\n});\napp.delete("/api/books/:id", async (req,res)=>{\n  await Book.findByIdAndDelete(req.params.id);\n  res.status(204).end();\n});</pre>'}]},
{id:'t5',title:'Mobile development',why:'React Native + Expo terms from the tutorial sheet.',
cards:[
{h:'Approaches',b:`<table><tr><th>Native</th><th>Cross-platform</th><th>Web/PWA</th></tr><tr><td>Kotlin/Java (Android), Swift (iOS): best performance</td><td>React Native, Flutter: one codebase</td><td>Runs in browser, installable</td></tr></table>`},
{h:'React Native + Expo terms',b:`<p><b>React Native</b>: build native apps with React components (View, Text, Button). <b>Expo</b>: toolchain around RN. <b>Expo Go</b>: app to preview your project on a phone via QR code. <b>Component</b>, <b>state</b>, <b>route</b> (Expo Router screens). <b>EAS</b> (Expo Application Services) builds and submits. <b>APK</b> = installable Android package; <b>AAB</b> = Android App Bundle for Play Store. <b>Prebuild</b> generates native android/ios folders. <b>Gradle</b> = Android build system; <b>Android SDK</b>; <b>dev build</b> = custom Expo Go with your native modules; <b>ADB</b> = Android Debug Bridge.</p><p>Store fees: Google Play <b>$25 one-time</b>; Apple Developer <b>$99/year</b>.</p>`}],
recall:[['What is Expo Go?','An app that runs your Expo project on a phone for testing, via QR code.'],['APK vs AAB?','APK is an installable Android package; AAB is the bundle format uploaded to Google Play.'],['What is EAS?','Expo Application Services: cloud build and submission.'],['Store developer fees?','Google Play $25 once; Apple $99 per year.'],['What does ADB do?','Android Debug Bridge: communicates with a device for installing and debugging.']],
quiz:[{k:'mcq',q:'Google Play requires which upload format for new apps?',o:['APK','AAB','IPA','EXE'],a:1},{k:'gap',q:'The Android build system is ___.',a:'gradle'},{k:'tf',q:'Apple\'s developer programme costs $25 once.',a:false}],
theory:[{q:'Compare native and cross-platform mobile development and describe the Expo workflow from code to Play Store.',pts:['Native pros/cons','Cross-platform pros/cons','Create project','Test in Expo Go','EAS build AAB','Submit; $25 fee'],model:'<p>Native gives best performance and API access but two codebases; cross-platform shares one codebase at some performance cost. Expo: create the app, test via Expo Go, use a dev build for native modules, build an AAB with EAS, submit to Google Play ($25 one-time).</p>'}]},
{id:'t6',title:'Deployment',why:'Hosting models, CI/CD, containers, environments.',
cards:[
{h:'Deployment concepts',b:`<p>Environments: development → staging → production. Hosting: static (Netlify, Vercel, GitHub Pages), PaaS (Render, Heroku), IaaS (VMs on AWS/Azure), containers (<b>Docker</b> images, Kubernetes orchestration), serverless functions.</p><p><b>CI/CD</b>: continuous integration (build and test on every push) and continuous delivery/deployment (automatic release). Environment variables hold secrets; never commit .env. Domain + DNS + HTTPS (TLS certificates).</p>`}],
recall:[['CI vs CD?','CI builds and tests each change; CD automatically delivers/deploys passing builds.'],['Docker image vs container?','An image is the packaged template; a container is a running instance of it.'],['Where should API keys live in deployment?','In environment variables / secret stores, not in the repository.']],
quiz:[{k:'mcq',q:'Which hosts a static React build cheaply?',o:['Netlify/Vercel','A mainframe','FTP to a phone','Kubernetes only'],a:0},{k:'tf',q:'Staging should mirror production for final testing.',a:true}],
theory:[{q:'Describe a CI/CD pipeline for deploying a Node.js API.',pts:['Push to Git','CI: install, test, lint','Build Docker image','Deploy to staging','Approve → production','Secrets via env','Monitoring/rollback'],model:'<p>A push triggers GitHub Actions to install, lint and test; a Docker image is built and pushed; it deploys to staging, then production after approval. Secrets come from environment variables; monitoring and rollback complete the loop.</p>'}]},
{id:'t7',title:'Deployment practical',why:'Commands you may be asked to write.',
cards:[
{h:'Commands',b:`<pre># Dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node","server.js"]

docker build -t myapi .
docker run -p 3000:3000 myapi

npm run build          # front-end production build
eas build -p android   # Expo build</pre>`}],
recall:[['Which Dockerfile instruction sets the start command?','CMD.'],['What does -p 3000:3000 do?','Maps host port 3000 to container port 3000.']],
quiz:[{k:'mcq',q:'Which command creates an image from a Dockerfile?',o:['docker run','docker build','docker pull','docker ps'],a:1},{k:'gap',q:'The Dockerfile instruction that picks the base image is ___.',a:'from'}],
theory:[{q:'Write a Dockerfile for a Node.js app and the commands to build and run it.',pts:['FROM','WORKDIR','COPY package + npm install','COPY source','EXPOSE','CMD','build/run commands'],model:'<p>See the card: FROM node:20-alpine, WORKDIR /app, copy package files, npm install, copy source, EXPOSE 3000, CMD node server.js; then docker build -t myapi . and docker run -p 3000:3000 myapi.</p>'}]}
]};
