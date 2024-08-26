const reverseVowels = (str) => {
  const vowels = str.match(/[aeiou]/gi);
  return str
    .split("")
    .map((c) => (/[aeiou]/gi.test(c) ? vowels.pop() : c))
    .join("");
};
