function Acronyms() {}

Acronyms.parse = function(s) {
  return s.split(/[\s\-]|[a-z](?=[A-Z])/).reduce(function(acronym, word) {
    return acronym + word.slice(0,1);
  }, '').toUpperCase();
}

module.exports = Acronyms;
