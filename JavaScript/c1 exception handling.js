function validateUser(uname, password) {
  try {
    if (uname.length < 5) throw new Error("User name is too short");
    if (password.length < 5) throw new Error("Password is too short");
    console.log("Working");
    return "In try";
  } catch (error) {
    console.log(error);
    return "Fail in catch";
  } finally {
    console.log("Inside finally block");
    // return "From finally"; // overwrites the previous return statements
  }
}

let uname = "Lucky";
let password = "123";
let msg = validateUser(uname, password);

console.log("Error Message: ", msg);

/*
Error: Password is too short
Inside finally block
Error Message:  Fail in catch
*/
