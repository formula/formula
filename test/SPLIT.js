import test from 'tape';
import {SPLIT} from '../src/SPLIT';

test('SPLIT', function(t) {
  t.plan(1);
  t.equal(SPLIT("1,2,3", ",").length, 3)
})
