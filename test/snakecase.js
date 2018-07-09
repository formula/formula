import snakecase from "../src/snakecase";
import test from "tape";
import { ERRORTYPES as error } from "../src/error";

test("snakecase", function(t) {
  t.plan(3);
  t.equal(
    snakecase("formulaRocks"),
    "formula_rocks",
    "Should still be formula_rocks"
  );
  t.equal(
    snakecase("formulaRocksTheHouse"),
    "formula_rocks_the_house",
    "Should still be formula_rocks_the_house"
  );
  t.equal(
    snakecase("FormulaRocksTheHouse"),
    "formula_rocks_the_house",
    "Should still be formula_rocks_the_house"
  );
});
