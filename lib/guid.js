"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = guid;

// Copyright 2015-2018 FormBucket LLC
// credit to http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
// rfc4122 version 4 compliant solution
// Generate a globally unique identifier
function guid() {
  var guid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
        v = c == "x" ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
  return guid;
}
