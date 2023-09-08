objCountry = {
  name: "India",
  code: 91,
};

for (const key in objCountry) {
  console.log(`${key} of Country is ${objCountry[key]}`);
}

console.log(objCountry.name);
console.log(objCountry.code);
/*
name of Country is India
code of Country is 91
India
91
*/
