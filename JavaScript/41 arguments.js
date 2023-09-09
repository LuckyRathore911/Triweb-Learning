function add() {
  console.log(arguments); // not an array but is of array type
  let i,
    sum = 0;
  for (i = 0; i < arguments.length; i++) sum += arguments[i];
  console.log(sum);
}
add(4, 5);
console.log("-------------------------------------");
add(7, 8, 9, 2);
