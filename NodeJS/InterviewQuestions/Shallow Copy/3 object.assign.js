console.log("------------Array-----------");

const arr = [1, 2, 3, 4];
const newArr = [];
Object.assign(newArr, arr);

console.log("before", arr);
console.log("before", newArr);

arr[0] = 0;

console.log("after", arr);
console.log("after", newArr);

console.log("------------Object-----------");

const obj = { a: 1, b: 2 };
const newObj = {};
Object.assign(newObj, obj);

console.log("before", obj);
console.log("before", newObj);

obj.a = 0;

console.log("after", obj);
console.log("after", newObj);
