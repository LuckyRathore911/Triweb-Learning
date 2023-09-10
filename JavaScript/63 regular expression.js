let given_string = "lksdfnsdfnjfdjkfds";
var reg = /\w/;
let declare_using_class = new RegExp("l");

console.log(given_string.match(reg)); // [ 'l', index: 0, input: 'lksdfnsdfnjfdjkfds', groups: undefined ]
console.log(reg.test(given_string)); // true
console.log(reg.exec(given_string)); // [ 'l', index: 0, input: 'lksdfnsdfnjfdjkfds', groups: undefined ]
console.log(given_string.search(reg)); // 0

console.log("-------------------------------------------------");

let str = "Hi I am Lucky Rathore.";
let r = /\w/;
console.log(str.match(r)); //returns details of where the first word starts.

//RegExp class
let r2 = new RegExp("L");
console.log(r2.test(str)); //test() is a method of RegExp class

//search() ...a function of String, not of RegExp
let r3 = /\w/g; //g= global;    0, H
let ind = str.search(r3);
console.log(ind);
console.log(str[ind]);

let r4 = /[^\w\s]/g; //word not followed by space;        21, .
let ind2 = str.search(r4);
console.log(ind2);
console.log(str[ind2]);

//exec()
var myRe = /d(b+)d/g;
var myArray = myRe.exec("cdbbdbsbz");

console.log(myArray);

//replace ...a function of String, not of RegExp
const str2 = "str 1 and str 2 is str 3";
// console.log(str.replace('str', 'STR'));
const regex1 = /Str/i; //i= Case insensitive
const regex2 = /str/g;
console.log(str2.replace(regex1, "STR")); //Replaces first occurence of str
console.log(str2.replace(regex2, "STR")); //STR 1 and STR 2 is STR 3
