import test from 'tape';
import {OR} from '../src/OR';

test('it should be this or that', function(t) {
  t.plan(5);
  t.equal( OR( true, true), true);
  t.equal( OR( true, false), true);
  t.equal( OR( false, true), true);
  t.equal( OR( false, false, true), true);
  t.equal( OR( false, false ), false);
});
