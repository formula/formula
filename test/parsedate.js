import test from 'tape';
import {parsedate} from '../src/parsedate';
import error from '../src/error';

test('parsedate', function(t) {
  t.plan(4);
  t.deepEqual(parsedate('1/1/2000'), new Date('1/1/2000'))
  t.deepEqual(parsedate(36526), new Date('1/1/2000'))
  t.is(parsedate('foo'), error.value)
  t.is(parsedate(error.value), error.value)
});
