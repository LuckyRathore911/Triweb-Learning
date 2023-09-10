let arr1 = ["a", "b", "c", "d"];
let arr2 = ["1", "2", "3", "4"];

console.log("-----------concat--------");
let arr3 = arr1.concat(arr2);
console.log(arr3);

console.log("-----------join--------"); //makes string from array...opposite of split()
let str = arr1.join(" ");
console.log(str);

console.log("-----------push--------"); //adds at end
let len = arr1.push("e");
console.log("return from push", len);
console.log("Array after push", arr1);

console.log("-----------pop--------"); //removes from end
let elem = arr1.pop();
console.log("return from pop", elem);
console.log("Array after pop", arr1);

console.log("-----------shift--------"); //removes from front
let elemShift = arr1.shift();
console.log("return from shift", elemShift);
console.log("Array after shift", arr1);

console.log("-----------unshift--------"); //adds at front
let lUnshift = arr1.unshift("a");
console.log("return from unshift", lUnshift);
console.log("Array after unshift", arr1);
