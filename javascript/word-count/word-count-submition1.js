function Words() {}

Words.prototype.count = function(string) {

  this.frequency = {};
  this.array = string.trim().split(/\s+/);
  
  for(var i = 0; i < this.array.length; i++) {

    if(typeof(this.frequency[this.array[i]]) === 'function') {
      this.frequency[this.array[i]] = 1;
    } else {
      this.frequency[this.array[i]] = ++this.frequency[this.array[i]] || 1;
    }
  }
  return this.frequency;
}

module.exports = Words;