import test from 'tape';
import {substituteAll} from '../src/substituteAll';

test('substituteAll', function(t) {
  t.plan(4);

  t.equal(
    substituteAll("Hello, -first- -last-. Is your first name really -first-?", { "first": "Tom", 'last': "Jones" }),
    "Hello, Tom Jones. Is your first name really Tom?"
  )

  t.equal(
    substituteAll("Hello, {{first}} {{last name}}. Is your first name really {{first}}?", { "first": "Tom", 'last name': "Jones" }, '{{', '}}'),
    "Hello, Tom Jones. Is your first name really Tom?"
  )

  t.equal(
    substituteAll("Hello, -first name- %last name%. Is your first name really -first name-?", { "-first name-": "Tom", '%last name%': "Jones" }, ''),
    "Hello, Tom Jones. Is your first name really Tom?"
  )

  t.equal(
    substituteAll("/foo/:bar/with.:format", { "bar": "abc", 'format': "json" }, ':', ''),
    "/foo/abc/with.json"
  )
})
