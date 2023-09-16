console.log("break statement in inner loop of Nested loop\n");
let x = 5;

for (let i = 1; i <= x; i++) {
  for (let j = 1; j <= x; j++) {
    console.log(i, j);
    if (j == 3) {
      break;
    }
  }
}

console.log("\nbreak statement in outer loop of Nested loop\n");
let y = 5;

for (let i = 1; i <= y; i++) {
  for (let j = 1; j <= y; j++) {
    console.log(i, j);
  }

  if (i == 3) {
    break;
  }
}
