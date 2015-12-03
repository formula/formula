import test from 'tape';
import {CELL} from '../src/CELL';


test('CELL', function(t) {
  t.plan(3);

  var c = CELL(0);
  t.equal( c.topLeft(), 0 );
  c = CELL(100);
  t.equal( c.topLeft(), 100 );
  t.throws( function(){  CELL('foo') } );

});
