import {ROUNDUP} from '../src/ROUNDUP';
import error from '../src/ERROR';
import test from 'tape';

test('ROUNDUP', function(t) {
  t.plan(4)
  t.equal( ROUNDUP(3.2,0), 4 );
  t.equal( ROUNDUP(76.9,0), 77 );
  t.equal( ROUNDUP(3.14159, 3), 3.142 );
  t.equal( ROUNDUP(-3.14159, 1), -3.2 );
})
