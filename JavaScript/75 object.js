//method 1 for object creation
let ob = { a: 1, b: 2, c: 3, d: 4 };
console.log(ob);

for (const key in ob) //for in loop
  console.log(`Value at ${key} = ${ob[key]}`);

let getKeys = Object.keys(ob);
console.log(getKeys);

//method 2 for object creation
function fun(a, b, c, d) {
  this.a = a;
  this.v = b;
  this.c = c;
  this.x = d;
}
let ob2 = new fun(56, 67, 78, 89);
let ob3 = new fun(67, 78, 89);
console.log(ob2);
console.log(ob3);

//Storing values of one object in another
console.log("-----------------");
let obj1 = { name: "Lucky", r: 12 };
let obj2 = obj1; //both reference the same memory location
console.log(obj1);
console.log(obj2);
obj2.name = "Princy";
obj2.r = 15;
console.log(obj1);
console.log(obj2);

console.log("-----------------");
let obj3 = {
  g: "Lucky",
  h: "India",
  //functions in object
  display: function () {
    console.log(`${this.g} lives in ${this.h}`);
  },
  printAge(age) {
    console.log(`Age is ${age}`);
  },
};

//create object of prototype obj3
let obj4 = Object.create(obj3);

console.log(obj3);
obj3.display();
obj3.printAge(22);

console.log(obj4);

obj4.g = "Iliana";
obj4.h = "America";

console.log(obj4);

obj4.display();

obj4.printAge(25);

/*
{ a: 1, b: 2, c: 3, d: 4 }
Value at a = 1
Value at b = 2
Value at c = 3
Value at d = 4
[ 'a', 'b', 'c', 'd' ]
fun { a: 56, v: 67, c: 78, x: 89 }
fun { a: 67, v: 78, c: 89, x: undefined }
-----------------
{ name: 'Lucky', r: 12 }
{ name: 'Lucky', r: 12 }
{ name: 'Princy', r: 15 }
{ name: 'Princy', r: 15 }
-----------------
{
  g: 'Lucky',
  h: 'India',
  display: [Function: display],
  printAge: [Function: printAge]
}
Lucky lives in India
Age is 22
{}
{ g: 'Iliana', h: 'America' }
Iliana lives in America
Age is 25
*/
