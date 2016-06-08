import {isblank} from '../src/isblank';
import test from 'tape';

test('ISBLANK', function(t) {
  t.plan(6)
  t.equal( isblank(undefined), true );
  t.equal( isblank(null), true );
  t.equal( isblank(''), false );
  t.equal( isblank([]), false );
  t.equal( isblank(new date()), false );
  t.equal( isblank(1), false );
});
