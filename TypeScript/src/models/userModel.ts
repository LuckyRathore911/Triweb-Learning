const addUserToDB = (userName: string, password: string, age: number) => {
  return `Successfull Registration! ${userName}, ${password}, ${age}`;
};

interface User {
  id: number,
  name: string,
  password: string,
  age: number
}

const updateUserInDB = (singleUser: User) => {
  return `Updated User ${singleUser.name}`
};


export { addUserToDB, updateUserInDB };
