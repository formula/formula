import test from 'tape';
import {some} from '../src/some';

test('some', function(t) {
  t.plan(3)
  t.is(some(1, [1,2,3]), true)
  t.is(some(3, [1,2,3]), true)
  t.is(some('3', [1,2,'3']), true)
})
