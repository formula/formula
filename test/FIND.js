import {FIND} from '../src/FIND';
import error from '../src/ERROR';
import test from 'tape';

test('FIND', function(t) {
  t.plan(4);
  t.equal( FIND('a', 'fooabar'), 4 );
  t.equal( FIND('bar', 'fooabar'), 5 );
  t.equal( FIND('z', 'fooabar'), error.value );
  t.equal( FIND('foo', 'fooabar'), 1 );
})
