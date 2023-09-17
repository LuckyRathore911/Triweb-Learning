//4 Parameter Context Matching

//array
function printData([name, age]) {
  console.log("Name:", name, ", Age:", age);
}

//object
function printData2({ name, age }) {
  console.log("Name:", name, ", Age:", age);
}

function printData3({ name: ename, age: eage }) {
  console.log("Name:", ename, ", Age:", eage);
}

printData(["Aaliya", 31]);
printData2({ name: "Shreyansh", age: 14 });
printData3({ name: "Aafrin", age: 33 });

/*
Name: Aaliya , Age: 31
Name: Shreyansh , Age: 14
Name: Aafrin , Age: 33
*/
