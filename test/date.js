import {date} from '../src/date';
import test from 'tape';

test('date', function(t) {
  t.plan(1)
  t.equal( date(2008,1,1), 39448 );
});
