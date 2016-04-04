import {SERIAL} from '../src/SERIAL';
import test from 'tape';
import error from '../src/ERROR'

test('SERIAL', function(t) {
  t.plan(6)
  t.equal( SERIAL(new Date(2008, 6, 8)), 39637, 'Should be 39637');
  t.equal( SERIAL(new Date(1900, 0, 1)), 1, 'Should be 1');
  t.equal( SERIAL(new Date(1900, 1, 1)), 32, 'Should be 33');
  t.equal( SERIAL(new Date(1900, 2, 1)), 60, 'Should be 61');
  t.equal( SERIAL(new Date(2000, 0, 1)), 36526, 'Should be 36526');
  t.equal( SERIAL('foo'), error.na, 'Should be NA');
});
