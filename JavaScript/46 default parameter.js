function f1(a, b = 4) {
  // two parameters
  console.log(a * b);
}
f1(6); //one argument is passed
f1(6, 8);

function num(n, b = 1, r = 8) {
  console.log(n, b, r);
}
num(7, 6);
