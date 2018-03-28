import test from 'tape';
import address from '../src/address';

test('address', function(t) {

  t.plan(7);

  t.equal( address(1, 1, 0), 'A1' );
  t.equal( address(1, 1), '$A$1' );
  t.equal( address(1, 1, 1), '$A$1' );
  t.equal( address(10, 1), '$A$10');
  t.equal( address(42, 42), '$AP$42');
  t.equal( address(42, 42, 2), 'AP$42');
  t.equal( address(42, 42, 3), '$AP42');

});
