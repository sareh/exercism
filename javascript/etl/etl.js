function ETL() {}

ETL.prototype.transform = function(oldDb) {
  var newDb = {};
  Object.keys(oldDb).forEach(function(value) {
    oldDb[value].forEach(function(letter) {
      newDb[letter.toLowerCase()] = parseInt(value);
    });
  });
  //Try using the reduce method as the outer iterator. 
  return newDb;
}
module.exports = ETL;