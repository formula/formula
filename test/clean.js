import test from 'tape';
import {clean} from '../src/clean';

test('CLEAN', function (t) {
  t.plan(5)
  t.deepEqual( clean({ foo: 'test', bar: true }), { foo: 'test', bar: true });
  t.deepEqual( clean({ foo: 'test', bar: false }), { foo: 'test', bar: false });
  t.deepEqual( clean({ foo: 'test', bar: undefined }), { foo: 'test' });
  t.deepEqual( clean({ foo: 'test', bar: null }), { foo: 'test' });
  t.deepEqual( clean({ foo: undefined, bar: null }), { });
});
