import error from '../src/ERROR'
import test from 'tape'
import {TAU} from '../src/TAU';

test('TAU', function(t) {
  t.plan(1);
  t.equal( TAU(), 6.28318530717958, 'Should be 2PI' );
});
