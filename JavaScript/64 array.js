//Creating an array
let arr = [23, 34, 56, 545, 87, 455];
console.log(arr);

let arr1 = Array(34, 45, 56);
console.log(arr1);

let arr2 = new Array(34, 45, 56);
console.log(arr2);

//Populating an array
let arr3 = [];
arr3[0] = "hi";
arr3[6] = "hello";
console.log(arr3); //[ 'hi', <5 empty items>, 'hello' ]

//length
console.log("Length of arr= ", arr.length);
arr.length = 4;
console.log(arr);
arr.length = 10;
console.log(arr); //[ 23, 34, 56, 545, <6 empty items> ]

//Iterating an array
let arr4 = ["A", "b", "c", "d"];
for (let i = 0; i < arr4.length; i++) {
  console.log(arr4[i]);
}
