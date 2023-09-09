/*
Array
Boolean
Floating
Numeric 
Object
RegExp // validation checks
String
*/
console.log(".....Numeric literals.....");
console.log(" decimal", 117);
console.log("octal", 0o77);
console.log("hex x", 0x00111);
console.log("hex X", 0x00111);

console.log("binary", 0b0011);
console.log("Binary", 0b0011);

console.log("\n...Object Literals.....");

let obj = { name: "Lucky", id: "234" };
console.log(obj);
console.log(obj.name);
console.log(obj.id);

console.log("\n...Object Literals with Square brackets.....");

let obj1 = { "": "Lucky", "!": "234" };
console.log(obj1);
console.log(obj1[""]); // . removed
console.log(obj1["!"]); //special characters can be made keys and can be handled with square brackets

console.log("\n.....String Literals.....");

let s1 = "String in single quote";
let s2 = "String in double quote";

let name1 = "Lucky";

let s3 = "Hi" + name1 + "\nHow are you?";

let s4 = `Hi ${name1} 
How are you?`;

console.log("s1", s1);
console.log("s2", s2);
console.log("s3", s3);
console.log("s4", s4);
