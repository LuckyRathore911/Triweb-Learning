const tax = 5;

let finalAmount = (200 * tax) / 100;
console.log(finalAmount); //10

tax = 15; //TypeError: Assignment to constant variable.
