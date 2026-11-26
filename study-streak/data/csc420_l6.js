/* CSC 420 t8 (26 Nov 2026): Lecture 6, MongoDB Query Language (Dr Stephen A. Adubi).
   Built from the lecture PDF. Assignment answers were checked against the splendid_stores
   JSON files (products, users, orders, manufacturers) in "Data Management II/MongoDB". */
(function(){
const C=window.COURSE_DATA.csc420;
C.topics.push({id:'t8',title:'MongoDB Query Language (Lecture 6)',
why:'Exam queries: update operators, conditions, $or/$not, and arrays with $elemMatch.',
cards:[
{h:'Reset the data first',b:`<p>Lecture 5's practicals changed the data, so recreate <code>splendid_stores</code> and re-import the JSON files.</p><p><b>Check:</b> 13 manufacturers · 15 products · 10 users · 14 orders.</p>`},
{h:'Update operators',b:`<ul><li><code>$set</code> sets a field · <code>$unset</code> removes one</li><li><code>$inc</code> adds to a number and <b>creates the field if missing</b></li><li><code>$push</code>, <code>$addToSet</code>, <code>$pull</code> change arrays</li></ul>
<p><code>updateOne</code> = first match · <code>updateMany</code> = every match. Same for <code>deleteOne</code>/<code>deleteMany</code>.</p>`},
{h:'$inc and $unset',b:`<pre>db.users.updateOne({ _id: 1 }, { $inc: { loyalty_points: 150 } })
db.users.updateOne({ _id: 3 }, { $unset: { mobiles: "" } })</pre><p>Adaeze had no <code>loyalty_points</code>, so $inc created it (flexible schema). The <code>""</code> in $unset is ignored.</p>`},
{h:'Many at once',b:`<pre>db.products.updateMany({ product_type: "digital" }, { $set: { delivery: "email" } })  // modifiedCount: 2
db.orders.deleteMany({ user_id: 2 })  // deletedCount: 2</pre><div class="trap"><code>deleteMany({})</code> deletes <b>every</b> document.</div>`},
{h:'Upsert',b:`<pre>db.manufacturers.updateOne({ _id: 14 }, { $set: { name: "PZ Cussons" } }, { upsert: true })</pre>
<p>No match → inserts: <code>upsertedCount: 1</code>. Run again → <code>matchedCount: 1, modifiedCount: 0</code>.</p>`},
{h:'Comparison and list conditions',b:`<p>Pattern: <code>{ field: { $operator: value } }</code></p>
<table><tr><th>Op</th><th>Means</th></tr><tr><td>$gt / $gte</td><td>&gt; / ≥</td></tr><tr><td>$lt / $lte</td><td>&lt; / ≤</td></tr><tr><td>$ne</td><td>≠</td></tr><tr><td>$in</td><td>any value in list (SQL IN)</td></tr><tr><td>$nin</td><td>none of the list</td></tr></table>
<p>Several fields in one filter are <b>ANDed</b>.</p>`},
{h:'Ranges and dates',b:`<pre>db.orders.find({ total_amount: { $gte: 20000, $lte: 50000 } }, { total_amount: 1 })
db.orders.find({ order_date: { $gte: ISODate("2026-08-01") } })</pre><p>Two conditions on one field = BETWEEN. Dates compare the same way with <code>ISODate</code>.</p>`},
{h:'$in, $ne and distinct',b:`<pre>db.users.find({ "address.city": { $in: ["Lagos", "Abuja"] } }, { first_name: 1 })
db.products.find({ product_type: { $ne: "physical" } }, { name: 1 })

const some_users = db.users.distinct("_id", { "address.city": { $in: ["Abeokuta", "Lagos"] } })  // [1, 7, 10]
db.orders.find({ user_id: { $in: some_users } }, { user_id: 1, total_amount: 1 })</pre>
<div class="trap"><code>distinct</code> returns a plain array that $in accepts. <code>find</code> returns a <b>cursor</b>, so <code>some_users._id</code> would hold no value and match nothing.</div>`},
{h:'$or',b:`<pre>db.products.find({ $or: [ { manufacturer_id: 9 }, { tags: "bestseller" } ] }, { name: 1 })</pre>
<p>An array of filters; at least one must be true (5 products). For alternatives on the <b>same</b> field, use <code>$in</code> instead.</p>`},
{h:'$not vs $lte',b:`<pre>db.users.countDocuments({ loyalty_points: { $not: { $gt: 100 } } })  // 9
db.users.countDocuments({ loyalty_points: { $lte: 100 } })            // 0</pre>
<p>Only Adaeze has points (150). <code>$not</code> also matches documents <b>without the field</b> (the other 9). <code>$lte</code> only matches documents that have it.</p>`},
{h:'Nested documents',b:`<pre>db.users.countDocuments({ address: { city: "Lagos" } })   // 0
db.users.countDocuments({ "address.city": "Lagos" })      // 2</pre>
<p>Matching a whole embedded document needs an <b>exact</b> match: every field, same order. Dot notation matches just the field.</p>`},
{h:'$all and $size',b:`<pre>db.products.find({ tags: { $all: ["bestseller", "insecticide"] } }, { name: 1 })  // Baygon aerosol
db.products.find({ tags: { $size: 0 } }, { name: 1 })                            // the kettle</pre>
<p>$all: contains every listed value, any order. $size: exactly n elements, <b>no ranges</b> like $gt.</p>`},
{h:'Dot notation vs $elemMatch',b:`<pre>// each condition may be met by a DIFFERENT variation
db.products.find({ "variations.price": { $lt: 5000 }, "variations.qty_on_hand": { $lt: 100 } })
// → Baygon aerosol, Milo, Indomie

// ONE variation must meet both
db.products.find({ variations: { $elemMatch: { price: { $lt: 5000 }, qty_on_hand: { $lt: 100 } } } })
// → Baygon aerosol only (3,500 with 85 in stock)</pre>`},
{h:'Returning part of an array',b:`<pre>db.products.findOne({ _id: 8 }, { name: 1, variations: { $slice: 1 } })
db.products.find({ "variations.qty_on_hand": 0 }, { name: 1, "variations.$": 1 })</pre>
<p><code>$slice: 1</code> first element; <code>-1</code> last. <code>"variations.$"</code> returns the first element that matched the filter (Samsung, variation 2).</p>`},
{h:'Updating arrays',b:`<pre>db.users.updateOne({ _id: 9 }, { $addToSet: { favourite_tags: "bestseller" } })
db.products.updateOne({ _id: 8 }, { $pull: { tags: "new arrival" } })</pre>
<p>$addToSet adds only if absent (second run: modifiedCount 0). $pull removes every matching element. The positional <code>$</code> updates the element the filter matched.</p>`},
{h:'Assignment answers',b:`<pre>// 1. Jan–Mar 2026, total above 30,000
db.orders.find({ order_date: { $gte: ISODate("2026-01-01"), $lt: ISODate("2026-04-01") },
                 total_amount: { $gt: 30000 } }, { user_id: 1, total_amount: 1 })
// → 4 orders: users 1 (422,000), 4 (37,500), 6 (616,000), 9 (38,900)

// 2. breakfast OR a variation under 1,000
db.products.find({ $or: [ { tags: "breakfast" }, { "variations.price": { $lt: 1000 } } ] },
                 { name: 1, _id: 0 })   // 6 products

// 3. ONE variation both fragile and under 10 in stock
db.products.find({ variations: { $elemMatch: { "details.shipping_class": "fragile",
                 qty_on_hand: { $lt: 10 } } } }, { name: 1 })
// → Tecno Camon 30 5G, Samsung Galaxy A15

// 4. Golden Morn bestseller, no duplicates; XL Ankara stock −2
db.products.updateOne({ _id: 5 }, { $addToSet: { tags: "bestseller" } })
db.products.updateOne({ _id: 13, "variations.variation_no": 4 },
                      { $inc: { "variations.$.qty_on_hand": -2 } })   // 10 → 8</pre>
<p><b>Why Practical 8 differs:</b> $not inverts the whole condition, so users with no loyalty_points field count (9). $lte needs the field to exist and be ≤ 100; only Adaeze has it, with 150, so 0.</p>`}
],
recall:[
['What does $inc do if the field is missing?','Creates it with the increment as its value.'],
['updateOne vs updateMany?','updateOne changes the first match; updateMany changes every match.'],
['What does upsert: true do?','Inserts a new document if nothing matches; otherwise updates the match.'],
['Upsert run twice on PZ Cussons: counts?','First: upsertedCount 1. Second: matchedCount 1, modifiedCount 0.'],
['Danger of deleteMany({})?','It deletes every document in the collection.'],
['How are several fields in one filter combined?','With AND.'],
['When use $in instead of $or?','For alternatives on the same field.'],
['Why use distinct, not find, before $in?','distinct returns a plain array; find returns a cursor.'],
['Why does $not {$gt:100} count 9 but $lte 100 count 0?','$not also matches documents missing the field; $lte needs the field.'],
['Why does {address:{city:"Lagos"}} find 0?','A whole embedded document must match exactly (all fields, same order); use "address.city".'],
['$all vs $size?','$all: array contains every listed value; $size: exactly n elements, no ranges.'],
['Why $elemMatch?','So one array element meets every condition; dot notation lets different elements satisfy each.'],
['$slice: 1 vs -1?','First element vs last element.'],
['$addToSet vs $push?','$addToSet adds only if not already present.'],
['What does $pull do?','Removes every matching element from an array.']
],
quiz:[
{k:'mcq',q:'Which operator removes a field?',o:['$pull','$unset','$set','$inc'],a:1},
{k:'mcq',q:'db.users.updateOne({_id:1},{$inc:{loyalty_points:150}}) when the field is missing:',o:['Error','Nothing happens','Creates loyalty_points: 150','Sets it to null'],a:2},
{k:'tf',q:'updateMany changes only the first matching document.',a:false},
{k:'mcq',q:'Running the PZ Cussons upsert a second time gives:',o:['upsertedCount: 1','matchedCount: 1, modifiedCount: 0','An error','A duplicate document'],a:1},
{k:'gap',q:'Option that inserts a document when an update matches nothing: { ____: true }',a:'upsert'},
{k:'mcq',q:'SQL IN is equivalent to:',o:['$or','$in','$all','$elemMatch'],a:1},
{k:'mcq',q:'Products that are NOT physical:',o:['{product_type:{$nin:"physical"}}','{product_type:{$ne:"physical"}}','{$not:"physical"}','{product_type:{$lt:"physical"}}'],a:1},
{k:'tf',q:'Fields listed together in one filter are combined with OR.',a:false},
{k:'mcq',q:'Why is distinct used before $in in Practical 6?',o:['It is faster','It returns a plain array','It sorts results','find cannot filter'],a:1},
{k:'mcq',q:'{loyalty_points:{$not:{$gt:100}}} also matches documents that:',o:['Have points over 100','Lack the field','Have null _id','Have arrays'],a:1},
{k:'mcq',q:'Users in Lagos (2 exist). Which query finds them?',o:['{address:{city:"Lagos"}}','{"address.city":"Lagos"}','{address:"Lagos"}','{city:"Lagos"}'],a:1},
{k:'mcq',q:'Array contains BOTH "bestseller" and "insecticide":',o:['$in','$all','$size','$or'],a:1},
{k:'tf',q:'$size accepts ranges such as {$gt: 2}.',a:false},
{k:'mcq',q:'One variation must be both under 5,000 and under 100 in stock:',o:['Dot notation','$elemMatch','$all','$slice'],a:1},
{k:'mcq',q:'Projection returning only the LAST variation:',o:['{variations:{$slice:1}}','{variations:{$slice:-1}}','{"variations.$":1}','{variations:-1}'],a:1},
{k:'mcq',q:'Add a tag only if it is not already there:',o:['$push','$set','$addToSet','$inc'],a:2},
{k:'gap',q:'Operator that removes every matching element from an array: $____',a:'pull'},
{k:'mcq',q:'The positional "variations.$" in a projection returns:',o:['All variations','The first matching element','The last element','Variation count'],a:1}
],
theory:[
{q:'Using the splendid_stores data, write queries to: (a) find orders between 20,000 and 50,000 showing only the total; (b) find users in Lagos or Abuja; (c) give user 1 150 loyalty points; (d) add manufacturer 14 "PZ Cussons" only if it does not exist. Explain each.',
pts:['(a) $gte+$lte on total_amount with projection','(b) $in on "address.city" (dot notation)','(c) updateOne + $inc, creates field','(d) updateOne + $set + upsert:true','Counts/behaviour explained'],
model:`<p><b>Background.</b> MQL filters put conditions inside the field value; updates name what to change with operators.</p>
<p><b>Answer and solution.</b></p><pre>db.orders.find({ total_amount: { $gte: 20000, $lte: 50000 } }, { total_amount: 1 })
db.users.find({ "address.city": { $in: ["Lagos", "Abuja"] } })
db.users.updateOne({ _id: 1 }, { $inc: { loyalty_points: 150 } })
db.manufacturers.updateOne({ _id: 14 }, { $set: { name: "PZ Cussons" } }, { upsert: true })</pre>
<p>(a) two conditions on one field make a range (like BETWEEN). (b) dot notation reaches the nested city; $in is SQL's IN (Adaeze, Ibrahim, Oluwaseun). (c) $inc creates the missing field. (d) upsert inserts when nothing matches (upsertedCount 1); rerun gives matchedCount 1, modifiedCount 0.</p>
<p><b>Scenario.</b> A store manager runs a loyalty promo and onboards a new supplier without risking duplicates.</p>
<p><b>How they combine.</b> Query operators choose documents; update operators change only named fields.</p>
<p><b>Conclusion.</b> Ranges, $in, $inc and upsert cover most everyday reads and writes.</p>`},
{q:'Explain with examples the difference between querying an array of documents with dot notation and with $elemMatch.',
pts:['Dot notation: each condition can be met by different elements','Milo example (3 results)','$elemMatch: one element must meet all','Baygon only (3,500, 85)','When to use each'],
model:`<p><b>Background.</b> Products have a <code>variations</code> array of documents.</p>
<p><b>Answer and solution.</b> <code>{ "variations.price": { $lt: 5000 }, "variations.qty_on_hand": { $lt: 100 } }</code> returns Baygon aerosol, Milo and Indomie, because one variation may satisfy the price and another the stock (Milo). <code>{ variations: { $elemMatch: { price: { $lt: 5000 }, qty_on_hand: { $lt: 100 } } } }</code> returns only the Baygon aerosol, whose single 3,500 variation has 85 in stock.</p>
<p><b>Scenario.</b> Restocking cheap items that are low: only $elemMatch gives the right list.</p>
<p><b>How they combine.</b> Dot notation suits one condition; several conditions on the same element need $elemMatch.</p>
<p><b>Conclusion.</b> Use $elemMatch whenever conditions must hold for the same element.</p>`},
{q:'Explain why db.users.countDocuments({loyalty_points:{$not:{$gt:100}}}) returns 9 while db.users.countDocuments({loyalty_points:{$lte:100}}) returns 0.',
pts:['Only Adaeze has the field (150)','$not inverts the whole condition','Missing field → condition $gt false → $not true → 9','$lte requires field to exist → 0','Lesson: $not ≠ opposite comparison'],
model:`<p><b>Background.</b> MongoDB's schema is flexible, so fields can be missing.</p>
<p><b>Answer and solution.</b> Only Adaeze has loyalty_points, with 150. $not reverses "$gt 100": for the 9 users with no field, "$gt 100" is false, so $not makes it true; Adaeze's 150 is excluded → 9. $lte matches only documents that have the field with a value ≤ 100; none do → 0.</p>
<p><b>Scenario.</b> A report of "customers with at most 100 points" would wrongly include customers never enrolled if written with $not.</p>
<p><b>How they combine.</b> Missing fields plus $not's inversion explain the gap.</p>
<p><b>Conclusion.</b> $not also matches missing fields; use $lte (or add $exists) for a true numeric comparison.</p>`}
]});
})();
