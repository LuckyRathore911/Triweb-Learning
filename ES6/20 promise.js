function update(num) {
  return new Promise((resolve, reject) => {
    if (num > 5) {
      num += 1;
      resolve(num);
    } else {
      reject("Invalid");
      //throw new Error("Invalid number")
    }
  });
}

update(5)
  .then(
    (updatedNum) => {
      console.log("Updated number is: ", updatedNum);
    }
    // ,rejectedMessage=>{
    //     console.log(rejectedMessage)
    // }
  )

  .catch(() => {
    console.log("Error: Invalid-number");
  });
