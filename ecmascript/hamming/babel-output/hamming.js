// Using map & call - slightly less readable
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Hamming = (function () {
  function Hamming() {
    _classCallCheck(this, Hamming);
  }

  _createClass(Hamming, [{
    key: 'compute',
    value: function compute(strand1, strand2) {
      var count = 0;

      if (strand1.length !== strand2.length) {
        throw new Error('DNA strands must be of equal length.');
      }

      Array.prototype.map.call(strand1, function (letter, idx) {
        if (letter !== strand2[idx]) {
          count += 1;
        }
      });

      return count;
    }
  }]);

  return Hamming;
})();

exports['default'] = Hamming;
module.exports = exports['default'];