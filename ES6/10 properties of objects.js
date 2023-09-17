// Shorthand Property
let sname = "Lucky";
let rno = 36;
let student = {
  sname,
  rno, //instead of sname:sname, rno:rno;
};
console.log(student);

//Computed Property
let new_key = "key ";
function ret() {
  return 4 + 6;
}
let obj = {
  uname: "Lucky",
  [new_key + 2 + " " + ret()]: "Good",
};
console.log(obj);

//method shortcut
let ob = {
  demo() {
    // instead of demo: function(){}
    return "Hi";
  },
};
console.log(ob.demo());
