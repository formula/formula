import {find} from '../src/find';
import error from '../src/error';
import test from 'tape';

test('find', function(t) {
  t.plan(4);
  t.equal( find('a', 'fooabar'), 4 );
  t.equal( find('bar', 'fooabar'), 5 );
  t.equal( find('z', 'fooabar'), error.value );
  t.equal( find('foo', 'fooabar'), 1 );
})
