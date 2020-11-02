const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new SyntaxError()
  else {
    let arrNew = arr.slice();
    for (i = 0; i < arrNew.length; i++) {
      if (arrNew[i] === "--discard-next" && typeof (arrNew[i + 1]) == 'number') arrNew.splice(i + 1, 1)
      else if (arrNew[i] === "--discard-prev" && typeof (arrNew[i - 1]) == 'number') arrNew.splice(i - 1, 1)
      else if (arrNew[i] === '--double-next' && typeof (arrNew[i + 1]) == 'number') {
        arr.splice(i + 1, 0, arrNew[i + 1])
      }
      else if (arrNew[i] === '--double-prev' && typeof (arrNew[i - 1]) == 'number') {
        arrNew.splice(i - 1, 0, arrNew[i - 1])
      }

    }
    let arrRes = arrNew.filter(elem => typeof (elem) == 'number');
    return arrRes;
  }
};

