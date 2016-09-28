// Copyright 2015 Peter W Moresi
import {substitute} from './substitute'

// substituteAll is a lightweight "substitution tags" engine that implement a global substitute for multiple items.
//
// The key values in your locals object are replaced. Unlike other templating systems it doesn't specify characters that surround your tokens.
//
// The function does not encode HTML entities. Don't use this to generate HTML. There are plently of alternative like underscore.js that do that already.
//
// It is equivalent to:
// ```js
// locals = { '-first-': 'Joe', '-last-': 'Smith' }
// substitute( substitute("-first- -last", '-first-',  locals), '-last-', 'Smith', locals)
// ```
export function substituteAll(content, locals, start='-', end) {
  if (!locals) return content;
  end = end || start
  return Object.keys(locals).reduce( (p, v) => substitute(p, `${start}${v}${end}`, locals[v]), content)
}
