function DnaTranscriber() {
};

DnaTranscriber.prototype.toRna = function(input){
  var dna = 'CGAT';
  var rna = 'GCUA';
  var transcribed = '';
  input.split('').forEach(function(element){
    this.indexFromDna = dna.indexOf(element);
    
    if (this.indexFromDna === -1) {
      throw new Error('Unallowed letters used. Only use CGAT.');
    } else {
      transcribed += rna[this.indexFromDna]
    }
  });
  return transcribed;
}

module.exports = DnaTranscriber;