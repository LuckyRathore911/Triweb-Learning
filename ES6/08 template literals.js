let n = "Lucky";
let r = 36;
console.log(`Hello, I am ${n}.
My roll number is ${r}\n`);

//Custom Interpolation
function custom(str, name, roll) {
  console.log("str ", str);
  console.log("name ", name);
  console.log("roll ", roll);
}
let studentName = "Princy";
let rollNumber = 40;
custom(
  "Student's name is ' ' and roll number is ' '.",
  studentName,
  rollNumber
);
//makes array of each string separated by ${}
custom`Student's name is ${studentName} and roll number is ${rollNumber}`;

//Raw String
let str = `my roll number is \n ${45}`;
console.log(str == "my roll number is \\n 45"); //false
console.log(
  String.raw`my roll number is \n ${45}` == "my roll number is \\n 45"
); //true

/*
Hello, I am Lucky.
My roll number is 36

str  Student's name is ' ' and roll number is ' '.
name  Princy
roll  40
str  [ "Student's name is ", ' and roll number is ', '' ]
name  Princy
roll  40
false
true
*/
