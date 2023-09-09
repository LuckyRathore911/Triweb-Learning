function fun1(num) {
  let x = 5;
  function fun2(x) {
    console.log(x); //8 // Local value is given preference
    let num = 3;
    console.log(num); //3
  }
  fun2(8);
}
fun1(4);
