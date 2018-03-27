import test from 'tape';
import parsebool from '../src/parsebool';
import { ERRORTYPES as error } from '../src/error';

test('parsebool', function(t) {
  t.plan(13);
  t.is(parsebool(true), true)
  t.is(parsebool(false), false)
  t.is(parsebool('TRUE'), true)
  t.is(parsebool('FALSE'), false)
  t.is(parsebool('true'), true)
  t.is(parsebool('false'), false)
  t.is(parsebool('TrUe'), true)
  t.is(parsebool('FalSe'), false)
  t.is(parsebool(1), true)
  t.is(parsebool(200), true)
  t.is(parsebool(-200), true)
  t.is(parsebool(0), false)
  t.is(parsebool(new Date()), error.value)
});
