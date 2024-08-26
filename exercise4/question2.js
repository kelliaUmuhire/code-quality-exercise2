const numberFormat = (number) => number.toLocaleString();

/**Longer version
 *
 * const numberFormat = (number) =>
 * `${Math.sign(number) == -1 ? "-" : ""}${String(Math.abs(number))
 *  .split("")
 *  .reverse()
 *  .map((n, i) => (i % 3 == 0 && i != 0 ? `${n},` : n))
 *  .reverse()
 *  .join("")}`;
 *
 */
