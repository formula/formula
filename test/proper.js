import test from 'tape';
import {proper} from '../src/proper';

test('PROPER', function(t) {
  t.plan(3);

  t.is(proper('foo'), 'Foo')
  t.is(proper('foo bar'), 'Foo Bar')
  t.is(proper('john'), 'John')

});
