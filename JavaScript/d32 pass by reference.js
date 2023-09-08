console.log("object\n");
function update(student) {
  student.name = "Hi " + student.name;
  console.log("student= ", student);
}
let obj = { name: "Lucky" };
update(obj); //Pass by reference
console.log("obj= ", obj);

console.log("\nArray\n");
function addOne(arr) {
  for (let i = 0; i < 5; i++) arr[i] += 1;
}
let ar1 = [1, 2, 3, 4, 5];
addOne(ar1); //Pass by reference
console.log("Old Array= ", ar1);
