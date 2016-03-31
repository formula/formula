import test from 'tape';
import {IFEMPTY} from '../src/IFEMPTY';

test('IFEMPTY', function(t) {
  t.plan(5)
  t.is(IFEMPTY(undefined, 'Yes'), 'Yes')
  t.is(IFEMPTY(null, 'Yes'), 'Yes')
  t.is(IFEMPTY('', 'Yes'), 'Yes')
  t.is(IFEMPTY('True', 'Yes'), 'True')
  t.is(IFEMPTY(false, 'Yes'), false)
})
