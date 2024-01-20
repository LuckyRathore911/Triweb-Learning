async function getName() {
  return "Lucky";
}

(async () => {
  console.log(getName());
  let name = await getName();
  console.log(name);
})();

/*
Promise { 'Lucky' }
Lucky
*/
