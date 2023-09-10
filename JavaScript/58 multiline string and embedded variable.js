const str = "Hi I am here.\n Its raining today";
console.log(str);

const atmosphere = "raining";
const str1 = 'Hi I am here. Its "' + atmosphere + '" today';
console.log(str1);

console.log("==================================");

const tmpltStr = `Hi I am here.
Its raining today`;
console.log(tmpltStr);

const tmpltEmbdStr = `Hi I am here. Its "${atmosphere}" today`;
console.log(tmpltEmbdStr);
