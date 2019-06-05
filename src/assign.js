// Copyright 2015-2018 FormBucket LLC
import { ERRORTYPES as error } from "./error";

// assign from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
function assign(target, varArgs) {
  // .length of function is 2
  "use strict";
  if (target == null) {
    return error.nil;
  }

  var to = Object(target);

  for (var index = 1; index < arguments.length; index++) {
    var nextSource = arguments[index];

    if (nextSource != null) {
      // Skip over if undefined or null
      for (var nextKey in nextSource) {
        // Avoid bugs when hasOwnProperty is shadowed
        if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
          to[nextKey] = nextSource[nextKey];
        }
      }
    }
  }
  return to;
}

// Ponyfill or Object.assign with empty initial object.
export default function(initial, ...list) {
  let func = Object.assign || assign;
  return func({}, initial, ...list);
}
