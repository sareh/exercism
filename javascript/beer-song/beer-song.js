function BeerSong() {
  this.lines = [
  'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n',
  '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n',
  '2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n',
  ];
  for(var i = 3; i <= 99; i++) {
    this.lines[i] = i+" bottles of beer on the wall, "+i+" bottles of beer.\nTake one down and pass it around, "+(i-1)+" bottles of beer on the wall.\n";
  }
}

BeerSong.prototype.verse = function(number) {
  return this.lines[number];
}

BeerSong.prototype.sing = function(start, end) {
  var song = "";
  if(!end) { var end = 0; }
  for(var i = start; i >= end; i--) {
    song += this.verse(i)+"\n";
  }
  return song.slice(0,-1);
}

module.exports = BeerSong;