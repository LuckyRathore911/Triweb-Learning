//1 Array Matching

let arr = [1, 2, 3, 4];

let [a, b] = arr;

console.log("a: ", a);
console.log("b: ", b);
console.log("array: ", arr);

[b, a] = [a, b];

console.log("a: ", a);
console.log("b: ", b);

/*
a:  1
b:  2
array:  [ 1, 2, 3, 4 ]
a:  2
b:  1
*/
