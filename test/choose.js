import error from '../src/error';
import test from 'tape';
import {choose} from '../src/choose';

test('CHOOSE', function (t) {
  t.plan(5)
  t.equal( choose(1), error.na);
  t.equal( choose(1, 'fooa'), 'fooa');
  t.equal( choose(3, 'fooa', 'foob', 'fooc'), 'fooc');
  t.equal( choose(2, 'fooa'), error.value);
  t.equal( choose(255, 'fooa'), error.value);

});
