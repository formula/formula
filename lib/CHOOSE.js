'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CHOOSE = CHOOSE;

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// CHOOSE accepts an index and a list of items. It returns the item that corresponds to the index.
function CHOOSE(index) {

  // Return `#NA!` if index or items are not provided.
  if (!index || arguments.length - 1 === 0) {
    return _ERROR2.default.na;
  }

  // Return `#VALUE!` if index is less than 1 or greater than 254.
  if (index < 1 || index > 254) {
    return _ERROR2.default.value;
  }

  // Return `#VALUE!` if number of items is less than index.
  if (arguments.length - 1 < index) {
    return _ERROR2.default.value;
  }

  // Return the item.
  return arguments.length <= index - 1 + 1 ? undefined : arguments[index - 1 + 1];
} // Copyright 2015 Peter W Moresi