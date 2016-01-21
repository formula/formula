import test from 'tape';
import {IFERROR} from '../src/IFERROR';
import error from '../src/ERROR';

test('IFERROR', function(t) {
  t.plan(6)
  t.is(IFERROR(error.na, 'Yes'), 'Yes')
  t.is(IFERROR(error.value, 'Yes'), 'Yes')
  t.is(IFERROR(error.nil, 'Yes'), 'Yes')
  t.is(IFERROR(error.missing, 'Yes'), 'Yes')
  t.is(IFERROR('True', 'Yes'), 'True')
  t.is(IFERROR(false, 'Yes'), false)
})
