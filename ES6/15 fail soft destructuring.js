//5 Fail soft destructuring

let ar2 = [5, 6];
let [e = 3, f = 9, g = 2, h] = ar2;
console.log(e, f, g, h);

//5 6 2 undefined
