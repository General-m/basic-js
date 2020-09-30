const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  depthCalc = 0;
  calculateDepth(arr, level = 0) {
    if (Array.isArray(arr)) {
      level++;
      var levelUp = level;
      for (var i = 0; i < arr.length; i++) {
        levelUp = Math.max(levelUp, this.calculateDepth(arr[i], level))
      }
      return levelUp;
    }
    else {
      return level
    }
  }
};


