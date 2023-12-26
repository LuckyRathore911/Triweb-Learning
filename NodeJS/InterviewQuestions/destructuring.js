// array

let arr = [10, 20, 30, 40, 50, 60];
const [a, b, c, ...d] = arr;

console.log("a= ", a);
console.log("b= ", b);
console.log("c= ", c);
console.log("d= ", d);

// object

let obj = {
  uname: "Lucky",
  phone: 12345,
  address: "India",
};

const { uname, phone } = obj;

console.log(uname, "has phone number:", phone);

// const { sname, mobile } = obj;
// console.log(sname, "has phone number:", mobile); // undefined has phone number: undefined
