function PhoneNumber(input) {
  this.input = input.trim().split(/[\s\(\).-]/).join('');
  this.number = function() {
    if(this.input.length === 10) {
      return this.input;
    }
    if(this.input.length === 11 && this.input.slice(0,1) === '1') {
      return this.input.slice(1);
    }
    return '0000000000';
  };
  this.areaCode = function(){
    return this.input.slice(0,3);
  }
  this.toString = function(){
    return "(" + this.areaCode() + ") " + this.input.slice(3,6) + "-" + this.input.slice(6,10);
  }
}
module.exports = PhoneNumber;