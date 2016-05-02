'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SELECT = SELECT;

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

// Copyright 2015 Peter W Moresi

// SELECT fields from object
function SELECT(fields, body) {
  // non-json
  if (!body || 'object' != (typeof body === 'undefined' ? 'undefined' : _typeof(body))) return;

  // check for fields
  if (!fields) return;

  // split
  if ('string' == typeof fields) fields = fields.split(/ *, */);

  // fields array
  if (Array.isArray(body)) {
    return body.map(function (obj) {
      return fields.reduce(function (ret, key) {
        ret[key] = obj[key];
        return ret;
      }, {});
    });

    return;
  }

  // fields object
  return fields.reduce(function (ret, key) {
    ret[key] = body[key];
    return ret;
  }, {});
}