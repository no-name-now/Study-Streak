module.exports = {
t3: {
cards: [
{h:'Four levels of language description',b:`<table><tr><th>Level</th><th>Defines</th></tr><tr><td><b>Syntax</b></td><td>Valid form and structure of expressions, statements, program units</td></tr><tr><td><b>Semantics</b></td><td>Meaning and behaviour of legal constructs when executed</td></tr><tr><td><b>Pragmatics</b></td><td>How the language is meant to be used in practice</td></tr><tr><td><b>Implementation</b></td><td>How a machine executes legal sentences while preserving the semantics</td></tr></table><p>A description serves: other language designers, implementers, and programmers (users). One problem: the <b>diversity of people</b> who must understand it.</p><div class="hook">S-S-P-I: Shape, Sense, Practice, Implementation.</div>`},
{h:'Lexical, concrete and abstract syntax',b:`<ul><li><b>Lexical syntax</b> (lexical specification): how characters form lexemes: identifiers, operators, literals, punctuation. The lowest level.</li><li><b>Concrete syntax</b>: the full structure of programs using lexical symbols as the alphabet, including punctuation, delimiters and exact forms.</li><li><b>Abstract syntax</b>: the core computational structure with "syntactic sugar" (parentheses, semicolons, keywords) stripped away.</li></ul><p>The <b>lexical analyser</b> groups the raw character stream into lexemes.</p>`},
{h:'Lexeme table: index = 2 * count + 17;',b:`<table><tr><th>Lexeme</th><th>Token</th></tr><tr><td>index</td><td>identifier</td></tr><tr><td>=</td><td>assign_op</td></tr><tr><td>2</td><td>int_literal</td></tr><tr><td>*</td><td>mult_op</td></tr><tr><td>count</td><td>identifier</td></tr><tr><td>+</td><td>add_op</td></tr><tr><td>17</td><td>int_literal</td></tr><tr><td>;</td><td>semicolon</td></tr></table><div class="trap">The slides call = both "assign_op" and "equal_sign" in different examples. Either is accepted; be consistent.</div>`},
{h:'Chomsky, Backus and Naur',b:`<p>Late 1950s: <b>Noam Chomsky</b> defined four classes of generative grammars. Two matter here: <b>regular grammars</b> (for lexical tokens) and <b>context-free grammars</b> (for program syntax).</p><p>Independently, <b>John Backus and Peter Naur</b> created BNF for <b>ALGOL 60</b>. BNF is equivalent to context-free grammars.</p><p>Recognizer: device R that reads strings over alphabet Σ and says if each is in language L. Generators (grammars) are preferred for human study.</p>`},
{h:'BNF rule anatomy',b:`<p><code>&lt;assign&gt; → &lt;var&gt; = &lt;expression&gt;</code></p><ul><li>LHS = the abstraction being defined; RHS = its definition (tokens, lexemes, other abstractions).</li><li>The whole thing is a <b>rule</b> or <b>production</b>; a grammar is a collection of rules.</li><li>Terminals cannot be expanded further.</li><li>A non-terminal can have <b>more than one RHS</b>, separated by |.</li><li>BNF has <b>no ellipsis (...)</b>, so lists use recursion: LHS appears on the RHS.</li></ul><p>Example sentence for the rule: <code>total = subtotal1 + subtotal2</code>.</p>`}
],
recall: [
['Four levels of language description.','Syntax, semantics, pragmatics, implementation.'],
['Define pragmatics.','How the language is intended to be used in practical programming contexts.'],
['Concrete vs abstract syntax?','Concrete: full structure including punctuation and delimiters. Abstract: core structure with syntactic sugar removed.'],
['Which Chomsky grammar class describes tokens, and which describes program syntax?','Regular grammars for tokens; context-free grammars for syntax.'],
['Who developed BNF and for which language?','John Backus and Peter Naur, for ALGOL 60.'],
['Why does BNF use recursion for lists?','BNF has no ellipsis (...), so variable-length lists are described by putting the LHS non-terminal on the RHS.'],
['Token for "+" in index = 2 * count + 17;','add_op.']
],
quiz: [
{k:'mcq',q:'Which level describes how a language is intended to be used?',o:['Syntax','Semantics','Pragmatics','Implementation'],a:2},
{k:'mcq',q:'Syntax with parentheses, semicolons and keywords stripped away is…',o:['Lexical','Concrete','Abstract','Pragmatic'],a:2},
{k:'gap',q:'Regular grammars describe lexical ___.',a:'tokens',alt:['token']},
{k:'mcq',q:'BNF was first used to describe…',o:['FORTRAN','ALGOL 60','COBOL','LISP'],a:1},
{k:'tf',q:'A non-terminal in BNF can have more than one right-hand side.',a:true},
{k:'mcq',q:'In index = 2 * count + 17; the token for 17 is…',o:['identifier','int_literal','add_op','semicolon'],a:1},
{k:'gap',q:'A BNF rule is also called a ___.',a:'production'}
]
},
t4: {
cards: [
{h:'Grammar vs derivation',b:`<p>A <b>grammar</b> is a generative device: its rules (→) define the language. A <b>derivation</b> applies the rules (⇒, read "derives") from the start symbol until only terminals remain.</p><pre>&lt;program&gt; → &lt;stmts&gt;\n&lt;stmts&gt; → &lt;stmt&gt; | &lt;stmt&gt; ; &lt;stmts&gt;\n&lt;stmt&gt; → &lt;var&gt; = &lt;expr&gt;\n&lt;var&gt; → a | b | c | d\n&lt;expr&gt; → &lt;term&gt; + &lt;term&gt; | &lt;term&gt; - &lt;term&gt;\n&lt;term&gt; → &lt;var&gt; | const</pre><p>&lt;program&gt; ⇒ &lt;stmts&gt; ⇒ &lt;stmt&gt; ⇒ &lt;var&gt; = &lt;expr&gt; ⇒ a = &lt;expr&gt; ⇒ a = &lt;term&gt; + &lt;term&gt; ⇒ a = &lt;var&gt; + &lt;term&gt; ⇒ a = b + &lt;term&gt; ⇒ a = b + const</p>`},
{h:'Worked derivation: A = B * ( A + C )',b:`<pre>&lt;assign&gt; → &lt;id&gt; = &lt;expr&gt;\n&lt;id&gt; → A | B | C\n&lt;expr&gt; → &lt;id&gt; + &lt;expr&gt; | &lt;id&gt; * &lt;expr&gt; | ( &lt;expr&gt; ) | &lt;id&gt;</pre><p>&lt;assign&gt; ⇒ &lt;id&gt; = &lt;expr&gt; ⇒ A = &lt;expr&gt; ⇒ A = &lt;id&gt; * &lt;expr&gt; ⇒ A = B * &lt;expr&gt; ⇒ A = B * ( &lt;expr&gt; ) ⇒ A = B * ( &lt;id&gt; + &lt;expr&gt; ) ⇒ A = B * ( A + &lt;expr&gt; ) ⇒ A = B * ( A + &lt;id&gt; ) ⇒ A = B * ( A + C )</p><div class="trap">Slide puzzle: the expr/term/factor grammar cannot derive a = a / b + c * d because it has no / operator and no assignment rule. Add them before deriving.</div>`},
{h:'Sentential forms: the rules to remember',b:`<ul><li>Every string in a derivation is a <b>sentential form</b>.</li><li>A <b>sentence</b> is a sentential form with only terminals.</li><li>Leftmost derivation: expand the leftmost non-terminal each time.</li><li>A derivation may be <b>neither leftmost nor rightmost</b>.</li></ul><p>Second slide grammar: &lt;program&gt; → begin &lt;stmt_list&gt; end, variables only A, B, C, and expressions are one variable or two joined by + or -.</p>`},
{h:'Associativity through recursion',b:`<ul><li><b>Left recursion</b> <code>&lt;expr&gt; → &lt;expr&gt; + &lt;term&gt;</code> forces left-to-right evaluation: <b>left associativity</b>.</li><li><b>Right recursion</b> <code>&lt;factor&gt; → &lt;exp&gt; ** &lt;factor&gt;</code> forces right-to-left: <b>right associativity</b> (exponentiation).</li></ul><p>Precedence and associativity together resolve ambiguity.</p><p>BNF to EBNF: <code>&lt;expr&gt; → &lt;term&gt; {(+ | -) &lt;term&gt;}</code> and <code>&lt;term&gt; → &lt;factor&gt; {(* | /) &lt;factor&gt;}</code>.</p>`}
],
recall: [
['What does ⇒ mean in a derivation?','"Derives": one application of a grammar rule.'],
['Grammar vs derivation symbol?','Grammar rules use → (production); derivations use ⇒ (derives).'],
['What is a sentence in terms of sentential forms?','A sentential form containing only terminal symbols.'],
['Must every derivation be leftmost or rightmost?','No. A derivation may be neither.'],
['Right recursion gives which associativity, and for which operator on the slides?','Right associativity, for exponentiation (**).'],
['Convert <expr> → <expr> + <term> | <expr> - <term> | <term> to EBNF.','<expr> → <term> {(+ | -) <term>}.']
],
quiz: [
{k:'mcq',q:'Right recursion in a grammar gives…',o:['Left associativity','Right associativity','Higher precedence','Ambiguity'],a:1},
{k:'tf',q:'Every derivation is either leftmost or rightmost.',a:false,w:'A derivation may be neither.'},
{k:'gap',q:'The symbol ⇒ is read "___".',a:'derives'},
{k:'mcq',q:'Why can\'t the slide\'s expr/term/factor grammar derive a = a / b + c * d?',o:['It is ambiguous','It has no / operator or assignment rule','It is right-recursive','It uses EBNF'],a:1},
{k:'mcq',q:'In EBNF, <expr> → <term> {(+ | -) <term>} replaces…',o:['Recursion','Precedence','Terminals','The start symbol'],a:0}
],
theory: [
{q:'(Self-study from the slides) Prove that the grammar S → S + S | S * S | a is ambiguous, then rewrite it so that * has higher precedence than + and both are left associative.',pts:['Choose a sentence: a + a * a','Parse tree 1: + at root','Parse tree 2: * at root','Two trees ⇒ ambiguous','Rewritten grammar with S/T/F levels','Left recursion for both operators','Explain why precedence works'],model:`<p><b>Background:</b> a grammar is ambiguous if some sentence has two or more distinct parse trees.</p><p><b>Answer and solution:</b> take <code>a + a * a</code>. Tree 1 applies S → S + S at the root, with the right S becoming S * S: a + (a * a). Tree 2 applies S → S * S at the root, with the left S becoming S + S: (a + a) * a. Two distinct trees, so the grammar is ambiguous.</p><pre>S → S + T | T\nT → T * F | F\nF → a</pre><p><b>Scenario:</b> with a = 2, tree 1 gives 2 + 4 = 6 and tree 2 gives 4 * 2 = 8, so a compiler would not know which value to produce.</p><p><b>How they combine:</b> * is generated at a lower level (T) than + (S), so it sits lower in the tree and is evaluated first. Both rules are left-recursive, so a + a + a groups as (a + a) + a.</p><p><b>Conclusion:</b> separate non-terminal levels fix precedence and left recursion fixes associativity, giving exactly one parse tree per sentence.</p>`}
]
}
};
