function Gigasecond(datetime) {
  this.datetime = datetime;
}

Gigasecond.prototype.date = function(){
  return new Date(this.datetime.getTime() + Math.pow(10,12));
}

module.exports = Gigasecond;
