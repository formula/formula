import {SEARCH} from '../src/SEARCH';
import error from '../src/ERROR';
import test from 'tape';

test('SEARCH', function(t) {
  t.plan(4);
  t.equal( SEARCH('a', 'fooabar'), 4 );
  t.equal( SEARCH('bar', 'fooabar'), 5 );
  t.equal( SEARCH('z', 'fooabar'), error.value );
  t.equal( SEARCH('foo', 'fooabar'), 1 );
})
