async function myName() {
  return "Lucky";
}

async function getName() {
  let user = await myName();
  console.log(user);
}

getName();
