/**
 * Prototypal Inheritance: Constructor Functions
 * Inheritance in JavaScript is achieved with a chain of prototypes.
 */

import util from 'util';

function inherit(proto) {
  function ChainLink() {}
  ChainLink.prototype = proto;
  return new ChainLink();
}

function Wolf(name) {
  this.name = name;
}

Wolf.prototype.howl = function () {
  console.log(`${this.name}: awoooo`);
};

function Dog(name) {
  Wolf.call(this, `${name} the dog`);
}

// Different ways of inherit
Dog.prototype = inherit(Wolf.prototype);
Dog.prototype = Object.create(Wolf.prototype);
Object.setPrototypeOf(Dog.prototype, Wolf.prototype);
util.inherits(Dog, Wolf);

Dog.prototype.woof = function () {
  console.log(`${this.name}: woooof`);
};

const lukas = new Dog('Lukas');

lukas.howl();
lukas.woof();

console.log(Object.getPrototypeOf(lukas) === Dog.prototype); // true
console.log(Object.getPrototypeOf(Dog.prototype) === Wolf.prototype); // true
