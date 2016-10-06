'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = edate;

var _parsedate = require('./parsedate');

var _parsedate2 = _interopRequireDefault(_parsedate);

var _serial = require('./serial');

var _serial2 = _interopRequireDefault(_serial);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function edate(start_date, months) {
    start_date = (0, _parsedate2.default)(start_date);

    if (start_date instanceof Error) {
        return start_date;
    }
    if (isNaN(months)) {
        return error.value;
    }
    months = parseInt(months, 10);
    start_date.setMonth(start_date.getMonth() + months);
    return (0, _serial2.default)(start_date);
};
module.exports = exports['default'];