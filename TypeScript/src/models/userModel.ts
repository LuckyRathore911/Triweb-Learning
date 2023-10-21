const addUserToDB = (userName: string, password: string, age: number) => {
  return `Successfull Registration! ${userName}, ${password}, ${age}`;
};

type lockedState = "locked" | "unlocked"   //union type: self declared
interface User {
  id: number,
  name: string,
  password: string,
  age: number,
  isActive: true | false,   //union type
  isLocked: lockedState,
  isTrue: string | number   //union type
}

const updateUserInDB = (singleUser: User): string => { //function return type
  return `Updated User ${singleUser.name}, ${singleUser.isActive}, ${singleUser.isLocked}, ${singleUser.isTrue}`
};


export { addUserToDB, updateUserInDB };
