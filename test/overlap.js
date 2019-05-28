import test from "tape";
import overlap from "../src/overlap";

test("overlap", t => {
  t.plan(3);
  t.equal(
    overlap(
      { top: 100, bottom: 180, left: 150, right: 199 },
      { top: 100, bottom: 200, left: 100, right: 200 }
    ),
    true
  );
  t.equal(
    overlap(
      { top: 100, bottom: 200, left: 100, right: 200 },
      { top: 100, bottom: 200, left: 150, right: 250 }
    ),
    false
  );
  t.equal(
    overlap(
      { top: 100, bottom: 200, left: 100, right: 200 },
      { top: 300, bottom: 400, left: 250, right: 350 }
    ),
    false
  );
});
