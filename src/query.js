// Copyright 2015 JC Fisher
//
// A minimal query engine with a mongodb like syntax.
//
// query([{ foo: 1}, {foo: 2}], { foo: 1 })
// query([{ foo: 1}, {foo: 2}], { foo: { $ne: 1 } })
//
// Supported operators:
//  - $and
//  - $or
//  - $eq
//  - $ne
//  - $gt
//  - $gte
//  - $lt
//  - $lte
//  - $exists
//  - $nin
//  - $in
//  - $text

import map from './map';
import reduce from './reduce'
import keys from './keys'
import filter from './filter';
import branch from './branch'
import and from './and'
import or from './or'
import not from './not'
import eq from './eq'
import ne from './ne'
import gt from './gt'
import gte from './gte'
import lt from './lt'
import lte from './lte'
import includes from './includes'
import search from './search'
import isarray from './isarray'
import isobject from './isobject'
import istruthy from './istruthy'

// Functions for each operator.
let filterTypes = {

  $noop: () => () => false,
  $eq: (queryVal) => (row, field) => eq(row[field], queryVal),
  $ne: (queryVal) => (row, field) => ne(row[field], queryVal),
  $gt: (queryVal) => (row, field) => gt(row[field], queryVal),
  $gte: (queryVal) => (row, field) => gte(row[field], queryVal),
  $lt: (queryVal) => (row, field) => lt(row[field], queryVal),
  $lte: (queryVal) => (row, field) => lte(row[field], queryVal),
  $in: (queryVal) => (row, field) => isarray(queryVal) && includes(row[field], queryVal),
  $nin: (queryVal) => (row, field) => isarray(queryVal) && !includes(row[field], queryVal),
  $text: (queryVal) => (row, field) => search(queryVal, row[field]) > 0,
  $exists: (queryVal) => (row, field) => istruthy(queryVal) ? row.hasOwnProperty(field) : !row.hasOwnProperty(field),

  $and: (queryVal) => (row, field) => true,
  $or: (queryVal) => (row, field) => true

}

// Run the filter against the data with the settings.
export default function query(data, query) {

  let comparison = (field, op, value) => row => (filterTypes[op] || filterTypes['$noop'])(value)(row, field)

  let comparator = (list, key) => row => branch(
    isobject(list[key]),
    () => and(
      ...map( keys(list[key]), (d) => {
        return comparison( key, d, list[key][d] )(row)
      })
    ),
    () => comparison( key, '$eq', list[key])(row)
  )

  let comparisonGroup = (row, list, key, op=and) => {

    if (!isarray(list[key])) {
      throw new Error(`$${op.name} expects array!`)
    }

    return op(
      ...map(
        list[key],
        d => op( ...map( keys(d), e => comparator(d, e)(row) ))
      )
    )

  }

  let composeQuery = (list) => reduce(
    keys(list),
    (funcs, key) => funcs.concat(
      (row) =>
      branch(
        key === '$and',
        () => comparisonGroup(row, list, key, and),
        key === '$or',
        () => comparisonGroup(row, list, key, or),
        () => comparator(list, key)(row)),
      ),
      []
  )

  // Compose a list of functions to filter each field.
  let funcs = composeQuery(query)

  // Execute the filter on the data.
  return filter(
    data,
    // map each filter function to true/false values for each row.
    ...map( funcs, filter => map( data, row => filter(row) ) )
  )
}
