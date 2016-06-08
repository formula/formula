import test from 'tape';
import {ifna} from '../src/ifna';
import error from '../src/error';

test('ifna', function(t) {
  t.plan(3)
  t.is(ifna(error.na, 'Yes'), 'Yes')
  t.is(ifna('True', 'Yes'), 'True')
  t.is(ifna(false, 'Yes'), false)
})
