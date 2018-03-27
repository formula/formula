import test from 'tape';
import ifblank from '../src/ifblank';

test('ifblank', function(t) {
  t.plan(5)
  t.is(ifblank(undefined, 'Yes'), 'Yes')
  t.is(ifblank(null, 'Yes'), 'Yes')
  t.is(ifblank('', 'Yes'), '')
  t.is(ifblank('True', 'Yes'), 'True')
  t.is(ifblank(false, 'Yes'), false)
})
