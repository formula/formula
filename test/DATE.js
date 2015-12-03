import {DATE} from '../src/DATE';
import test from 'tape';

test('DATE', function(t) {
  t.plan(1)
  t.equal( DATE(2008,1,1), 39448 );
});
