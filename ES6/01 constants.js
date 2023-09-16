//The variable is immutable but the content is not

const obj = {
  name: "Lucky",
  section: "CST",
};
console.log("Before ", obj); //Before  { name: 'Lucky', section: 'CST' }

// obj={
//     name:"LR",
//     section:"CS"
// }
// console.log("After ", obj);  //TypeError: Assignment to constant variable.

obj.name = "L.R.";
obj.section = "C.S.";
console.log("Now ", obj);
