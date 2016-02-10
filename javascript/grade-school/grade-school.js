function School() {
  this.db = {};
}

School.prototype.roster = function() {
  return JSON.parse(JSON.stringify(this.db));
}
School.prototype.add = function(name, grade) {
  if(typeof(name) !== 'string' && typeof(grade) !== 'number') {
    throw new Error('First argument should be a name & the second a grade number.');
  }
  // this.db[grade] = this.db[grade].concat(name).sort() || [name];
  if(this.db[grade]) { 
    this.db[grade].push(name); 
    this.db[grade].sort();
  } else {
    this.db[grade] = [name];
  }
}

School.prototype.grade = function(grade) {
  return JSON.parse(JSON.stringify(this.db[grade] || []));
}

module.exports = School;