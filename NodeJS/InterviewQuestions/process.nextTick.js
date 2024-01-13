function add(calledBy, a, b) {
  console.log(calledBy, ":", a + b);
}

setImmediate(() => {
  add("setImmediate", 2, 3);
});

setTimeout(() => {
  add("setTimeout", 1, 2);
}, 0);

process.nextTick(() => {
  add("process.nextTick", 4, 5);
});

add("direct", 3, 4);

/*
direct : 7
process.nextTick : 9
setTimeout : 3
setImmediate : 5
  */
