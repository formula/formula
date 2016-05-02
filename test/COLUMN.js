import {COLUMN} from '../src/COLUMN';
import {REF} from '../src/REF';
import error from '../src/ERROR';
import test from 'tape';

test('COLUMN', function(t) {
  t.plan(2);
  t.equal( COLUMN(REF(0)), 1 );
  t.equal( COLUMN(NaN), error.value );
})
