//2 Object Matching, Shorthand Notation

function getStudent() {
  let student = {
    sname: "Lucky",
    rno: 36,
    level: "BTech",
  };
  return student;
}

console.log(getStudent());

var { sname, rno, level } = getStudent();

console.log(sname, rno, level);
console.log(sname, rno);
