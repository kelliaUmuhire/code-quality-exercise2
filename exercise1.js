const calculateAverage = (numbers) => {
  const sum = numbers.reduce((output, number) => output + number, 0);
  return sum / numbers.length;
};
