let x = 5;
setTimeout(() => {
  const y = 20 * x; // evaluated to zero
  console.log(y);
}, 1000);
x = 0;

// node inspect debugger/breakline.js
// debug> watch("x")
// debug> cont
// debug> watch("y")
// debug> cont
