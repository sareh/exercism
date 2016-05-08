var at = function (hours, mins) {
  this.time = ':';
  hours = (hours < 10) ? '0' + hours : hours;
  mins = (mins < 10) ? '0' + mins : mins;
  this.time = hours + this.time;
  this.time = this.time + (mins || '00');
  return this.time;
}

module.exports = {"at": at};