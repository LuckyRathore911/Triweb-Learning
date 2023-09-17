//Default Parameters
function add(a, b = 0) {
  console.log("Sum", a + b);
}
add(1, 2);
add(2);

//Rest Parameters
function sum(...num) {
  let sum = 0;
  num.forEach((e) => {
    sum += e;
  });
  console.log(sum);
}
sum(2, 3);
sum(3, 4, 5);
sum(9, 7, 2, 8);
