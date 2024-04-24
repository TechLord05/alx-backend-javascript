
/**
 * Concatenates two arrays and each character of a string using spread syntax.
 *
 * @param {Array} array1 - The first array to concatenate.
 * @param {Array} array2 - The second array to concatenate.
 * @param {string} string - The string to concatenate.
 * @returns {Array} - The concatenated array.
 */
export default function concatArrays(array1, array2, string) {
    return [...array1, ...array2, ...string];
  }