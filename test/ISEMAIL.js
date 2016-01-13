import {ISEMAIL} from '../src/ISEMAIL';
import test from 'tape';

test('ISEMAIL', function(t) {
  t.plan(9)
  t.equal( ISEMAIL(undefined), false );
  t.equal( ISEMAIL(null), false );
  t.equal( ISEMAIL(''), false );
  t.equal( ISEMAIL([]), false );
  t.equal( ISEMAIL(new Date()), false );
  t.equal( ISEMAIL(1), false );
  t.equal( ISEMAIL('a@b.com'), true );
  t.equal( ISEMAIL('a+1@b.com'), true );
  t.equal( ISEMAIL('a.1@b.com'), true );
});
