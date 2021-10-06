// Copyright 2015-2021 JC Fisher

import { ERRORTYPES as error } from "./error";
import eq from "./eq";

// Search the odd args and return even value when odd arg equals targetValue.
export default function SWITCH(targetValue, ...args) {
  var result;
  var argc = args.length;
  var switchCount = Math.floor(argc / 2);
  var defaultClause = argc % 2 === 0 ? null : args[args.length - 1];

  if (switchCount) {
    for (var index = 0; index < switchCount; index++) {
      if (eq(targetValue, args[index * 2])) {
        result = args[index * 2 + 1];
        return result;
      }
    }
  }

  return defaultClause || error.na;
}
