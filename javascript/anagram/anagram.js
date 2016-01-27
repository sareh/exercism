var Anagram = function(mainWord){
  this.mainWord = mainWord;
};

Anagram.prototype.matches = function(){
  this.result = [];
  this.wordArray = [];

  if(typeof(arguments[0]) === 'string'){
    this.wordArray = Array.prototype.slice.call(arguments);
  }

  if(typeof(arguments[0]) === 'object'){
    this.wordArray = arguments[0];
  }

  for(var i = 0, len = this.wordArray.length; i < len; i++){
    if(this.isMatch(this.wordArray[i]) && 
      this.wordArray[i].toLowerCase() !== this.mainWord.toLowerCase()) {
      this.result.push(this.wordArray[i]);
    }
  }
  return this.result;
};

Anagram.prototype.isMatch = function(currentWord){
  if(currentWord.length !== this.mainWord.length) return false;
  
  var word1 = currentWord.toLowerCase().split('').sort(),
      word2 = this.mainWord.toLowerCase().split('').sort();

  for(var i = 0; i < word1.length; i++) {
    if(word1[i] !== word2[i]) return false;
  }
  return true;
};

module.exports = Anagram;