const arr = [1, 2, 3, 4];
const newArr = Array.from(arr);

console.log("before", arr);
console.log("before", newArr);

arr[0] = 0;

console.log("after", arr);
console.log("after", newArr);
