import error from '../src/ERROR'
import test from 'tape'
import {TAN} from '../src/TAN'

test('TAN', function(t) {
  t.plan(4)
  t.equal( TAN(0), 0 );
  t.equal( TAN(1), 1.5574077246549023 );
  t.equal( TAN(NaN), error.value );
  t.equal( TAN('invalid'), error.value );
});
