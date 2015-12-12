import test from 'tape';
import {ISURL} from '../src/ISURL';

test('ISURL', function(t) {
  t.plan(8)
  t.equal( ISURL( 'http://google.com' ), true );
  t.equal( ISURL( 'http://www.google.com' ), true );
  t.equal( ISURL( 'https://www.google.com?q=test' ), true );
  t.equal( ISURL( 'http://localhost:3000/foo?test=1' ), true );
  t.equal( ISURL( 'https://localhost:3000/foo?test=1' ), true );
  t.equal( ISURL( 'https:/localhost:3000/foo?test=1' ), false );
  t.equal( ISURL( 'www.google.com' ), true );
  t.equal( ISURL( 'www<google.com' ), false );
});
