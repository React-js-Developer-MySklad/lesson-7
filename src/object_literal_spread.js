

const obj1 = { name: 'Bob', age: 12, price: { value: 10 }, getName: function () { return this.name }  };
let obj1Clone = obj1;
const obj2 = { height: 180, weight: 75 };

const cloneObj1 = { ...obj1, price: {...obj1.price} };
const mergeObject = { ...obj1, ...obj2 };

obj1.price.value = 20;

console.log(obj1);
console.log(cloneObj1);
cloneObj1.getName = undefined
console.log(obj1.getName())

console.log(mergeObject);

console.log(`cloneObj1 === obj1 is ${cloneObj1 === obj1}`);
console.log(`obj1Clone === obj1 is ${obj1Clone === obj1}`);
