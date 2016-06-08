import test from 'tape';
import {iferror} from '../src/iferror';
import error from '../src/error';

test('IFERROR', function(t) {
  t.plan(6)
  t.is(iferror(error.na, 'Yes'), 'Yes')
  t.is(iferror(error.value, 'Yes'), 'Yes')
  t.is(iferror(error.nil, 'Yes'), 'Yes')
  t.is(iferror(error.missing, 'Yes'), 'Yes')
  t.is(iferror('True', 'Yes'), 'True')
  t.is(iferror(false, 'Yes'), false)
})
