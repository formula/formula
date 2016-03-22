import test from 'tape';
import {MAX} from '../src/MAX';

test('MAX : Should identify largest value in set', function(t) {


  t.plan(4);
  t.equal( MAX(2, 4), 4 );
  t.equal( MAX(200, 400, 700), 700 );
  t.equal( MAX([200, 400], 700), 700 );
  t.equal( MAX([200], [400], [700]), 700 );

});
