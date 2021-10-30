import workday from "../src/workday";
import test from "tape";

test("workday", function(t) {
  t.plan(1);
  t.equal(workday('10/1/2008', 151), 39933 /*"4/30/2009"*/, "Should be 4/30/2009");
});
