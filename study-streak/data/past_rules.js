/* Exam rules for "Sit the real paper" mode. Taken from each paper's instructions.
   rule: shown to the student; mins: time allowed; compulsory: question groups pre-ticked. */
(function(){
  const D=window.COURSE_DATA||{};
  const set=(id,o)=>{if(D[id]&&D[id].past)Object.assign(D[id].past,o)};
  set('ins401',{rule:'Answer three questions. Question 1 is compulsory (25 marks); the others carry 20 marks each. Only some parts of Q3–Q5 are in the app.',mins:120,compulsory:['Q1']});
  set('sen412',{rule:'Answer Question ONE (17 marks) and any other three questions (16 marks each).',mins:150,compulsory:['Q1']});
  set('sen419',{rule:'Question 1 is compulsory; answer any other question as instructed on the paper.',mins:120,compulsory:['Q1']});
  set('sen408',{rule:'Sections A and B are compulsory. Answer one question in Section C.',mins:120,compulsory:['Section A','Section B']});
  set('csc420',{rule:'Section A: answer Q1 OR Q2 (25 marks). Section B: answer any two of Q3, Q4, Q5 (20 marks each). CA1 is a separate 30-mark practical; sit it on its own.',mins:120,compulsory:[]});
})();
