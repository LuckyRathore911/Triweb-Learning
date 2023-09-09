// Expressions
x = 6;
y = 3;
const z = (x = y);
const p = (x = y);
console.log("z= ", z);
console.log("p= ", p);

//Operators
let a = 5 > 4; //comparison
console.log(a);
let u = 5,
  v = 1;
let b = u & v; //bitwise
console.log(b); //& with 1 (0001) may validate if units place of 5 (0101) is a '1'

let c = "hi"; //string
let d = " lucky";
console.log(c + d);
let e = 9;
let f = e % 3 == 0 ? e : 0; //conditional
console.log(f);

let g = (3, 4, 5, 6); //comma operator
console.log(g); //6
for (
  let i = 3, j = 5;
  i <= 4;
  j++, i++ //comma to handle multiple values
)
  console.log(j, " ", i);

/*
Assignment
Arithmetic
Comparison / Relational
Bitwise
Logical
Unary
Comma operator
Conditional (ternary) operator
String operators
and so on..
*/

/*
z=  3
p=  3
true
1
hi lucky
9
6
5   3
6   4
*/
