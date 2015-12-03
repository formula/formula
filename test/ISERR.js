import {ISERR} from '../src/ISERR';
import error from '../src/ERROR';
import test from 'tape';

test('ISERR', function(t) {
  t.plan(16)
  t.equal( ISERR(0), false, '0 is not an error');
  t.equal( ISERR(1), false, '1 is not an error');
  t.equal( ISERR('Hello'), false, '"Hello" is not an error');
  t.equal( ISERR(error.nil), true, 'Should be error');
  t.equal( ISERR(error.value), true, 'Should be error');
  t.equal( ISERR(error.ref), true, 'Should be error');
  t.equal( ISERR(error.name), true, 'Should be error');
  t.equal( ISERR(error.num), true, 'Should be error');
  t.equal( ISERR(error.na), false, 'NA should not be error');
  t.equal( ISERR(error.error), true, 'Should be error');
  t.equal( ISERR(error.data), true, 'Should be error');
  t.equal( ISERR(error.missing), true, 'Should be error');
  t.equal( ISERR(error.unknown), true, 'Should be error');
  t.equal( ISERR(NaN), true, 'NaN should be error');
  t.equal( ISERR(Number.POSITIVE_INFINITY), true, 'Should be error');
  t.equal( ISERR(Number.NEGATIVE_INFINITY), true, 'Should be error');
});
