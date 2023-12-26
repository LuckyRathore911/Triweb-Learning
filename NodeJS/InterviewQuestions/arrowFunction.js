const one = (a, b) => {
  return a + b;
};

const two = (num) => {
  return "num= " + num;
};

const three = (stu) => "Hello " + stu; //no need to write return keyword and curly braces

console.log(one(2, 3));
console.log(two(6));
console.log(three("Lucky"));

const its_this = () => {
  console.log(this); // it does not have its own "this"
};
console.log(this); //both "this" are equal

its_this();
