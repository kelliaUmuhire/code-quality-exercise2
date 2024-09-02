const recursiveSum = (arr) => {
  if (!arr || arr.length == 0) return 0;
  if (arr.length == 1) return arr[0];
  else return recursiveSum([arr[0] + arr[1], ...arr.slice(2)]);
};
