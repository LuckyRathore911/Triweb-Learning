let str = "This is a good place.";
console.log(str.includes("Place")); //false
console.log(str.startsWith("t")); //false
console.log(str.endsWith("e")); //false

console.log(str.includes("lace")); //true
console.log(str.startsWith("Th")); //true
console.log(str.endsWith("ace.")); //true
