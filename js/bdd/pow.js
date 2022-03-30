const pow = (x, n) => {
  if (n < 0) return NaN;
  if (Math.round(Number(n)) != n) return NaN;

  let result = 1n;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
};
