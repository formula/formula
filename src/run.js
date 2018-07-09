// Copyright 2015-2018 FormBucket LLC

import * as funcs from "./functions";
import compile from "./compile";
import isFunction from "./isfunction";
import assign from "./assign";
import isText from "./istext";
import { ERRORTYPES as error } from "./error";

// m is a cache of compiled expressions.
let m = {};

// Execute a formula expression
export default function run(exp, params = {}) {
  // if the exp is a function then return it immediately.
  if (isFunction(exp)) return exp;

  if (!isText(exp)) return error.na;

  // check cached and shortcut if appropriate.
  if (m.hasOwnProperty(exp)) {
    // reload the compiled function.
    compiled = m[exp];
  } else {
    // compile the expression.
    var compiled = compile(exp);

    // cache the compiled function.
    m[exp] = compiled;
  }

  let locals = assign({}, params);

  // Default get for plain object.
  if (locals.get !== "function") {
    locals.get = (name, scope) => {
      if (isText(scope)) {
        return locals[scope] ? locals[scope][name] : undefined;
      }
      return locals[name];
    };
  }

  return compiled(locals, funcs);
}
