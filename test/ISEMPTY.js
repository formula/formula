import {ISEMPTY} from '../src/ISEMPTY';
import test from 'tape';

test('ISEMPTY', function(t) {
  t.plan(6)
  t.equal( ISEMPTY(undefined), true );
  t.equal( ISEMPTY(null), true );
  t.equal( ISEMPTY(''), true );
  t.equal( ISEMPTY([]), true );
  t.equal( ISEMPTY(new Date()), false );
  t.equal( ISEMPTY(1), false );
});
