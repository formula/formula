import test from 'tape';
import ifempty from '../fn/ifempty';

test('ifempty', function(t) {
  t.plan(5)
  t.is(ifempty(undefined, 'Yes'), 'Yes')
  t.is(ifempty(null, 'Yes'), 'Yes')
  t.is(ifempty('', 'Yes'), 'Yes')
  t.is(ifempty('True', 'Yes'), 'True')
  t.is(ifempty(false, 'Yes'), false)
})
