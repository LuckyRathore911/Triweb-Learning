console.log("===============");
let obj = { a: 1, b: 2, c: 3, d: 4 };
console.log(obj);
console.log(obj.prototype);
console.log(obj.__proto__);

console.log("===============");
let obj2 = Object.create(obj);
obj2.b = 20;
console.log(obj2);
console.log(obj2.__proto__);
console.log(obj2.__proto__.a);

console.log("===============");
let obj3 = Object.create(obj2);
obj3.b = 80;
console.log(obj3);
console.log(obj3.__proto__);
console.log(obj3.__proto__.b);

console.log("========fun========");
let ob = { n: "Lucky", m: "Rathore" };
ob.display = function () {
  console.log(`This is ${this.n} ${this.m}`);
};

let ob1 = Object.create(ob);
ob1.__proto__.display2 = function () {
  console.log(`${this.n} ${this.m}`);
};
let ob2 = Object.create(ob);

ob1.n = "Anaya";
ob2.n = "Shreya";

console.log(ob);
console.log(ob1);
console.log(ob2);
ob.display();
ob1.display();
ob2.display();

ob.display2();
ob1.display2();
ob2.display2();

/*
===============
{ a: 1, b: 2, c: 3, d: 4 }
undefined
[Object: null prototype] {}
===============
{ b: 20 }
{ a: 1, b: 2, c: 3, d: 4 }
1
===============
{ b: 80 }
{ b: 20 }
20
========fun========
{
  n: 'Lucky',
  m: 'Rathore',
  display: [Function (anonymous)],
  display2: [Function (anonymous)]
}
{ n: 'Anaya' }
{ n: 'Shreya' }
This is Lucky Rathore
This is Anaya Rathore
This is Shreya Rathore
Lucky Rathore
Anaya Rathore
Shreya Rathore
*/
