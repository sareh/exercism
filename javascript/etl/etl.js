function ETL() {}

ETL.prototype.transform = function(oldDb) {
  var self = this;
  self.newDb = {};
  Object.keys(oldDb).forEach(function(value) {
    oldDb[value].forEach(function(letter) {
      self.newDb[letter.toLowerCase()] = parseInt(value);
    });
  });
  return self.newDb;
}
module.exports = ETL;