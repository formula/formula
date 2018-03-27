import accrint from '../src/accrint';
import date from '../src/date';
import { ERRORTYPES as error } from '../src/error';
import test from 'tape';

test('accrint', function(t) {
  t.plan(3)
  t.equal( accrint("2/2/2012", "3/30/2012", "12/4/2013",0.1,1000,1,0,1), 183.88888888888889 );
  t.equal( accrint(date(2012,2,2),date(2012,3,20),date(2013,12,4),0.1,1000,1,0,1), 183.88888888888889 );
  t.equal( accrint('invalid'), error.value );
})
