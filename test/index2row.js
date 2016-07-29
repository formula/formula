import {index2row} from '../src/index2row';
import error from '../src/error';
import test from 'tape';

test('index2row', function(t) {
  t.plan(3)
  t.equal( index2row(0), 0, 'should be 0');
  t.equal( index2row(1), 0, 'should still be 0');
  t.equal( index2row(16385), 1, 'should be 1');
});
