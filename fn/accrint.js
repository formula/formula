'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = accrint;

var _parsedate = require('./parsedate');

var _parsedate2 = _interopRequireDefault(_parsedate);

var _isdate = require('./isdate');

var _isdate2 = _interopRequireDefault(_isdate);

var _isnumber = require('./isnumber');

var _isnumber2 = _interopRequireDefault(_isnumber);

var _yearfrac = require('./yearfrac');

var _yearfrac2 = _interopRequireDefault(_yearfrac);

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Returns the accrued interest for a security that pays periodic interest.
function accrint(issue, first, settlement, rate, par, frequency) {
  var basis = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;


  // Return error if either date is invalid
  var issueDate = (0, _parsedate2.default)(issue);
  var firstDate = (0, _parsedate2.default)(first);
  var settlementDate = (0, _parsedate2.default)(settlement);

  if (!(0, _isdate2.default)(issueDate) || !(0, _isdate2.default)(firstDate) || !(0, _isdate2.default)(settlementDate) || !(0, _isnumber2.default)(par)) {
    return _error2.default.value;
  }

  // Return error if either rate or par are lower than or equal to zero
  if (rate <= 0 || par <= 0) {
    return _error2.default.num;
  }

  // Return error if frequency is neither 1, 2, or 4
  if ([1, 2, 4].indexOf(frequency) === -1) {
    return _error2.default.num;
  }

  // Return error if basis is neither 0, 1, 2, 3, or 4
  if ([0, 1, 2, 3, 4].indexOf(basis) === -1) {
    return _error2.default.num;
  }

  // Return error if settlement is before or equal to issue
  if (settlementDate <= issueDate) {
    return _error2.default.num;
  }

  // Compute accrued interest
  return par * rate * (0, _yearfrac2.default)(issue, settlement, basis);
};
module.exports = exports['default'];