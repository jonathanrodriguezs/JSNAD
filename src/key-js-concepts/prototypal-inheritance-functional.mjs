/**
 * Prototypal Inheritance: Functional Approach with Object.create()
 * Inheritance in JavaScript is achieved with a chain of prototypes.
 */

const wolf = {
  howl() {
    console.log(`${this.name}: awooooo`);
  },
};

const dog = Object.create(wolf, {
  wof: {
    value() {
      console.log(`${this.name}: wooof`);
    },
  },
});

function createDog(name, age) {
  return Object.create(dog, {
    name: { value: name },
    age: { value: age, enumerable: true },
  });
}

const lukas = createDog('Lukas', 40);

lukas.howl();
lukas.wof();

console.log(Object.keys(lukas)); // ['age']

console.log(Object.getPrototypeOf(lukas) === dog); // true
console.log(Object.getPrototypeOf(dog) === wolf); // true

// the prototype of lukas is dog
// the prototype of dog is wolf
// the prototype of wolf is Object.prototype
