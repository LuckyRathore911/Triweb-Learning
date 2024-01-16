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
    }, 500);
  });
}

function f3() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("f3");
    }, 2000);
  });
}

let listOfPromises = [f1(), f2(), f3()];
Promise.race(listOfPromises)
  .then((result) => console.log("resolved", result))
  .catch((err) => console.log("rejected", err));

// result f2
