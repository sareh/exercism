function Bob() {}

Bob.prototype.hey = function(input) {

  if(this.isSilent(input)) return "Fine. Be that way!";
  if(this.isQuestion(input)) return "Sure.";
  if(this.isShouting(input)) return "Whoa, chill out!";
  return "Whatever.";

};

Bob.prototype.isSilent = function(phrase) {
  return (phrase.match(/^\s*$/));
}

Bob.prototype.isQuestion = function(phrase) {
  return (phrase.charAt(phrase.length - 1) === '?' && !(this.isShouting(phrase)));
}

Bob.prototype.isShouting = function(phrase){
  return (phrase === phrase.toUpperCase() && 
          phrase !== phrase.toLowerCase());
}

module.exports = Bob;