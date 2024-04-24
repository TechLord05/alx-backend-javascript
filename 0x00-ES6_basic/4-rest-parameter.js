/**
 * Returns the number of arguments passed to the function.
 *
 * @param {...any} args - Any number of arguments.
 * @returns {number} - The number of arguments passed.
 */
export default function returnHowManyArguments(...args) {
    return args.length;
  }
