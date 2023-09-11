function success(result) {
  console.log("Success ", result);
}
function failure(error) {
  console.log("Failure ", error);
}
function validate(name, yes, no) {
  if (name == "Lucky") yes("Matched");
  else no("Not matched");
}
validate("Lucky", success, failure); //Success  Matched
validate("LuckyRathore", success, failure); // Failure  Not matched
