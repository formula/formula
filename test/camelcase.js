import camelcase from '../fn/camelcase';
import test from 'tape';
import error from '../fn/error';

test('camelcase', function(t) {
  t.plan(3)
  t.equal( camelcase('formula-rocks'), 'formulaRocks', 'Should still be formulaRocks');
  t.equal( camelcase('formula_rocks_the_house'), 'formulaRocksTheHouse', 'Should still be formulaRocksTheHouse');
    t.equal( camelcase('formula_rocks-the-house'), 'formulaRocksTheHouse', 'Should still be formulaRocksTheHouse');
});
