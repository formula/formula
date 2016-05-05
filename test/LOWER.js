import test from 'tape';
import {LOWER} from '../src/LOWER';

test('LOWER : Convert string to lower case', function(t) {

  t.plan(3);
  t.equal( LOWER('FOO'), 'foo' );
  t.equal( LOWER('Foo'), 'foo' );
  t.equal( LOWER('FoO'), 'foo' );

});
