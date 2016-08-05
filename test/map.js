// FIXME: Write tests for MATCH
import test from 'tape';
import {map} from '../src/map';

test('map', function(t) {
  t.plan(1);
  t.deepEqual( map([1, 2, 3], (d) => d*d), [1, 4, 9] );
});
