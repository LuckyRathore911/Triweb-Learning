function f1() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("f1");
    }, 2000);
  });
}
function f2() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej("f2");
    }, 1000);
  });
}
function f3() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("f3");
    }, 1000);
  });
}

Promise.allSettled([f1(), f2(), f3()]).then((result) => {
  console.log(result);
});

/*
[
  { status: 'fulfilled', value: 'f1' },
  { status: 'rejected', reason: 'f2' },
  { status: 'fulfilled', value: 'f3' }
]
*/
