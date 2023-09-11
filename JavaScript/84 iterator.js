function makeRangeIterator(start = 0, end = Infinity, step = 1) {
  let nextIndex = start;
  let result;
  const rangeIterator = {
    next: function () {
      if (nextIndex < end) {
        result = { value: nextIndex, done: false };
        nextIndex += step;
        return result;
      }
      return { value: nextIndex, done: true };
    },
  };
  return rangeIterator;
}
const itr = makeRangeIterator(2, 5);
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
