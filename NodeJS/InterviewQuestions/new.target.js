function fun(a) {
  console.log(new.target);
  this.a = a;

  if (new.target == undefined) console.log("normal function");
  else console.log("Function called with 'new'");
}

fun(3);

console.log("--------------------------");

let x = new fun(4);

console.log(x);
