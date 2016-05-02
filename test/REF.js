import test from 'tape'
import error from '../src/ERROR'
import {REF} from '../src/REF'
import {MaxCols} from '../src/CONSTANTS'

test('REF', function(t) {
  t.plan( 33 )

  var c = REF(0 )
  t.equal( c.top, 0 )
  t.equal( c.bottom, 0 )
  t.equal( c.column, 'A' )
  t.equal( c.columnIndex, 0 )
  t.equal( c.row, 1 )
  t.equal( c.rowIndex, 0 )

  t.equal( c.bottomColumn, 'A' )
  t.equal( c.bottomColumnIndex, 0 )
  t.equal( c.bottomRow, 1 )
  t.equal( c.bottomRowIndex, 0 )

  c = REF(0, () => MaxCols+1)
  t.equal( c.top, 0 )
  t.equal( c.bottom, MaxCols+1)
  t.equal( c.column, 'A' )
  t.equal( c.columnIndex, 0 )
  t.equal( c.row, 1 )

  t.equal( c.bottomColumn, 'B' )
  t.equal( c.bottomColumnIndex, 1 )
  t.equal( c.bottomRow, 2 )
  t.equal( c.bottomRowIndex, 1 )

  c = REF(5, 10)
  t.deepEqual( c.size, 6)
  t.deepEqual( c.cells, [5, 6, 7, 8, 9, 10])
  t.deepEqual( c.hit(-1), error.na)
  t.deepEqual( c.hit(4), false)
  t.deepEqual( c.hit(5), true)
  t.deepEqual( c.hit(6), true)
  t.deepEqual( c.hit(7), true)
  t.deepEqual( c.hit(8), true)
  t.deepEqual( c.hit(9), true)
  t.deepEqual( c.hit(10), true)
  t.deepEqual( c.hit(11), false)

  c = REF(0, () => (MaxCols)+1)
  t.deepEqual(c.rows, [0, 1])

  c = REF(0, () => (3*MaxCols)+1)
  t.deepEqual(c.rows, [0, 1, 2, 3])

  c = REF('foo')
  t.deepEqual( c, error.value )


})
