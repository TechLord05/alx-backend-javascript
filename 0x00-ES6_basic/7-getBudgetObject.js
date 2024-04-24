/**
 * Returns an object representing budget using object property value shorthand syntax.
 *
 * @param {number} income - The income value.
 * @param {number} gdp - The gdp value.
 * @param {number} capita - The capita value.
 * @returns {Object} - The budget object.
 */
export default function getBudgetObject(income, gdp, capita) {
    const budget = {
      income,
      gdp,
      capita,
    };
  
    return budget;
  }
