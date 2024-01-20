function f1() {
  console.log("f1");
}
function f2() {
  console.log("f2");
}
function f3() {
  console.log("f3");
}

f1();
f2();
f3();

console.log("---------------");

function g1() {
  console.log("g1");
}
function g2() {
  console.log("g2");
  setTimeout(() => {
    console.log("g2 delayed task");
  }, 1000);
}
function g3() {
  console.log("g3");
}

g1();
g2();
g3();

console.log("---------------");

function h1() {
  console.log("h1");
}
function h2() {
  console.log("h2");
  return new Promise((res, rej) => {
    // rej("rejected");
    setTimeout(() => {
      res("h2 delayed task");
    }, 1000);
  });
}
function h3() {
  console.log("h3");
}

h1();
h2()
  .then((result) => {
    console.log(result);
    h3();
  })
  .catch((err) => {
    console.log(err);
  });
