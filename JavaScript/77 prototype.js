function student(name, age) {
  this.name = name;
  this.age = age;
}
let s1 = new student("Lucky", 22);
let s2 = new student("Princy", 24);
console.log(s1);
console.log(s2);
console.log(s2.__proto__);
s2.__proto__.display = function () {
  console.log(`Hi ${this.name}`);
};
s2.display();
s1.display();

console.log("=============");
console.log(student);
console.log(student.__proto__);
console.log(student.prototype);

student.prototype.display2 = function () {
  console.log(`Hello ${this.name}`);
};
s2.display2();
s1.display2();
console.log(student.prototype);

/*
student { name: 'Lucky', age: 22 }
student { name: 'Princy', age: 24 }
{}
Hi Princy
Hi Lucky
=============
[Function: student]
{}
{ display: [Function (anonymous)] }
Hello Princy
Hello Lucky
{ display: [Function (anonymous)], display2: [Function (anonymous)] }
*/
