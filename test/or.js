import test from 'tape';
import or from '../src/or';

test('or', function(t) {
  t.plan(10);
  t.equal( or( true, true), true);
  t.equal( or( true, false), true);
  t.equal( or( 1, 0), true);
  t.equal( or( false, true), true);
  t.equal( or( false, false, true), true);
  t.equal( or( false, false ), false);

  t.equal( or( () => true, () => true), true);
  t.equal( or( () => true, () => false), true);
  t.equal( or( () => false, () => true), true);
  t.equal( or( () => false, () => false), false);

});
