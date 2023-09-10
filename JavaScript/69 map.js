let newMap = new Map();

newMap.set("name", "Lucky");
console.log(newMap);
newMap.set("class", "BTech");
console.log(newMap);
newMap.set("roll_no", 36);
console.log(newMap); //also maintains its size.. Map(3)
newMap.set(1, "First");
console.log(newMap);

console.log(newMap.size);

console.log(newMap.get("class"));
let valOf1 = newMap.get(1);
console.log("Val of 1 is ", valOf1);
