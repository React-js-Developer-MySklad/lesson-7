function SomeFunction(name) {
  this.name = name;
  this.type = 'function';

  // данные не будут возвращены при new SomeFunction().
  return this.name;
}

const obj = new SomeFunction('Bob');
console.log(obj);
console.log(obj instanceof SomeFunction);

















const factory = (name) => ({
  name,
  printName() {
    console.log(this.name);
  },
});


const obj1 = factory('Bob');
const obj2 = factory('Sam');

// obj1.printName();
// obj2.printName();
//
// console.log(obj1.printName === obj2.printName)