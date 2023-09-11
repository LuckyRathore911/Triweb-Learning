function* makeRangeIterator(start = 0, end = 100, step = 1) {
  let iterationCount = 0;
  for (let i = start; i < end; i += step) {
    iterationCount++;
    yield i;
  }
  return iterationCount;
}
const gtr = makeRangeIterator(1, 5);
console.log(gtr.next());
console.log(gtr.next());
console.log(gtr.next());
console.log(gtr.next());
console.log(gtr.next());
console.log(gtr.next());
