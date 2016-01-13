import {SELECT} from '../src/SELECT';
import error from '../src/ERROR';
import test from 'tape';

test('SELECT', function(t) {
  t.plan(3);
  t.deepEqual( SELECT('a', { a: 1, b: 2}), { a: 1} );
  t.deepEqual( SELECT('a,b',
  [
    { a: 1, b: 2, c: 2},
    { a: 2, b: 3, d: 2}]),
    [ { a: 1, b:2 },
      { a: 2, b: 3  }
    ]
  );

  t.deepEqual( SELECT('a,c',
  [
    { a: 1, b: 2, c: 2},
    { a: 2, b: 3, d: 2}]),
    [ { a: 1, c:2 },
      { a: 2, c: undefined }
    ]
  );
})
