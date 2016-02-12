function Acronyms () {}

Acronyms.parse = function (s) {
  var words = s.split(/[\s\-]|[a-z](?=[A-Z])/);
  var acronym = '';
  words.forEach(function (word) {
    acronym += word.slice(0,1);
  });
  return acronym.toUpperCase();
}

module.exports = Acronyms;
