const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const currentActivity = parseFloat(sampleActivity); // parseFloat возвращает десятичное число

  if (typeof sampleActivity !== 'string' || !currentActivity || currentActivity > 15 || currentActivity < 0) 
  return false;

  const data = MODERN_ACTIVITY / currentActivity;
  const ln2 = 0.693 / HALF_LIFE_PERIOD;

  return Math.ceil(Math.log(data) / ln2);   //ceil округление вверх. log натуральный логарифм числа
}

module.exports = {
  dateSample
};
