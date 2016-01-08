import test from 'tape';
import {CLEAN} from '../src/CLEAN';

test('CLEAN', function (t) {
  t.plan(5)
  t.deepEqual( CLEAN({ foo: 'test', bar: true }), { foo: 'test', bar: true });
  t.deepEqual( CLEAN({ foo: 'test', bar: false }), { foo: 'test', bar: false });
  t.deepEqual( CLEAN({ foo: 'test', bar: undefined }), { foo: 'test' });
  t.deepEqual( CLEAN({ foo: 'test', bar: null }), { foo: 'test' });
  t.deepEqual( CLEAN({ foo: undefined, bar: null }), { });
});
