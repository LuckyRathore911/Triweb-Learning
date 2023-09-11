function Employee(mobile) {
  this.dept = "Engineer";
  this.mobile = mobile;
}

function Manager(name) {
  Employee.call(this); //connects Employee and Manager
  this.name = name;
}

let a = new Manager("Lucky");
console.log(a);
console.log(a.__proto__);

Manager.prototype = Object.create(Employee.prototype); //Employee is the parent of Manager
Manager.prototype.constructor = Manager;

let b = new Manager("Princy");
console.log(b);
console.log(b.__proto__);
console.log(b.__proto__.__proto__);

//can add a new property, which is not possible in class
b.email = "Princy@gmail.com";
console.log(b);

/*
Manager { dept: 'Engineer', mobile: undefined, name: 'Lucky' }
{}
Manager { dept: 'Engineer', mobile: undefined, name: 'Princy' }
Employee { constructor: [Function: Manager] }
{}
Manager {
  dept: 'Engineer',
  mobile: undefined,
  name: 'Princy',
  email: 'Princy@gmail.com'
}
*/
