import test from 'tape';
import {PROPER} from '../src/PROPER';

test('PROPER', function(t) {
  t.plan(3);

  t.is(PROPER('foo'), 'Foo')
  t.is(PROPER('foo bar'), 'Foo Bar')
  t.is(PROPER('john'), 'John')

});
