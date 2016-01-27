function Anagram(mainWord){
  this.mainWord = mainWord;
}

Anagram.prototype.isMatch = function(potentialMatch){

  if(potentialMatch.length !== this.mainWord){ return false; }
  
  var word1 = this.mainWord.toLowerCase().split('').sort();
  var word2 = potentialMatch.toLowerCase().split('').sort();
  
  for(var i = word2.length; i--;) {
    if(word2[i] !== word1[i]) return false;
  }
  
  return true;
}

Anagram.prototype.matches = function(){
  this.result = [];
  this.array = [];
  this.currentWord = '';
  // if(arguments && typeof(arguments) === 'string'){
  //   this.array 
  // }
  if(arguments && typeof(arguments) === 'object'){
    for(var i = 0; i < arguments.length; i++){
      this.currentWord = arguments[i];
      if(this.isMatch(this.currentWord) && 
        this.currentWord.toLowerCase() !== this.mainWord.toLowerCase()){
        this.result.push(this.currentWord);
      }
    }
  }

  return this.result;
}

module.exports = Anagram;