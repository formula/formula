'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sort;

var _isref = require('./isref');

var _isref2 = _interopRequireDefault(_isref);

var _isarray = require('./isarray');

var _isarray2 = _interopRequireDefault(_isarray);

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// SORT a reference or an array.
//
// The criteria may use 1 of several forms:
//
// sort(reference(reference: Array, ...criteria : List<string>)
// sort(reference(reference: Range, ...criteria : List<string>)
//
// The List<function> will be reduced into a single function.
//
// The list<string> will also be reduced into a single function which
// interprets the strings as pairs. The odd items are fields and the
// even ones are direction (ASC|DESC).
function sort(ref) {
  for (var _len = arguments.length, criteria = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    criteria[_key - 1] = arguments[_key];
  }

  // reduce the criteria array into a function
  var makeComparer = function makeComparer() {
    return function (a, b) {
      var result = 0;
      for (var i = 0; i < criteria.length; i + 2) {
        var field = typeof criteria[i] === 'string' ? criteria[i] : criteria[i] - 1,
            order = criteria[i + 1];

        if (a[field] < b[field]) {
          return order ? -1 : 1;
        } else {
          return order ? 1 : -1;
        }
      }

      return result;
    };
  };

  if ((0, _isref2.default)(ref) || (0, _isarray2.default)(ref)) {
    return ref.sort(makeComparer());
  }

  return _error2.default.na;
} // Copyright 2015 JC Fisher

module.exports = exports['default'];