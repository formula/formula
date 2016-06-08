import test from 'tape';
import {or} from '../src/or';

test('it should be this or that', function(t) {
  t.plan(6);
  t.equal( or( true, true), true);
  t.equal( or( true, false), true);
  t.equal( or( 1, 0), true);
  t.equal( or( false, true), true);
  t.equal( or( false, false, true), true);
  t.equal( or( false, false ), false);
});
