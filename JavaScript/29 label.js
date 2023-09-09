console.log("label with break keyword\n");
let x = 5;

outer: for (let i = 1; i <= x; i++) {
  for (let j = 1; j <= x; j++) {
    console.log(i, j);
    if (j == 3) {
      break outer; // it breaks all loops under label outer
    }
  }
}

console.log("\nlabel with continue keyword\n");
let y = 5;
outer: for (let i = 1; i <= y; i++) {
  for (let j = 1; j <= y; j++) {
    if (j == 3) {
      continue outer; //continues outer loop
    }

    console.log(i, j);
  }
}
