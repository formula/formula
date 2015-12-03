import {ISERROR} from '../src/ISERROR';
import error from '../src/ERROR';
import test from 'tape';

test('ISERROR', function(t) {
  t.plan(13)
  t.equal( ISERROR(0), false, '0 is not an error');
  t.equal( ISERROR(1), false, '1 is not an error');
  t.equal( ISERROR('Hello'), false, '"Hello" is not an error');
  t.equal( ISERROR(error.nil), true, 'Should be error');
  t.equal( ISERROR(error.value), true, 'Should be error');
  t.equal( ISERROR(error.ref), true, 'Should be error');
  t.equal( ISERROR(error.name), true, 'Should be error');
  t.equal( ISERROR(error.num), true, 'Should be error');
  t.equal( ISERROR(error.na), true, 'Should be error');
  t.equal( ISERROR(error.error), true, 'Should be error');
  t.equal( ISERROR(error.data), true, 'Should be error');
  t.equal( ISERROR(error.missing), true, 'Should be error');
  t.equal( ISERROR(error.unknown), true, 'Should be error');
});
