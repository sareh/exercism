function Binary (binStr) {

  this.binStr = binStr;  
  this.toDecimal = function () {
    if(this.binStr.match(/[^01]/)) { return 0; }
    return this.binStr.split('').reverse().reduce(function (prev, curr, currInd) {
      return prev + parseInt(curr) * Math.pow(2, currInd);
    }, 0);
  }

}

module.exports = Binary;