const fibonacci = (function () {
  const memo = [0, 1];
  function fib(n) {
    if (typeof memo[n] !== 'number') {
      const result = fib(n - 1) + fib(n - 2);
      memo[n] = result;
    }
    return memo[n];
  }
  return fib;
})();

if (require.main === module) {
  for (let i = 0; i <= 42; i += 1) {
    console.log(`fib(${i}) = ${fibonacci(i)}`);
  }
}
