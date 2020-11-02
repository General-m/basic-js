const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
    this.letter = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
  }

  encrypt(msg, key) {
    const message = [...msg.toUpperCase()];
    const keys = [...key.toUpperCase()];
    let pos = 0;
    let result = message.map(elem => {
      if (this.letter.includes(elem)) {
        let idx = (this.letter.indexOf(keys[pos]) + this.letter.indexOf(elem)) % this.letter.length;
        pos = ++pos % keys.length;
        return this.letter[idx];
      }
      return elem;

    });
    return this.type ? result.join('') : result.reverse().join('');
  }

  decrypt(msg, key) {
    const message = [...msg.toUpperCase()];
    const keys = [...key.toUpperCase()];
    let pos = 0;
    let result = message.map(elem => {
      if (this.letter.includes(elem)) {
        let idx = this.letter.indexOf(elem) - this.letter.indexOf(keys[pos]);
        if (idx < 0) idx += this.letter.length;
        pos = ++pos % keys.length;
        return this.letter[idx];
      }
      return elem;

    });
    return this.type ? result.join('') : result.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
