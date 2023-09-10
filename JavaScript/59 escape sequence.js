const a = "\x7a"; //Hexadecimal escape sequence for z
const b = "\u007a"; //Unicode escape sequence for z
console.log(a);
console.log(b);
if ("\x7A" == "\u007A") {
  console.log("Yes"); //Yes
}
