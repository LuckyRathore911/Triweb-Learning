function update(num1, num2) {
  num1 += 1;
  num2 += 1;
  console.log(`num1 = ${num1}`);
  console.log(`num2 = ${num2}`);
}
let a = 5,
  b = 3;
//Pass by value
update(a, b);
console.log("a=", a, "b=", b);
