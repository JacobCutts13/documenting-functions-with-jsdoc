// TODO (Ex.0): document and write tests for this function
/**
 * 
 * @param {number} n - user input number
 * @returns {number} - negative value of input
 */
function asNegative(n) {
  return n<0? n: -n;
}

console.log("asNegative(10)", asNegative(10), "should equal -10")
