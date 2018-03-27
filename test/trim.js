import test from 'tape';
import trim from '../src/trim';

test('trim', function(t) {
  t.plan(5);

  t.is(trim('   foo   '), 'foo')
  t.is(trim('   foo bar   '), 'foo bar')
  t.is(trim('foo bar   '), 'foo bar')
  t.is(trim('   foo'), 'foo')
  t.is(trim('foo        bar   '), 'foo        bar')

});
