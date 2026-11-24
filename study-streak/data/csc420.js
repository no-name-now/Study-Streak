COURSE_DATA["csc420"]={topics:[
{id:'t1',title:'Transactions and ACID',why:'BEGIN/COMMIT/ROLLBACK queries and ACID definitions appear in the practical test.',
cards:[
{h:'ACID',b:`<p>A <b>transaction</b> is a unit of work that executes completely or not at all.</p><table><tr><th>Property</th><th>Meaning</th></tr><tr><td><b>Atomicity</b></td><td>All or nothing</td></tr><tr><td><b>Consistency</b></td><td>Moves the DB from one valid state to another (constraints hold)</td></tr><tr><td><b>Isolation</b></td><td>Concurrent transactions do not interfere</td></tr><tr><td><b>Durability</b></td><td>Committed changes survive crashes (WAL)</td></tr></table>`},
{h:'SQL',b:`<pre>BEGIN;
UPDATE accounts SET balance = balance - 500 WHERE id = 1;
UPDATE accounts SET balance = balance + 500 WHERE id = 2;
COMMIT;   -- or ROLLBACK;

BEGIN;
INSERT INTO orders(customer_id, total) VALUES (3, 120);
SAVEPOINT s1;
DELETE FROM orders WHERE id = 99;
ROLLBACK TO SAVEPOINT s1;
COMMIT;</pre><p>Anomalies: dirty read, non-repeatable read, phantom read. Isolation levels: Read Uncommitted, <b>Read Committed</b> (PostgreSQL default), Repeatable Read, Serializable.</p>`}],
recall:[['Expand ACID.','Atomicity, consistency, isolation, durability.'],['What does ROLLBACK do?','Undoes all changes since BEGIN (or to a savepoint).'],['PostgreSQL default isolation level?','Read Committed.'],['Define a dirty read.','Reading uncommitted changes made by another transaction.']],
quiz:[{k:'mcq',q:'Which property ensures committed data survives a power failure?',o:['Atomicity','Consistency','Isolation','Durability'],a:3},{k:'gap',q:'To undo to a marked point, use ROLLBACK TO ___.',a:'savepoint',alt:['savepoint s1']},{k:'tf',q:'Serializable is the strictest isolation level.',a:true}],
theory:[{q:'Write a transaction that transfers 1,000 from account 5 to account 8, and explain what happens if the second update fails.',pts:['BEGIN','Debit','Credit','COMMIT','ROLLBACK on failure','Atomicity explained'],model:'<pre>BEGIN;\nUPDATE accounts SET balance = balance - 1000 WHERE id = 5;\nUPDATE accounts SET balance = balance + 1000 WHERE id = 8;\nCOMMIT;</pre><p>If the credit fails, issue ROLLBACK: atomicity undoes the debit so money is not lost.</p>'}]},
{id:'t2',title:'Indexing',why:'CREATE INDEX, EXPLAIN ANALYZE, expression indexes: in the practical paper.',
cards:[
{h:'Indexes',b:`<p>An <b>index</b> is a data structure that speeds up lookups at the cost of storage and slower writes. PostgreSQL default = <b>B-tree</b> (=, <, >, ORDER BY). Others: Hash (=), GIN (arrays, JSONB, full text), GiST.</p><pre>CREATE INDEX idx_customers_email ON customers(email);
CREATE INDEX idx_lower_email ON customers(LOWER(email));  -- expression index
CREATE UNIQUE INDEX ... ; DROP INDEX idx_customers_email;
EXPLAIN ANALYZE SELECT * FROM customers WHERE email = 'a@b.com';</pre><p>Without the index: <b>Seq Scan</b>; with it: <b>Index Scan</b> / Bitmap Index Scan. An expression index is used only if the query uses the same expression: <code>WHERE LOWER(email) = 'a@b.com'</code>.</p>`}],
recall:[['Default PostgreSQL index type?','B-tree.'],['Which index type suits arrays and JSONB?','GIN.'],['What does EXPLAIN ANALYZE show?','The executed query plan with actual times and rows (e.g. Seq Scan vs Index Scan).'],['Cost of indexes?','Extra storage and slower INSERT/UPDATE/DELETE.']],
quiz:[{k:'mcq',q:'Which query can use an index on LOWER(email)?',o:["WHERE email = 'x'","WHERE LOWER(email) = 'x'","WHERE UPPER(email) = 'X'","WHERE email LIKE '%x'"],a:1},{k:'gap',q:'Without a usable index, PostgreSQL does a ___ scan.',a:'seq',alt:['sequential']},{k:'tf',q:'Indexes speed up both reads and writes.',a:false}],
theory:[{q:'Write SQL to (a) create a B-tree index on customers.email, (b) check whether it is used, (c) create a case-insensitive index and a query that uses it.',pts:['CREATE INDEX','EXPLAIN ANALYZE','Seq vs Index scan','LOWER expression index','Matching query'],model:'<pre>CREATE INDEX idx_email ON customers(email);\nEXPLAIN ANALYZE SELECT * FROM customers WHERE email = \'ada@pau.edu.ng\';\nCREATE INDEX idx_email_lower ON customers(LOWER(email));\nSELECT * FROM customers WHERE LOWER(email) = LOWER(\'Ada@PAU.edu.ng\');</pre>'}]},
{id:'t3',title:'Complex types: arrays and JSON/JSONB',why:'Array queries (ANY, cardinality, array_append/remove, unnest) and JSONB operators.',
cards:[
{h:'Arrays',b:`<pre>CREATE TABLE products(id serial, name text, tags text[]);
INSERT INTO products(name, tags) VALUES ('Lamp', ARRAY['home','light']);
SELECT * FROM products WHERE 'home' = ANY(tags);
SELECT name, cardinality(tags) FROM products;
UPDATE products SET tags = array_append(tags, 'sale') WHERE id = 1;
UPDATE products SET tags = array_remove(tags, 'light') WHERE id = 1;
SELECT name, unnest(tags) AS tag FROM products;
SELECT * FROM products WHERE tags @&gt; ARRAY['home'];</pre><p>Arrays are <b>1-indexed</b>: <code>tags[1]</code>.</p>`},
{h:'JSON/JSONB',b:`<p><b>JSONB</b> = binary, indexable (GIN), no duplicate keys; <b>JSON</b> = stored as text.</p><pre>SELECT data-&gt;'address'-&gt;&gt;'city' FROM customers;
SELECT * FROM customers WHERE data @&gt; '{"vip": true}';
SELECT * FROM customers WHERE data ? 'phone';
UPDATE customers SET data = jsonb_set(data, '{vip}', 'true');</pre><p><code>-&gt;</code> returns JSON; <code>-&gt;&gt;</code> returns text.</p>`}],
recall:[['-> vs ->>?','-> returns JSON; ->> returns text.'],['How do you find rows where an array contains a value?',"WHERE 'value' = ANY(col) or col @> ARRAY['value']."],['What does unnest do?','Expands an array into a set of rows.'],['JSON vs JSONB?','JSONB is binary, indexable and faster to query; JSON keeps the raw text.'],['Are PostgreSQL arrays 0- or 1-indexed?','1-indexed.']],
quiz:[{k:'mcq',q:'Number of elements in tags?',o:['length(tags)','cardinality(tags)','count(tags)','size(tags)'],a:1},{k:'gap',q:'The JSONB operator that tests if a key exists is ___.',a:'?'},{k:'tf',q:'array_remove(tags, \'x\') removes all occurrences of x.',a:true}],
theory:[{q:'business_db: suppliers(id, name, delivery_days int[]). Write queries to (a) list suppliers delivering on day 3, (b) count delivery days per supplier, (c) add day 6 to supplier 2, (d) total deliveries across all suppliers.',pts:['ANY','cardinality','array_append','unnest or SUM(cardinality)','Correct syntax'],model:'<pre>SELECT name FROM suppliers WHERE 3 = ANY(delivery_days);\nSELECT name, cardinality(delivery_days) FROM suppliers;\nUPDATE suppliers SET delivery_days = array_append(delivery_days, 6) WHERE id = 2;\nSELECT SUM(cardinality(delivery_days)) FROM suppliers;\n-- or: SELECT COUNT(*) FROM suppliers, unnest(delivery_days);</pre>'}]},
{id:'t4',title:'Functions, procedures and triggers',why:'PL/pgSQL syntax: write a function, a procedure and a trigger.',
cards:[
{h:'Functions and procedures',b:`<pre>CREATE OR REPLACE FUNCTION order_total(p_id int)
RETURNS numeric AS $$
BEGIN
  RETURN (SELECT SUM(qty*price) FROM order_items WHERE order_id = p_id);
END; $$ LANGUAGE plpgsql;
SELECT order_total(10);

CREATE OR REPLACE PROCEDURE restock(p_id int, n int)
LANGUAGE plpgsql AS $$
BEGIN
  UPDATE products SET stock = stock + n WHERE id = p_id;
  COMMIT;
END; $$;
CALL restock(4, 20);</pre><p>Function: returns a value, used in SELECT. Procedure: invoked with CALL, can control transactions.</p>`},
{h:'Triggers',b:`<pre>CREATE OR REPLACE FUNCTION log_price() RETURNS trigger AS $$
BEGIN
  INSERT INTO price_log(product_id, old_price, new_price, changed_at)
  VALUES (OLD.id, OLD.price, NEW.price, now());
  RETURN NEW;
END; $$ LANGUAGE plpgsql;

CREATE TRIGGER trg_price
AFTER UPDATE OF price ON products
FOR EACH ROW EXECUTE FUNCTION log_price();</pre><p><b>NEW</b>/<b>OLD</b> rows; BEFORE vs AFTER; FOR EACH ROW vs FOR EACH STATEMENT.</p>`}],
recall:[['Function vs procedure in PostgreSQL?','A function returns a value and is called in queries; a procedure is run with CALL and can COMMIT/ROLLBACK.'],['What must a trigger function return?','The trigger type (RETURNS trigger), usually RETURN NEW (or OLD/NULL).'],['NEW vs OLD?','NEW is the row after the change; OLD is the row before.']],
quiz:[{k:'mcq',q:'How do you run a procedure?',o:['SELECT proc()','CALL proc()','EXEC proc','RUN proc()'],a:1},{k:'gap',q:'A trigger function is declared RETURNS ___.',a:'trigger'},{k:'tf',q:'OLD is available in INSERT triggers.',a:false}],
theory:[{q:'Write a trigger that prevents stock from going below zero on products.',pts:['Trigger function','IF NEW.stock < 0','RAISE EXCEPTION','RETURN NEW','BEFORE UPDATE trigger','FOR EACH ROW'],model:'<pre>CREATE OR REPLACE FUNCTION check_stock() RETURNS trigger AS $$\nBEGIN\n  IF NEW.stock &lt; 0 THEN RAISE EXCEPTION \'Stock cannot be negative\'; END IF;\n  RETURN NEW;\nEND; $$ LANGUAGE plpgsql;\nCREATE TRIGGER trg_stock BEFORE UPDATE ON products\nFOR EACH ROW EXECUTE FUNCTION check_stock();</pre>'}]},
{id:'t5',title:'SQL practice workbook',why:'Joins, aggregation, subqueries and CTEs: the bread and butter of the exam.',
cards:[
{h:'Core patterns',b:`<pre>SELECT c.name, COUNT(o.id) AS orders, SUM(o.total) AS spent
FROM customers c LEFT JOIN orders o ON o.customer_id = c.id
GROUP BY c.name HAVING SUM(o.total) &gt; 1000
ORDER BY spent DESC LIMIT 5;

WITH monthly AS (
  SELECT date_trunc('month', created_at) m, SUM(total) s FROM orders GROUP BY 1)
SELECT * FROM monthly WHERE s &gt; (SELECT AVG(s) FROM monthly);</pre><p>WHERE filters rows before grouping; HAVING filters groups. LEFT JOIN keeps unmatched left rows. Window: <code>RANK() OVER (PARTITION BY dept ORDER BY salary DESC)</code>.</p>`}],
recall:[['WHERE vs HAVING?','WHERE filters rows before grouping; HAVING filters groups after aggregation.'],['INNER vs LEFT JOIN?','INNER keeps only matches; LEFT keeps all left rows with NULLs where unmatched.'],['What is a CTE?','A named temporary result defined with WITH and used in the main query.']],
quiz:[{k:'mcq',q:'Customers with no orders appear with…',o:['INNER JOIN','LEFT JOIN from customers','CROSS JOIN','RIGHT JOIN from customers'],a:1},{k:'tf',q:'Aggregate conditions like SUM(total) > 100 go in WHERE.',a:false}],
theory:[{q:'Write a query for the top 3 products by revenue in 2026 with their category name.',pts:['JOIN order_items/products/categories','Date filter','SUM(qty*price)','GROUP BY','ORDER BY DESC','LIMIT 3'],model:'<pre>SELECT p.name, cat.name AS category, SUM(oi.qty*oi.price) AS revenue\nFROM order_items oi\nJOIN orders o ON o.id = oi.order_id\nJOIN products p ON p.id = oi.product_id\nJOIN categories cat ON cat.id = p.category_id\nWHERE o.created_at &gt;= \'2026-01-01\' AND o.created_at &lt; \'2027-01-01\'\nGROUP BY p.name, cat.name\nORDER BY revenue DESC LIMIT 3;</pre>'}]},
{id:'t6',title:'NoSQL data models',why:'Four NoSQL models, CAP and BASE.',
cards:[
{h:'Models',b:`<table><tr><th>Model</th><th>Example</th><th>Use</th></tr><tr><td>Key–value</td><td>Redis</td><td>Caching, sessions</td></tr><tr><td>Document</td><td>MongoDB</td><td>Flexible JSON records</td></tr><tr><td>Column-family</td><td>Cassandra</td><td>Huge write-heavy data</td></tr><tr><td>Graph</td><td>Neo4j</td><td>Relationships, recommendations</td></tr></table><p><b>CAP theorem</b>: a distributed system can guarantee at most two of Consistency, Availability, Partition tolerance. <b>BASE</b>: Basically Available, Soft state, Eventual consistency (vs ACID).</p>`}],
recall:[['Four NoSQL models.','Key–value, document, column-family, graph.'],['State CAP.','Of consistency, availability and partition tolerance, a distributed system can guarantee only two at once.'],['Expand BASE.','Basically Available, Soft state, Eventual consistency.']],
quiz:[{k:'mcq',q:'A social network\'s friend-of-friend queries suit…',o:['Key–value','Graph','Column-family','Relational only'],a:1},{k:'tf',q:'BASE systems favour strict immediate consistency.',a:false}],
theory:[{q:'Compare relational databases with NoSQL and recommend a model for a session cache and a product catalogue.',pts:['Schema rigid vs flexible','ACID vs BASE','Scaling vertical vs horizontal','Session cache: key–value','Catalogue: document','Justification'],model:'<p>Relational: fixed schema, joins, ACID, vertical scaling. NoSQL: flexible schemas, horizontal scaling, often BASE. Session cache → Redis key–value (fast lookups by id); product catalogue → MongoDB documents (varying attributes per product).</p>'}]},
{id:'t7',title:'MongoDB basics',why:'CRUD and query operators in the Mongo shell.',
cards:[
{h:'CRUD',b:`<pre>db.students.insertOne({name:"Ada", level:400, courses:["CSC420"]})
db.students.find({level: {$gte: 300}}, {name:1, _id:0})
db.students.updateOne({name:"Ada"}, {$set:{level:500}})
db.students.updateOne({name:"Ada"}, {$push:{courses:"SEN408"}})
db.students.deleteOne({name:"Ada"})
db.students.aggregate([{$group:{_id:"$level", n:{$sum:1}}}])</pre><p>Database → collection → document (BSON); every document has <code>_id</code>. Operators: $eq, $gt, $gte, $lt, $in, $and, $or.</p>`}],
recall:[['MongoDB hierarchy.','Database → collection → document.'],['Which operator adds an element to an array field?','$push.'],['Which operator updates specific fields?','$set.']],
quiz:[{k:'mcq',q:'Find students with level in [300, 400]:',o:['{level:{$in:[300,400]}}','{level:[300,400]}','{$in:level}','{level:{$all:300}}'],a:0},{k:'gap',q:'Every MongoDB document has a unique ___ field.',a:'_id',alt:['id']}],
theory:[{q:'Write MongoDB commands to insert a product, find products under ₦5,000 sorted by price, raise one product\'s price, and count products per category.',pts:['insertOne','find with $lt + sort','updateOne $set/$inc','aggregate $group $sum'],model:'<pre>db.products.insertOne({name:"Pen", price:300, category:"Stationery"})\ndb.products.find({price:{$lt:5000}}).sort({price:1})\ndb.products.updateOne({name:"Pen"}, {$inc:{price:50}})\ndb.products.aggregate([{$group:{_id:"$category", count:{$sum:1}}}])</pre>'}]}
]};
