import test from 'tape';
import {TRIM} from '../src/TRIM';

test('TRIM', function(t) {
  t.plan(5);

  t.is(TRIM('   foo   '), 'foo')
  t.is(TRIM('   foo bar   '), 'foo bar')
  t.is(TRIM('foo bar   '), 'foo bar')
  t.is(TRIM('   foo'), 'foo')
  t.is(TRIM('foo        bar   '), 'foo        bar')

});
