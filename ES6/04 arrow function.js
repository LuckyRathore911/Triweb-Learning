function luck() {
  console.log("Inside ", this);
}
console.log("Outside ", this);
luck();

// Arrow function does not have 'this' hence we cannot make its constructor
// It does not have argument variables and it does not have new.target

const lucky = () => {
  console.log("--Inside-- ", this);
};
console.log("--Outside-- ", this);
lucky();

let arr = [1, 2, 3, 4];
const arrmap = arr.map((element) => element * 2);
console.log(arrmap);
