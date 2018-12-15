"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = decodebase64;

var _error = require("./error");

// Copyright 2015-2018 FormBucket LLC
function decodebase64(str) {
  function atob(input) {
    var str = String(input).replace(/=+$/, "");

    if (str.length % 4 == 1) {
      return _error.ERRORTYPES.value;
    }

    for ( // initialize result and counters
    var bc = 0, bs, buffer, idx = 0, output = ""; // get next character
    buffer = str.charAt(idx++); // character found in table? initialize bit storage and add its ascii value;
    ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer, // and if not first of each 4 characters,
    // convert the first 8 bits to one ascii character
    bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0) {
      // try to find character in table (0-63, not found => -1)
      buffer = chars.indexOf(buffer);
    }

    return output;
  }

  if (typeof window !== "undefined" && typeof atob !== "undefined") {
    return window.atob(str);
  } else if (typeof module !== "undefined" && module.exports) {
    return new Buffer(str, "base64").toString();
  } else {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    return atob(str);
  }
}
