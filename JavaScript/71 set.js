//Set allows only unique values in it
let s = new Set();
console.log(s);
s.add(12);
s.add(32);
s.add(22);
s.add(12);
console.log(s); //maintains size

//has
if (s.has(12)) console.log("Set has 12");
//size
console.log(s.size);
//delete
s.delete(22);
console.log(s.size);
//for of
for (let e of s) console.log("e=", e);
