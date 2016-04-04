import error from '../src/ERROR'
import test from 'tape'
import {TEXT} from '../src/TEXT';

test('TEXT', function(t) {
  t.plan(6);
  t.equal( TEXT(1000000, "$#,###.00"), "$1,000,000.00" );
  t.equal( TEXT(1000000, "#,##0.00_);(#,##0.00)"), "1,000,000.00 " );
  t.equal( TEXT(-1000000, "#,##0.00_);(#,##0.00)"), "(1,000,000.00)" );
  t.equal( TEXT(36526, "mm/dd/yyyy"), "01/01/2000" );
  t.equal( TEXT(36526, "mm/dd/yy"), "01/01/00" );
  t.equal( TEXT(36526, "mmmm d, yyyy"), "January 1, 2000" );

});
