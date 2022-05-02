const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let newStr = '';
  let repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  let separator = options.separator !== undefined ? options.separator : '+';
  let addition = options.addition !== undefined ? options.addition : '';
  let additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
  let additionSeparator = options.additionSeparator !== undefined ? options.additionSeparator : '|';
  let additionFragment = '';

  if('addition' in options) {
    for (let i = 0; i < additionRepeatTimes; i++) {
      if (i > 0) {
        additionFragment += `${additionSeparator}${addition}`;
      } else {
        additionFragment += addition;
      }
    }
  }
  for (let i = 0; i < repeatTimes; i++) {
    if (i > 0) {
      newStr += `${separator}${str}${additionFragment}`;
    } else {
      newStr += `${str}${additionFragment}`;
    }
  }
  return newStr;
}

module.exports = {
  repeater
};
