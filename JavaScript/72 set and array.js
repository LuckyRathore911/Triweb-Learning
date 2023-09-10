let array = [1, 2, 3, 5, 5, 3];
let s = new Set(array);

console.log(s);
console.log(Array.from(s));
console.log([...s]);
/*
Set(4) { 1, 2, 3, 5 }
[ 1, 2, 3, 5 ]
[ 1, 2, 3, 5 ]
*/
console.log("------------------------");

//Converting array to set
console.log("Converting array to set");
let arr = [1, 2, 3, 3, 4, 2, 2, 2, 4, 5];
console.log(arr);
let s1 = new Set(arr);
console.log(s1);

//Converting set to array
console.log("Converting set to array");
let a = Array.from(s1);
console.log(a);
a.push(3);
console.log(a);

//Converting set to array from Destructuring: Spread operator
console.log("Converting set to array using Spread operator");
let d = [...s1];
d.push(4);
console.log(d);

//Deleting element in set
console.log("Deleting element in set");
let s2 = new Set([1, 2, 3, 4, 5]);
s2.delete(4);
console.log(s2);
//Deleting element in array
console.log("Deleting element in array");
let a2 = [1, 2, 3, 4, 4, 5];
a2.splice(a2.indexOf(4), 1);
console.log(a2);
