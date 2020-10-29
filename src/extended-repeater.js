const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, { separator = '+', additionSeparator = '|', repeatTimes, additionRepeatTimes, addition = '' }) {
  if (str == null) str = 'null';
  else if (typeof (str) != 'String') str.toString();
  if (addition == null) addition = 'null';
  else if (typeof (addition) != 'String') str.toString();
  let res = '';
  let accum = '';
  if (repeatTimes) {
    for (let i = 0; i < repeatTimes; i++) {
      if (additionRepeatTimes != undefined && addition != undefined) {
        for (let j = 0; j < additionRepeatTimes; j++) {
          accum += (addition + ((j + 1 == additionRepeatTimes) ? '' : additionSeparator));
        }
        res += (str + accum + ((i + 1 == repeatTimes) ? '' : separator));
        accum = '';
      }
      else {
        res += (str + ((addition == undefined) ? '' : addition) + (((i + 1) === repeatTimes) ? '' : separator));
      }
    }
    return res;
  }
  else {
    return str + addition;
  }

};
