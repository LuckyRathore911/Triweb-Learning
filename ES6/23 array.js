let str = "hiiamlucky";
console.log(Array.from(str));

function checkData() {
  console.log(arguments); //This 'arguments' does not exist in arrow function
  console.log(Array.from(arguments));
}
checkData(3, 9, 5, 1, 7);

let arr = ["a", "b", "c", "d"];
let keys = arr.keys();
console.log(keys);
for (let e of keys) console.log(e);

//.find()
let a = [10, 12, 13, 14, 15];
let firstOddNumber = a.find(getOdd);

function getOdd(value) {
  return value % 2 != 0;
}
console.log("firstOddNumber", firstOddNumber);

//.findIndex()
let indexOfFirstOddNumber = a.findIndex((value, index, ar) => {
  return value % 2 != 0;
});
console.log("indexOfFirstOddNumber", indexOfFirstOddNumber);
