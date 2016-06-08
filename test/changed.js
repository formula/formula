import {changed} from '../src/changed';
import error from '../src/error';
import test from 'tape';

test('changed', function(t) {
  t.plan(5)
  t.deepEqual( changed({ foo: "a" }, { foo: "b" }), ['foo']);
  t.deepEqual( changed({ foo: "a" }, { bar: "b" }), ['foo', 'bar']);
  t.deepEqual( changed({ foo: "a", bar: 1 }, { foo: "b", bar: 1 }), ['foo']);
  t.deepEqual( changed({ foo: "a", bar: 1 }, { foo: "b", bar: 2 }), ['foo', 'bar']);
  t.deepEqual( changed({ foo: "a", bar: 1, bat: 'a' }, { foo: "b", bar: 2, bat: 'a' }), ['foo', 'bar']);
});
