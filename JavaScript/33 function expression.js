//anonymous function
const sqr = function (num) {
  console.log("square= ", num * num);
};

//normal function
function cube(num) {
  console.log("cube= ", num * num * num);
}

//normal function wrapped in a variable
let getCube = function cube2(num) {
  console.log("cube= ", num * num * num);
};

sqr(5);
cube(4);
// cube2(4)    //ReferenceError: cube2 is not defined
getCube(4);

(function self_executable_function() {
  console.log("self_executable_function");
})();
