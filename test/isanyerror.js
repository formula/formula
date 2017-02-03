import test from 'tape'
import error from '../src/error'
import isanyerror from '../src/isanyerror'

test('isanyerror', (t) => {
  t.plan(2)
  t.equal( isanyerror( error.value, 1, 0 ), true)
  t.equal( isanyerror( 1, 0, error.value ), true)
  t.equal( isanyerror( true, 1, '', new Date() ), false)
})
