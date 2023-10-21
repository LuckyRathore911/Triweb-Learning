const ClassStructVsInterface = () => {
    //Object Types
    let num: { x: number; y: number } = { x: 1, y: 4 };
    console.log(num);

    //Optional Properties
    let num1: { x: number; y?: number } = { x: 1 };
    console.log(num1);

    //Interfaces: another way to name an object type
    interface Point {
        x: number;
        y: number;
    }

    let p1: Point = { x: 100, y: 100 };
    let p2: Point;

    //Interface merging
    interface myNewInterface {
        age: number;
        id: number;
    }
    interface myNewInterface {  //This merges with the already created interface
        name: string;
    }
    let user: myNewInterface = { name: "Lucky", age: 22, id: 36 }
    console.log("User: ", user);  // User:  { name: 'Lucky', age: 22, id: 36 }

    //type alias
    type MyPoint = {
        x: number;
        y: number;
    };

    let p3: MyPoint = { x: 100, y: 100 };

    // Difference between type alias and interface is that we can redeclare interface but not type alias
    //   interface Point {
    //       x: number;
    //       y: number;
    //       z:number
    //     }

    // type MyPoint = {  //Duplicate identifier 'MyPoint'.
    //   x: number;
    //   y: number;
    // }
};

const typeInDetail = () => {
    // ----Union Type
    let id: number | string = 2;
    let x: string[] | string = ["@", "e"]; // ="" will also be accepted

    //----Mapped Type
    type OnlyBoolsAndHorses = {
        [key: string]: boolean | "Horse"; //value can either be a boolean or "Horse"
    };

    const abc: OnlyBoolsAndHorses = {
        a: true,
        b: false,
        x: "Horse",
        3: "Horse",
    };
};

const classCheck = () => {
    //--- Case 1, Initialization is mandatory
    class Point {
        // x: number; //Does not work now in the latest versions
        // y: number;
        x: number = 0;
        y: number = 0;
    }
    const pt = new Point();
    // pt.x =1;
    // pt.y = 2;
    console.log(pt); //Point { x: 0, y: 0 }  // No error, either you assing value or not

    //--- Case2, Type will be decided with intialization
    class Point1 {
        x = 0;
        y = 0;
    }
    const pt1 = new Point1();
    pt1.x = 1;
    pt1.y = 2;
    console.log(pt1); //Point1 { x: 1, y: 2 }  // Type will be decided with intialization in class

    //--- Case 3, Constructor
    class Point2 {
        x: number;
        constructor(n: number) {
            this.x = n;
        }
    }
    const pt2 = new Point2(3);
    console.log(pt2); //Point2 { x: 3 }

    //--- Case 4, Getters / Setters
    class Student {
        private _tag_name: String = "";
        private _standard: Number = 0;

        get tagName(): String {
            // Validation checks
            return this._tag_name;
        }
        set tagName(value: String) {
            //Validations

            this._tag_name = "#" + value;
        }

        get standard(): Number {
            return this._standard;
        }
        set standard(value: Number) {
            this._standard = value;
        }
    }

    let stu = new Student();
    stu.tagName = "Lucky";
    stu.standard = 4;

    console.log(stu); //Student { _tag_name: '#Lucky', _standard: 4 }
    console.log(stu.tagName); //#Lucky
};

ClassStructVsInterface();
typeInDetail();
classCheck();

class Employee {
    ename: string;
    esalary: number;
    constructor(name: string, salary: number) {
        this.ename = name;
        this.esalary = salary;
    }
}
class EmployeeWithAge extends Employee {
    age: Number = 0;
}
const inheritance = () => {
    const employee = new EmployeeWithAge("Lucky", 200000)
    employee.esalary = 500000;
    employee.age = 22;
    console.log(employee)
}

inheritance();  //EmployeeWithAge { ename: 'Lucky', esalary: 500000, age: 22 }