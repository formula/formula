import test from 'tape'
import { ERRORTYPES as error } from '../src/error'
import ref from '../src/ref'
import {MaxCols} from '../src/constants'

test('ref', function(t) {
  t.plan( 33 )

  var c = ref(0)
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

  c = ref(0, () => MaxCols+1)
  t.equal( c.top, 0 )
  t.equal( c.bottom, MaxCols+1)
  t.equal( c.column, 'A' )
  t.equal( c.columnIndex, 0 )
  t.equal( c.row, 1 )

  t.equal( c.bottomColumn, 'B' )
  t.equal( c.bottomColumnIndex, 1 )
  t.equal( c.bottomRow, 2 )
  t.equal( c.bottomRowIndex, 1 )

  c = ref(5, 10)
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

  c = ref(0, () => (MaxCols)+1)
  t.deepEqual(c.rows, [0, 1])

  c = ref(0, () => (3*MaxCols)+1)
  t.deepEqual(c.rows, [0, 1, 2, 3])

  c = ref('foo')
  t.deepEqual( c, error.value )


})
