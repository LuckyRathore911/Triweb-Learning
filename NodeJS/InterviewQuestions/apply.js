function studentMarks(...marks) {
  [this.sub1, this.sub2, this.sub3] = marks;
  this.course = "BTech";
}

function printMarks(name, ...marks) {
  this.name = name;
  studentMarks.apply(this, marks);
  console.log(name, course, sub1, sub2, sub3); // Lucky BTech 98 99 76
}

printMarks("Lucky", 68, 79, 76);
const p1 = new printMarks("Princy", 99, 97, 96);
console.log(p1);

/*
Lucky BTech 68 79 76
Princy BTech 68 79 76
printMarks {
  name: 'Princy',
  sub1: 99,
  sub2: 97,
  sub3: 96,
  course: 'BTech'
}
*/
