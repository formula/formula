import search from '../fn/search';
import error from '../fn/error';
import test from 'tape';

test('search', function(t) {
  t.plan(4);
  t.equal( search('a', 'fooabar'), 4 );
  t.equal( search('bar', 'fooabar'), 5 );
  t.equal( search('z', 'fooabar'), error.value );
  t.equal( search('foo', 'fooabar'), 1 );
})
