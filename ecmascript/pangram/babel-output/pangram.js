'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Pangram = (function () {
  function Pangram(phrase) {
    _classCallCheck(this, Pangram);

    this.phrase = phrase;
  }

  _createClass(Pangram, [{
    key: 'isPangram',
    value: function isPangram() {
      var _this = this;

      if (this.phrase === '') {
        return false;
      }
      // return Array.prototype.every.call('abcdefghijklmnopqrstuvwxyz', (letter) => {
      //     return this.phrase.indexOf(letter) > -1;
      // }, this);

      return 'abcdefghijklmnopqrstuvwxyz'.split('').every(function (letter) {
        return _this.phrase.toLowerCase().indexOf(letter) > -1;
      });
    }
  }]);

  return Pangram;
})();

exports['default'] = Pangram;
module.exports = exports['default'];