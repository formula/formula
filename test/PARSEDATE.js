import test from 'tape';
import {PARSEDATE} from '../src/PARSEDATE';
import error from '../src/ERROR';

test('PARSEDATE', function(t) {
  t.plan(4);
  t.deepEqual(PARSEDATE('1/1/2000'), new Date('1/1/2000'))
  t.deepEqual(PARSEDATE(36526), new Date('1/1/2000'))
  t.is(PARSEDATE('foo'), error.value)
  t.is(PARSEDATE(error.value), error.value)
});
