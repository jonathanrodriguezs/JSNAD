let counter = 0;

const fibMemo = (function () {
  const memo = [0, 1];
  function fib(n) {
    counter += 1;
    if (typeof memo[n] !== 'number') {
      const result = fib(n - 1) + fib(n - 2);
      memo[n] = result;
    }
    return memo[n];
  }
  return fib;
})();

for (let i = 0; i <= 42; i += 1) {
  console.log(`fib(${i}) = ${fibMemo(i)}`);
}

console.log(`fibonacci was called ${counter} times`);
