import test from 'tape';
import {IFBLANK} from '../src/IFBLANK';

test('IFBLANK', function(t) {
  t.plan(5)
  t.is(IFBLANK(undefined, 'Yes'), 'Yes')
  t.is(IFBLANK(null, 'Yes'), 'Yes')
  t.is(IFBLANK('', 'Yes'), '')
  t.is(IFBLANK('True', 'Yes'), 'True')
  t.is(IFBLANK(false, 'Yes'), false)
})
