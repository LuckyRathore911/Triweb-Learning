let student = {
  name: "Lucky",
  class: "BTech",
};

let str = JSON.stringify(student);
console.log("String: ", str, str.name);

let obj = JSON.parse(str);
console.log("Object: ", obj, obj.name);
