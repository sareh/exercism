function DnaTranscriber() {
  this.dnaToRna = { 'C': 'G',
                    'G': 'C',
                    'A': 'U',
                    'T': 'A'
                  };
};

DnaTranscriber.prototype.toRna = function(input){
  this.transcribed = '';
  for(var i = 0, len = input.length; i < len; i++){
    this.transcribedLetter = this.dnaToRna[input.charAt(i)]; 
    if (this.transcribedLetter === undefined) {
      throw new Error('Unallowed letters used. Only use CGAT.');
    } else {
      this.transcribed += this.transcribedLetter;
    }
  }
  return this.transcribed;
}

module.exports = DnaTranscriber;