import column from '../fn/column';
import ref from '../fn/ref';
import error from '../fn/error';
import test from 'tape';

test('column', function(t) {
  t.plan(2);
  t.equal( column(ref(0)), 1 );
  t.equal( column(NaN), error.value );
})
