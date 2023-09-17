console.log("----------Block-Scoped variables----------");
{
  var x = 3;
  let y = 4;
  const z = 9;
}
console.log(x); //3
// console.log(y)  //ReferenceError: y is not defined
// console.log(z)  //ReferenceError: z is not defined

console.log(n); //ReferenceError: Cannot access 'n' before initialization
let n = 10;
