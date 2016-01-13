import {ISBLANK} from '../src/ISBLANK';
import test from 'tape';

test('ISBLANK', function(t) {
  t.plan(6)
  t.equal( ISBLANK(undefined), true );
  t.equal( ISBLANK(null), true );
  t.equal( ISBLANK(''), false );
  t.equal( ISBLANK([]), false );
  t.equal( ISBLANK(new Date()), false );
  t.equal( ISBLANK(1), false );
});
