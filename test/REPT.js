import {REPT} from '../src/REPT';
import test from 'tape';

test('REPT : should repeat a text pattern n times', function(t) {
  t.plan(2)
  t.equal( REPT('-*', 3), '-*-*-*' );
  t.equal( REPT('repeat ', 5), 'repeat repeat repeat repeat repeat ' );
});
