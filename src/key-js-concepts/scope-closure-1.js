function makeCounter(counter, step) {
  let count = counter;
  function next() {
    count += step;
    return count;
  }
  return next;
}

const tick = makeCounter(10, 5);
console.log(tick());
console.log(tick());
console.log(tick());
console.log(tick());
