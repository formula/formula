import test from 'tape';
import iferror from '../fn/iferror';
import error from '../fn/error';

test('iferror', function(t) {
  t.plan(6)
  t.is(iferror(error.na, 'Yes'), 'Yes')
  t.is(iferror(error.value, 'Yes'), 'Yes')
  t.is(iferror(error.nil, 'Yes'), 'Yes')
  t.is(iferror(error.missing, 'Yes'), 'Yes')
  t.is(iferror('True', 'Yes'), 'True')
  t.is(iferror(false, 'Yes'), false)
})
