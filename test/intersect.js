import test from "tape";
import intersect from "../src/intersect";

test("intersect", t => {
  t.plan(2);
  t.equal(
    intersect(
      { top: 100, bottom: 200, left: 100, right: 200 },
      { top: 100, bottom: 200, left: 150, right: 250 }
    ),
    true
  );
  t.equal(
    intersect(
      { top: 100, bottom: 200, left: 100, right: 200 },
      { top: 300, bottom: 400, left: 250, right: 350 }
    ),
    false
  );
});
