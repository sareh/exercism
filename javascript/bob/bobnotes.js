function Bob() {}

Bob.prototype.hey = function(input) {
  console.log("\n"+this.removeSpecialAndWhiteAndNum(input));
  console.log(this.isShouting(input));

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
  


  return (this.removeSpecialAndWhiteAndNum(phrase).match(/^[A-Z]*$/));
}

Bob.prototype.isOnlyLatinCaps = function(phrase){
  return (phrase.match(/^[A-Z]*$/));
}

Bob.prototype.removeWhite = function(phrase) {
  return (phrase.replace(/\s*/, ''));
}

Bob.prototype.removeSpecialAndWhiteAndNum = function(phrase) {
  var lower  = phrase.toLowerCase(),
      upper  = phrase.toUpperCase(),
      result = "";
  for(var i = 0; i < lower.length; i++) {
    if(lower[i] !== upper[i]) {
      result += phrase[i];
    }
  }
  return result;
}


module.exports = Bob;
// || phrase[i].match(/^[0-9]$/)