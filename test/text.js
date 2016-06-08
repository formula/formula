import error from '../src/error'
import test from 'tape'
import {text} from '../src/text';

test('TEXT', function(t) {
  t.plan(8);
  t.equal( text(0, "$#,###"), "$" );
  t.equal( text(0, "$#,##0"), "$0" );
  t.equal( text(1000000, "$#,###.00"), "$1,000,000.00" );
  t.equal( text(1000000, "#,##0.00_);(#,##0.00)"), "1,000,000.00 " );
  t.equal( text(-1000000, "#,##0.00_);(#,##0.00)"), "(1,000,000.00)" );
  t.equal( text(36526, "mm/dd/yyyy"), "01/01/2000" );
  t.equal( text(36526, "mm/dd/yy"), "01/01/00" );
  t.equal( text(36526, "mmmm d, yyyy"), "January 1, 2000" );

});
