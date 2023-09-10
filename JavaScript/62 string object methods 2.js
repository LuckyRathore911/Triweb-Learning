//replace

const str = "Hi there are animals, and are very big animals";
console.log(str);
const str1 = str.replace("animals", "birds");
console.log(str1);

//replaceAll
const str2 = str.replaceAll("animals", "birds");
console.log(str2);

/*
If you're seeing the error "TypeError: replaceAll is not a function", 
it is likely due to the method not implemented/supported by the browser version 
(or the Node.js version) that you're using.
*/

// NodeJs is not supporting replaceAll, here you can execute it using regular expression.
//for replaceAll you may test this in browser console

console.log("---------------------------------------------");

const str3 = "  Hi its an animal.  ";
//toUpperCase
console.log(str3.toUpperCase());
//toLowerCase
console.log(str3.toLowerCase());
console.log(str3.length);

//trim
let st4 = str3.trim();
console.log(st4.length);
console.log(str3.trim().length);
