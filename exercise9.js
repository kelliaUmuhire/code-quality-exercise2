const calculateMatrixSum = (matrix) =>
  matrix.reduce(
    (sum, row) =>
      (sum += row.reduce((rowSum, number) => (rowSum += number), 0)),
    0
  );
