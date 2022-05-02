const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0;
    let obj = this;
    if (Array.isArray(arr) && !arr.length)
    return 1;
    if (Array.isArray(arr)) {
      depth += (1 + Math.max(...arr.map(item => obj.calculateDepth(item))));  //max возвращает наибольшее число
    }
    return depth;
  }
}

module.exports = {
  DepthCalculator
};
