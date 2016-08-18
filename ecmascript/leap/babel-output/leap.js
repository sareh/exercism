"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isLeapYear;

function isLeapYear(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

module.exports = exports["default"];