import test from 'tape';
import {DAYS360} from '../src/DAYS360';
import error from '../src/ERROR';

test('DAYS360', function(t) {
  t.plan(12)
  t.equal( DAYS360('1/1/1901', '1/2/1901', true), 1);
  t.equal( DAYS360('1/1/1901', '12/31/1901', true), 359);
  t.equal( DAYS360('1/1/1901', '1/1/1902', true), 360);
  t.equal( DAYS360('1/1/1901', '2/1/1901', true), 30);
  t.equal( DAYS360('1/1/1901', '1/2/1901', false), 1);
  t.equal( DAYS360('1/1/1901', '12/31/1901', false), 360);
  t.equal( DAYS360('1/1/1901', '1/1/1902', false), 360);
  t.equal( DAYS360('1/1/1901', '2/1/1901', false), 30);
  t.equal( DAYS360('1/30/1901', '12/31/1901', false), 330);
  t.equal( DAYS360('1/1/1901', 'a'), error.value);
  t.equal( DAYS360('a', '1/2/1901'), error.value);
  t.equal( DAYS360('1/1/1901', '1/2/1901', 'a'), error.value);
});
