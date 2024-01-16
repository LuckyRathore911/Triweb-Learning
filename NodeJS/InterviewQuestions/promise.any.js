function f1() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("f1");
    }, 1000);
  });
}

function f2() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("f2");
    }, 2000);
  });
}

function f3() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej("f3");
    }, 500);
  });
}

Promise.any([f1(), f2(), f3()])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

// f1
