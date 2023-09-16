//Array
let a1 = [1, 2, 3, 4];
let a2 = [7, 8];
let a3 = [...a1, ...a2];
console.log(a3);
console.log(...a1); // '...' takes each element out of the array

//Object
let ob1 = { name: "Lucky", age: 22 };
//let ob2=ob1
let ob2 = { ...ob1, city: "Jalandhar" }; //copying only the contents and not referencing the whole object
console.log("ob1", ob1);
console.log("ob2", ob2);
ob2.name = "Ankita";
ob2.age = 25;
console.log("new ob1", ob1);
console.log("new ob2", ob2);
