const { myEventEmitter, LOGIN_EVENT } = require("./eventEmitter");

myEventEmitter.on(LOGIN_EVENT, (username) => {
  console.log("In database: ", username);
});
