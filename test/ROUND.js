import {ROUND} from '../src/ROUND';
import test from 'tape';

test('ROUND', function(t) {
  t.plan(1)
  t.equal( ROUND(14.20223234, 2), 14.20 );
})
