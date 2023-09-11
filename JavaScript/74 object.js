//Object does not maintain insertion order

let ob1 = { a: 12, b: 13, c: 14 };
let ob2 = new Object();
ob2.a = 90;
ob2.b = 80;
ob2.c = 70;

console.log(ob1);
console.log(ob2);

console.log(ob1.b); //Dot notation
console.log(ob1["b"]); //Bracket notation
console.log(ob2.d); //undefined
ob2.d = null; //null explicitly set
console.log(ob2.d); //null

const x = 76;
ob1.x = 15; //x will be the key
ob2[x] = 60; //value of x will be the key
console.log(ob1);
console.log(ob2);

//insertion order is not maintained
console.log(ob2[x]);

/*
{ a: 12, b: 13, c: 14 }
{ a: 90, b: 80, c: 70 }
13
13
undefined
null
{ a: 12, b: 13, c: 14, x: 15 }
{ '76': 60, a: 90, b: 80, c: 70, d: null }
60
*/
