import {CELLINDEX} from '../src/CELLINDEX';
import error from '../src/ERROR';
import test from 'tape';

test('CELLINDEX', function(t) {
  t.plan(3)
  t.equal( CELLINDEX(0, 0), 0, 'Should be 0');
  t.equal( CELLINDEX(0, 1), 1, 'Should be 1');
  t.equal( CELLINDEX(1, 1), 16385, 'Should be 16385');
});
