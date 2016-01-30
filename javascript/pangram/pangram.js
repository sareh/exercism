function Pangram(phrase) {
  this.phrase = phrase;
}

Pangram.prototype.isPangram = function() {
  if(this.phrase === '') return false;
  return (this.removeDuplicates(this.removeWhiteAndPunct(this.lowerAndSort(this.phrase))) === 'abcdefghijklmnopqrstuvwxyz');
}

Pangram.prototype.lowerAndSort = function(string) {
  return string.trim().toLowerCase().split("").sort().join("");
}

Pangram.prototype.removeWhiteAndPunct = function(string) {
  return string.replace(/[^\w]|\s*/g,"");
}

Pangram.prototype.removeDuplicates = function(string) {
  return string.replace(/(.)(?=\1)/g, "");
}

module.exports = Pangram;