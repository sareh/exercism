function Anagram(subject) {
  this.subject = subject;
}

Anagram.prototype.matches = function(matchArray) {

  this.result = [];
  this.addWord = true;

  this.subjectFreq = {};
  for(var i = 0, len = this.subject.length; i < len; i++) {
    this.currentLetter = this.subject.charAt(i).toLowerCase();

    this.subjectFreq[this.currentLetter] = this.subjectFreq[this.currentLetter] + 1 || 1;
  }

  // console.log("\n this.subjectFreq is :");
  // for(var key in this.subjectFreq) {
  //   if(this.subjectFreq.hasOwnProperty(key)){
  //     console.log("\n letter: "+ key + " frequency: "+ this.subjectFreq[key]);
  //   }
  // }

  for(var i = 0, len = matchArray.length; i < len; i++) {
    if(this.subject.length !== matchArray[i].length) { 
      continue;
    } else {
      singleword:{
        this.currentFreq = {};
        for(var j = 0, wlen = matchArray[i].length; j < wlen; j++) {
          this.currentLetter = matchArray[i].charAt(j).toLowerCase();

          if(this.subjectFreq[this.currentLetter] === undefined) {
            console.log("The letter "+ this.currentLetter + " is not in the original word. Skipping to the next word.");
            this.addWord = false;
            break singleword;
          } else {
            this.currentFreq[this.currentLetter] = this.currentFreq[this.currentLetter] + 1 || 1;
          }
        }

        console.log("\n this.currentFreq is :");
        for(var key in this.currentFreq) {
          if(this.currentFreq.hasOwnProperty(key)){
            console.log("\n letter: "+ key + " frequency: "+ this.currentFreq[key]);
          }
        }

        for(var key in this.currentFreq) {
          if(this.currentFreq.hasOwnProperty(key) &&
            this.currentFreq[key] > this.subjectFreq[key]) {
            this.addWord = false;
          console.log("Letter "+ key + " appears in currentFreq word more often than in the subject word, so it can't be an anagram.");
          break;
        }
      }
      if(this.addWord === true) {
        this.result.push(matchArray[i]);
      }
    }
  }
}
console.log("\n this.result is: "+ this.result);
return this.result;
}

module.exports = Anagram;
