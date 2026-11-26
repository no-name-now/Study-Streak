/* SEN 419 addition (25 Nov 2026): blockchain topic.
   ADDITIONAL CONTEXT. No blockchain slides were in the course folder and the Feb 2026 paper had
   no blockchain question. Built from standard sources (Bitcoin and Ethereum documentation,
   Solidity docs, CBN/SEC Nigeria public notices). Replace or tag "From the slides" if the
   lecturer shares blockchain notes. */
(function(){
const D=window.COURSE_DATA.sen419;
const NOTE='<div class="trap">Additional context. The lecturer shared no blockchain slides and the Feb 2026 paper did not test it. Learn this after the Convex, React, Expo and deployment topics, not before.</div>';
D.topics.push({id:'t8',title:'Blockchain and smart contracts (additional context)',
why:'The course title includes blockchain but no notes were shared. This gives you the core ideas in case a question appears, linked to the web and mobile stack you already know.',
cards:[
{h:'What a blockchain is',b:NOTE+`<div class="def"><b>Blockchain</b>A shared, append-only ledger copied across many computers (nodes). Records are grouped into blocks, and each block stores the hash of the block before it.</div>
<div class="flow"><span>Block 1</span><em>hash →</em><span>Block 2</span><em>hash →</em><span>Block 3</span></div>
<div class="hook">Change one old block and its hash changes, breaking every link after it. That is why the history is tamper-evident.</div>`},
{h:'Inside a block',b:`<ul><li><b>Transactions</b> (the data).</li><li><b>Previous block hash</b> (the chain link).</li><li><b>Timestamp</b>.</li><li><b>Its own hash</b>, computed from the contents.</li><li>For proof of work: a <b>nonce</b> found by mining.</li></ul>
<div class="def"><b>Hash function</b>Turns any input into a fixed-length fingerprint (e.g. SHA-256). A tiny change in input gives a completely different hash, and you cannot work backwards.</div>`},
{h:'Consensus: who decides the next block',b:`<table><tr><th></th><th>Proof of Work (PoW)</th><th>Proof of Stake (PoS)</th></tr>
<tr><td>How</td><td>Miners race to solve a hash puzzle</td><td>Validators lock up (stake) coins and are chosen to propose blocks</td></tr>
<tr><td>Example</td><td>Bitcoin</td><td>Ethereum (since “the Merge”, 2022)</td></tr>
<tr><td>Cost</td><td>High energy use</td><td>Far less energy; dishonest validators lose stake</td></tr></table>`},
{h:'Public vs private (permissioned) blockchains',b:`<table><tr><th></th><th>Public</th><th>Private / permissioned</th></tr>
<tr><td>Who can join</td><td>Anyone</td><td>Approved members only</td></tr>
<tr><td>Examples</td><td>Bitcoin, Ethereum</td><td>Hyperledger Fabric (company consortia)</td></tr>
<tr><td>Trade-off</td><td>Open and censorship-resistant, slower, fees</td><td>Faster and private, but you must trust the members</td></tr></table>`},
{h:'Smart contracts',b:`<div class="def"><b>Smart contract</b>A program stored on the blockchain that runs exactly as written when called. On Ethereum it is usually written in Solidity.</div>
<pre>// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
contract CertRegistry {
    address public owner;
    mapping(bytes32 => bool) public issued;
    event Issued(bytes32 indexed certHash);
    constructor() { owner = msg.sender; }
    function issue(bytes32 certHash) external {
        require(msg.sender == owner, "Only registrar");
        issued[certHash] = true;
        emit Issued(certHash);
    }
    function verify(bytes32 certHash) external view returns (bool) {
        return issued[certHash];
    }
}</pre>
<div class="trap">Deployed contracts cannot simply be edited. A bug, such as a missing <code>require(msg.sender == owner)</code>, stays live and can be exploited.</div>`},
{h:'Gas, wallets and keys',b:`<ul><li><b>Gas:</b> the fee paid to run a transaction or contract function. Reading (<code>view</code>) is free; writing costs gas.</li>
<li><b>Wallet</b> (e.g. MetaMask): holds the user's <b>private key</b> and signs transactions. The <b>public address</b> is shared; the private key never is.</li>
<li>Lose the private key or seed phrase and the funds are gone; there is no “forgot password”.</li></ul>`},
{h:'How a dApp is built (vs your Convex stack)',b:`<div class="flow"><span>React / Next.js UI</span><em>→</em><span>Wallet signs</span><em>→</em><span>ethers.js / web3.js</span><em>→</em><span>RPC node</span><em>→</em><span>Smart contract</span></div>
<table><tr><th>Concern</th><th>Your course stack</th><th>dApp</th></tr>
<tr><td>Backend logic</td><td>Convex mutations/queries</td><td>Smart contract functions</td></tr>
<tr><td>Auth</td><td>Auth0 / Convex auth</td><td>Wallet signature</td></tr>
<tr><td>Data</td><td>Convex database</td><td>On-chain state (expensive) + off-chain storage</td></tr></table>
<div class="hook">Hybrid is normal: keep the data in Convex, put only a hash on-chain as proof.</div>`},
{h:'Use cases, limits and Nigeria',b:`<p><b>Good fits:</b> certificate verification, supply-chain tracing, cross-border payments, tokenised assets.</p>
<p><b>Limits:</b> low throughput and fees on public chains; data is permanent (privacy and NDPA conflicts); contract bugs are costly; blockchains cannot see real-world data without an <b>oracle</b>.</p>
<p><b>Nigeria:</b> the CBN launched the eNaira (CBDC) in October 2021; it told banks to close crypto-related accounts in February 2021, then issued guidelines for banks serving virtual-asset providers in December 2023. The SEC regulates digital assets as securities.</p>
<div class="trig">“Should we use blockchain for X?” → only if several parties who don't trust each other must share one tamper-evident record. Otherwise a normal database is cheaper and faster.</div>`}
],
recall:[
['Define a blockchain.','A shared, append-only ledger replicated across many nodes, where each block stores the hash of the previous block.'],
['Why is a blockchain tamper-evident?','Changing a block changes its hash, which breaks the link stored in every later block.'],
['Five things inside a block?','Transactions, previous block hash, timestamp, its own hash, and (for PoW) a nonce.'],
['PoW vs PoS?','PoW: miners solve hash puzzles (energy-heavy, Bitcoin). PoS: validators stake coins to propose blocks (low energy, Ethereum since 2022).'],
['Public vs permissioned blockchain?','Public: anyone can join (Bitcoin, Ethereum). Permissioned: approved members only (Hyperledger Fabric).'],
['Define a smart contract.','A program stored on the blockchain that runs exactly as written when called; usually Solidity on Ethereum.'],
['What is gas?','The fee paid to execute a transaction or state-changing contract function.'],
['What does a wallet do?','Holds the private key and signs transactions; the public address is shared.'],
['What is an oracle?','A service that feeds real-world data to a smart contract, which cannot fetch it itself.'],
['Typical dApp architecture?','React UI → wallet signs → ethers.js/web3.js → RPC node → smart contract.'],
['When should you NOT use blockchain?','When one trusted party can run a normal database; blockchain only helps when mutually distrustful parties share one record.'],
['When did the CBN launch the eNaira?','October 2021.']
],
quiz:[
{k:'mcq',q:'What links each block to the one before it?',o:['A timestamp','The previous block\'s hash','The miner\'s address','A smart contract'],a:1},
{k:'mcq',q:'Ethereum today uses…',o:['Proof of Work','Proof of Stake','Proof of Authority only','No consensus'],a:1},
{k:'tf',q:'A deployed smart contract can be edited like a normal server file to fix a bug.',a:false,w:'Contracts are immutable once deployed; fixes need a new contract or an upgrade pattern designed in advance.'},
{k:'gap',q:'The fee paid to run a state-changing transaction on Ethereum is called ____.',a:'gas'},
{k:'mcq',q:'Which part of a dApp signs transactions with the user\'s private key?',o:['RPC node','Wallet','Smart contract','Block explorer'],a:1},
{k:'mcq',q:'Hyperledger Fabric is an example of a…',o:['Public blockchain','Permissioned blockchain','Cryptocurrency wallet','Consensus algorithm'],a:1},
{k:'tf',q:'Smart contracts can read live exchange rates from the internet on their own.',a:false,w:'They need an oracle to bring off-chain data on-chain.'},
{k:'gap',q:'A service that feeds real-world data to a smart contract is an ____.',a:'oracle'},
{k:'mcq',q:'In the CertRegistry contract, what stops anyone but the registrar issuing certificates?',o:['The event','require(msg.sender == owner)','The mapping','view keyword'],a:1},
{k:'mcq',q:'Best reason to use a blockchain for a project?',o:['It is faster than a database','Several parties who distrust each other must share one tamper-evident record','It stores large files cheaply','It needs no internet'],a:1}
],
theory:[
{q:'Design a blockchain-based certificate verification system for PAU graduates. Justify your architecture and discuss its limitations.',
 pts:['Problem: forged certificates; employers need fast verification','Hybrid design: certificate data off-chain (Convex/database), hash on-chain','Smart contract with issue (registrar only) and verify functions','Flow: registrar issues → hash stored → employer hashes the PDF and calls verify','Stack: Next.js UI, wallet for registrar, ethers.js, public or permissioned chain','Limitations: gas, key management, NDPA/privacy (no personal data on-chain), revocation','Conclusion'],
 model:`<p><b>Background.</b> Employers struggle to confirm that a certificate is genuine. A blockchain gives a tamper-evident record that anyone can check without calling the registry.</p>
<p><b>Answer and solution.</b> Keep certificate details (name, programme, class) in the university database, e.g. Convex. When a certificate is issued, compute its SHA-256 hash and store only that hash on-chain through a <code>CertRegistry</code> contract whose <code>issue()</code> function is restricted to the registrar's address. An employer uploads the PDF to a Next.js verification page; the page hashes it and calls the free <code>verify()</code> view function. A match proves the document is unchanged since issue.</p>
<p><b>Scenario.</b> A Lagos bank receives a PAU Software Engineering certificate. Its HR officer drops the PDF into verify.pau.edu.ng and gets “Valid, issued 2027” in seconds; an edited PDF produces a different hash and fails.</p>
<p><b>How they combine.</b> The database keeps personal data private and editable (NDPA), the chain keeps proof permanent, and the wallet signature proves the registrar issued it.</p>
<p><b>Limitations.</b> Gas costs (batch hashes into one transaction), registrar key security, revocation needs an extra function, and public chains are slow.</p>
<p><b>Conclusion.</b> A hybrid design gets blockchain's trust benefit without putting private data on-chain.</p>`},
{q:'A startup wants to “put our school-fees app on the blockchain”. Critically assess whether this is a good idea.',
 pts:['Blockchain helps only when distrustful parties share a record','One trusted operator (school) → normal database is cheaper and faster','Costs: gas, throughput, key loss, immutability of mistakes','Privacy: student data must not be permanent and public (NDPA)','Where it could help: a hash of receipts for audit, or cross-institution verification','Recommendation'],
 model:`<p><b>Background.</b> Blockchain is valuable when several parties who do not trust each other must agree on one record without a central owner.</p>
<p><b>Answer and solution.</b> A school-fees app has one trusted operator, the school, so a normal database (Convex, Postgres) is faster, cheaper and easier to correct. Putting payments on a public chain adds gas fees, slower confirmation, wallet friction for parents and permanent public data, which conflicts with the NDPA. Mistakes cannot simply be reversed.</p>
<p><b>Scenario.</b> A parent pays twice by mistake. In a database the bursar refunds and corrects the record; on-chain the wrong record stays forever and the refund is a second transaction.</p>
<p><b>How they combine.</b> The only useful piece is anchoring a daily hash of receipts on-chain so auditors can prove records were not altered.</p>
<p><b>Conclusion.</b> Build it as a normal web app; use blockchain only for optional audit anchoring.</p>`}
]});
})();
