function PhoneNumber(input) {
  this.input = input.trim().split(/[\s\(\).-]/).join('');
  this.number = function() {
    switch(this.input.length) {
      case 9:
        return '0000000000';
      case 11:
        if(this.input.slice(0,1) === '1') {
          return this.input.slice(1);
        } else {
          return '0000000000';
        }
      default:
        return this.input;
    }
  };
  this.areaCode = function(){
    return this.input.slice(0,3);
  }
  this.toString = function(){
    return "(" + this.areaCode() + ") " + this.input.slice(3,6) + "-" + this.input.slice(6,10);
  }
}
module.exports = PhoneNumber;