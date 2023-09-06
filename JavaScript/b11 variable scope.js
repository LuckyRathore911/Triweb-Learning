if (true) {
  var x = 5;
  console.log(x); //5
}
//x is out of scope
console.log(x); //5

if (true) {
  let y = 6;
  console.log(y); //6
}
//y is out of scope
console.log(y); //Uncaught ReferenceError: y is not defined
