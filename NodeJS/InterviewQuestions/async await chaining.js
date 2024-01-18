async function getResult(res) {
  if (res === 1) return "One";
  else if (res === 2) return "Two";
  else if (res == "One") return "I am the second promise";
}

async function fetchData() {
  let a = await getResult(1);
  let b = await getResult(a);
  return { a, b };
}

async function writeData() {
  let x = await fetchData();
  console.log(x.a);
  console.log(x.b);
}

writeData();
