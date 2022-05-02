const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (type = true) {
    this.type = type;
    this.alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o','p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    this.template = /[^a-z]/;
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    let keyStr = '';
    let word = message.toLowerCase();
    let encrypted = '';
    let keyCounter = 0;

    for (let i = 0; i < word.length; i++) {
      if (this.template.test(word[i])) {
        keyStr += word[i];
      } else {
        if (keyCounter === key.length) {
          keyCounter = 0;
        }
        keyStr += key[keyCounter].toLowerCase();
        keyCounter++;
      }
    }
    for (let i = 0; i < word.length; i++) {
      if (this.template.test(word[i])) {
        encrypted += word[i];
      } else {
        let cipherRow = [...this.alphabet];
        let rowIndex = this.alphabet.indexOf(keyStr[i]);
        let columnIndex = this.alphabet.indexOf(word[i]);

        cipherRow = cipherRow.slice(rowIndex).concat(cipherRow.slice(0, rowIndex));  //concat возвращает новый массив состоящий из массива, на котором он был вызван, соединеннгого с другими массивами
        encrypted += cipherRow[columnIndex];
      }
    }
    encrypted = encrypted.toUpperCase();
    return this.type ? encrypted : encrypted.split('').reverse().join('');
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    let keyStr = '';
    let word = message.toLowerCase();
    let decrypted = '';
    let keyCounter = 0;

    for (let i = 0; i < word.length; i++) {
      if (this.template.test(word[i])) {
        keyStr += word[i];
      } else {
        if (keyCounter === key.length) {
          keyCounter = 0;
        }
        keyStr += key[keyCounter].toLowerCase();
        keyCounter++;
      }
    }
    for (let i = 0; i < word.length; i++) {
      if (this.template.test(word[i])) {
        decrypted += word[i];
      } else {
        let cipherRow = [...this.alphabet];
        let rowIndex = this.alphabet.indexOf(keyStr[i]);
        cipherRow = cipherRow.slice(rowIndex).concat(cipherRow.slice(0, rowIndex));
        let columnIndex = cipherRow.indexOf(word[i]);
        decrypted += this.alphabet[columnIndex];
  }
}
  decrypted = decrypted.toUpperCase();
  return this.type ? decrypted : decrypted.split('').reverse().join('');
    }
}
module.exports = {
  VigenereCipheringMachine
};