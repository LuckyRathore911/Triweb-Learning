const database = require("./database");
const { loginSuccessful } = require("./login");
const { myEventEmitter, LOGIN_EVENT } = require("./eventEmitter");

myEventEmitter.on(LOGIN_EVENT, (username) => {
  console.log("Sending email to user: ", username);
});

loginSuccessful("Lucky");
