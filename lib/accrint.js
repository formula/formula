"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = accrint;

var _parsedate = _interopRequireDefault(require("./parsedate"));

var _isdate = _interopRequireDefault(require("./isdate"));

var _isnumber = _interopRequireDefault(require("./isnumber"));

var _yearfrac = _interopRequireDefault(require("./yearfrac"));

var _error = require("./error");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// Returns the accrued interest for a security that pays periodic interest.
function accrint(issue, first, settlement, rate, par, frequency) {
  var basis = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
  // Return error if either date is invalid
  var issueDate = (0, _parsedate.default)(issue);
  var firstDate = (0, _parsedate.default)(first);
  var settlementDate = (0, _parsedate.default)(settlement);

  if (!(0, _isdate.default)(issueDate) || !(0, _isdate.default)(firstDate) || !(0, _isdate.default)(settlementDate) || !(0, _isnumber.default)(par)) {
    return _error.ERRORTYPES.value;
  } // Return error if either rate or par are lower than or equal to zero


  if (rate <= 0 || par <= 0) {
    return _error.ERRORTYPES.num;
  } // Return error if frequency is neither 1, 2, or 4


  if ([1, 2, 4].indexOf(frequency) === -1) {
    return _error.ERRORTYPES.num;
  } // Return error if basis is neither 0, 1, 2, 3, or 4


  if ([0, 1, 2, 3, 4].indexOf(basis) === -1) {
    return _error.ERRORTYPES.num;
  } // Return error if settlement is before or equal to issue


  if (settlementDate <= issueDate) {
    return _error.ERRORTYPES.num;
  } // Compute accrued interest


  return par * rate * (0, _yearfrac.default)(issue, settlement, basis);
}
