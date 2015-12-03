import test from 'tape';
import {IN} from '../src/IN';

test('IN', function(t) {
  t.plan(5)
  t.is(IN(1, [1,2,3]), true)
  t.is(IN(2, [1,2,3]), true)
  t.is(IN(3, [1,2,3]), true)
  t.is(IN(0, [1,2,3]), false)
  t.is(IN('3', [1,2,'3']), true)
})
