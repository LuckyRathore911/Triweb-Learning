function outerFunction(a) {
  return (innerFunction = (b) => {
    return a * b;
  });
}

let x = outerFunction(2);

console.log(x); // [Function: innerFunction]

console.log(x(6)); // 12
