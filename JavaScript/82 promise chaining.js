function fun() {
  return new Promise((resolve, reject) => {
    resolve({ n: "Lucky" });
  });
}

fun()
  .then((result) => {
    return result.n;
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
