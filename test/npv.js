import test from 'tape'
import {npv} from '../src/npv'

test('npv', (t) => {
  t.plan(1)
  t.equal( npv( 0.1, -10000, 3000, 4200, 6800 ), 1188.4434123352207)
})
