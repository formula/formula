import test from 'tape'
import error from '../fn/error'
import isfalsy from '../fn/isfalsy'

test('isfalsy', (t) => {
  t.plan(17)

  t.equal( isfalsy( true ), false)
  t.equal( isfalsy( {} ), false)
  t.equal( isfalsy( [] ), false)
  t.equal( isfalsy( 42 ), false)
  t.equal( isfalsy( "foo" ), false)
  t.equal( isfalsy( new Date() ), false)
  t.equal( isfalsy( -42 ), false)
  t.equal( isfalsy( 3.14 ), false)
  t.equal( isfalsy( -3.14 ), false)
  t.equal( isfalsy( Infinity ), false)
  t.equal( isfalsy( -Infinity ), false)

  t.equal( isfalsy( false ), true)
  t.equal( isfalsy( 0 ), true)
  t.equal( isfalsy( '' ), true)
  t.equal( isfalsy( null ), true)
  t.equal( isfalsy( undefined ), true)
  t.equal( isfalsy( NaN ), true)

})
