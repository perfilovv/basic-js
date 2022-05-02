const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
   let arrLength = s1.length > s2.length ? s1.length : s2.length;
   let str = s1.length > s2.length ? s1 : s2;

   let s1Arr = s1.split('');
   let s2Arr = s2.split('');

   let common = {};

   for (let i = 0; i < arrLength; i++) {
     let s1Filter = s1Arr.filter(item => item === str[i]);
     let s2Filter = s2Arr.filter(item => item === str[i]);

     if (s1Filter.length && s2Filter.length && !common[s1Filter[0]]) {
       let count = 0;
       count += s1Filter.length < s2Filter.length ? s1Filter.length : s2Filter.length;
       common[s1Filter[0]] = count;
     }
   }
   let values = Object.values(common);
   values = values.reduce((previous,current) => previous + current);
   return values;
}

module.exports = {
  getCommonCharacterCount
};
