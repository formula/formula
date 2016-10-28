import test from 'tape'
import error from '../src/error'
import pluck from '../src/pluck'

test('pluck', (t) => {
  t.plan(1)
  t.deepEqual( pluck('name', [{ name: 'John'}, { name: 'Peter'}]), ['John', 'Peter'])
})
