let ob = (a, b) => {
  return {
    sname: a,
    rollNo: b,
  };
};
console.log(ob("Lucky", 36));

//() shows that the {} are of object and not the function body
const retObj = (n, a) => ({ uname: n, rNo: a });

console.log(retObj("Rathore", 35));
