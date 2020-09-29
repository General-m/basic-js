const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
  let count = 0;
  for (let subArr of array) {
    for (let elem of subArr) {
      if (elem == '^^') count += 1
    }
  }
  return count
};
