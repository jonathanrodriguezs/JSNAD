/**
 * Prototypal Inheritance: Class-syntax Approach
 */

class Wolf {
  constructor(name) {
    this.name = name;
  }

  howl() {
    console.log(`${this.name}: awoooo`);
  }
}

class Dog extends Wolf {
  constructor(name) {
    super(`${name} the dog`);
  }

  woof() {
    console.log(`${this.name}: woooof`);
  }
}

const lukas = new Dog('Lukas');

lukas.howl();
lukas.woof();

console.log(Object.getPrototypeOf(lukas) === Dog.prototype);
console.log(Object.getPrototypeOf(Dog.prototype) === Wolf.prototype);
