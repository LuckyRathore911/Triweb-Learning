//Without rest parameter
function mult(m, a, b, c) {
  if (a != undefined) console.log(m * a);
  if (b != undefined) console.log(m * b);
  if (c != undefined) console.log(m * c);
}
mult(7, 2);
console.log("------------------");
mult(7, 5, 6);
console.log("------------------");
mult(7, 0, 9, 7);

//With rest parameter
console.log("---------Rest Parameter---------");

function print(...a) {
  console.log(a);
}

print(4, 5);
console.log("------------------");
print(4, 4, 6, 7, 8);
console.log("------------------");

function mult2(m, ...arg) {
  //console.log(arg)
  arg.forEach((element) => {
    console.log(m * element);
  });
}
mult2(7, 2);
console.log("------------------");
mult2(7, 5, 6);
console.log("------------------");
mult2(7, 0, 9, 7);
