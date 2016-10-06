import isemail from '../fn/isemail';
import test from 'tape';

test('isemail', function(t) {
  t.plan(9)
  t.equal( isemail(undefined), false );
  t.equal( isemail(null), false );
  t.equal( isemail(''), false );
  t.equal( isemail([]), false );
  t.equal( isemail(new Date()), false );
  t.equal( isemail(1), false );
  t.equal( isemail('a@b.com'), true );
  t.equal( isemail('a+1@b.com'), true );
  t.equal( isemail('a.1@b.com'), true );
});
