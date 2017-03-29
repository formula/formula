'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isfalsy;
// Copyright 2015 JC Fisher

// Returns true when the value is a falsy value.
// https://developer.mozilla.org/en-US/docs/Glossary/Falsy
function isfalsy(value) {
  return value === false || value === 0 || value === '' || typeof value === 'undefined' || value === null || Number.isNaN(value);
};
module.exports = exports['default'];