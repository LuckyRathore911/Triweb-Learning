//Relational operators
//in
let obj = { uname: "Lucky", rno: 1234 };
if ("uname" in obj) console.log(obj.uname);

//instanceof
function fun() {
  this.x = 5;
}
let y = new fun();
console.log(y); //fun { x: 5 }
console.log(y.x);
console.log(y instanceof fun);
console.log(obj instanceof fun);
