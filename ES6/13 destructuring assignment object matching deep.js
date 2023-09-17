//3 Object Matching, Deep Matching

function getData() {
  let obj = {
    ename: "Aman",
    salary: 100000,
    location: {
      city: "Banglore",
      state: "Karnataka",
    },
  };
  return obj;
}

let {
  ename: employeeName,
  salary: employeeSalary,
  location: { city: employeeCity, state },
  location,
} = getData();

console.log(employeeName, employeeSalary, employeeCity, state, location);
