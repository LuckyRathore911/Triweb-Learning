function one() {
  return new Promise((res, rej) => {
    res("one");
  });
}
function two() {
  return new Promise((res, rej) => {
    res("two");
    // rej("two- rejected");
  });
}
function three() {
  return new Promise((res, rej) => {
    res("three");
  });
}

Promise.all([one(), two(), three()])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
