'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NUMBERVALUE = NUMBERVALUE;

var _ISEMPTY = require('./ISEMPTY');

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Convert a text value into a number value.
function NUMBERVALUE(text, decimal_separator, group_separator) {
  decimal_separator = decimal_separator || '.';
  group_separator = group_separator || ',';

  // define factor to be 1 so that it does nothing in most cases
  var factor = 1;

  if ((0, _ISEMPTY.ISEMPTY)(text)) {
    return _ERROR2.default.value;
  }

  if (text[text.length - 1] === '%') {
    // set the factor to 100 to convert from percentage to decimal
    factor = 100;
    text = text.substr(0, text.length - 1);
  }

  return Number(text.replace(RegExp('[' + group_separator + ']', 'g'), '').replace(decimal_separator, '.')) / factor;
};