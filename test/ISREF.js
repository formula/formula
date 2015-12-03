import test from 'tape';
import {RANGE} from '../src/RANGE';
import {CELL} from '../src/CELL';
import {ISREF} from '../src/ISREF';

test('ISREF', function(t) {
  t.plan(5)
  t.equal( ISREF( RANGE(0, 1) ), true );
  t.equal( ISREF( CELL(1) ), true );
  t.equal( ISREF( [] ), false );
  t.equal( ISREF( '' ), false );
  t.equal( ISREF( {} ), false );
});
