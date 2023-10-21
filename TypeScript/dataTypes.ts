const ClassStructVsInterface = () => {
  //Object Types
  let num: { x: number; y: number } = { x: 1, y: 4 };
  console.log(num);

  //Optional Properties
  let num1: { x: number; y?: number } = { x: 1 };
  console.log(num1);
};
