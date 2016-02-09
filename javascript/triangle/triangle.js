function Triangle(a, b, c) {
  this.kind = function() {
    if(a <= 0 || b <= 0 || c <= 0 ) throw new Error('Invalid input - can\'t have non-positive sides.'); 
    var sorted = [a,b,c].sort(function(a,b) { return a-b; });
    if(sorted[0]+sorted[1] < sorted[2]) throw new Error('Illegal input - violates triangle inequality.');
    if(a === b && b === c) return 'equilateral'; 
    if(a === b || b === c || a === c) return 'isosceles';
    return 'scalene';
  }
}

module.exports = Triangle;