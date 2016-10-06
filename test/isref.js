import test from 'tape';
import ref from '../fn/ref';
import isref from '../fn/isref';

test('isref', function(t) {
  t.plan(5)
  t.equal( isref( ref(0, 1) ), true );
  t.equal( isref( ref(1) ), true );
  t.equal( isref( [] ), false );
  t.equal( isref( '' ), false );
  t.equal( isref( {} ), false );
});
