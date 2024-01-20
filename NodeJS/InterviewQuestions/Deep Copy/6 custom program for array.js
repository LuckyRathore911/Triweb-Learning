const obj = [
  [4, 5, 6],
  [7, 8, 9],
  [{ a: 1, b: 2 }, 12],
];

function deepCopy(src, dest) {
  for (const key in src) {
    if (Array.isArray(src[key])) {
      dest[key] = [];
      deepCopy(src[key], dest[key]);
    } else if (typeof src[key] == "object") {
      dest[key] = {};
      deepCopy(src[key], dest[key]);
    } else {
      dest[key] = src[key];
    }
  }
  return dest;
}

const newObj = deepCopy(obj, []);

console.log("before", obj);
console.log("before", newObj);

obj[0][0] = 0;
obj[1][0] = 0;
obj[2][0]["a"] = 0;

console.log("after", obj);
console.log("after", newObj);
