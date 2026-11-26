module.exports = {
  t4: {
    cards: [
      {
        h: 'SQL Functions vs PL/pgSQL Functions',
        b: '<p>PostgreSQL supports two main languages for server-side functions:</p><table><tr><th>Feature</th><th><code>LANGUAGE sql</code></th><th><code>LANGUAGE plpgsql</code></th></tr><tr><td>Body structure</td><td>Pure SQL statements (<code>SELECT</code>, <code>INSERT</code>, etc.)</td><td>Block-structured procedural code (<code>DECLARE ... BEGIN ... END;</code>)</td></tr><tr><td>Variables &amp; loops</td><td>Not supported</td><td>Variables (<code>:=</code>), <code>IF/THEN/ELSE</code>, <code>FOR/WHILE</code> loops</td></tr><tr><td>Error handling</td><td>Standard SQL errors only</td><td><code>FOUND</code> flag, <code>RAISE NOTICE</code>, <code>RAISE EXCEPTION</code></td></tr><tr><td>Best for</td><td>Simple single-expression calculations or table queries</td><td>Multi-step business logic, validation, and dynamic computation</td></tr></table>'
      },
      {
        h: 'PL/pgSQL Anatomy: DECLARE, INTO, FOUND & RAISE',
        b: '<p>Inside a <code>LANGUAGE plpgsql</code> block:</p><ul><li><b><code>DECLARE</code></b> defines local variables and assigns defaults with <code>:=</code> (or <code>=</code>).</li><li><b><code>SELECT col INTO var</code></b> stores a query result into a local variable.</li><li><b><code>IF NOT FOUND THEN</code></b> checks the special boolean <code>FOUND</code>, which is <code>false</code> when <code>SELECT ... INTO</code> returns zero rows.</li><li><b><code>RAISE EXCEPTION \'msg\', val;</code></b> aborts the current transaction and rolls back changes; <b><code>RAISE NOTICE</code></b> prints an informational message without aborting.</li></ul><pre>CREATE OR REPLACE FUNCTION stock_status(p_prod_id INT, p_var_id INT)\nRETURNS TEXT AS $$\nDECLARE\n  v_qty INT;\nBEGIN\n  SELECT qty_on_hand INTO v_qty FROM variations\n  WHERE product_id = p_prod_id AND variation_id = p_var_id;\n  IF NOT FOUND THEN\n    RAISE EXCEPTION \'Variation (%, %) not found\', p_prod_id, p_var_id;\n  END IF;\n  IF v_qty = 0 THEN RETURN \'Out of stock\';\n  ELSIF v_qty &lt; 20 THEN RETURN \'Low stock (\' || v_qty || \' left)\';\n  ELSE RETURN \'In stock (\' || v_qty || \' available)\';\n  END IF;\nEND; $$ LANGUAGE plpgsql;</pre>'
      },
      {
        h: 'Table-Returning Functions: RETURNS TABLE & RETURN QUERY',
        b: '<p>When a function returns multiple rows and columns, declare <code>RETURNS TABLE(col1 type1, ...)</code> and use <code>RETURN QUERY</code> in PL/pgSQL (or a plain <code>SELECT</code> in <code>LANGUAGE sql</code>). Call it in the <code>FROM</code> clause like a table:</p><pre>CREATE OR REPLACE FUNCTION customer_orders(p_user_id INT)\nRETURNS TABLE(order_id TEXT, created_at TIMESTAMPTZ, total INT, status TEXT) AS $$\nBEGIN\n  RETURN QUERY\n  SELECT o.order_id, o.created_at, o.total, o.status\n  FROM orders o WHERE o.user_id = p_user_id\n  ORDER BY o.created_at DESC;\nEND; $$ LANGUAGE plpgsql;\n\n-- Usage:\nSELECT * FROM customer_orders(3);</pre><div class="tip"><b>Column name collision rule:</b> Prefix table columns with the table alias (e.g. <code>o.order_id</code>) so PostgreSQL does not confuse them with the output parameter names declared in <code>RETURNS TABLE(...)</code>.</div>'
      },
      {
        h: 'Functions vs Stored Procedures (Exam Q3a)',
        b: '<p>Introduced in PostgreSQL 11, <b>stored procedures</b> differ from functions in five exam-critical ways:</p><table><tr><th>Dimension</th><th>Function (<code>CREATE FUNCTION</code>)</th><th>Procedure (<code>CREATE PROCEDURE</code>)</th></tr><tr><td>Invocation</td><td>Inside a SQL expression: <code>SELECT fn(x);</code> or <code>WHERE fn(x) = ...</code></td><td>Standalone command: <code>CALL proc(x);</code> (cannot be used inside <code>SELECT</code>)</td></tr><tr><td>Return value</td><td>Must declare <code>RETURNS type</code> (or <code>RETURNS VOID</code> / <code>TABLE</code>)</td><td>Does not return a value (can use <code>INOUT</code> parameters if needed)</td></tr><tr><td>Transaction control</td><td>Runs inside the caller\'s transaction; <b>cannot</b> execute <code>COMMIT</code> or <code>ROLLBACK</code></td><td>Can manage transactions directly with <code>COMMIT</code> and <code>ROLLBACK</code></td></tr><tr><td>Primary purpose</td><td>Compute and return a value or result set without side effects</td><td>Execute multi-step write workflows across multiple tables</td></tr></table>'
      },
      {
        h: 'Splendid Stores Stored Procedure: CALL make_order',
        b: '<p>In Lecture 3, <code>make_order(p_user_id INT, items JSONB)</code> places a complete customer order atomically:</p><ol><li>Loops through the JSONB items array using <code>FOR item IN SELECT jsonb_array_elements(items) LOOP</code>.</li><li>Deducts stock and fetches the live price in one statement: <code>UPDATE variations SET qty_on_hand = qty_on_hand - quantity WHERE ... RETURNING price INTO STRICT item_price;</code>.</li><li>Injects <code>unit_price</code> into each JSONB array element using <code>jsonb_set(items, ARRAY[counter::text, \'unit_price\'], to_jsonb(item_price), true)</code>.</li><li>Inserts the new row into <code>orders</code> using <code>create_order_id(p_user_id)</code> and <code>compute_order_total(items)</code>.</li></ol><div class="tip"><b>Atomicity on failure:</b> If item #2 triggers the <code>qty_on_hand &gt;= 0</code> <code>CHECK</code> constraint, the entire <code>CALL make_order(...)</code> rolls back, automatically restoring the stock deducted for item #1!</div>'
      },
      {
        h: 'Triggers: BEFORE vs AFTER, ROW vs STATEMENT',
        b: '<p>A PostgreSQL trigger pairs a <b>trigger function</b> (<code>RETURNS TRIGGER</code>) with a <b><code>CREATE TRIGGER</code></b> attachment on a table.</p><table><tr><th>Option</th><th>Behaviour &amp; Special Variables</th></tr><tr><td><b><code>BEFORE</code></b></td><td>Fires before the row is written. Can modify <code>NEW.col := val</code> to auto-fill columns (like <code>NEW.total</code>) or <code>RETURN NULL</code> to silently cancel the operation on that row.</td></tr><tr><td><b><code>AFTER</code></b></td><td>Fires after the write succeeds. Cannot alter <code>NEW</code>; used for audit logging or updating related summary tables.</td></tr><tr><td><b><code>FOR EACH ROW</code></b></td><td>Fires once per affected row. Provides <code>NEW</code> (for <code>INSERT</code>/<code>UPDATE</code>) and <code>OLD</code> (for <code>UPDATE</code>/<code>DELETE</code>).</td></tr><tr><td><b><code>FOR EACH STATEMENT</code></b></td><td>Fires once per SQL statement regardless of how many rows changed (even if 0 rows matched).</td></tr><tr><td><b><code>TG_OP</code> / <code>WHEN</code></b></td><td><code>TG_OP</code> holds <code>\'INSERT\'</code>, <code>\'UPDATE\'</code>, or <code>\'DELETE\'</code>; <code>WHEN (OLD.items IS DISTINCT FROM NEW.items)</code> skips firing unless specific columns changed.</td></tr></table>'
      },
      {
        h: 'Choosing the Right Tool: Constraint vs Function vs Procedure vs Trigger',
        b: '<table><tr><th>Requirement</th><th>Best PostgreSQL Mechanism</th></tr><tr><td>Single-row invariant (e.g., <code>qty_on_hand &gt;= 0</code>, <code>price &gt; 0</code>)</td><td><b><code>CHECK</code> Constraint</b> (declarative, fastest, cannot be bypassed)</td></tr><tr><td>Reusable calculation or filtered view inside queries</td><td><b>Function</b> (<code>CREATE FUNCTION</code>)</td></tr><tr><td>Explicit multi-table business workflow invoked by the app</td><td><b>Stored Procedure</b> (<code>CALL make_order(...)</code>)</td></tr><tr><td>Automatic rule that must run on every write regardless of which app or user issues the query</td><td><b>Trigger</b> (<code>BEFORE</code> to validate/mutate <code>NEW</code>; <code>AFTER</code> to audit/cascade)</td></tr></table>'
      }
    ],
    recall: [
      {
        q: 'What are the four key differences between a PostgreSQL function and a stored procedure (Exam Q3a)?',
        a: '1) Invocation: Functions are called inside SQL expressions (SELECT fn()), whereas procedures are invoked with CALL proc(). 2) Return value: Functions must specify a RETURNS clause, whereas procedures do not return a value. 3) Transaction control: Procedures can execute COMMIT and ROLLBACK inside their body, whereas functions cannot. 4) Purpose: Functions compute values/tables for queries, whereas procedures orchestrate multi-step write workflows.'
      },
      {
        q: 'In PL/pgSQL, what does the special variable FOUND indicate after a SELECT ... INTO statement, and how do you abort execution with an error?',
        a: 'FOUND is a boolean set to true if SELECT ... INTO returned at least one row, and false if no row matched. You abort execution and roll back the current transaction using RAISE EXCEPTION \'message\', arg;'
      },
      {
        q: 'How do you declare and return rows from a PL/pgSQL function that outputs a table of results?',
        a: 'Declare RETURNS TABLE(col1 type1, col2 type2, ...) in the function header, and use RETURN QUERY SELECT ... inside the BEGIN ... END block. Call the function in the FROM clause: SELECT * FROM fn(arg);'
      },
      {
        q: 'In the Lecture 3 make_order procedure, how does UPDATE ... RETURNING price INTO STRICT item_price work?',
        a: 'It decrements variations.qty_on_hand and simultaneously retrieves the row\'s price into item_price. STRICT ensures that if zero (or more than one) variation row matches, PostgreSQL immediately raises an exception and rolls back the order.'
      },
      {
        q: 'What happens in a BEFORE FOR EACH ROW trigger if the trigger function executes RETURN NULL instead of RETURN NEW?',
        a: 'PostgreSQL silently skips the INSERT, UPDATE, or DELETE for that specific row without raising an error, while continuing with any remaining rows.'
      },
      {
        q: 'Which special trigger record variables are available during INSERT, UPDATE, and DELETE row-level triggers?',
        a: 'INSERT provides NEW only; DELETE provides OLD only; UPDATE provides both OLD (values before the update) and NEW (values after the update). TG_OP holds the operation string (\'INSERT\', \'UPDATE\', or \'DELETE\').'
      },
      {
        q: 'In Lecture 3, how does the BEFORE INSERT OR UPDATE trigger trg_order_total keep orders.total accurate?',
        a: 'When a row is inserted or when WHEN (OLD.items IS DISTINCT FROM NEW.items) is true on an update, the trigger function sets NEW.total := compute_order_total(NEW.items) and returns NEW before the row is written to disk.'
      },
      {
        q: 'How do you validate in a BEFORE trigger on products that every tag in NEW.tags exists in the allowed_tags table?',
        a: 'Check whether NEW.tags is contained in the array of valid tags: IF NOT (NEW.tags <@ ARRAY(SELECT tag FROM allowed_tags)) THEN RAISE EXCEPTION \'Unknown tag in %\', NEW.tags; END IF;'
      }
    ],
    quiz: [
      {
        q: 'Which statement correctly invokes a PostgreSQL stored procedure named `make_orders`?',
        o: [
          'SELECT make_orders(3, \'[...]\'::jsonb);',
          'CALL make_orders(3, \'[...]\'::jsonb);',
          'EXEC PROCEDURE make_orders(3, \'[...]\'::jsonb);',
          'PERFORM make_orders(3, \'[...]\'::jsonb);'
        ],
        a: 1,
        e: 'Stored procedures in PostgreSQL are invoked with the standalone `CALL procedure_name(...);` statement, not `SELECT`.'
      },
      {
        q: 'In a `BEFORE INSERT OR UPDATE` row-level trigger function that calculates `NEW.total`, what must the function return so the modified row is saved?',
        o: [
          'RETURN OLD;',
          'RETURN NULL;',
          'RETURN NEW;',
          'RETURN TRUE;'
        ],
        a: 2,
        e: 'A `BEFORE` row-level trigger on `INSERT` or `UPDATE` must return `NEW` to proceed with writing the (potentially modified) new row. Returning `NULL` cancels the write for that row.'
      },
      {
        q: 'Why does the `WHEN (OLD.items IS DISTINCT FROM NEW.items)` clause improve the performance of an `UPDATE` trigger on `orders`?',
        o: [
          'It converts the row-level trigger into a statement-level trigger.',
          'It prevents the trigger function from firing when an UPDATE only changes other columns (like `status`), avoiding redundant recalculation of `total` and Correctly handling NULL comparisons.',
          'It allows the trigger to execute `COMMIT` inside its body.',
          'It bypasses all `CHECK` constraints on the `orders` table.'
        ],
        a: 1,
        e: '`IS DISTINCT FROM` treats `NULL` safely and ensures `trg_fn_order_total()` only runs when the `items` JSONB column actually changed.'
      },
      {
        q: 'During `CALL make_order(3, items)`, the first item succeeds in deducting stock from `variations`, but the second item tries to deduct 50 units when only 5 are available (violating `CHECK (qty_on_hand >= 0)`). What is the final state of the database?',
        o: [
          'Item 1\'s stock remains deducted, and a partial order with only Item 1 is inserted.',
          'Item 1\'s stock remains deducted, and no order row is inserted.',
          'The entire procedure call is rolled back atomically: Item 1\'s stock is restored and no order row is inserted.',
          'PostgreSQL sets `qty_on_hand` to 0 for Item 2 and inserts the order.'
        ],
        a: 2,
        e: 'Unless explicit `COMMIT` statements are executed inside the procedure, the entire `CALL` runs atomically; an unhandled constraint violation rolls back all changes made earlier in the loop.'
      },
      {
        q: 'Which of the following is TRUE about a function declared with `RETURNS TABLE(id TEXT, name TEXT)` in PL/pgSQL?',
        o: [
          'It must be called using `CALL fn();`',
          'Inside the body, you use `RETURN QUERY SELECT ...;` to append rows to the function\'s result set, and callers query it with `SELECT * FROM fn();`',
          'It can only return a single row.',
          'It cannot accept any input parameters.'
        ],
        a: 1,
        e: 'Set-returning functions declared with `RETURNS TABLE(...)` use `RETURN QUERY` in PL/pgSQL and are queried in the `FROM` clause like a regular table.'
      }
    ],
    theory: [
      {
        q: 'Exam Q3(a) & (b): (a) Explain the key differences between a SQL function and a stored procedure in PostgreSQL (5 marks). (b) Write: (i) a PL/pgSQL function check_voting_eligibility(p_student_id VARCHAR) that returns \'Eligible\' if a student in the student(id, name, dept_name, dob) table is at least 18 years old and \'Not Eligible\' otherwise (6 marks); and (ii) a SQL function physics_voting_status() that returns the name, dob, age, and voting eligibility of all students in the \'Physics\' department by calling your function from b(i) (3 marks).',
        model: '<p><b>Background:</b> PostgreSQL provides both user-defined functions (<code>CREATE FUNCTION</code>) and stored procedures (<code>CREATE PROCEDURE</code>) to encapsulate server-side database logic. Choosing between them depends on whether the routine must return a queryable result or orchestrate a multi-statement transactional workflow.</p><p><b>Answer and solution:</b></p><p><b>(a) Differences between a Function and a Stored Procedure (5 marks):</b></p><ol><li><b>Invocation:</b> A function is evaluated inside a SQL query expression (e.g., <code>SELECT fn(x) FROM tbl;</code>), whereas a procedure is invoked as a standalone command using <code>CALL proc(x);</code> and cannot appear inside a <code>SELECT</code> list or <code>WHERE</code> clause.</li><li><b>Return Value:</b> A function must specify a <code>RETURNS</code> type (scalar, composite, <code>TABLE</code>, or <code>VOID</code>) and return a value, whereas a procedure has no return type (though it may use <code>INOUT</code> parameters).</li><li><b>Transaction Control:</b> A function always executes inside the outer query\'s transaction and cannot run <code>COMMIT</code> or <code>ROLLBACK</code>. A stored procedure can explicitly commit or roll back transactions within its body.</li><li><b>Side Effects vs Computation:</b> Functions are designed for reusable computations and table-producing lookups, whereas procedures are designed for multi-step write operations across tables.</li></ol><p><b>(b)(i) PL/pgSQL Function <code>check_voting_eligibility</code> (6 marks):</b></p><pre>CREATE OR REPLACE FUNCTION check_voting_eligibility(p_student_id VARCHAR)\nRETURNS TEXT AS $$\nDECLARE\n  v_age INT;\nBEGIN\n  SELECT EXTRACT(YEAR FROM AGE(CURRENT_DATE, dob))::INT\n  INTO v_age\n  FROM student\n  WHERE id = p_student_id;\n\n  IF NOT FOUND THEN\n    RAISE EXCEPTION \'Student with ID % not found\', p_student_id;\n  END IF;\n\n  IF v_age &gt;= 18 THEN\n    RETURN \'Eligible\';\n  ELSE\n    RETURN \'Not Eligible\';\n  END IF;\nEND;\n$$ LANGUAGE plpgsql;</pre><p><b>(b)(ii) SQL Table Function for Physics Students (3 marks):</b></p><pre>CREATE OR REPLACE FUNCTION physics_voting_status()\nRETURNS TABLE(\n  student_name VARCHAR,\n  date_of_birth DATE,\n  student_age INT,\n  eligibility TEXT\n) AS $$\n  SELECT\n    s.name,\n    s.dob,\n    EXTRACT(YEAR FROM AGE(CURRENT_DATE, s.dob))::INT AS student_age,\n    check_voting_eligibility(s.id) AS eligibility\n  FROM student s\n  WHERE s.dept_name = \'Physics\';\n$$ LANGUAGE sql;</pre><p><b>Scenario:</b> Suppose student <code>\'12345\'</code> (Adaobi, in Physics) has <code>dob = \'2006-03-10\'</code> and student <code>\'67890\'</code> (Tunde, in Physics) has <code>dob = \'2010-09-15\'</code>. Running <code>SELECT * FROM physics_voting_status();</code> computes their ages using PostgreSQL\'s <code>AGE(CURRENT_DATE, s.dob)</code> interval function and calls <code>check_voting_eligibility(s.id)</code> for each row.</p><p><b>How they combine:</b> The PL/pgSQL function in b(i) uses procedural variables (<code>v_age</code>), <code>SELECT ... INTO</code>, <code>IF NOT FOUND</code> validation, and branching logic to classify a single student. The declarative <code>LANGUAGE sql</code> function in b(ii) composes that scalar function directly inside a set-returning query over the <code>Physics</code> department.</p><p><b>Conclusion:</b> Separating row-level business rules (<code>check_voting_eligibility</code>) from department-level reporting queries (<code>physics_voting_status</code>) keeps SQL logic modular, reusable, and easy to maintain.</p>',
        rubric: [
          'Part (a): Contrasts invocation (SELECT vs CALL), return values (RETURNS clause vs no return value), transaction control (COMMIT/ROLLBACK allowed in procedures only), and usage context',
          'Part (b-i): Uses LANGUAGE plpgsql with DECLARE, SELECT EXTRACT(YEAR FROM AGE(CURRENT_DATE, dob)) INTO, checks IF NOT FOUND, and returns Eligible when age >= 18 else Not Eligible',
          'Part (b-ii): Defines a function returning name, dob, age, and check_voting_eligibility(s.id) filtered by WHERE dept_name = \'Physics\''
        ]
      },
      {
        q: 'Exam Q5(b): Given the E-Commerce schema with products(product_id, product_info, price, manufacturer_id) and orders(orderid, customer_id, orderdetails jsonb, totalamount, orderdate), where orderdetails is a JSONB array like \'[{"product_id": 7, "quantity": 1}, {"product_id": 9, "quantity": 4}]\', write: (i) a helper function compute_total(p_items JSONB) that looks up each product\'s price from the products table and returns the total order amount (7.5 marks); and (ii) a stored procedure make_orders(p_user_id INT, p_items JSONB) that generates orderid by concatenating the current timestamp with p_user_id, calls compute_total, and inserts the new order (5 marks).',
        model: '<p><b>Background:</b> In the Exam Q5(b) schema (unlike the lecture variation where <code>unit_price</code> is already inside the JSONB or stored on a <code>variations</code> table), each element of the input JSONB array contains only <code>product_id</code> and <code>quantity</code>. The helper function must therefore unpack the JSONB array with <code>jsonb_array_elements</code> and join against <code>products.price</code>.</p><p><b>Answer and solution:</b></p><p><b>(b)(i) Helper Function <code>compute_total(p_items JSONB)</code> (7.5 marks):</b></p><pre>CREATE OR REPLACE FUNCTION compute_total(p_items JSONB)\nRETURNS NUMERIC(12, 2) AS $$\nDECLARE\n  v_total NUMERIC(12, 2);\nBEGIN\n  SELECT COALESCE(\n    SUM(p.price * (elem-&gt;&gt;\'quantity\')::INT),\n    0\n  )\n  INTO v_total\n  FROM jsonb_array_elements(p_items) AS elem\n  JOIN products p\n    ON p.product_id = (elem-&gt;&gt;\'product_id\')::INT;\n\n  RETURN v_total;\nEND;\n$$ LANGUAGE plpgsql;</pre><p><b>(b)(ii) Stored Procedure <code>make_orders(p_user_id INT, p_items JSONB)</code> (5 marks):</b></p><pre>CREATE OR REPLACE PROCEDURE make_orders(p_user_id INT, p_items JSONB)\nLANGUAGE plpgsql AS $$\nDECLARE\n  v_order_id TEXT;\n  v_total NUMERIC(12, 2);\nBEGIN\n  -- Concatenate current timestamp with user ID\n  v_order_id := TO_CHAR(NOW(), \'YYYYMMDDHH24MISS\') || \'-\' || p_user_id::TEXT;\n\n  -- Compute total using the helper function from b(i)\n  v_total := compute_total(p_items);\n\n  -- Insert the new order record\n  INSERT INTO orders (orderid, customer_id, orderdetails, totalamount, orderdate)\n  VALUES (v_order_id, p_user_id, p_items, v_total, NOW());\nEND;\n$$;</pre><p><b>Scenario:</b> When the user executes Figure 4\'s call:</p><pre>CALL make_orders(\n  3,\n  \'[{"product_id": 7, "quantity": 1}, {"product_id": 9, "quantity": 4}, {"product_id": 11, "quantity": 2}]\'::jsonb\n);</pre><p><code>compute_total</code> expands the 3 JSON objects, extracts <code>(elem-&gt;&gt;\'product_id\')::INT</code> and <code>(elem-&gt;&gt;\'quantity\')::INT</code>, joins each with <code>products.price</code>, and returns the exact sum.</p><p><b>How they combine:</b> <code>compute_total</code> encapsulates the JSONB-to-relational join logic in a reusable function, while <code>make_orders</code> handles the procedural workflow of generating the composite timestamp-user ID, invoking <code>compute_total</code>, and inserting the committed row into <code>orders</code>.</p><p><b>Conclusion:</b> Using <code>jsonb_array_elements</code> with text extraction (<code>-&gt;&gt;</code>) and explicit integer casts bridges semi-structured JSONB payloads with strongly typed relational price lookups in a single atomic procedure call.</p>',
        rubric: [
          'Part (b-i): Expands p_items with jsonb_array_elements(p_items), extracts product_id and quantity using ->> with ::INT cast, joins products on product_id, and sums p.price * quantity',
          'Part (b-ii): Uses CREATE OR REPLACE PROCEDURE make_orders(p_user_id INT, p_items JSONB), concatenates current timestamp and p_user_id for orderid, calls compute_total(p_items), and inserts into orders'
        ]
      }
    ]
  },
  t5: {
    cards: [
      {
        h: 'CA1 Practical Test Walkthrough (Q1 to Q5): Core SQL & Indexing',
        b: '<p>The 30-mark CSC420 Practical Test uses the <b><code>business_db</code></b> schema (<code>customers</code>, <code>products</code>, <code>orders</code>):</p><ul><li><b>Q1 (2m — Simple Filtering):</b> <code>SELECT customer_name, city, state_code, acct_balance FROM customers WHERE state_code = \'KAN\' AND segment = \'Corporate\' ORDER BY acct_balance DESC;</code></li><li><b>Q2 (3m — Grouping &amp; Aggregation):</b> <code>SELECT p.category, SUM(o.quantity_ordered) AS total_qty, SUM(o.order_total) AS total_revenue FROM orders o JOIN products p USING (product_id) WHERE o.status = \'Completed\' GROUP BY p.category ORDER BY total_revenue DESC;</code></li><li><b>Q3 (4m — LEFT JOIN Zero-Order Filter):</b> <code>SELECT c.customer_id, c.customer_name, c.segment, c.state_code FROM customers c LEFT JOIN orders o USING (customer_id) WHERE o.order_id IS NULL ORDER BY c.customer_id;</code></li><li><b>Q4 (5m — CTE Revenue Above Category Average):</b> Compute per-product revenue in a CTE <code>product_rev</code>, then filter where <code>prod_rev &gt; AVG(prod_rev)</code> within the same category using either a second CTE <code>cat_avg</code> or a window function <code>AVG(prod_rev) OVER (PARTITION BY category)</code>.</li><li><b>Q5 (4m — Composite B+-Tree Index):</b> <code>CREATE INDEX idx_orders_status_date ON orders (status, order_date);</code> accelerates queries with equality on <code>status</code> and a range on <code>order_date</code>.</li></ul>'
      },
      {
        h: 'CA1 Practical Test Walkthrough (Q6): Array Replace & unnest() Aggregation',
        b: '<p>Question 6 (6 marks) tests two essential PostgreSQL array patterns on <code>customers.interests TEXT[]</code>:</p><p><b>Q6-1 (3m):</b> For customers whose <code>interests</code> contain <code>\'Groceries\'</code>, remove <code>\'Groceries\'</code> and add <code>\'Laptops\'</code> &amp; <code>\'Phones &amp; Tablets\'</code>:</p><pre>UPDATE customers\nSET interests = array_cat(\n  array_remove(interests, \'Groceries\'),\n  ARRAY[\'Laptops\', \'Phones &amp; Tablets\']\n)\nWHERE \'Groceries\' = ANY(interests);</pre><p><b>Q6-2 (3m):</b> Top 5 most common interests among <code>\'Wholesale\'</code> customers (breaking ties alphabetically):</p><pre>SELECT interest, COUNT(*) AS customer_count\nFROM customers,\nLATERAL unnest(interests) AS interest\nWHERE segment = \'Wholesale\'\nGROUP BY interest\nORDER BY customer_count DESC, interest ASC\nLIMIT 5;</pre>'
      },
      {
        h: 'CA1 Practical Test Walkthrough (Q7): Correlated Array Sum & FILTER',
        b: '<p>Question 7 (6 marks) asks for a single-row summary of <b>2025 orders for <code>\'Electronics\'</code> products by customers in <code>\'LAG\'</code></b>, where each order has an integer array <code>deliveries INT[]</code> recording batch delivery quantities:</p><ul><li>An order is <b>incompletely delivered</b> if <code>cardinality(o.deliveries) = 0</code> OR the sum of elements in <code>o.deliveries</code> is less than <code>o.quantity_ordered</code>.</li></ul><pre>SELECT\n  COUNT(*) AS total_orders,\n  COALESCE(SUM(o.quantity_ordered), 0) AS total_quantity_ordered,\n  COALESCE(SUM((\n    SELECT COALESCE(SUM(x), 0) FROM unnest(o.deliveries) AS x\n  )), 0) AS total_quantity_delivered,\n  COUNT(*) FILTER (\n    WHERE COALESCE((\n      SELECT SUM(x) FROM unnest(o.deliveries) AS x\n    ), 0) &lt; o.quantity_ordered\n  ) AS incomplete_orders\nFROM orders o\nJOIN customers c USING (customer_id)\nJOIN products p USING (product_id)\nWHERE p.category = \'Electronics\'\n  AND c.state_code = \'LAG\'\n  AND o.order_date &gt;= DATE \'2025-01-01\'\n  AND o.order_date &lt;  DATE \'2026-01-01\';</pre>'
      },
      {
        h: 'Exam Q3(c): Table Function + Mentees of Lowest Earner per Department',
        b: '<p>In Exam Q3(c), Figure 1 defines <code>instructor_of(dname text) RETURNS TABLE(id varchar, name varchar, dept_name varchar, salary numeric)</code> returning all instructors in department <code>dname</code>, alongside tables <code>instructor</code>, <code>student</code>, and <code>mentoring(studentid, instructorid)</code>.</p><p><b>(c)(i) Fetch the IDs of the mentees of the lowest earner in each department (4 marks):</b></p><pre>SELECT i.dept_name, i.id AS instructor_id, i.name AS instructor_name, m.studentid AS mentee_id\nFROM instructor i\nJOIN mentoring m ON m.instructorid = i.id\nWHERE i.salary = (\n  SELECT MIN(sub.salary)\n  FROM instructor_of(i.dept_name) AS sub\n);</pre><p><b>(c)(ii) Tweak needed if the names of the mentees are also required (2 marks):</b></p><p>Add a <code>JOIN student s ON s.id = m.studentid</code> and include <code>s.name AS mentee_name</code> in the <code>SELECT</code> list.</p>'
      }
    ],
    recall: [
      {
        q: 'In PostgreSQL, how do you replace one element (\'Groceries\') with two new elements (\'Laptops\', \'Phones & Tablets\') inside a TEXT[] column?',
        a: 'Use UPDATE customers SET interests = array_cat(array_remove(interests, \'Groceries\'), ARRAY[\'Laptops\', \'Phones & Tablets\']) WHERE \'Groceries\' = ANY(interests);'
      },
      {
        q: 'How do you sum the integer elements inside an array column o.deliveries INT[] for each row in an outer query?',
        a: 'Use a correlated scalar subquery with unnest: COALESCE((SELECT SUM(x) FROM unnest(o.deliveries) AS x), 0).'
      },
      {
        q: 'In CA1 Question 3, why is LEFT JOIN ... WHERE o.order_id IS NULL used instead of an INNER JOIN?',
        a: 'An INNER JOIN drops customers with zero orders. A LEFT JOIN preserves all customers and fills order columns with NULL when no matching order exists, so WHERE o.order_id IS NULL isolates customers who have never placed an order.'
      },
      {
        q: 'In Exam Q3(c), if you already have a query joining instructor i and mentoring m on m.instructorid = i.id to get mentee IDs (m.studentid), what tweak retrieves the mentees\' names as well?',
        a: 'Join the student table on the mentee ID (JOIN student s ON s.id = m.studentid) and add s.name to the SELECT list.'
      }
    ],
    quiz: [
      {
        q: 'Which query correctly finds the top 5 most common individual interests stored in `customers.interests TEXT[]` among `\'Wholesale\'` customers?',
        o: [
          'SELECT interests, COUNT(*) FROM customers WHERE segment = \'Wholesale\' GROUP BY interests LIMIT 5;',
          'SELECT interest, COUNT(*) AS cnt FROM customers, LATERAL unnest(interests) AS interest WHERE segment = \'Wholesale\' GROUP BY interest ORDER BY cnt DESC, interest ASC LIMIT 5;',
          'SELECT cardinality(interests), COUNT(*) FROM customers GROUP BY 1 LIMIT 5;',
          'SELECT jsonb_array_elements(interests) FROM customers WHERE segment = \'Wholesale\';'
        ],
        a: 1,
        e: 'To count individual elements inside a `TEXT[]` column across rows, you must expand the array into one row per element using `unnest(interests) AS interest` and then `GROUP BY interest`.'
      },
      {
        q: 'In CA1 Question 5, why is `CREATE INDEX idx_orders_status_date ON orders (status, order_date);` ordered with `status` first and `order_date` second for `WHERE status = \'Completed\' AND order_date >= \'2025-01-01\'`?',
        o: [
          'Alphabetical column ordering is required by PostgreSQL.',
          'In a composite B+-tree index, placing the equality column (`status`) first narrows the tree to the exact status slice, within which the second column (`order_date`) is sorted contiguously for the range scan.',
          'B+-tree indexes only index the last column listed.',
          'PostgreSQL cannot place a DATE column first in an index.'
        ],
        a: 1,
        e: 'Composite B+-tree indexes follow the equality-before-range rule: matching `status = \'Completed\'` on the leading key isolates a contiguous range of `order_date` entries.'
      }
    ],
    theory: [
      {
        q: 'CA1 Practical Test Q6 & Q7: On the business_db database (customers, products, orders), write PostgreSQL statements to: (a) remove \'Groceries\' and append \'Laptops\' and \'Phones & Tablets\' for every customer interested in \'Groceries\', and list the top 5 interests among \'Wholesale\' customers; and (b) produce a single-row 2025 delivery summary (total_orders, total_quantity_ordered, total_quantity_delivered, incomplete_orders) for \'Electronics\' products ordered by customers in \'LAG\'.',
        model: '<p><b>Background:</b> PostgreSQL native arrays (<code>TEXT[]</code> and <code>INT[]</code>) allow multi-valued attributes such as customer interests and batch delivery quantities to be stored directly inside relational rows without creating separate junction tables. Querying and mutating these arrays requires array manipulation functions (<code>array_remove</code>, <code>array_cat</code>, <code>ANY</code>) and set-returning expansion (<code>unnest</code>).</p><p><b>Answer and solution:</b></p><p><b>(a) Part 1 — Updating the <code>interests</code> array (3 marks):</b></p><pre>UPDATE customers\nSET interests = array_cat(\n  array_remove(interests, \'Groceries\'),\n  ARRAY[\'Laptops\', \'Phones &amp; Tablets\']\n)\nWHERE \'Groceries\' = ANY(interests);</pre><p><b>(a) Part 2 — Top 5 interests for Wholesale customers (3 marks):</b></p><pre>SELECT\n  interest,\n  COUNT(*) AS customer_count\nFROM customers,\nLATERAL unnest(interests) AS interest\nWHERE segment = \'Wholesale\'\nGROUP BY interest\nORDER BY customer_count DESC, interest ASC\nLIMIT 5;</pre><p><b>(b) 2025 Electronics Delivery Summary for Lagos (<code>\'LAG\'</code>) (6 marks):</b></p><pre>SELECT\n  COUNT(*) AS total_orders,\n  COALESCE(SUM(o.quantity_ordered), 0) AS total_quantity_ordered,\n  COALESCE(SUM((\n    SELECT COALESCE(SUM(x), 0)\n    FROM unnest(o.deliveries) AS x\n  )), 0) AS total_quantity_delivered,\n  COUNT(*) FILTER (\n    WHERE COALESCE((\n      SELECT SUM(x)\n      FROM unnest(o.deliveries) AS x\n    ), 0) &lt; o.quantity_ordered\n  ) AS incomplete_orders\nFROM orders o\nJOIN customers c USING (customer_id)\nJOIN products p USING (product_id)\nWHERE p.category = \'Electronics\'\n  AND c.state_code = \'LAG\'\n  AND o.order_date &gt;= DATE \'2025-01-01\'\n  AND o.order_date &lt;  DATE \'2026-01-01\';</pre><p><b>Scenario:</b> Suppose an order in Lagos for 10 laptops has <code>deliveries = \'{4, 3}\'</code> (sum = 7 &lt; 10) and another for 5 phones has <code>deliveries = \'{}\'</code> (empty array, sum = 0 &lt; 5). The correlated subquery <code>(SELECT COALESCE(SUM(x), 0) FROM unnest(o.deliveries) AS x)</code> evaluates to <code>7</code> and <code>0</code> respectively, so both are counted by the <code>FILTER (WHERE ... &lt; o.quantity_ordered)</code> clause as incomplete orders.</p><p><b>How they combine:</b> Avoid expanding <code>unnest(o.deliveries)</code> directly in the outer <code>FROM</code> clause of part (b): doing so would drop orders with empty <code>\'{}\'</code> delivery arrays and multiply <code>o.quantity_ordered</code> by the number of delivery batches. Evaluating <code>unnest(o.deliveries)</code> inside a correlated scalar subquery preserves a strict one-row-per-order grain before outer aggregation.</p><p><b>Conclusion:</b> Combining <code>unnest()</code> inside correlated subqueries with <code>COUNT(*) FILTER (WHERE ...)</code> produces accurate multi-metric summaries over array columns in a single SQL pass.</p>',
        rubric: [
          'Uses array_remove and array_cat (or ||) filtered by \'Groceries\' = ANY(interests) or @> ARRAY[\'Groceries\']',
          'Expands interests with unnest(interests) filtered by segment = \'Wholesale\', groups by interest, orders by count DESC, interest ASC, and limits to 5',
          'Computes per-order delivery sums safely for empty arrays using COALESCE and a correlated unnest(o.deliveries) subquery without duplicating outer order rows'
        ]
      }
    ]
  },
  t6: {
    cards: [
      {
        h: 'Origins of NoSQL & The 3 Vs of Big Data',
        b: '<p>The term <b>NoSQL</b> gained popularity from a <b>2009 San Francisco meetup</b> organized using a short Twitter hashtag (<code>#nosql</code>) for open-source, distributed, non-relational databases. Today it means <b>"Not Only SQL"</b>.</p><ul><li><b>3 Vs driving NoSQL:</b><ul><li><b>Volume:</b> Terabytes/petabytes of user and sensor data exceeding a single server.</li><li><b>Velocity:</b> Millions of concurrent reads and writes per second requiring low latency.</li><li><b>Variety:</b> Semi-structured and polymorphic data (nested JSON, social graphs, logs) that resist rigid relational schemas.</li></ul></li><li><b>Pioneering systems:</b> Google <b>Bigtable</b> (2006), Amazon <b>Dynamo</b> (2007), and Facebook <b>Cassandra</b> (2008).</li></ul>'
      },
      {
        h: 'Model 1: Key-Value Stores & Redis Cart Commands',
        b: '<p>A <b>Key-Value store</b> (e.g., <b>Redis</b>, Amazon DynamoDB, Memcached) is a distributed hash table mapping a unique key to an opaque value (string, hash, list, set). Lookups by key are $O(1)$.</p><p><b>Lecture 4 Redis Shopping Cart Example (User 3, Product 7 Variation 2):</b></p><pre>HSET cart:3 7:2 2        -- Set field "7:2" to quantity 2 in hash cart:3\nHINCRBY cart:3 7:2 1     -- Increment quantity of "7:2" by 1 (now 3)\nHGETALL cart:3           -- Return all item fields and quantities in cart:3\nEXPIRE cart:3 86400      -- Auto-delete cart:3 after 24 hours (86,400 seconds)</pre><div class="tip"><b>Limitation:</b> You cannot query inside values across keys (e.g., "find all carts containing Indomie") without scanning every key or maintaining a secondary index.</div>'
      },
      {
        h: 'Model 2: Document Databases (MongoDB) & Aggregate Independence',
        b: '<p>A <b>Document database</b> (e.g., <b>MongoDB</b>, CouchDB, Firestore) stores self-contained JSON/BSON documents grouped into collections.</p><pre>db.products.find(\n  { "variations.price": { $lt: 3000 } },\n  { name: 1, _id: 0 }\n)</pre><ul><li>Unlike Key-Value stores, document databases understand the internal structure of each document and allow secondary indexes and queries on any nested field.</li><li><b>Why documents scale out easily:</b> Because an entire product (with its variations) or an entire order is stored together as one self-contained unit, documents can be partitioned (sharded) across servers with minimal cross-node joins.</li></ul>'
      },
      {
        h: 'Model 3: Column-Family / Wide-Column Stores (Apache Cassandra)',
        b: '<p>Modelled on Google Bigtable, <b>Wide-Column stores</b> (e.g., <b>Apache Cassandra</b>, HBase) organize data into tables where the <b>PRIMARY KEY</b> has two parts:</p><pre>CREATE TABLE orders_by_user (\n  user_id int,\n  order_id text,\n  created_at timestamp,\n  total int,\n  status text,\n  PRIMARY KEY ((user_id), order_id)\n);</pre><ul><li><b>Partition Key <code>(user_id)</code>:</b> Hashed to determine which node in the cluster stores all orders for that user.</li><li><b>Clustering Column <code>order_id</code>:</b> Sorts all orders for that user physically on disk inside the partition.</li><li><b>Query-driven design:</b> Looking up <code>WHERE user_id = 3</code> reads one contiguous partition on one node. Querying without the partition key (e.g., <code>WHERE status = \'Pending\'</code>) is <b>rejected by Cassandra</b> unless you append <code>ALLOW FILTERING</code>, which forces a slow full-cluster scan!</li></ul>'
      },
      {
        h: 'Model 4: Graph Databases (Neo4j Cypher & 2024 ISO GQL)',
        b: '<p><b>Graph databases</b> (e.g., <b>Neo4j</b>) store <b>nodes</b> (entities with labels like <code>:User</code>, <code>:Product</code>) and directed <b>relationships</b> (<code>-[:BOUGHT]-&gt;</code>) with index-free adjacency. In <b>April 2024</b>, <b>ISO GQL</b> became the first new ISO database query language standard since SQL (1987).</p><p><b>Lecture 4 Collaborative Filtering Recommendation in Cypher:</b></p><pre>MATCH (a:User {name: "Adaeze"})-[:BOUGHT]-&gt;(:Product)\n      &lt;-[:BOUGHT]-(:User)-[:BOUGHT]-&gt;(rec:Product)\nWHERE NOT EXISTS { MATCH (a)-[:BOUGHT]-&gt;(rec) }\nRETURN DISTINCT rec.name;</pre><p><b>University DB 3-hop Traversal (Appendix):</b></p><pre>MATCH (s:Student)-[:TAKES]-&gt;(sc:Section)\n      &lt;-[:TEACHES]-(i:Instructor)-[:BELONGS_TO]-&gt;(d:Department)\nWHERE d.deptname = \'Comp. Sci.\'\nRETURN s, sc;</pre><div class="tip"><b>Why graphs are hardest to shard:</b> Partitioning a connected graph across servers cuts edges between nodes (minimum edge-cut is NP-hard), causing multi-hop traversals to suffer high cross-network latency ("network hop per relationship").</div>'
      },
      {
        h: 'Schema-on-Write vs Schema-on-Read, ACID vs BASE & CAP',
        b: '<table><tr><th>Concept</th><th>Relational (SQL)</th><th>NoSQL (Distributed)</th></tr><tr><td><b>Schema Enforcement</b></td><td><b>Schema-on-Write:</b> Database validates columns and types before allowing an <code>INSERT</code>.</td><td><b>Schema-on-Read:</b> Database accepts any document fields on write; application interprets structure when reading.</td></tr><tr><td><b>Consistency Model</b></td><td><b>ACID:</b> Immediate strong consistency across multi-table transactions.</td><td><b>BASE:</b> <b>B</b>asically <b>A</b>vailable, <b>S</b>oft state, <b>E</b>ventually consistent across replicas.</td></tr><tr><td><b>Scaling</b></td><td><b>Scale Up (Vertical):</b> Bigger CPU/RAM/SSD on one server.</td><td><b>Scale Out (Horizontal):</b> <b>Sharding</b> (splitting rows across nodes by key range/hash) + <b>Replication</b> (copies for fault tolerance).</td></tr></table><p><b>CAP Theorem (Brewer):</b> When a <b>Network Partition (P)</b> occurs between nodes, a distributed database must choose between <b>Consistency (C)</b> (reject writes/reads that cannot reach quorum) and <b>Availability (A)</b> (accept writes/reads on isolated nodes, risking stale data until the partition heals).</p>'
      },
      {
        h: 'Polyglot Persistence, Blurring Lines, NewSQL & Vector DBs',
        b: '<ul><li><b>Polyglot Persistence:</b> Using different database models inside the same system for what each does best — e.g., Splendid Stores using <b>PostgreSQL</b> for payments/inventory, <b>Redis</b> for ephemeral shopping carts, <b>MongoDB</b> for flexible product catalogs, <b>Cassandra</b> for order history logs, and <b>Neo4j</b> for product recommendations.</li><li><b>Blurring Lines:</b> Relational DBs added JSONB/arrays (PostgreSQL); NoSQL added SQL-like query languages (Cassandra CQL) and multi-document ACID transactions (MongoDB 4.0+); <b>NewSQL</b> (Google Spanner, CockroachDB) provides horizontal scale-out with full SQL and ACID; Michael Stonebraker (2010) argued NoSQL speed gains come primarily from removing classic locking/logging/buffer-pool overhead.</li><li><b>Other Specialized Models (Slide 35 &amp; Course Outline):</b><ul><li><b>Time-Series:</b> InfluxDB, Prometheus (IoT/metrics indexed by timestamp).</li><li><b>Search Engines:</b> Elasticsearch, OpenSearch (inverted indexes for full-text search).</li><li><b>Vector Databases:</b> <b>Pinecone, Milvus, Qdrant, pgvector</b> — store high-dimensional dense numerical vectors (embeddings from LLMs/neural networks) and perform fast $k$-Nearest Neighbour ($k$-NN) / Approximate Nearest Neighbour (ANN) similarity searches using <b>cosine similarity</b>, <b>dot product</b>, or <b>Euclidean ($L_2$) distance</b> for semantic search and RAG.</li><li><b>Multi-model:</b> ArangoDB, SurrealDB.</li></ul></li></ul>'
      }
    ],
    recall: [
      {
        q: 'Where did the term "NoSQL" originate in 2009, and what does it stand for today?',
        a: 'It originated as a short Twitter hashtag (#nosql) chosen by Johan Oskarsson for a 2009 San Francisco meetup on open-source, distributed, non-relational databases. Today it stands for "Not Only SQL".'
      },
      {
        q: 'Write the four Redis commands from Lecture 4 to add 2 units of variation "7:2" to user 3\'s cart, increment it by 1, fetch the whole cart, and set a 24-hour expiry.',
        a: 'HSET cart:3 7:2 2; HINCRBY cart:3 7:2 1; HGETALL cart:3; EXPIRE cart:3 86400'
      },
      {
        q: 'In Apache Cassandra\'s PRIMARY KEY ((user_id), order_id), what are the roles of user_id and order_id, and why does WHERE status = \'Pending\' fail by default?',
        a: 'user_id is the partition key (hashed to pick which cluster node stores the partition) and order_id is the clustering column (sorts rows inside that partition). Filtering by status without the partition key requires scanning every node in the cluster, so Cassandra blocks it unless ALLOW FILTERING is specified.'
      },
      {
        q: 'Why is horizontal sharding much harder for a Graph database (Neo4j) than for a Document database (MongoDB)?',
        a: 'Documents are self-contained aggregates that can be placed on independent shards by document key. Graphs consist of densely interconnected nodes; splitting a graph across servers cuts edges between machines, forcing multi-hop traversals to make slow network hops at each step.'
      },
      {
        q: 'Contrast Schema-on-Write with Schema-on-Read.',
        a: 'Schema-on-Write (relational DBs) enforces table structure, column types, and constraints before data is written to disk. Schema-on-Read (document/key-value NoSQL) stores arbitrary structure immediately on write and defers parsing/validation until the application reads the data.'
      },
      {
        q: 'What do the letters in BASE stand for, and how does BASE contrast with ACID?',
        a: 'Basically Available, Soft state, Eventual consistency. Whereas ACID prioritizes immediate strong consistency across every transaction, BASE prioritizes high availability and partition tolerance by allowing replicas to converge asynchronously over time.'
      },
      {
        q: 'What is a Vector Database (e.g., Pinecone, Milvus), and how does it search data differently from SQL equality/range queries?',
        a: 'A vector database stores high-dimensional numerical embedding vectors generated by machine-learning models and retrieves semantically similar items using Approximate Nearest Neighbour (ANN) searches over distance metrics such as cosine similarity, Euclidean distance, or inner product.'
      }
    ],
    quiz: [
      {
        q: 'In Apache Cassandra, given `PRIMARY KEY ((user_id), order_id)`, which statement about querying `SELECT * FROM orders_by_user WHERE status = \'Delivered\';` is TRUE?',
        o: [
          'Cassandra automatically uses a B+-tree index on `status`.',
          'Cassandra rejects the query by default because it omits the partition key `user_id`; running it requires `ALLOW FILTERING`, which performs an expensive full-cluster scan.',
          'Cassandra hashes `status` as a secondary partition key automatically.',
          'The query returns `0` rows without an error.'
        ],
        a: 1,
        e: 'In Cassandra, queries must supply the partition key (`user_id`) so the coordinator knows which node holds the data. Omitting it is rejected unless `ALLOW FILTERING` is added.'
      },
      {
        q: 'Which Redis command sets an automatic time-to-live of 24 hours on the hash key `cart:3`?',
        o: [
          'TTL cart:3 24',
          'EXPIRE cart:3 86400',
          'HSET cart:3 expire 86400',
          'TIMEOUT cart:3 86400'
        ],
        a: 1,
        e: '`EXPIRE key seconds` sets a time-to-live in seconds ($24 \\times 60 \\times 60 = 86400$).'
      },
      {
        q: 'In Neo4j Cypher, what does the pattern `(a:User {name: "Adaeze"})-[:BOUGHT]->(:Product)<-[:BOUGHT]-(:User)-[:BOUGHT]->(rec:Product)` match?',
        o: [
          'Only products that Adaeze has already bought.',
          'Products bought by other users who also bought at least one product that Adaeze bought (collaborative filtering candidates).',
          'Users who have never bought any product.',
          'All products in the database regardless of purchases.'
        ],
        a: 1,
        e: 'The path goes from Adaeze to a product she bought (`-[:BOUGHT]->(:Product)`), backwards to another user who bought that same product (`<-[:BOUGHT]-(:User)`), and forward to another product that user bought (`-[:BOUGHT]->(rec:Product)`).'
      },
      {
        q: 'According to the CAP theorem, what trade-off must a distributed database make when a network partition (P) separates cluster nodes?',
        o: [
          'It must choose between B+-tree indexing and Hash indexing.',
          'It must choose between Consistency (rejecting operations that cannot guarantee up-to-date data) and Availability (serving every request even if some nodes return stale data).',
          'It must choose between Schema-on-Write and Schema-on-Read.',
          'It must stop all reads and writes permanently.'
        ],
        a: 1,
        e: 'Because network partitions (`P`) are inevitable in distributed networks, a system must choose between `C` (Consistency) and `A` (Availability) during a partition.'
      },
      {
        q: 'What is "Polyglot Persistence"?',
        o: [
          'Writing stored procedures in multiple programming languages inside PostgreSQL.',
          'Combining multiple database models (e.g., PostgreSQL + Redis + MongoDB + Neo4j) within one application architecture so each workload uses the data model best suited to it.',
          'Translating SQL queries automatically into Cypher and MQL.',
          'Storing strings in multiple human languages using UTF-8.'
        ],
        a: 1,
        e: 'Polyglot persistence means choosing different data stores for different subsystems (e.g., Redis for carts, Postgres for payments, Neo4j for recommendations) within the same application.'
      }
    ],
    theory: [
      {
        q: 'Compare the four core NoSQL data models (Key-Value, Document, Column-Family, and Graph) using the Splendid Stores e-commerce platform from Lecture 4. For each model, name a representative database engine, show a concrete query/command example, explain which Splendid Stores workload it fits best, and discuss why Document stores scale out horizontally more easily than Graph databases.',
        model: '<p><b>Background:</b> Modern e-commerce platforms handle diverse workloads — from sub-millisecond shopping cart updates and polymorphic product catalogs to high-volume order history logs and multi-hop social recommendations. Using a single database engine for all four workloads forces painful performance or schema compromises, motivating <b>polyglot persistence</b> across the four core NoSQL data models.</p><p><b>Answer and solution:</b></p><ol><li><b>Key-Value Store (e.g., Redis):</b><ul><li><b>Data model:</b> Maps a unique key to an opaque value or hash structure with $O(1)$ lookup latency.</li><li><b>Splendid Stores workload &amp; query:</b> Ephemeral shopping carts keyed by user ID: <code>HSET cart:3 7:2 2</code>, <code>HINCRBY cart:3 7:2 1</code>, <code>HGETALL cart:3</code>, and <code>EXPIRE cart:3 86400</code>.</li><li><b>Limitation:</b> Cannot efficiently query across values (e.g., finding all carts containing a specific product).</li></ul></li><li><b>Document Database (e.g., MongoDB):</b><ul><li><b>Data model:</b> Self-contained JSON/BSON documents with nested objects and arrays, supporting secondary indexes on any internal field.</li><li><b>Splendid Stores workload &amp; query:</b> Product catalog with embedded variations: <code>db.products.find({"variations.price": {$lt: 3000}}, {name: 1, _id: 0})</code>.</li></ul></li><li><b>Column-Family / Wide-Column Store (e.g., Apache Cassandra):</b><ul><li><b>Data model:</b> Rows organized into partitions keyed by a <b>partition key</b> (which determines node placement) and sorted on disk by <b>clustering columns</b>.</li><li><b>Splendid Stores workload &amp; query:</b> Massive write-heavy order history queried by customer: <code>PRIMARY KEY ((user_id), order_id)</code> allowing single-partition reads for <code>SELECT * FROM orders_by_user WHERE user_id = 3;</code>.</li></ul></li><li><b>Graph Database (e.g., Neo4j using Cypher / ISO GQL):</b><ul><li><b>Data model:</b> Nodes and directed relationships stored with index-free adjacency for fast multi-hop traversals.</li><li><b>Splendid Stores workload &amp; query:</b> Collaborative filtering ("customers who bought what Adaeze bought also bought"):<pre>MATCH (a:User {name: "Adaeze"})-[:BOUGHT]-&gt;(:Product)&lt;-[:BOUGHT]-(:User)-[:BOUGHT]-&gt;(rec:Product)\nWHERE NOT EXISTS { MATCH (a)-[:BOUGHT]-&gt;(rec) }\nRETURN DISTINCT rec.name;</pre></li></ul></li></ol><p><b>Scenario:</b> Suppose Splendid Stores grows to 50 million users across 16 database nodes. When sharding the <b>MongoDB</b> product and order collections by <code>_id</code> or <code>user_id</code>, each document is a self-contained aggregate, so fetching a product or a user\'s order reads from a single shard. By contrast, if the <b>Neo4j</b> purchase graph is split across 16 servers, a 3-hop recommendation traversal from Adaeze to shared products to other users must repeatedly cross network boundaries between machines.</p><p><b>How they combine:</b> In a polyglot architecture, PostgreSQL acts as the ACID system of record for financial checkout and stock deduction, while events stream out to Redis (active session carts), MongoDB (catalog search), Cassandra (append-only order timeline), and Neo4j (recommendation engine).</p><p><b>Conclusion:</b> Document and Column-Family stores scale out cleanly because their data is partitioned around self-contained aggregates or partition keys, whereas Graph databases excel at deep relationship traversals on tightly coupled nodes where horizontal sharding introduces network-hop bottlenecks.</p>',
        rubric: [
          'Identifies all four models with a representative engine (Redis, MongoDB, Cassandra, Neo4j)',
          'Provides concrete Splendid Stores queries/commands for each (HSET/HGETALL/EXPIRE, db.products.find, PRIMARY KEY ((user_id), order_id), and Cypher MATCH recommendation pattern)',
          'Explains why documents shard cleanly as independent aggregates whereas sharding graphs cuts edges and causes cross-server network hops during traversals'
        ]
      }
    ]
  }
};
