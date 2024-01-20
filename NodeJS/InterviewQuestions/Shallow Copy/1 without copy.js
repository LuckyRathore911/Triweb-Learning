console.log("------------Array-----------");

const arr = [1, 2, 3, 4];
const newArr = arr; //this only lets newArr put a reference to the array arr

console.log("before", arr);
console.log("before", newArr);

arr[0] = 0;

console.log("after", arr);
console.log("after", newArr);

/*
before [ 1, 2, 3, 4 ]
before [ 1, 2, 3, 4 ]
after [ 0, 2, 3, 4 ]
after [ 0, 2, 3, 4 ]
*/

console.log("------------Object-----------");

const obj = { a: 1, b: 2 };
const newObj = obj; //this only lets newObj put a reference to the object obj

console.log("before", obj);
console.log("before", newObj);

obj.a = 0;

console.log("after", obj);
console.log("after", newObj);
