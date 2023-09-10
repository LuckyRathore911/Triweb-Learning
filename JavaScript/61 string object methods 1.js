const str = "Hello World, I'm here.";
console.log(str.charAt(0));
console.log(str[0]);
console.log(str.indexOf("l"));
console.log(str.lastIndexOf("l"));
console.log(str.indexOf("H"));
console.log(str.indexOf("h")); //case sensitive

//startsWith
if (str.startsWith("H")) console.log("Yes H");
else console.log("No H");
//endsWith
if (str.endsWith(".")) console.log("Yes .");
else console.log("No .");
//includes
if (str.includes("here")) console.log("Yes here");
else console.log("No here");
//concat
let str2 = " I'm going.";
console.log(str.concat(str2));
console.log(str + str2);

console.log("---------------------------------------------");
const str1 = String("Dehradun,Lucknow,Bhopal,Imphal");

//split
let strArray = str1.split(",");
// let strArray2= str.split()
console.log(strArray);
strArray.forEach((s) => {
  console.log("It is ", s);
});

console.log("---------------------------------------------");
const str3 = "HiHello";

//slice
const sliceStr = str3.slice(0, 2);
console.log(sliceStr);

//substring, - end indexes
const substringStr = str3.substring(1, 5); //1 to 4
console.log(substringStr);

//- substr - num, no of characters
const substrStr = str3.substr(0, 5); //0 upto 5 characters
console.log(substrStr);
