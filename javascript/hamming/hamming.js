function Hamming() {};

Hamming.prototype.compute = function(strand1, strand2){
  if (strand1.length != strand2.length) { 
    throw "DNA strands must be of equal length."; 
  }
  this.count = 0;
  for(i=0; i < strand1.length; i++){
    if (strand1[i] != strand2[i]) { this.count += 1; }
  }
  return this.count;
};

module.exports = Hamming;
