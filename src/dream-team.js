const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!(Array.isArray(members))) return false
  else {
    let nameDreamTeam = '';
    for (let elem of members) {
      if (typeof (elem) != 'string') continue
      else {
        for (i = 0; i < elem.length; i++) {
          if (elem[i] != ' ') {
            nameDreamTeam += elem[i].toUpperCase();
            break
          }
        }
      }
    }
    return nameDreamTeam.split('').sort().join('')
  }
};

