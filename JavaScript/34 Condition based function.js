//configuration
let decide = "add";
//let decide= 'subtract';

if (decide == "add") {
  getResult = function (a, b) {
    console.log(a + b);
  };
} else if (decide == "subtract") {
  getResult = function (a, b) {
    console.log(a - b);
  };
}
getResult(5, 6);
