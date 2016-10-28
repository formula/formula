import test from 'tape'
import error from '../src/error'

test('error', (t) => {
  t.plan(11)
  t.equal( error.nil.toString(), '#NULL!')
  t.equal( error.div0.toString(), '#DIV/0!')
  t.equal( error.value.toString(), '#VALUE!')
  t.equal( error.ref.toString(), '#REF!')
  t.equal( error.name.toString(), '#NAME?')
  t.equal( error.num.toString(), '#NUM!')
  t.equal( error.na.toString(), '#N/A!')
  t.equal( error.error.toString(), '#ERROR!')
  t.equal( error.data.toString(), '#GETTING_DATA!')
  t.equal( error.missing.toString(), '#MISSING!')
  t.equal( error.unknown.toString(), '#UNKNOWN!')
})
