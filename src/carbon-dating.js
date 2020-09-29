const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity == undefined || typeof (sampleActivity) != 'string' ||
    !(Number(sampleActivity)) || (+sampleActivity) > 15 || (+sampleActivity) <= 0) return false;

  else {
    let dateSample = Math.log2(MODERN_ACTIVITY / +sampleActivity) / (0.693 / HALF_LIFE_PERIOD)
    return dateSample
  }

};
