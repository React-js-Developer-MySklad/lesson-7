const obj1 = { name: 'Bob', age: 12 };
let obj1Clone = obj1;
const obj2 = { height: 180, weight: 75 };

const cloneObj1 = { ...obj1 };
const mergeObject = { ...obj1, ...obj2 };

console.log(cloneObj1);
console.log(mergeObject);

console.log(`cloneObj1 === obj1 is ${cloneObj1 === obj1}`);
console.log(`obj1Clone === obj1 is ${obj1Clone === obj1}`);
