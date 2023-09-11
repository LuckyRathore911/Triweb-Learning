function fun(...a) {
  //rest parameter.... contains any number of values passed
  console.log(a);
  a.forEach((element) => {
    console.log(element);
  });
  const [first] = [...a]; //spread operator....
  //the array is opened and tha values are stored in corresponding variables...
  //we have given only 1 variable which will store the first element
  console.log("first element: ", first);
}
fun(2, 3);
fun(5, 6, 7, 8, 3, 2);
