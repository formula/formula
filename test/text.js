import error from '../src/error'
import test from 'tape'
import text from '../src/text';

test('text', function(t) {
  t.plan(14);
  // currency
  t.equal( text(0, "$#,###"), "$" );
  t.equal( text(0, "$#,##0"), "$0" );
  t.equal( text(1000000, "$#,###.00"), "$1,000,000.00" );

  // negative values
  t.equal( text(1000000, "#,##0.00_);(#,##0.00)"), "1,000,000.00 " );
  t.equal( text(-1000000, "#,##0.00_);(#,##0.00)"), "(1,000,000.00)" );

  // dates
  t.equal( text(36526, "mm/dd/yyyy"), "01/01/2000" );
  t.equal( text(36526, "mm/dd/yy"), "01/01/00" );
  t.equal( text(36526, "mmmm d, yyyy"), "January 1, 2000" );

  // time
  t.equal( text(1.5, "[h]"), "36" );
  t.equal( text(0.5, "hh:mm:ss am/pm"), "12:00:00 pm" );
  t.equal( text(0.0, "hh:mm:ss am/pm"), "12:00:00 am" );
  t.equal( text(0.508472222222222, "hh:mm:ss am/pm"), "12:12:12 pm" );
  t.equal( text(0.008472222222222, "hh:mm:ss AM/PM"), "12:12:12 AM" );
  t.equal( text(0.807, "hh:mm:ss AM/PM"), "07:22:05 PM" );

});
