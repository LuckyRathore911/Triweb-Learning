function add() {
  let prod = 1;

  let arr = Array.from(arguments); // arguments.forEach(element=>{}) would give error
  arr.forEach((ele) => {
    prod *= ele;
  });
  console.log(prod);
}
add(4, 5);
