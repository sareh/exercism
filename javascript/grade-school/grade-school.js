function School() {
  this.db = {};
  this.roster = function(){ return this.db; };
}

School.prototype.add = function(name, grade) {
  if(typeof(name) !== 'string' && typeof(grade) !== 'number') {
    throw new Error('First argument should be a name & the second a grade number.');
  }
  if(this.db[grade]) { 
    this.db[grade].push(name); 
    this.db[grade].sort();
  } else {
    this.db[grade] = [name];
  }
}

School.prototype.grade = function(grade) {
  return (this.db[grade]) ? this.db[grade] : [];
}

module.exports = School;