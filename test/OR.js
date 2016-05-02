import test from 'tape';
import {OR} from '../src/OR';

test('it should be this or that', function(t) {
  t.plan(6);
  t.equal( OR( true, true), true);
  t.equal( OR( true, false), true);
  t.equal( OR( 1, 0), true);
  t.equal( OR( false, true), true);
  t.equal( OR( false, false, true), true);
  t.equal( OR( false, false ), false);
});
