/**
 * Context this
 * How this is set on function calling
 */

function fn() {
  return (offset) => {
    console.log(this.id + offset);
  };
}

const peter = {
  name: 'Peter',
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  },
};

const rose = {
  name: 'Rose',
  greet: peter.greet,
};

const offsetter = fn.apply({ id: 99 });

console.log(typeof fn.prototype === 'object'); // prints true
offsetter(1); // prints 100

peter.greet(); // Prints "Hi, I'm Peter"
rose.greet(); // Prints "Hi, I'm Rose"
