function getNum(i) {
  while (i < 5) {
    return i;
    i++;
  }
}

console.log(getNum(0)); //0
console.log(getNum(0)); //0

console.log("----------------");

function* getNum2(i) {
  while (i < 5) {
    yield i;
    i++;
  }
}

console.log(getNum2(0).next()); //{ value: 0, done: false }
console.log(getNum2(0).next()); //{ value: 0, done: false }

console.log("----------------");

let val = getNum2(0);
console.log(val.next()); //{ value: 0, done: false }
console.log(val.next()); //{ value: 1, done: false }
console.log(val.next()); //{ value: 2, done: false }
console.log(val.next()); //{ value: 3, done: false }
console.log(val.next()); //{ value: 4, done: false }
