const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;

  },
  addLink(value = '()') {
    if (value == null) {
      value = 'null';
    }
    this.chain.push(value.toString());
    return this;


  },
  removeLink(position) {
    if (position % 1 !== 0 || position < 1 || position > this.chain.length - 1) {
      this.chain = [];
      throw new Error;
    }
    else {
      this.chain.splice(position - 1, 1);
      return this;
    }

  },
  reverseChain() {
    if (this.chain.length == 0) return this;
    else {
      this.chain.reverse();
      return this;
    }
  },
  finishChain() {
    let res = this.chain.map(elem => '( ' + elem + ' )').join('~~');
    this.chain = [];
    return res;

  }
};

module.exports = chainMaker;
