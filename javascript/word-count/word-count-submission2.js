function Words() {}

Words.prototype.count = function(string) {
  return string.trim().split(/\s+/)
    .reduce(function(frequency, word){
      frequency[word] = frequency.hasOwnProperty(word) ? frequency[word] + 1 : 1;
      return frequency;
    },{});
}

module.exports = Words;