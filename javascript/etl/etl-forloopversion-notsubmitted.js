function ETL() {}

ETL.prototype.transform = function(oldDb) {
  this.newDb = {};
  var values = Object.keys(oldDb);
  for(var i = 0; i < values.length; i++) {
    for(var j = 0; j < oldDb[values[i]].length; j++) {
      this.newDb[oldDb[values[i]][j].toLowerCase()] = parseInt(values[i]);
    }
  }
  return this.newDb;
}
module.exports = ETL;