function SpaceAge(n) {
  this.seconds = n;
  this.earthYearSec = 31557600;
  this.yearSec = {
    'Earth'   : this.earthYearSec,
    'Mercury' : this.earthYearSec * 0.2408467,
    'Venus'   : this.earthYearSec * 0.61519726,
    'Mars'    : this.earthYearSec * 1.8808158,
    'Jupiter' : this.earthYearSec * 11.862615,
    'Saturn'  : this.earthYearSec * 29.447498,
    'Uranus'  : this.earthYearSec * 84.016846,
    'Neptune' : this.earthYearSec * 164.79132
  };
  this.twoDP = function(num) {
    return Number(Math.round(num+'e2')+'e-2');
  }
  this.compute = function(planet) { 
    return this.twoDP(this.seconds / this.yearSec[planet]); 
  }
  this.onEarth   = function() { return this.compute('Earth'); }   
  this.onMercury = function() { return this.compute('Mercury'); }   
  this.onVenus   = function() { return this.compute('Venus'); }  
  this.onMars    = function() { return this.compute('Mars'); }  
  this.onJupiter = function() { return this.compute('Jupiter'); }  
  this.onSaturn  = function() { return this.compute('Saturn'); }  
  this.onUranus  = function() { return this.compute('Uranus'); }  
  this.onNeptune = function() { return this.compute('Neptune'); }  
}

module.exports = SpaceAge;