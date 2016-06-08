import {select} from '../src/select';
import error from '../src/error';
import test from 'tape';

test('SELECT', function(t) {
  t.plan(3);
  t.deepEqual( select('a', { a: 1, b: 2}), { a: 1} );
  t.deepEqual( select('a,b',
  [
    { a: 1, b: 2, c: 2},
    { a: 2, b: 3, d: 2}]),
    [ { a: 1, b:2 },
      { a: 2, b: 3  }
    ]
  );

  t.deepEqual( select('a,c',
  [
    { a: 1, b: 2, c: 2},
    { a: 2, b: 3, d: 2}]),
    [ { a: 1, c:2 },
      { a: 2, c: undefined }
    ]
  );
})
