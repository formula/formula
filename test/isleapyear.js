import test from 'tape'
import error from '../src/error'
import {isleapyear} from '../src/isleapyear'

test('isleapyear', (t) => {
  t.plan(3)
  t.equal( isleapyear( "1/1/2000"), true)
  t.equal( isleapyear( "3/11/1998"), false)
  t.equal( isleapyear( "9/20/2012"), true)
})
