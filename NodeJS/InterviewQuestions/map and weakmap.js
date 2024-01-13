let m = { a: 1, b: "2" }; //map

let key1 = { name: "Lucky" };

let key2 = { "!": "null" };

//weakmap
let wm = {
  [key1]: "hi",
  [key2]: "hello",
};
console.log(wm);
