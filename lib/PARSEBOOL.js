'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PARSEBOOL = PARSEBOOL;

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// PARSEBOOL converts a truthy value into a boolean value.
function PARSEBOOL(val) {

  if (val instanceof Error) {
    return val;
  } else if (typeof val === 'boolean') {
    return val;
  } else if (typeof val === 'number') {
    return val !== 0;
  } else if (typeof val === 'string') {
    var up = val.toUpperCase();
    if (up === 'TRUE' || up === 'FALSE') {
      return up === 'TRUE';
    }
  }

  return _ERROR2.default.value;
} // Copyright 2015 Peter W Moresi