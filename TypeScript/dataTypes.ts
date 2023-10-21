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
    let x: string[] | string = ["@", "e"];  // ="" will also be accepted

    //----Mapped Type
    type OnlyBoolsAndHorses = {
        [key: string]: boolean | "Horse";   //value can either be a boolean or "Horse"
    };

    const abc: OnlyBoolsAndHorses = {
        a: true,
        b: false,
        x: "Horse",
        3: "Horse"
    };
};

