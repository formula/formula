import test from 'tape';
import {ISBLANK} from '../src/ISBLANK';

test('IFBLANK', function(t) {
  t.plan(5)
  t.is(ISBLANK(undefined, 'Yes'), 'Yes')
  t.is(ISBLANK(null, 'Yes'), 'Yes')
  t.is(ISBLANK('', 'Yes'), 'Yes')
  t.is(ISBLANK('True', 'Yes'), 'True')
  t.is(ISBLANK(false, 'Yes'), false)
})
