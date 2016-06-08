import {rept} from '../src/rept';
import test from 'tape';

test('REPT : should repeat a text pattern n times', function(t) {
  t.plan(2)
  t.equal( rept('-*', 3), '-*-*-*' );
  t.equal( rept('repeat ', 5), 'repeat repeat repeat repeat repeat ' );
});
