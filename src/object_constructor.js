const obj = new Object();
const notEmptyObj = new Object({name: '123'});
const objNumber = new Object(123);
const objBigInt = new Object(1n);
const objBoolean = new Object(true);
const objString = new Object('true');

console.log(obj);
console.log(notEmptyObj);
console.log(objNumber);
console.log(objBigInt);
console.log(objBoolean);
console.log(objString);
