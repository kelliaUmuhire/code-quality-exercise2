const romanDecoder = (roman) => {
  const symbols = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];

  return symbols.reduce((result, [symbol, value]) => {
    while (roman.slice(0, symbol.length) == symbol) {
      result += value;
      roman = roman.slice(symbol.length);
    }
    return result;
  }, 0);
};
