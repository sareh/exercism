var BigInt = require('./big-integer');
function Grains() {}

Grains.prototype.square = function(n) {
  if(n <= 53) return Math.pow(2, n-1).toString(); 
  return BigInt(2).pow(n-1).toString();
}

Grains.prototype.total = function() {
  return (BigInt(2).pow(64).subtract(1)).toString();
  // Using this formula: 2^(0)+2^(1)+...+2^(n)=2^(n+1)−1
}

module.exports = Grains;