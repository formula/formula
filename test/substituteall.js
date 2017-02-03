import test from 'tape';
import substituteall from '../src/substituteall';

test('substituteall', function(t) {
  t.plan(4);

  t.equal(
    substituteall("Hello, -first- -last-. Is your first name really -first-?", { "first": "Tom", 'last': "Jones" }),
    "Hello, Tom Jones. Is your first name really Tom?"
  )

  t.equal(
    substituteall("Hello, {{first}} {{last name}}. Is your first name really {{first}}?", { "first": "Tom", 'last name': "Jones" }, '{{', '}}'),
    "Hello, Tom Jones. Is your first name really Tom?"
  )

  t.equal(
    substituteall("Hello, -first name- %last name%. Is your first name really -first name-?", { "-first name-": "Tom", '%last name%': "Jones" }, ''),
    "Hello, Tom Jones. Is your first name really Tom?"
  )

  t.equal(
    substituteall("/foo/:bar/with.:format", { "bar": "abc", 'format': "json" }, ':', ''),
    "/foo/abc/with.json"
  )
})
