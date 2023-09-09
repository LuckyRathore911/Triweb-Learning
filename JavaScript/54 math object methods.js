console.log(Math.PI);

let max = Math.max(2, 23, 16, 8, 9);
console.log("max", max);
let min = Math.min(2, 23, 16, 8, 9);
console.log("min", min);

let r = Math.random();
console.log("random= ", r);
let r2 = Math.round(Math.random() * 100, 2);
console.log("two digits random= ", r2);
let r3 = Math.round(Math.random() * 10, 1);
console.log("one digit random= ", r3); // may give:   one digit random=  10
let r4 = Math.floor(Math.random() * 10, 1);
console.log("one digit random= ", r4);
