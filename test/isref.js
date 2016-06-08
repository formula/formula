import test from 'tape';
import {ref} from '../src/ref';
import {isref} from '../src/isref';

test('ISREF', function(t) {
  t.plan(5)
  t.equal( isref( ref(0, 1) ), true );
  t.equal( isref( ref(1) ), true );
  t.equal( isref( [] ), false );
  t.equal( isref( '' ), false );
  t.equal( isref( {} ), false );
});
