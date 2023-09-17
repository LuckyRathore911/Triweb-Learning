console.log(Number.EPSILON);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

let a = 12.3;
console.log(Number.isInteger(a)); //false

console.log(Number.isInteger(9007199254740992)); //true
console.log(Number.isSafeInteger(9007199254740992)); //false

console.log("isFinite", isFinite(2000 / 0)); //false
console.log("isNaN", isNaN(2 / "e")); //true
