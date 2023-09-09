let arr = [1, 2, 3];

let a = arr[0];
let b = arr[1];
let c = arr[2];
console.log(a + " " + b + " " + c);

const [s1, s2, s3] = arr; //Destructuring
console.log(s1 + " " + s2 + " " + s3);
const [r1, r2] = arr; // takes first two elements
console.log(r1 + " " + r2);
