let n = 1;
console.log(typeof n); //number

n = "VS Code";
console.log(typeof n); //string

let n1 = 3;
let n2 = "4";
let n3 = 10;

console.log(n1 + n3);
console.log(n1 + n2); // string + ...concatenation___ integers +..sum
console.log(parseInt(n2) + n1); // conversion to int
console.log(+n2 + n1); // conversion to int
console.log(n1 - n2); // compiler didn't confuse here as string doesn't have any function with -,*,/
console.log(n2 - n1);
console.log(n1 * n2);
console.log(n1 / n2);

console.log("\nConversion among Number Systems\n");

a = "101";
console.log(parseInt(a)); // String 101 to Integer
console.log(parseInt(a, 2)); //Binary 101 converted to Integer (Decimal)
console.log(parseInt(a, 8));
console.log(parseInt(a, 16));
console.log(parseInt(a, 10));

/*
number
string
13
34
7
7
-1
1
12
0.75

Conversion among Number Systems

101
5
65
257
101
*/
