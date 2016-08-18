"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bob = (function () {
  function Bob() {
    _classCallCheck(this, Bob);
  }

  _createClass(Bob, [{
    key: "hey",
    value: function hey(message) {
      if (this.isSilent(message)) return "Fine. Be that way!";
      if (this.isQuestion(message)) return "Sure.";
      if (this.isShouting(message)) return "Whoa, chill out!";

      return "Whatever.";
    }
  }, {
    key: "isQuestion",
    value: function isQuestion(message) {
      return message.charAt(message.length - 1) === '?' && !this.isShouting(message);
    }
  }, {
    key: "isShouting",
    value: function isShouting(message) {
      return message === message.toUpperCase() && message !== message.toLowerCase();
    }
  }, {
    key: "isSilent",
    value: function isSilent(message) {
      return message.match(/^\s*$/);
    }
  }]);

  return Bob;
})();

exports["default"] = Bob;
module.exports = exports["default"];