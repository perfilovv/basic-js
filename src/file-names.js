const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let newNames = new Set();
  let objNames = {};
  let arr = [];

  for (let i = 0; i < names.length; i++) {
    if (!newNames.has(names[i])) {
      arr.push(names[i]);
      newNames.add(names[i]);
      objNames[names[i]] = 1;
    } else {
      arr.push(names[i] + `(${objNames[names[i]]})`);
      objNames[names[i]] = objNames[names[i]] + 1;
      objNames[arr[arr.length - 1]] = 1;
      newNames.add(arr[arr.length - 1]);
    }
  }
  return arr;
}

module.exports = {
  renameFiles
};
