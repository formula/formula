import test from 'tape';
import {IFNA} from '../src/IFNA';
import error from '../src/ERROR';

test('IFNA', function(t) {
  t.plan(3)
  t.is(IFNA(error.na, 'Yes'), 'Yes')
  t.is(IFNA('True', 'Yes'), 'True')
  t.is(IFNA(false, 'Yes'), false)
})
