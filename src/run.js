// Copyright 2015-2021 JC Fisher

import * as funcs from "./functions";
import compile from "./compile";
import isText from "./istext"
import isFunction from "./isfunction";
import assign from "./assign";
import { ERRORTYPES as error } from "./error";
import jsonpath from "jsonpath";

// m is a cache of compiled expressions.
let m = {};

// Execute a formula expression
export default function run(exp, params = {}) {
  // if the exp is a function then return it immediately.

  let isJSON = false;

  if (isText(params)){
    isJSON = true;
    params = JSON.parse(params)
  }

  let locals = assign({}, params);

  // Default get for plain object.
  if (locals.get !== "function") {
    locals.get = (name, scope) => {

      if (isJSON){
        return jsonpath.value(locals, name)
      } else if (isText(scope)) {
        return locals[scope] ? locals[scope][name] : undefined;
      }
      return locals[name];
    };
  }

  if (isFunction(exp)) return exp(locals, funcs);
  else if (!isText(exp)) return error.na;

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

  return compiled(locals, funcs);
}
