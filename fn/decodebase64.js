'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = decodebase64;
// Copyright 2015 JC Fisher

function decodebase64(str) {

  if (typeof window !== 'undefined' && typeof atob !== 'undefined') {
    return window.atob(str);
  } else if (typeof module !== 'undefined' && module.exports) {
    return new Buffer(str, 'base64').toString();
  } else {
    var InvalidCharacterError = function InvalidCharacterError(message) {
      this.message = message;
    };

    var _atob = function _atob(input) {

      var str = String(input).replace(/=+$/, '');
      if (str.length % 4 == 1) {
        throw new InvalidCharacterError("'atob' failed: The string to be decoded is not correctly encoded.");
      }
      for (
      // initialize result and counters
      var bc = 0, bs, buffer, idx = 0, output = '';
      // get next character
      buffer = str.charAt(idx++);
      // character found in table? initialize bit storage and add its ascii value;
      ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
      // and if not first of each 4 characters,
      // convert the first 8 bits to one ascii character
      bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0) {
        // try to find character in table (0-63, not found => -1)
        buffer = chars.indexOf(buffer);
      }
      return output;
    };

    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

    InvalidCharacterError.prototype = new Error();
    InvalidCharacterError.prototype.name = 'InvalidCharacterError';

    return _atob(str);
  }
}
module.exports = exports['default'];