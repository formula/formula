import test from 'tape';
import split from '../fn/split';

test('split', function(t) {
  t.plan(1);
  t.equal(split("1,2,3", ",").length, 3)
})
