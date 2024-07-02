class Animal {
  constructor(name) {
    this.name = name;
  }

  jump() {
    console.log(`${this.name} is jumping`);
  }
}

class Dog extends Animal {
  #type;

  constructor(name, type) {
    super(name);
    this.#type = type;
  }

  static getInstance() {
    return 'some thing';
  }

  bark() {
    console.log(`${this.name} is barking`);
  }
}

const animal = new Animal('abby');
const dog = new Dog('Barkus', '123');

animal.jump();
dog.jump();
dog.bark();

console.log(Dog.getInstance());
console.log(dog.#type)
