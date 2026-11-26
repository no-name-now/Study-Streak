/* SEN 412 additions (25 Nov 2026)
   1. The real February 2026 paper, transcribed from "Survey of Programming/Exam (1).pdf" (scanned),
      replacing the earlier reconstruction. Model answers use the lecturer's slides where they cover
      the point; anything beyond the slides is labelled additional context.
   2. Project defense prep (CSC412 mini project, C vs Python), built from Omotayo's own project
      report and defense deck. Marked noExam so it stays out of mocks and the roadmap. */
(function(){
const D=window.COURSE_DATA.sen412;

D.past={
title:'PAU-CSC 412 · First Semester Examination, February 2026 (2.5 hours)',
note:'Transcribed word for word from the scanned paper (Exam (1).pdf). Answer Question ONE (17 marks) and any other three (16 marks each). Several parts go beyond the slides (functional programming, async scope, denotational semantics); those model answers are marked additional context.',
qs:[
{h:'Q1a · Methodologies and semantic models',marks:6,
 q:'Explain how historical programming methodologies: “structured → object-oriented → functional” have influenced the semantic models used in modern languages such as Python and Java. <b>(6 marks)</b>',
 pts:['Structured: sequence/selection/iteration, no goto, single-entry single-exit blocks','Structured legacy in Python and Java (if/while/for, block scope; Java reserves goto but cannot use it)','OO: encapsulation/data abstraction, inheritance, dynamic binding','OO legacy: Java classes and virtual dispatch; in Python everything is an object','Functional: first-class functions, lambdas, immutability, expressions without side effects','Functional legacy: Java 8 lambdas/streams; Python lambda, map/filter, comprehensions, closures','Conclusion: modern languages are multi-paradigm; the layers stack'],
 model:`<p><b>Background.</b> A methodology is a way of organising programs. Sebesta's history (deck 2) shows languages change to support the dominant methodology: machine efficiency in the 1950s, then people efficiency.</p>
<p><b>Answer and solution.</b></p><ol>
<li><b>Structured (late 1960s–70s).</b> Programs are built from three control structures (sequence, selection, iteration) with single-entry, single-exit blocks and no <code>goto</code>. Python and Java inherit this directly: <code>if/else</code>, <code>while</code>, <code>for</code>, block-structured, lexically scoped code. Java even reserves <code>goto</code> as a keyword but forbids its use.</li>
<li><b>Object-oriented (1980s–90s).</b> Data abstraction, encapsulation, inheritance and dynamic binding. The semantic model becomes “objects with state that receive messages”. Java puts all code inside classes and dispatches overridden methods at run time. In Python every value, even an <code>int</code> or a function, is an object with a type.</li>
<li><b>Functional (2000s on, additional context beyond the slides).</b> Functions are first-class values, data is preferably immutable, and programs are built from expressions rather than state changes. Java 8 added lambdas and streams; records (Java 16) are immutable. Python has <code>lambda</code>, <code>map</code>/<code>filter</code>, comprehensions, closures and generators.</li></ol>
<p><b>Scenario.</b> Passing students from a list of scores: structured, <code>for s in scores: if s &gt;= 50: passed.append(s)</code>; OO, a <code>Student</code> class with a <code>passed()</code> method; functional, <code>[s for s in scores if s &gt;= 50]</code> or Java <code>scores.stream().filter(s -&gt; s &gt;= 50).toList()</code>.</p>
<p><b>How they combine.</b> Each methodology added a layer instead of replacing the last: the structured loop runs inside an OO method that may take a functional lambda.</p>
<p><b>Conclusion.</b> Python and Java are multi-paradigm because their semantics carry all three methodologies.</p>`},
{h:'Q1b · Java vs Python: x + "5"',marks:5,
 q:`Analyze the following code pair, and discuss how binding time and type system design influence reliability and maintainability: <b>(5 marks)</b><pre>int x = 10;
System.out.println(x + "5"); // Java code

x = 10
print(x + "5") # Python code</pre>`,
 pts:['Java prints 105: + with a String operand is concatenation; 10 is converted to "10"','Java: type of x bound statically at compile time (declaration)','Python raises TypeError at run time: unsupported operand types int and str','Python: type bound dynamically at assignment; checked when the line runs','Reliability: Java catches most type errors before running, but implicit conversion can hide intent (105, not 15); Python refuses to coerce (strong) but the error appears only at run time','Maintainability: declared types document Java code; Python needs tests or type hints'],
 model:`<p><b>Background.</b> Binding time is when an attribute (here, a type) is attached to a name. Static binding happens before run time; dynamic binding happens during execution (deck 5).</p>
<p><b>Answer and solution.</b></p><ul>
<li><b>Java</b> prints <code>105</code>. <code>x</code> is bound to <code>int</code> at compile time. Because one operand of <code>+</code> is a <code>String</code>, Java converts 10 to "10" and concatenates. The compiler accepts the code.</li>
<li><b>Python</b> stops with <code>TypeError: unsupported operand type(s) for +: 'int' and 'str'</code>. <code>x</code> gets its type when the assignment runs, and the check happens only when line 2 executes.</li></ul>
<p><b>Scenario.</b> A fee screen adds a ₦10 charge to an amount read as text. Java quietly shows “105”. Python crashes on the test run, so the bug is found, but only if that line is tested.</p>
<p><b>How they combine.</b> Reliability: static binding finds type errors early; strong typing (Python) refuses silent mixing. Java's implicit string conversion is a reliability hole; Python's late check is the other one. Maintainability: Java's declared types document intent and let IDEs refactor safely; Python is shorter but needs tests or type hints (PEP 484) to stay safe in large code.</p>
<p><b>Conclusion.</b> Early binding plus strong checking is the most reliable mix; each language gives up one half.</p>`},
{h:'Q1c · Python readability vs C efficiency',marks:4,
 q:'Given that Python favours readability while C favours efficiency, compare how each language’s syntax and binding mechanisms reflect their design priorities. <b>(4 marks)</b>',
 pts:['Python syntax: indentation for blocks, no declarations, no semicolons/braces, high-level built-ins','C syntax: explicit types, braces, semicolons, pointers, close to the machine','Python binding: dynamic type binding at assignment; implicit heap objects; automatic memory (reference counting)','C binding: static type binding at compile time; static/stack/explicit heap storage with malloc/free','Trade-off: readability/writability vs speed/control (with an example)'],
 model:`<p><b>Syntax.</b> Python uses indentation as block structure, needs no declarations and offers high-level constructs (<code>total = sum(marks)</code>), so code reads like pseudocode. C uses explicit types, braces, semicolons and pointers (<code>int total = 0; for (int i = 0; i &lt; n; i++) total += marks[i];</code>): more to write, but each line maps closely to machine operations.</p>
<p><b>Binding.</b> C binds types and storage before execution (static type binding; static, stack-dynamic and explicit heap-dynamic variables with <code>malloc</code>/<code>free</code>), so the compiler emits direct machine instructions with no run-time type checks. Python binds types during execution: every value is an implicit heap object carrying its type, and memory is reclaimed automatically. That costs speed but removes manual memory errors.</p>
<p><b>Conclusion.</b> C trades readability and safety for efficiency and control; Python trades speed for readability and writability (Sebesta's evaluation criteria).</p>`},
{h:'Q1d · One unifying design principle',marks:2,
 q:'Suggest and justify one design principle that could unify syntax, semantics, and type safety in a future high-level programming language. <b>(2 marks)</b>',
 pts:['Names one clear principle (e.g. static typing with type inference / safe by default; or orthogonality)','Justifies it across syntax, semantics and type safety with an example'],
 model:`<p><b>Principle: static type safety with type inference (“safe by default, short to write”).</b> The programmer writes Python-like code with no type clutter (<code>let total = 0</code>), but the compiler infers and checks every type before the program runs, as in Kotlin, Rust or TypeScript (additional context). Syntax stays readable, the meaning of each expression is fixed and predictable, and type errors such as <code>10 + "5"</code> are caught at compile time.</p>`},
{h:'Q2a · Static, stack-dynamic, heap-dynamic',marks:6,
 q:'Compare static, stack-dynamic, and heap-dynamic allocation categories using one clear example each from C, Java, and Python. <b>(6 marks)</b>',
 pts:['Static: bound to storage before execution, lives for the whole program; e.g. C static local / global; Java static field','Stack-dynamic: storage bound when the declaration is elaborated at run time, freed on return; e.g. C/Java local variable','Heap-dynamic (explicit): allocated by an operator (malloc/new) and freed by free or GC; C malloc, Java new','Implicit heap-dynamic: allocated on assignment; every Python value','Advantages and disadvantages of each (speed/history vs recursion vs flexibility/cost)','Examples from all three languages'],
 model:`<p><b>Background.</b> A variable's lifetime is the time it is bound to a memory cell. Sebesta (deck 5) groups variables by how storage is bound.</p>
<table><tr><th>Category</th><th>When storage is bound</th><th>C</th><th>Java</th><th>Python</th></tr>
<tr><td>Static</td><td>Before execution; stays bound until the program ends</td><td><code>static int count = 0;</code> inside a function keeps its value between calls</td><td><code>static int total;</code> class field</td><td>No true static variables; closest is a module-level name (additional context)</td></tr>
<tr><td>Stack-dynamic</td><td>When the declaration is elaborated at run time; freed when the function returns</td><td><code>int i;</code> local in a function</td><td><code>int i</code> local in a method</td><td>Local names live in the function's frame, but the values they name are heap objects</td></tr>
<tr><td>Explicit heap-dynamic</td><td>By an explicit instruction; freed explicitly or by GC</td><td><code>int *p = malloc(4*n); … free(p);</code></td><td><code>new int[10]</code>, freed by the garbage collector</td><td>—</td></tr>
<tr><td>Implicit heap-dynamic</td><td>When a value is assigned</td><td>—</td><td>—</td><td><code>x = [1, 2]</code>: list created on the heap, freed when no reference remains</td></tr></table>
<p><b>Trade-offs.</b> Static: fast, history-sensitive, but no recursion. Stack-dynamic: supports recursion and shares memory, but has allocation overhead. Explicit heap: dynamic structures, but leaks and dangling pointers in C. Implicit heap: highest flexibility, highest run-time cost.</p>
<p><b>Conclusion.</b> The earlier storage is bound, the faster and less flexible the variable.</p>`},
{h:'Q2b · x = [1, 2, 3]; y = x; y.append(4)',marks:6,
 q:`Evaluate the binding behaviour of this code and determine how it would differ between Python and C: <b>(6 marks)</b><pre>x = [1, 2, 3]
y = x
y.append(4)
print(x)    # code in Python</pre>`,
 pts:['Output: [1, 2, 3, 4]','y = x binds y to the same list object (no copy): aliasing / reference semantics','append mutates the shared object in place','Python: names bound to objects at run time; list is implicit heap-dynamic','C: arrays cannot be assigned; int *y = x makes an alias pointer; a fixed array cannot grow (needs malloc/realloc)','C struct/array copy (memcpy) gives value semantics: x unchanged; contrast'],
 model:`<p><b>Background.</b> In Python a variable is a name bound to an object at run time. Assignment copies the reference, not the object.</p>
<p><b>Answer and solution.</b> The output is <code>[1, 2, 3, 4]</code>. Line 1 creates one list on the heap and binds <code>x</code> to it. Line 2 binds <code>y</code> to the <i>same</i> object, so <code>x</code> and <code>y</code> are aliases. <code>append</code> changes that object in place, and printing <code>x</code> shows the change.</p>
<p><b>In C.</b> <code>int x[] = {1,2,3}; int y[] = x;</code> does not compile, because arrays cannot be assigned. <code>int *y = x;</code> creates an alias, so <code>y[0] = 9</code> changes <code>x[0]</code>, but the array has a fixed size bound at compile time and cannot be appended to. Growing needs a heap block (<code>malloc</code>/<code>realloc</code>) that the programmer manages. If you copy with <code>memcpy</code>, <code>x</code> stays <code>{1,2,3}</code>: value semantics.</p>
<p><b>Scenario.</b> A function that receives a list of course codes and appends one changes the caller's list too. That surprises a reader coming from C, where arrays passed by value inside structs are copied.</p>
<p><b>Conclusion.</b> Python binds names to shared heap objects at run time; C binds names to fixed storage at compile time and shares only through explicit pointers.</p>`},
{h:'Q2c · Aliasing and how to reduce it',marks:4,
 q:'Explain why aliasing affects readability and semantic transparency, and propose one mechanism to reduce aliasing errors. <b>(4 marks)</b>',
 pts:['Aliasing: two or more names for the same memory location/object','Readability: the reader must remember every alias; a change through one name silently changes the other','Semantic transparency: the meaning of an expression depends on hidden state, not just what is written','Mechanism: explicit copy (x.copy()/list(x)/deepcopy), immutable types (tuple, const/final), or ownership rules (Rust)'],
 model:`<p><b>Aliasing</b> means two names refer to the same memory cell or object (deck 5; Sebesta lists it as harmful to readability and reliability). A reader must track every alias to know a variable's value: after <code>y.append(4)</code>, nothing on the screen says <code>x</code> changed. The meaning of <code>print(x)</code> then depends on hidden history, which breaks semantic (referential) transparency.</p>
<p><b>Mechanism.</b> Copy explicitly when independence is needed (<code>y = x.copy()</code> or <code>copy.deepcopy(x)</code>), or use immutable types (<code>tuple</code>, Java <code>final</code> with immutable classes, C <code>const</code>). Additional context: Rust's ownership rules allow either many readers or one writer, so harmful aliasing cannot compile.</p>`},
{h:'Q3a · Ambiguity: two parse trees for a + b * c',marks:6,
 q:'Using the concept of context-free grammars, illustrate how ambiguous syntax can lead to different semantic interpretations of the same expression. Construct two parse trees for: a + b * c and explain their operational meaning. <b>(6 marks)</b>',
 pts:['Ambiguous grammar: a sentence with two or more distinct parse trees','Grammar e.g. <expr> → <expr> + <expr> | <expr> * <expr> | a | b | c','Tree 1: + at root → a + (b * c)','Tree 2: * at root → (a + b) * c','Operational meaning: code generated from the tree; different results (a=2,b=3,c=4 → 14 vs 20)','Fix: precedence levels <expr> → <expr> + <term> | <term>; <term> → <term> * <factor> | <factor>'],
 model:`<p><b>Background.</b> A grammar is ambiguous if one sentence has two or more distinct parse trees (deck 3B). Compilers use the tree to decide meaning, so ambiguity means two meanings.</p>
<p><b>Ambiguous grammar:</b> <code>&lt;expr&gt; → &lt;expr&gt; + &lt;expr&gt; | &lt;expr&gt; * &lt;expr&gt; | a | b | c</code></p>
<pre>Tree 1: a + (b * c)          Tree 2: (a + b) * c
        E                            E
      / | \\                        / | \\
     E  +  E                      E  *  E
     |    /|\\                    /|\\    |
     a   E * E                  E + E   c
         |   |                  |   |
         b   c                  a   b
(E = &lt;expr&gt;)</pre>
<p><b>Operational meaning.</b> Code is generated by walking the tree bottom-up. Tree 1: <code>t1 = b * c; t2 = a + t1</code>. Tree 2: <code>t1 = a + b; t2 = t1 * c</code>. With a=2, b=3, c=4, Tree 1 gives 14 and Tree 2 gives 20.</p>
<p><b>Fix.</b> Build precedence into the grammar so * sits lower in the tree:<br><code>&lt;expr&gt; → &lt;expr&gt; + &lt;term&gt; | &lt;term&gt;<br>&lt;term&gt; → &lt;term&gt; * &lt;factor&gt; | &lt;factor&gt;<br>&lt;factor&gt; → a | b | c</code><br>Now only Tree 1 can be derived, and left recursion also makes + and * left-associative.</p>`},
{h:'Q3b · Static vs dynamic scoping output',marks:6,
 q:`Analyze this code and explain its output under static and dynamic scoping models: <b>(6 marks)</b><pre>let x = 10;
function f() { console.log(x); }
function g() { let x = 5; f(); }
g();</pre>`,
 pts:['Static (lexical) scope: non-local x resolved where f is defined (its static parent = global)','Static output: 10 (what JavaScript actually prints)','Dynamic scope: x resolved through the calling sequence: f called by g, g has x = 5','Dynamic output: 5','Static scope: readable, checkable at compile time; dynamic: callee depends on caller, less reliable'],
 model:`<p><b>Static (lexical) scoping</b>, which JavaScript uses: <code>f</code> has no local <code>x</code>, so the search continues in the scope where <code>f</code> was <i>written</i>, its static parent, the global scope. That <code>x</code> is 10, so the program prints <b>10</b>. The <code>let x = 5</code> inside <code>g</code> is invisible to <code>f</code>.</p>
<p><b>Dynamic scoping</b>: the search follows the chain of <i>calls</i> at run time. <code>f</code> was called by <code>g</code>, and <code>g</code> has <code>x = 5</code>, so it prints <b>5</b>.</p>
<p><b>Why it matters.</b> Static scope can be read from the source and checked before running; the same function always sees the same non-locals. Under dynamic scope, a function's meaning changes with whoever calls it, which hurts readability and reliability (Sebesta). Few modern languages use dynamic scope (older Lisps, Bash locals: additional context).</p>`},
{h:'Q3c · Scope and lifetime in async/deferred calls (JS & Python)',marks:4,
 q:'Highlight the mechanisms in JavaScript and Python that modify the traditional notions of scope and binding lifetime, especially in asynchronous or deferred function calls. <b>(4 marks)</b>',
 pts:['Closures: captured variables outlive the function activation (lifetime ≠ scope)','JS var (function scope, hoisting) vs let/const (block scope, per-iteration binding): setTimeout loop prints 3,3,3 vs 0,1,2','Python late binding in closures/lambdas in a loop; fix with default argument; nonlocal/global','Async/await, promises, generators/coroutines keep frames alive across suspension'],
 model:`<p><i>Additional context: the slides cover scope and lifetime; the async examples below are from the JavaScript and Python documentation.</i></p><ul>
<li><b>Closures</b> (both languages): an inner function keeps the variables of the function that created it. Those variables stay alive after the outer function returns, so lifetime is no longer tied to the stack frame.</li>
<li><b>JavaScript <code>var</code> vs <code>let</code></b>: <code>for (var i=0;i&lt;3;i++) setTimeout(()=&gt;console.log(i))</code> prints 3 3 3, because there is one function-scoped <code>i</code>, read later. With <code>let</code> each iteration gets a new binding, so it prints 0 1 2. <code>var</code> is also hoisted.</li>
<li><b>Python late binding</b>: <code>fs = [lambda: i for i in range(3)]</code> returns 2, 2, 2 because <code>i</code> is looked up when the lambda runs. Fix: <code>lambda i=i: i</code>. <code>nonlocal</code> and <code>global</code> change where an assignment binds.</li>
<li><b>Async and generators</b>: <code>async/await</code>, promises, <code>yield</code> and Python coroutines suspend a function; its locals stay alive on the heap until it resumes.</li></ul>`},
{h:'Q4a · Types, binding and consistency: C arrays vs Python lists',marks:6,
 q:'Describe how data type definition, binding rules, and semantic consistency interact to ensure program correctness. Use an example involving arrays or lists in C and Python. <b>(6 marks)</b>',
 pts:['Type definition: set of values + operations (C array: fixed size, homogeneous; Python list: dynamic, heterogeneous)','Binding rules: C element type and size bound at compile time; Python list type/size bound and changed at run time','C: no bounds checking → a[5] on int a[5] is undefined behaviour (buffer overflow)','Python: bounds and types checked at run time → IndexError / TypeError','Semantic consistency: an operation means the same thing for every value of the type (e.g. + concatenates lists)','Conclusion: correctness = static checks + run-time checks + consistent semantics'],
 model:`<p><b>Background.</b> A data type defines a set of values and the operations allowed on them (deck 7). Binding rules say when a name gets its type and storage. Semantic consistency means each operation has one predictable meaning for its type.</p>
<p><b>Answer and solution.</b></p><ul>
<li><b>C:</b> <code>int a[5];</code> fixes the element type (int) and size (5) at compile time. The compiler rejects <code>a[0] = "x";</code> through its type rules. But C does not check subscripts: <code>a[5] = 1;</code> compiles and is undefined behaviour, a classic buffer overflow.</li>
<li><b>Python:</b> <code>a = [1, "two", 3.0]</code> may hold mixed types and grows with <code>append</code>. Types and indices are checked at run time: <code>a[5]</code> raises <code>IndexError</code>, and <code>sum([1, "2"])</code> raises <code>TypeError</code>.</li></ul>
<p><b>Scenario.</b> Storing 5 test scores: in C, writing a sixth score corrupts the next variable silently; in Python the program stops with a clear error.</p>
<p><b>How they combine.</b> Type definitions say what is legal, binding rules say when it is checked (compile time vs run time), and semantic consistency makes each operation predictable (<code>+</code> on lists always concatenates). Correctness needs all three; C leaves bounds to the programmer, Python checks at run time at a speed cost.</p>
<p><b>Conclusion.</b> Early binding catches type errors; run-time checking catches range errors; a language is safest when it does both.</p>`},
{h:'Q4b · Operational semantics: state transitions',marks:4,
 q:`Given your understanding of operational semantics, illustrate how the following Python statement describing the state transitions explicitly. <b>(4 marks)</b><pre>x = 5
z = x + 3 * 3
y = z - x
x = 10</pre>`,
 pts:['Operational semantics: meaning = sequence of state changes on an abstract machine','σ0 = {} → σ1 = {x:5}','σ2: evaluate 3*3 = 9 first (precedence), x + 9 = 14 → {x:5, z:14}','σ3: 14 − 5 = 9 → {x:5, z:14, y:9}; σ4: {x:10, z:14, y:9}; y does not change when x changes'],
 model:`<p>Operational semantics gives meaning by showing how each statement changes the machine state (deck 7 / Sebesta ch. 3). Let σ be the state (a map from names to values).</p>
<table><tr><th>Step</th><th>Statement</th><th>Evaluation</th><th>State after</th></tr>
<tr><td>0</td><td>—</td><td>—</td><td>σ0 = { }</td></tr>
<tr><td>1</td><td>x = 5</td><td>bind x to 5</td><td>σ1 = {x: 5}</td></tr>
<tr><td>2</td><td>z = x + 3 * 3</td><td>3 * 3 = 9 (higher precedence); lookup x = 5; 5 + 9 = 14</td><td>σ2 = {x: 5, z: 14}</td></tr>
<tr><td>3</td><td>y = z - x</td><td>14 − 5 = 9</td><td>σ3 = {x: 5, z: 14, y: 9}</td></tr>
<tr><td>4</td><td>x = 10</td><td>rebind x</td><td>σ4 = {x: 10, z: 14, y: 9}</td></tr></table>
<p>Note: changing x in step 4 does not change y or z; they hold values computed earlier.</p>`},
{h:'Q4c · Denotational semantics mapping',marks:6,
 q:'Construct a denotational semantics mapping for the same code. Express each step as a function transforming the program state. <b>(6 marks)</b>',
 pts:['Denotational semantics: map each construct to a mathematical function (state → state)','Expression function: M_e(n,σ)=n; M_e(v,σ)=σ(v) (error if undefined); M_e(E1 op E2,σ)=M_e(E1,σ) op M_e(E2,σ)','Assignment: M_a(v = E, σ) = σ[v ↦ M_e(E,σ)]','f1..f4 written for each statement','Program = composition f4 ∘ f3 ∘ f2 ∘ f1 applied to σ0 → {x:10, z:14, y:9}','Contrast with operational: no machine steps, pure mathematical mapping'],
 model:`<p><i>Additional context: the slides introduce denotational semantics briefly; this follows Sebesta ch. 3.</i></p>
<p><b>Background.</b> Denotational semantics maps each language construct to a mathematical object, here a function from state to state.</p>
<p><b>Meaning functions.</b><br>
M<sub>e</sub>(n, σ) = n &nbsp;(numeral)<br>
M<sub>e</sub>(v, σ) = σ(v), or <i>error</i> if v is undefined<br>
M<sub>e</sub>(E<sub>1</sub> + E<sub>2</sub>, σ) = M<sub>e</sub>(E<sub>1</sub>, σ) + M<sub>e</sub>(E<sub>2</sub>, σ) (likewise −, *)<br>
M<sub>a</sub>(v = E, σ) = σ[v ↦ M<sub>e</sub>(E, σ)]</p>
<p><b>Each statement as a function.</b><br>
f1(σ) = σ[x ↦ 5]<br>
f2(σ) = σ[z ↦ σ(x) + 9]<br>
f3(σ) = σ[y ↦ σ(z) − σ(x)]<br>
f4(σ) = σ[x ↦ 10]</p>
<p><b>Program.</b> M(P) = f4 ∘ f3 ∘ f2 ∘ f1, so M(P)({ }) = {x ↦ 10, z ↦ 14, y ↦ 9}.</p>
<p><b>Contrast.</b> Operational semantics lists the machine's steps; denotational semantics gives the same result as a composition of functions, which suits proofs about programs.</p>`},
{h:'Q5a · Strong/weak vs static/dynamic typing',marks:6,
 q:'Contrast strong vs weak typing and static vs dynamic typing using specific code examples from C, Java, JavaScript, and Python. Discuss how these distinctions influence type safety and execution speed. <b>(6 marks)</b>',
 pts:['Static: types bound/checked at compile time; dynamic: at run time','Strong: type errors always detected, no silent unsafe conversion; weak: implicit conversions allowed','C: static + weak (int x = 3.9 → 3; pointer casts; unions)','Java: static + strong (int x = "5"; is a compile error)','JavaScript: dynamic + weak ("5" * 2 = 10, "5" + 2 = "52")','Python: dynamic + strong ("5" + 2 → TypeError)','Safety: static+strong safest; weak hides bugs','Speed: static typing lets the compiler drop run-time type checks; dynamic needs type tags/checks'],
 model:`<p><b>Background.</b> Two separate questions: <i>when</i> are types checked (static = compile time, dynamic = run time) and <i>how strictly</i> (strong = every type error is detected; weak = the language converts silently).</p>
<table><tr><th></th><th>Strong</th><th>Weak</th></tr>
<tr><th>Static</th><td><b>Java</b>: <code>int x = "5";</code> → compile error</td><td><b>C</b>: <code>int x = 3.9;</code> → silently 3; pointer casts bypass types</td></tr>
<tr><th>Dynamic</th><td><b>Python</b>: <code>"5" + 2</code> → TypeError at run time</td><td><b>JavaScript</b>: <code>"5" * 2</code> → 10, <code>"5" + 2</code> → "52"</td></tr></table>
<p><b>Type safety.</b> Static + strong (Java) catches most errors before the program runs. Weak typing (C, JavaScript) lets wrong values flow on silently, which is how bugs reach users. Python is strong but reports errors only when the line executes.</p>
<p><b>Execution speed.</b> With static types the compiler knows each value's representation and emits direct machine instructions with no type checks (C is fastest). Dynamic languages tag every value with its type and check it on every operation, which is slower; JavaScript JIT engines speculate on types to recover speed (additional context).</p>
<p><b>Conclusion.</b> The ideal for safety is static and strong; dynamic typing buys flexibility at a run-time cost.</p>`},
{h:'Q5b · C "7" + 3 vs Python "7" + 3',marks:6,
 q:'Given the code statements in C: <code>int x = "7" + 3;</code> Python: <code>x = "7" + 3</code>, examine the following code fragments and identify the type binding time in each case and explain its effect on reliability. <b>(6 marks)</b>',
 pts:['C: "7" is a char array that decays to char*; "7" + 3 is pointer arithmetic, not 10 or "73"','The pointer points past the end of the 2-byte string → undefined behaviour if used','Assigning a pointer to int is a constraint violation: modern GCC (14+) error; older GCC only warned','C binding time: types of x and "7" bound statically at compile time; mismatch found by the compiler','Python: TypeError at run time (can only concatenate str to str); x is never bound','Python binding time: dynamic, at assignment/execution','Reliability: C\'s static check helps, but weak typing allowed old compilers/casts to accept nonsense; Python is strong but late'],
 model:`<p><b>C.</b> <code>"7"</code> has type <code>char[2]</code> and decays to a <code>char *</code>. <code>"7" + 3</code> is <b>pointer arithmetic</b>: it moves 3 bytes past the start of the string, beyond its end, so any use of it is undefined behaviour. Assigning that pointer to an <code>int</code> breaks C's typing rules. The types of <code>x</code> and the literal are bound at <b>compile time</b>, so the compiler sees the mismatch: GCC 14 and later report an error; older GCC only warned (the app's deck-5 card flags this). Reliability: static binding gives an early warning, but C's weak typing (and a cast like <code>(int)("7"+3)</code>) lets meaningless values through.</p>
<p><b>Python.</b> Types are bound <b>dynamically</b>, at run time. When the line runs, Python raises <code>TypeError: can only concatenate str (not "int") to str</code>, and <code>x</code> is never bound. Reliability: strong typing refuses to guess, so no wrong value escapes, but the error appears only if that line is executed, so it needs testing. Correct versions: <code>int("7") + 3</code> → 10, or <code>"7" + str(3)</code> → "73".</p>
<p><b>Conclusion.</b> C finds the problem earlier but is weaker; Python is stricter but later.</p>`},
{h:'Q5c · Coercion vs casting',marks:4,
 q:'Discuss the difference between type coercion and casting, and critically assess when coercion might be useful or dangerous in real-world systems. <b>(4 marks)</b>',
 pts:['Coercion: implicit conversion done by the compiler/interpreter','Casting: explicit conversion written by the programmer, e.g. (int)3.9, int("7")','Useful: widening numeric conversions (int → double in 1 + 2.5); readability','Dangerous: JS "5" + 2 = "52"; C narrowing/signed-unsigned (-1 < 1u is false); silent data loss','Assessment: allow safe widening only; require casts for narrowing or cross-type conversions'],
 model:`<p><b>Coercion</b> is an implicit conversion the language performs on its own (deck 7): <code>1 + 2.5</code> converts 1 to a double. <b>Casting</b> is an explicit conversion the programmer writes: <code>(int)3.9</code> in C, <code>int("7")</code> in Python.</p>
<p><b>Useful:</b> widening coercions that lose no information (int → double) keep arithmetic readable.</p>
<p><b>Dangerous:</b> in JavaScript, a payment form that reads amounts as text computes <code>"5000" + 200 = "5000200"</code>. In C, <code>-1 &lt; 1u</code> is false because −1 is coerced to a huge unsigned value. Narrowing coercions silently lose data. Additional context: Ariane 5 (1996) failed when a 64-bit float was converted to a 16-bit integer that overflowed.</p>
<p><b>Assessment.</b> Coercion reduces reliability because errors pass unnoticed (Sebesta). A safe design allows only widening coercions and requires explicit casts for everything else, as Java and Python largely do.</p>`}
]};

/* ---------------- Project defense prep (not examined) ---------------- */
D.topics.push({id:'t8',title:'Project defense prep: C vs Python case study',noExam:true,
why:'Your CA project (20 marks, 5 for the defense). Built from your own report and defense deck so you can answer the panel without notes. Not part of the written exam.',
cards:[
{h:'Your project in one breath',b:`<div class="def"><b>Title</b>Evolution Case Study with Mini Prototype: C versus Python. Data types, binding, lifetime and scope.</div>
<p>You compared how C and Python handle four dimensions: <b>data types</b>, <b>binding and lifetime</b>, <b>scope</b>, and <b>trade-offs</b>. Then you built <code>legb.c</code>, a C program that copies Python's LEGB name lookup.</p>
<p><b>Result:</b> 15 of 15 output lines identical to real Python, across 7 tests including 2 error cases.</p>
<div class="hook">One question asked of both languages, one small program as the evidence for each answer.</div>`},
{h:'Marking guide (20 marks)',b:`<table><tr><th>Component</th><th>Marks</th></tr><tr><td>Comparative analysis depth</td><td>5</td></tr><tr><td>Code demonstration accuracy</td><td>5</td></tr><tr><td>Prototype functionality</td><td>4</td></tr><tr><td>Conceptual explanation</td><td>3</td></tr><tr><td>Reflection and presentation</td><td>3</td></tr><tr><td>Defense</td><td>5</td></tr></table>
<div class="trap">The brief says more than 20% AI content fails the project. In the defense, be ready to explain any line of <code>legb.c</code> in your own words.</div>`},
{h:'Why C and Python (and not Java vs JavaScript)',b:`<ul><li><b>Opposite designs:</b> C is compiled, statically typed, manual memory. Python is interpreted, dynamically typed, automatic memory.</li>
<li><b>Documented history:</b> C through ISO standards (C89 → C23, ISO/IEC 9899:2024); Python through PEPs and the Python 2 → 3 break.</li>
<li><b>Easy to show:</b> GCC compiles one file as old or new C with a single <code>-std</code> flag.</li></ul>
<p><b>Not chosen:</b> Java and JavaScript share a name but have separate histories and goals, and the suggested prototype (type inference in JavaScript) was too large for the time.</p>`},
{h:'Tools and method',b:`<p>gcc 13.3 with <code>-std=c89</code>, <code>-std=c99</code>, <code>-std=c2x</code> (gcc's name for C23), plus <code>-Wall -pedantic</code> to flag anything outside the chosen standard. Python 3.13.</p>
<p>Comparative framework: each dimension asks the same question of both languages and answers it with one small program, old behaviour vs new where possible.</p>
<div class="trig">“Why c2x, not c23?” → gcc 13 calls the C23 mode <code>-std=c2x</code>.</div>`},
{h:'Evidence 1: data types',b:`<table><tr><th>C</th><th>Python</th></tr>
<tr><td><code>5 / 2</code> → 2</td><td><code>5 / 2</code> → 2.5 (Python 2 gave 2; PEP 238)</td></tr>
<tr><td>C89: no bool, use int. C99: <code>bool b = 5</code> → 1 (<code>_Bool</code>, <code>&lt;stdbool.h&gt;</code>)</td><td><code>x = 5</code> then <code>x = "five"</code>: type lives on the value</td></tr>
<tr><td>C23: <code>auto x = 3.5</code> → double (sizeof 8)</td><td><code>def double(n: int)</code>; <code>double("ab")</code> → "abab": hints (PEP 484, 3.5) are not enforced</td></tr></table>
<div class="hook">C fixes a variable's type at compile time. Python attaches the type to the value.</div>`},
{h:'Evidence 2: binding and lifetime',b:`<ul><li>C <code>static int persistent</code>: 1, 2, 3 across calls. Automatic local: always 1 (new storage each call).</li>
<li>C <code>x = "hello"</code> on an int → compile error (<code>-Wint-conversion</code>, shown with <code>-DSHOW_ERROR</code>).</li>
<li>C heap memory lives until <code>free()</code>.</li>
<li>Python <code>a = 10</code> then <code>a = [1, 2]</code>: rebinding to a new object and type.</li>
<li>Python object freed when its reference count reaches 0 (<code>del obj</code>, then <code>del alias</code>).</li>
<li>Default list shared between calls: <code>[1]</code> then <code>[1, 2]</code>, because the default is created once, when <code>def</code> runs.</li></ul>
<div class="hook">C binds before the program runs and frees when told. Python binds as it runs and frees by itself.</div>`},
{h:'Evidence 3: scope',b:`<ul><li>C block scope: <code>x</code> = 2, 3, 2 as you enter and leave an inner block; <code>show()</code> sees the global 1.</li>
<li>C89 rejects <code>for (int i = 0; …)</code>: “only allowed in C99 or C11 mode”. C99 accepts it, and <code>i</code> exists only inside the loop.</li>
<li>Python LEGB: Local → Enclosing → Global → Built-in.</li>
<li><code>nonlocal</code> added in Python 3.0 (PEP 3104); nested scopes came in Python 2.1/2.2.</li>
<li>A comprehension variable no longer leaks in Python 3.</li>
<li>Assigning to a name before reading it inside a function gives <code>UnboundLocalError</code>.</li></ul>
<div class="hook">Opposite philosophies, same direction: both languages narrowed scope over time.</div>`},
{h:'The prototype: legb.c',b:`<div class="flow"><span>L inner()</span><em>→</em><span>E outer()</span><em>→</em><span>G module</span><em>→</em><span>B builtins</span></div>
<ul><li><b>Tagged values:</b> each value carries its type (int, str or built-in), as in Python.</li>
<li><b>Scopes:</b> linked lists of bindings, each with a pointer to its parent scope.</li>
<li><b>lookup()</b> walks outward and stops at the first match. No match → NameError.</li>
<li><b>assign()</b> binds in the current scope, but <code>global</code> redirects to the module scope and <code>nonlocal</code> to the nearest enclosing function. Bad <code>nonlocal</code> → SyntaxError.</li>
<li><b>Verification:</b> <code>legb_reference.py</code> runs the same 7 tests in real Python; <code>compare.py</code> compares output line by line.</li></ul>
<p>Demo: <code>gcc -std=c99 legb.c -o legb</code>, <code>.\\legb.exe --trace</code>, <code>python compare.py</code>.</p>`},
{h:'Trade-offs, lessons and limitation',b:`<table><tr><th></th><th>C</th><th>Python</th></tr><tr><td>Gains</td><td>Speed, efficient code, full memory control</td><td>Readability, writability, no manual memory errors</td></tr><tr><td>Gives up</td><td>Reliability and writability</td><td>Speed; some type errors only at run time</td></tr></table>
<p><b>Three lessons:</b> (1) binding time explains most differences; (2) every design gains something by giving something up; (3) languages evolve to fix the mistakes programmers keep making.</p>
<div class="trap">Limitation to state before they ask: the prototype covers lookup and assignment, not closures that outlive their function, and not classes.</div>`}
],
recall:[
['What four dimensions did your project compare?','Data types; binding and lifetime; scope; semantics and design trade-offs.'],
['Why C and Python?','Opposite designs (compiled/static/manual vs interpreted/dynamic/automatic), documented histories (ISO standards, PEPs), and easy to demonstrate with one gcc -std flag.'],
['Why not Java vs JavaScript?','Similar names but separate histories and goals; the type-inference prototype was too large for the time.'],
['What compiler and flags did you use?','gcc 13.3 with -std=c89, -std=c99, -std=c2x, plus -Wall -pedantic; Python 3.13.'],
['What does legb.c do?','Simulates Python LEGB name resolution in C: tagged values, scopes as linked lists with parent pointers, lookup() and assign() with global/nonlocal.'],
['How did you verify the prototype?','legb_reference.py runs the same tests in real Python and compare.py compares output line by line: 15/15 lines identical over 7 tests, 2 of them error cases.'],
['Which errors does the prototype reproduce?','NameError for an undefined name and SyntaxError for an invalid nonlocal.'],
['What is the prototype\'s limitation?','Covers lookup and assignment only: not closures that outlive their function, and not classes.'],
['What does bool b = 5 store in C99?','1 (C99 _Bool via <stdbool.h>).'],
['What does auto x = 3.5 mean in C23?','Type inference: x is a double (sizeof 8).'],
['Why does a Python default list grow between calls?','The default object is created once, when def runs, and shared by every call.'],
['Which PEP made 5 / 2 equal 2.5?','PEP 238 (true division, Python 3).'],
['Which PEP added nonlocal?','PEP 3104 (Python 3.0).'],
['State your three lessons.','Binding time explains most differences; every design gains by giving something up; languages evolve to fix programmers\' recurring mistakes.']
],
quiz:[
{k:'mcq',q:'How many output lines matched real Python in your prototype test?',o:['7 of 7','15 of 15','12 of 15','10 of 10'],a:1,w:'15/15 lines across 7 tests, including 2 error cases.'},
{k:'mcq',q:'gcc 13 calls the C23 mode…',o:['-std=c23','-std=c2x','-std=gnu11','-std=c18'],a:1},
{k:'tf',q:'Your prototype handles closures that outlive their enclosing function.',a:false,w:'That is the stated limitation.'},
{k:'gap',q:'Python looks up names in the order Local, Enclosing, Global, ____.',a:'Built-in',alt:['builtin','builtins','built-ins']},
{k:'mcq',q:'What does the C89 compiler say about for (int i = 0; …)?',o:['Accepted silently','Only allowed in C99 or C11 mode','Runtime error','Warning only'],a:1},
{k:'tf',q:'Python type hints are enforced at run time, so double("ab") fails.',a:false,w:'Hints are not enforced: double("ab") returns "abab".'}
],
theory:[
{q:'Panel: “Walk us through how your prototype resolves a name, and prove it matches Python.”',pts:['LEGB order','Tagged values','Scopes as linked lists with parent pointers','lookup() stops at first match; NameError','assign() with global/nonlocal; SyntaxError for bad nonlocal','Verification: reference .py + compare.py; 15/15 lines, 7 tests'],
 model:`<p><b>Background.</b> Python resolves names at run time in the order Local, Enclosing, Global, Built-in. C resolves names at compile time and has no nested functions, so I had to build the scopes myself.</p>
<p><b>Answer.</b> Each value is a struct with a type tag (int, str or built-in). Each scope is a linked list of bindings with a pointer to its parent scope. <code>lookup()</code> starts in the innermost scope and walks the parent chain, stopping at the first binding with a value; if none is found it reports NameError. <code>assign()</code> binds in the current scope unless the name is declared <code>global</code> (module scope) or <code>nonlocal</code> (nearest enclosing function); a bad <code>nonlocal</code> gives SyntaxError.</p>
<p><b>Scenario/proof.</b> <code>legb_reference.py</code> runs the same 7 tests in real Python, and <code>compare.py</code> runs both and compares output line by line: 15 of 15 lines identical, including the two error cases.</p>
<p><b>Conclusion.</b> It reproduces lookup and assignment; closures that outlive their function and classes are outside its scope.</p>`},
{q:'Panel: “What did this project teach you about language design?”',pts:['Binding time explains most differences (example)','Every design trades something (C speed vs Python readability)','Languages evolve to fix mistakes (true division, loop-scoped i, nonlocal)','Why Python is slower: name lookup work done on every use','Relevance to current trends (type hints, safety)'],
 model:`<p><b>Background.</b> I compared four dimensions in C and Python with matched programs.</p>
<p><b>Answer.</b> (1) Binding time explains most differences: C binds types and storage before the program runs; Python binds while it runs. (2) Every design gains by giving something up: C gains speed and control and loses safety; Python gains readability and loses speed. (3) Languages evolve to fix recurring mistakes: Python 3 made <code>/</code> true division and stopped comprehension variables leaking; C99 confined loop variables to the loop.</p>
<p><b>Scenario.</b> Building LEGB in C took tables, pointers and type tags. Python does that work on every name you use, which is part of why it runs slower.</p>
<p><b>How they combine / conclusion.</b> Both languages are moving the same way: narrower, more predictable scope and more expressive typing (C23 <code>auto</code>, Python type hints). I now check binding time and scope first when I read unfamiliar code.</p>`}
]});
})();
