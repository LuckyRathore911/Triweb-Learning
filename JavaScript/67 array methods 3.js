let arr = [1, 2, 3, 4, 5];

//forEach
arr.forEach((ele) => console.log(ele));

//map
console.log("-----------------------------");
arr.map((e, i, a) => console.log(e, i, a));
console.log("-----------------------------");
let sqr = arr.map((e) => e * e);
console.log(sqr);
console.log("-----------------------------");

//filter
let fil = arr.filter((el) => el % 2 == 0);
console.log(fil);

//every
let a = [1, 3, 5, 7];
console.log(a.every((ele) => ele % 2 != 0)); //true if condition is true for every element

//some
let b = [1, 2, 5, 7];
console.log(b.some((ele) => ele % 2 == 0)); //true if condition is true for even one element

//reduce   ...for reducing the list of items down to a single value

let c = [10, 20, 30];
let total = c.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(total); // Prints 60
//0 is the initial value of accumulator, then accumulator stores the return value
