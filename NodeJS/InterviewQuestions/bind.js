let student = {
  sname: "Lucky",
  mobile: 1234,

  getName: function () {
    console.log(this.sname);
  }, //does not return anything
};

setTimeout(() => {
  console.log(student.getName());
}, 1000);

let stu1 = student.getName.bind(student);
setTimeout(stu1, 1000);

let student2 = {
  sname: "Aakarsh",
  mobile: 1234,
};

let stu2 = student.getName.bind(student2); //binds this of student2 to student and uses its function
setTimeout(stu2, 1000);
