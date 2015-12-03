import test from 'tape';
import {ADDRESS} from '../src/ADDRESS';

test('ADDRESS', function(t) {

  t.plan(8);

  t.notEqual( typeof ADDRESS, 'undefined', 'Address API present');
  t.equal( ADDRESS(1, 1, 0), 'A1' );
  t.equal( ADDRESS(1, 1), '$A$1' );
  t.equal( ADDRESS(1, 1, 1), '$A$1' );
  t.equal( ADDRESS(10, 1), '$A$10');
  t.equal( ADDRESS(42, 42), '$AP$42');
  t.equal( ADDRESS(42, 42, 2), 'AP$42');
  t.equal( ADDRESS(42, 42, 3), '$AP42');

});
