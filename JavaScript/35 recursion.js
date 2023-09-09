console.log("Method 1");
function Recursion(num) {
  if (num == 0) return;
  console.log(num);
  num--;
  Recursion(num);
}
Recursion(5);

console.log("Method 2");
const a = function Recursion(num) {
  if (num == 0) return;
  console.log(num);
  num--;
  Recursion(num);
};
//Recursion(5); //ReferenceError: Recursion is not defined
a(5);

console.log("Method 3");
const b = function Recursion(num) {
  if (num == 0) return;
  console.log(num);
  num--;
  arguments.callee(num);
};
b(5);

console.log("Method 4");
const c = function Recursion(num) {
  if (num == 0) return;
  console.log(num);
  num--;
  c(num);
};
c(5);
