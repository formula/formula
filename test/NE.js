import test from 'tape'
import {NE} from '../src/NE'

test('NE : is should test for not equal', function(t) {
  t.plan(3);
  t.equal( NE(1, 0), true);
  t.equal( NE(1, 1), false);
  t.equal( NE('FOO', 'foo'), false);
});
