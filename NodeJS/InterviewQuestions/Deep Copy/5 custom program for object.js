const obj = { a: { x: 5, y: 6 }, b: 2, c: [10, 11, 12] };

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

const newObj = deepCopy(obj, {});

console.log("before", obj);
console.log("before-new", newObj);

obj.a.x = 0;
obj.a.y = 0;
obj.c[0] = 0;

console.log("after", obj);
console.log("after-new", newObj);

/*
before { a: { x: 5, y: 6 }, b: 2 }
before-new { a: { x: 5, y: 6 }, b: 2 }
after { a: { x: 0, y: 0 }, b: 2 }
after-new { a: { x: 5, y: 6 }, b: 2 }
*/
