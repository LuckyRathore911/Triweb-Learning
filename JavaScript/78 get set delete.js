let obj = {
  age: 25,
  get a() {
    return this.age;
  },
  set b(newAge) {
    this.age = newAge;
  },
};
console.log(obj);
console.log(obj.a); //25

obj.b = 40;
console.log(obj.b); //undefined
console.log(obj.a); //40

let ob = { a: 12, b: 45 };
console.log(ob);
delete ob.a;
console.log(ob);

/*
{ age: 25, a: [Getter], b: [Setter] }
25
40
{ a: 12, b: 45 }
{ b: 45 }
*/
