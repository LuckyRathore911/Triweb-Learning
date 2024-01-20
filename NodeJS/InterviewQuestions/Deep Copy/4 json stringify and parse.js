console.log("------------Array-----------");

const arr = [
  [1, 2, 3],
  [4, 5, 6],
];
const newArr = JSON.parse(JSON.stringify(arr));

console.log("before", arr);
console.log("before", newArr);

arr[0][0] = 0;

console.log("after", arr);
console.log("after", newArr);

console.log("------------Object-----------");

const obj = { a: { x: 5, y: 6 }, b: 2 };
const newObj = JSON.parse(JSON.stringify(obj));

console.log("before", obj);
console.log("before", newObj);

obj.a.x = 0;

console.log("after", obj);
console.log("after", newObj);
