import test from 'tape'
import error from '../src/error'
import istruthy from '../src/istruthy'

test('istruthy', (t) => {
  t.plan(17)
  
  t.equal( istruthy( true ), true)
  t.equal( istruthy( {} ), true)
  t.equal( istruthy( [] ), true)
  t.equal( istruthy( 42 ), true)
  t.equal( istruthy( "foo" ), true)
  t.equal( istruthy( new Date() ), true)
  t.equal( istruthy( -42 ), true)
  t.equal( istruthy( 3.14 ), true)
  t.equal( istruthy( -3.14 ), true)
  t.equal( istruthy( Infinity ), true)
  t.equal( istruthy( -Infinity ), true)

  t.equal( istruthy( false ), false)
  t.equal( istruthy( 0 ), false)
  t.equal( istruthy( '' ), false)
  t.equal( istruthy( null ), false)
  t.equal( istruthy( undefined ), false)
  t.equal( istruthy( NaN ), false)

})
