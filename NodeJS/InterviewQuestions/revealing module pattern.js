// What is Revealing module pattern
// function userManagerModule() {
//   userList = [];

//   //   public function
//   function addUser(uName) {
//     userList.push(uName);
//     _printConfirmation(uName);
//   }

//   //   private function
//   function _printConfirmation(uName) {
//     console.log("User added - name: ", uName);
//   }

//   return { addNewUser: addUser };
// }
// const UserManager = userManagerModule();
// UserManager.addNewUser("Code");

const UserManager = (function userManagerModule() {
  userList = [];

  //   public function
  function addUser(uName) {
    userList.push(uName);
    _printConfirmation(uName);
  }

  //   private function
  function _printConfirmation(uName) {
    console.log("User added - name: ", uName);
  }

  return { addNewUser: addUser };
})();

UserManager.addNewUser("Code");
