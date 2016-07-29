import {round} from '../src/round';
import test from 'tape';

test('round', function(t) {
  t.plan(1)
  t.equal( round(14.20223234, 2), 14.20 );
})
