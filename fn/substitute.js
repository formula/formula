'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = substitute;
// Copyright 2015 Peter W Moresi

// SUBSTITUTE `old_text` with `new_text` a given number of occurrences in `text`.
function substitute(text, old_text, new_text, occurrence) {
  if (!text || !old_text || !new_text) {
    return text;
  } else if (occurrence === undefined) {
    return text.replace(new RegExp(old_text, 'g'), new_text);
  } else {
    var index = 0;
    var i = 0;
    while (text.indexOf(old_text, index) > 0) {
      index = text.indexOf(old_text, index + 1);
      i++;
      if (i === occurrence) {
        return text.substring(0, index) + new_text + text.substring(index + old_text.length);
      }
    }
  }
}
module.exports = exports['default'];