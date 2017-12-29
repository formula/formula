import snakecase from '../fn/snakecase';
import test from 'tape';
import error from '../fn/error';

test('snakecase', function(t) {
  t.plan(2)
  t.equal( snakecase('formulaRocks'), 'formula_rocks', 'Should still be formula_rocks');
  t.equal( snakecase('formulaRocksTheHouse'), 'formula_rocks_the_house', 'Should still be formula_rocks_the_house');
});
