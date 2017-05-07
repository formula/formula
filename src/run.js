import * as functions from './functions'
import compile from './compile'
import isFunction from './isfunction'
import assign from './assign'

// Execute a formula expression
export default function run(exp, params={}) {
  var compiled = isFunction(exp) ? exp : compile(exp);

  let funcs = functions.default
  let locals = assign({}, params)

  // Default get for plain object.
  if (locals.get !== 'function') {
    locals.get = (name, scope) => {
      if (typeof scope !== 'undefined') return locals[scope] ? locals[scope][name] : undefined
      return locals[name]
    }
  }

  return compiled(locals, funcs)
}
