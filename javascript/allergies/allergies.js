var Allergies = function (score) {

  this.allAllergies = ['eggs', 'peanuts', 'shellfish', 'strawberries', 'tomatoes', 'chocolate', 'pollen', 'cats'];

  this.list = function () {
    var i,
        allergies = [];
    for (i = 0; i < this.allAllergies.length; i++) {
      if (score & Math.pow(2,i)) {
        allergies.push(this.allAllergies[i]);
      }
    }
    return allergies;
  }

}

module.exports = Allergies;