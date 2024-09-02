const checkNestingLevels = (arr) => {
  let levels = 0;

  const flattenArray = (input, level) =>
    input.reduce((output, item) => {
      if (Array.isArray(item)) {
        if (level + 1 > levels) levels = level + 1;
        output.push(...flattenArray(item, level + 1));
      } else output.push(item);
      return output;
    }, []);

  return { array: flattenArray(arr, 0), levels };
};

// console.log(checkNestingLevels([1, [2, 3], 4, [3, 5], [5, [6, [9, 0]]]]));
