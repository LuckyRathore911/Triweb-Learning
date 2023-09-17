class Student {
  constructor(s, c) {
    this.sname = s;
    this.sclass = c;
  }
}

const s1 = new Student("Riya", 12);
const s2 = new Student("Siya", "7th");
console.log(s1);
console.log(s2);

/*
Student { sname: 'Riya', sclass: 12 }
Student { sname: 'Siya', sclass: '7th' }
*/
