import {COS} from '../src/COS';
import error from '../src/ERROR';
import test from 'tape';

test('COS', function(t) {
  t.plan(3);
  t.equal( COS(0), 1 );
  t.equal( COS(NaN), error.value );
  t.equal( COS('invalid'), error.value );
})
