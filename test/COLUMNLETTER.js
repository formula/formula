import {COLUMNLETTER} from '../src/COLUMNLETTER';
import error from '../src/ERROR';
import test from 'tape';

test('COLUMNLETTER', function(t) {
  t.plan(5);
  t.equal( COLUMNLETTER(0), 'A' );
  t.equal( COLUMNLETTER(25), 'Z' );
  t.equal( COLUMNLETTER(26), 'AA' );
  t.equal( COLUMNLETTER(NaN), error.value );
  t.equal( COLUMNLETTER('invalid'), error.value );
})
