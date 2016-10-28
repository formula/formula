import iserror from '../src/iserror';
import error from '../src/error';
import test from 'tape';

test('iserror', function(t) {
  t.plan(13)
  t.equal( iserror(0), false, '0 is not an error');
  t.equal( iserror(1), false, '1 is not an error');
  t.equal( iserror('Hello'), false, '"Hello" is not an error');
  t.equal( iserror(error.nil), true, 'Should be error');
  t.equal( iserror(error.value), true, 'Should be error');
  t.equal( iserror(error.ref), true, 'Should be error');
  t.equal( iserror(error.name), true, 'Should be error');
  t.equal( iserror(error.num), true, 'Should be error');
  t.equal( iserror(error.na), true, 'Should be error');
  t.equal( iserror(error.error), true, 'Should be error');
  t.equal( iserror(error.data), true, 'Should be error');
  t.equal( iserror(error.missing), true, 'Should be error');
  t.equal( iserror(error.unknown), true, 'Should be error');
});
