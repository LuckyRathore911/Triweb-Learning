// inner function can access outer function's scope
function getProductFunction(multiplier) {
  function multiply(num) {
    return multiplier * num;
  }
  //let res=multiply(3);
  //return res;
  return multiply(3);
}
let res = getProductFunction(4);
console.log(res);

console.log("================");

function Fun(multiplier) {
  return function (num) {
    return multiplier * num;
  };
}
let r = Fun(4);
console.log(r);

console.log("================");

function Fun(multiplier) {
  return function (num) {
    return multiplier * num;
  };
}
let f = Fun(4);
let d = f(5); // f stores anonymous function, we pass 5 to f();
console.log(d);
/*
12
================
[Function (anonymous)]
================
20
*/
