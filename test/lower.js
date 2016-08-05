import test from 'tape';
import {lower} from '../src/lower';

test('lower', function(t) {

  t.plan(3);
  t.equal( lower('FOO'), 'foo' );
  t.equal( lower('Foo'), 'foo' );
  t.equal( lower('FoO'), 'foo' );

});
