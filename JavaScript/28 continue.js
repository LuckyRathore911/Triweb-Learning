console.log("continue statement in inner loop of Nested loop\n");
let x = 5;

for (let i = 1; i <= x; i++) {
  for (let j = 1; j <= x; j++) {
    //inner loop
    if (j == 3) {
      continue;
    }

    console.log(i, j);
  }
}

console.log("continue statement in outer loop of Nested loop\n");
let y = 5;
for (let i = 1; i <= y; i++) {
  //outer loop

  if (i == 3) {
    continue;
  }
  for (let j = 1; j <= y; j++) {
    console.log(i, j);
  }
}
