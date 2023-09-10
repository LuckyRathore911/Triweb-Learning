let arr = [0, 1, 2, 3, 4, 5, 6, 7];
//slice
console.log("-----------slice--------");
console.log(arr.slice(1, 4));
console.log("After slice ", arr);

// //splice
console.log("-----------splice--------");
console.log(arr.splice(1, 4)); //4 characters
console.log("After splice ", arr);

//replace elements of array
console.log("-----------replace elements with splice--------");
console.log(arr.splice(1, 2, "a", 7, 8, 9, 4, 3, 2)); //replace 2 characters starting from index 1 with the given values
console.log("Replaced array ", arr);

//reverse .... in place
console.log("-----------reverse--------");
console.log(arr.reverse());
console.log(arr);

//sort .... in place
console.log("-----------sort--------");
console.log(arr.sort());
console.log(arr);

//indexof
console.log("-----------indexOf--------");
console.log(arr.indexOf("a"));
