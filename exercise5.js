const calculateFactorial = (n) => {
  if (n < 2) return 1;
  let factorial = 1;
  for (let i = 2; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
};
