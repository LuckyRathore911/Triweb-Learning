/*Arithmetic
String
Logical
Primary- this
Left hand side- new, super
*/

function fun() {
  this.x = 5; // this represents current object
}
let y = new fun();
let z = new fun();
console.log(y); //fun { x: 5 }
console.log(z); //fun { x: 5 }
console.log(y.x);
console.log(z.x);
z.x = 8; //affected value of x only in object z
console.log(z.x);
