import roundup from '../src/roundup';
import error from '../src/error';
import test from 'tape';

test('roundup', function(t) {
  t.plan(4)
  t.equal( roundup(3.2,0), 4 );
  t.equal( roundup(76.9,0), 77 );
  t.equal( roundup(3.14159, 3), 3.142 );
  t.equal( roundup(-3.14159, 1), -3.2 );
})
