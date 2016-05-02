import test from 'tape';
import {REF} from '../src/REF';
import {ISREF} from '../src/ISREF';

test('ISREF', function(t) {
  t.plan(5)
  t.equal( ISREF( REF(0, 1) ), true );
  t.equal( ISREF( REF(1) ), true );
  t.equal( ISREF( [] ), false );
  t.equal( ISREF( '' ), false );
  t.equal( ISREF( {} ), false );
});
