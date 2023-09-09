function f1(a) {
  function f2(b) {
    console.log(b * b * b);
  }
  f2(a);
}
f1(4);

console.log("========");

function square(num) {
  function innerFunction() {
    return num * num;
  }
  let x = innerFunction();
  return x;
}
let y = square(6);
console.log(y);
