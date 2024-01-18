const getName = async (fun) => {
  if (fun == true) return "resolved";
  else throw new Error("Something went wrong!");
};

async function main() {
  try {
    let a = await getName(false);
    console.log(a);
  } catch (error) {
    console.log(error.message);
  }
}

main();
