import test from 'tape';
import {IF} from '../src/IF';

test('IF', function(t) {
  t.plan(5)
  t.is(IF(true, 'Yes', 'No'), 'Yes')
  t.is(IF('true', 'Yes', 'No'), 'Yes')
  t.is(IF('TRUE', 'Yes', 'No'), 'Yes')
  t.is(IF('True', 'Yes', 'No'), 'Yes')
  t.is(IF(false, 'Yes', 'No'), 'No')
})
