function validate(name) {
  return new Promise((resolve, reject) => {
    if (name == "Lucky") resolve("Success");
    else reject("Failure");
  });
}
//console.log(validate("Lucky22"))                     //UnhandledPromiseRejection
validate("Lucky2")
  .then((result) => {
    console.log(result);
    console.log("result1");
  })
  .catch((err) => {
    console.log(err);
    console.log("error1");
  });

validate("Lucky")
  .then((result) => {
    console.log(result);
    console.log("result2");
  })
  .catch((err) => {
    console.log(err);
    console.log("error2");
  });

/*
Success
result2
Failure
error1
*/
