var Hexadecimal = function (hexCode) {
  
  this.toDecimal = function () {
    var i,
        decimal = 0,
        hexHash = {
          'a': 10,
          'b': 11,
          'c': 12,
          'd': 13,
          'e': 14,
          'f': 15
        },
        len = hexCode.length;

    for(i = 0; i < len; i++) {
      if ('0123456789abcdef'.indexOf(hexCode[i]) === -1) {
        return 0;
      }
      if ('abcdef'.indexOf(hexCode[i]) !== -1) {
        decimal += hexHash[hexCode[i]] * Math.pow(16, len - i - 1);
      } else {
        decimal += parseInt(hexCode[i]) * Math.pow(16, len - i - 1);
      }
    }
    return decimal;
  }
}

module.exports = Hexadecimal;