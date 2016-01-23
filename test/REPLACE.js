import {REPLACE} from '../src/REPLACE';
import test from 'tape';

test('REPLACE', function(t) {
  t.plan(2)
  t.equal( REPLACE("apples", 2, 5, "te"), "ate"  );
  t.equal( REPLACE("apples", 2, 2, "te"), "ateles"  );
});
