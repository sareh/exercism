var usedNames = {};
function Robot() {
  this.name = this.name || this.generateName();
  this.repeatUntilUnique();
  usedNames[this.name] = true;
}

Robot.prototype.repeatUntilUnique = function() {
  while(this.hasBeenUsed(this.name)) {
    this.name = this.generateName();
    console.log('Generated new name!');
  }
}
Robot.prototype.hasBeenUsed = function(name) {
  return (usedNames[name] === true);
}

Robot.prototype.generateName = function() {
  var a = String.fromCharCode(this.generateRandom(65,90,false));
  var b = String.fromCharCode(this.generateRandom(65,90,false));
  var c = this.generateRandom(0,999,true);
  while(c.toString().length < 3){ c = '0' + c; }
  return a+b+c;
}

Robot.prototype.generateRandom = function(min, max, include0){
  return Math.floor(Math.random()*(max-min)) + ((include0) ? min : 1+min);
}

Robot.prototype.reset = function() {
  this.name = this.generateName();
  this.repeatUntilUnique();
  return this.name;
}

module.exports = Robot;