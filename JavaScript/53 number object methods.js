let x = 3 / "a";
console.log(x);
if (Number.isNaN(x)) console.log("NaN");
else console.log("Number");

let xSafe = +9007199254740992;
console.log("Is safe? ", Number.isSafeInteger(xSafe)); //false

let n1 = "1";
let n2 = "1.1";
console.log(Number.parseInt(n1));
console.log(Number.parseFloat(n2));
console.log("Is finite? ", Number.isFinite(xSafe)); //true

let a = 123434500000;
let b = a.toExponential();
let c = Number(7354.4868584).toFixed(2); //2 decimal places
console.log(b);
console.log(c);
