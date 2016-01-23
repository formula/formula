import {LEN} from '../src/LEN';
import error from '../src/ERROR';
import test from 'tape';

test('LEN', function(t) {
  t.plan(4)
  t.equal( LEN("12345"), 5 );
  t.equal( LEN(["12345"]), 1 );
  t.equal( LEN(), error.error );
  t.equal( LEN(NaN), error.value );
})
