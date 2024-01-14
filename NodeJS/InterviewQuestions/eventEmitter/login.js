const { myEventEmitter, LOGIN_EVENT } = require("./eventEmitter");

module.exports.loginSuccessful = (username) => {
  myEventEmitter.emit(LOGIN_EVENT, username);
};
