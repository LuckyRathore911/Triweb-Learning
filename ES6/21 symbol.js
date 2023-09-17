let person = {
  pname: "Aakarsh",
  section: "CS",
};

//console.log(person.section='A')           section key is modifiable
console.log(person);

const rno = Symbol("rno");
person[rno] = 1;

console.log(person);
console.log(Object.getOwnPropertyNames(person));
console.log(Object.getOwnPropertySymbols(person));

//only the original key can be used to modify the value in it.
console.log(person[rno]); //1
person[rno] = 85;
console.log(person[rno]); //85
console.log(person);

//console.log(person[Symbol(rno)]=9)      //TypeError: Cannot convert a Symbol value to a string

const newVar = Symbol("rno");
console.log(person[newVar]); //newVar cannot contain the value of rno               //undefined
console.log(Symbol("rno") == Symbol("rno")); // rno and newVar have different Symbol('rno)          //false

//Global Symbol
console.log("----------------------------------------");
const document = Symbol.for("document");
person[document] = "Not hidden symbol data";
console.log(person[document]);

const newVariable = Symbol.for("document"); //newVariable can now contain the value of abc
console.log(person[newVariable]);
console.log(person);
