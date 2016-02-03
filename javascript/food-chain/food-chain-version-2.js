function FoodChain() {

  this.intro = 'I know an old lady who swallowed a ';
  
  this.animal = {
    1: 'fly', 
    2: 'spider', 
    3: 'bird', 
    4: 'cat', 
    5: 'dog', 
    6: 'goat', 
    7: 'cow', 
    8: 'horse'};

  this.part2 = function(animal) {
    switch (animal) {
      case 'fly': return '';
      case 'spider': return '.\nIt wriggled and jiggled and tickled inside her.\nShe swallowed the spider to catch the '+
    'fly';
      case 'bird': return '.\nHow absurd to swallow a bird!\n'+
    'She swallowed the bird to catch the spider that '+
    'wriggled and jiggled and tickled inside her.\n'+
    'She swallowed the spider to catch the fly';
      case 'cat': return '.\nImagine that, to swallow a cat!\n' +
    'She swallowed the cat to catch the bird.\n' +
    'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' +
    'She swallowed the spider to catch the fly';
      case 'dog': return '.\nWhat a hog, to swallow a dog!\n' +
    'She swallowed the dog to catch the cat.\n' +
    'She swallowed the cat to catch the bird.\n' +
    'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' +
    'She swallowed the spider to catch the fly';
    case 'goat': return '.\nJust opened her throat and swallowed a goat!\n' +
    'She swallowed the goat to catch the dog.\n' +
    'She swallowed the dog to catch the cat.\n' +
    'She swallowed the cat to catch the bird.\n' +
    'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' +
    'She swallowed the spider to catch the fly';
      case 'cow': return '.\nI don\'t know how she swallowed a cow!\n' +
    'She swallowed the cow to catch the goat.\n' +
    'She swallowed the goat to catch the dog.\n' +
    'She swallowed the dog to catch the cat.\n' +
    'She swallowed the cat to catch the bird.\n' +
    'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' +
    'She swallowed the spider to catch the fly';
      case 'horse': return '.\n' + 'She\'s dead, of course!\n';
    }
  }

  this.end = function(animal) {
    switch (animal) {
      case 'horse': return '';
      default: return '.\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n';
    }
  }
}

FoodChain.prototype.verse = function(n) {
  return this.intro + this.animal[n] + this.part2(this.animal[n]) + this.end(this.animal[n]);
}

FoodChain.prototype.verses = function(start, end) {
  var song = '';
  for(var i = start; i <= end; i++) { 
    song += this.verse(i) + "\n";
  }
  return song;
}

module.exports = FoodChain;