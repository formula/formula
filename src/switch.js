// Copyright 2015 JC Fisher

import error from "./error";

// CHOOSE accepts an index and a list of items. It returns the item that corresponds to the index.
export default function SWITCH() {
  var result;
  if (arguments.length > 0) {
    var targetValue = arguments[0];
    var argc = arguments.length - 1;
    var switchCount = Math.floor(argc / 2);
    var switchSatisfied = false;
    var defaultClause = argc % 2 === 0 ? null : arguments[arguments.length - 1];

    if (switchCount) {
      for (var index = 0; index < switchCount; index++) {
        if (targetValue === arguments[index * 2 + 1]) {
          result = arguments[index * 2 + 2];
          switchSatisfied = true;
          break;
        }
      }
    }

    if (!switchSatisfied && defaultClause) {
      result = defaultClause;
    }
  }

  return result;
}
