// Copyright 2015-2018 FormBucket LLC
import substitute from "./substitute";
import keys from "./keys";
import reduce from "./reduce";

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
export default function substituteAll(
  content,
  locals,
  start = "-",
  end = start
) {
  if (!locals) return content;
  return reduce(
    keys(locals),
    (p, v) => substitute(p, `${start}${v}${end}`, locals[v]),
    content
  );
}
