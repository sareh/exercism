function DnaTranscriber() {
  this.dna = 'CGAT';
  this.rna = 'GCUA';
};

DnaTranscriber.prototype.toRna = function(input){
  this.transcribed = '';
  this.inputArr = input.split('');
  for(var i = 0, len = input.length; i < len; i++){
    this.indexFromDna = this.dna.indexOf(this.inputArr[i]); 
    if (this.indexFromDna === -1) {
      throw new Error('Unallowed letters used. Only use CGAT.');
    } else {
      this.transcribed += this.rna[this.indexFromDna];
    }
  }
  return this.transcribed;
}

module.exports = DnaTranscriber;