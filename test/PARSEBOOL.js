import test from 'tape';
import {PARSEBOOL} from '../src/PARSEBOOL';
import error from '../src/ERROR';

test('PARSEBOOL', function(t) {
  t.plan(13);
  t.is(PARSEBOOL(true), true)
  t.is(PARSEBOOL(false), false)
  t.is(PARSEBOOL('TRUE'), true)
  t.is(PARSEBOOL('FALSE'), false)
  t.is(PARSEBOOL('true'), true)
  t.is(PARSEBOOL('false'), false)
  t.is(PARSEBOOL('TrUe'), true)
  t.is(PARSEBOOL('FalSe'), false)
  t.is(PARSEBOOL(1), true)
  t.is(PARSEBOOL(200), true)
  t.is(PARSEBOOL(-200), true)
  t.is(PARSEBOOL(0), false)
  t.is(PARSEBOOL(new Date()), error.value)
});
