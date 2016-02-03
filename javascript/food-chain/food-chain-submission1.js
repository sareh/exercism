function FoodChain() {

  this.intro = 'I know an old lady who swallowed a ';
  this.animals = [
    '',
    ['fly.\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n'],
    ['spider.\nIt wriggled and jiggled and tickled inside her.\nShe swallowed the spider to catch the '+
    'fly.\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n'
    ],
    ['bird.\nHow absurd to swallow a bird!\nShe swallowed the bird to catch the spider that '+
    'wriggled and jiggled and tickled inside her.\n'+
    'She swallowed the spider to catch the '+
    'fly.\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n'],
    ['cat.\n' +
    'Imagine that, to swallow a cat!\n' +
    'She swallowed the cat to catch the bird.\n' +
    'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' +
    'She swallowed the spider to catch the fly.\n' +
    'I don\'t know why she swallowed the fly. ' +
    'Perhaps she\'ll die.\n'],
    ['dog.\n' +
    'What a hog, to swallow a dog!\n' +
    'She swallowed the dog to catch the cat.\n' +
    'She swallowed the cat to catch the bird.\n' +
    'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' +
    'She swallowed the spider to catch the fly.\n' +
    'I don\'t know why she swallowed the fly. ' +
    'Perhaps she\'ll die.\n'],
    ['goat.\n' +
    'Just opened her throat and swallowed a goat!\n' +
    'She swallowed the goat to catch the dog.\n' +
    'She swallowed the dog to catch the cat.\n' +
    'She swallowed the cat to catch the bird.\n' +
    'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' +
    'She swallowed the spider to catch the fly.\n' +
    'I don\'t know why she swallowed the fly. ' +
    'Perhaps she\'ll die.\n'],
    ['cow.\n' +
    'I don\'t know how she swallowed a cow!\n' +
    'She swallowed the cow to catch the goat.\n' +
    'She swallowed the goat to catch the dog.\n' +
    'She swallowed the dog to catch the cat.\n' +
    'She swallowed the cat to catch the bird.\n' +
    'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' +
    'She swallowed the spider to catch the fly.\n' +
    'I don\'t know why she swallowed the fly. ' +
    'Perhaps she\'ll die.\n'],
    ['horse.\n' + 'She\'s dead, of course!\n']
  ];
}

FoodChain.prototype.verse = function(number) {
  return this.intro + this.animals[number][0];
}

FoodChain.prototype.verses = function(start, end) {
  var song = '';
  for(var i = start; i <= end; i++) { 
    song += this.verse(i) + "\n";
  }
  return song;
}

module.exports = FoodChain;