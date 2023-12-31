xyz(); //calling of xyz()
function xyz() {
  //because the definition of function //xyz() got hoisted
  console.log("xyz function"); //xyz function
}

//var pqr; was hoisted... later it converted into a function

pqr(); //Uncaught TypeError: pqr is not a function

//anonymous function....pqr is a reference for a function
var pqr = function () {
  console.log("pqr");
};

//console.log(num3);   //ReferenceError: Cannot access 'num3' before initialization
//console.log(num3());   //ReferenceError: Cannot access 'num3' before initialization
const num3 = function () {
  return 3;
};
console.log(num3()); //3
