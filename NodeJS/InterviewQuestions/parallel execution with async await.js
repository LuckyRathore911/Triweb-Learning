const getName = async (fun) => {
  if (fun == true) return "resolved";
  else throw new Error("Something went wrong!");
};

async function main() {
  try {
    console.log("before await");
    let a = await getName(false);
    console.log("after await: ", a);
  } catch (error) {
    console.log(error.message);
  }
}

console.log("before main");
main();
console.log("after main");

/*
before main
before await
after main
Something went wrong!
*/
