var Raindrops = function () {};

Raindrops.prototype.convert = function (input) {
  var converted = '';
  if (input % 3 === 0) converted += 'Pling';
  if (input % 5 === 0) converted += 'Plang';
  if (input % 7 === 0) converted += 'Plong';
  return (converted || input.toString());
}

module.exports = Raindrops;