console.log("-------------------Block-Scoped Functions-------------------");

regularFunction(); // I'm a regular function!
function regularFunction() {
  console.log("I'm a regular function!");
}

// if (false) {
//   function blockScopedFunction1() {
//     console.log("I'm a block-scoped function!");
//   }
// }
// blockScopedFunction1(); //ReferenceError: blockScopedFunction1 is not defined
// TypeError: blockScopedFunction1 is not a function

if (true) {
  function blockScopedFunction2() {
    console.log("I'm a block-scoped function!");
  }
}
blockScopedFunction2(); //I'm a block-scoped function!

blockScopedFunction3(); //TypeError: blockScopedFunction3 is not a function
if (true) {
  function blockScopedFunction3() {
    console.log("I'm a block-scoped function!");
  }
}
