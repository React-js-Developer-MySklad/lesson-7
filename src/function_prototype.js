function Animal(name) {
  this.name = name;
}
Animal.staticMethod = () => {
  console.log('static method');
};
Animal.prototype.jump = function () {
  console.log(`${this.name} is juping`);
};

function Dog(name, type) {
  Animal.call(this, name);
  this.type = type;
}

Object.setPrototypeOf(Dog.prototype, Animal.prototype);

Dog.prototype.bark = function () {
  console.log(`${this.name} is barking`);
};

const animal = new Animal('abby');
const dog = new Dog('Barkus', '123');

animal.jump();
dog.jump();
dog.bark();

Animal.staticMethod();
