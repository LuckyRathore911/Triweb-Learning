//Weak means each key is a object itself
let ob = { name: "Lucky" };
let wm = { [ob]: "Hi" };
console.log(wm);
console.log(wm[ob]);
ob = "Rathore"; // ob is lost
console.log(wm[ob]); //key is lost

console.log("====wkMap====");
let wkMap = new WeakMap();
ob1 = {};
ob2 = { 2: 2 };
ob3 = { 3: 3 };
wkMap.set(ob1, "val1");
wkMap.set(ob2, "val2");
wkMap.set(ob3, "val3");

console.log(wkMap);
console.log(wkMap.get(ob2));
