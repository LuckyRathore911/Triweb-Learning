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

interface Point {    //read-only property.
  readonly x: number,
  readonly y: number
}
const num: Point = { x: 3, y: 9 }
// num.x=4;  //Cannot assign to 'x' because it is a read-only property.
console.log(num)

const updateUserInDB = (singleUser: User): string => { //function return type
  return `Updated User ${singleUser.name}, ${singleUser.isActive}, ${singleUser.isLocked}, ${singleUser.isTrue}`
};


export { addUserToDB, updateUserInDB };
