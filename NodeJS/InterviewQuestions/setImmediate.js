function student(stu) {
  console.log("hello " + stu);
}

student("Lucky");

setImmediate(() => {
  // we can pass a function as a callback
  student("Aakarsh"); //it was just registered to be processed in the first loop
});

console.log("event loop 1");
