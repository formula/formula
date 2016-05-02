import {CHANGED} from '../src/CHANGED';
import error from '../src/ERROR';
import test from 'tape';

test('CHANGED', function(t) {
  t.plan(5)
  t.deepEqual( CHANGED({ foo: "a" }, { foo: "b" }), ['foo']);
  t.deepEqual( CHANGED({ foo: "a" }, { bar: "b" }), ['foo', 'bar']);
  t.deepEqual( CHANGED({ foo: "a", bar: 1 }, { foo: "b", bar: 1 }), ['foo']);
  t.deepEqual( CHANGED({ foo: "a", bar: 1 }, { foo: "b", bar: 2 }), ['foo', 'bar']);
  t.deepEqual( CHANGED({ foo: "a", bar: 1, bat: 'a' }, { foo: "b", bar: 2, bat: 'a' }), ['foo', 'bar']);
});
