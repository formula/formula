import test from 'tape'
import { ERRORTYPES as error } from '../src/error'
import decodejwt from '../src/decodejwt'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTc3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.9NcYjGtFLdiCWZPxx_P8r2a3ZSFteWx6hloXjHwZ2PY'

test('decodejwt', (t) => {
  t.plan(1)
  t.deepEqual( decodejwt( token ), { sub: '1234577890', name: 'John Doe', admin: true })
})
