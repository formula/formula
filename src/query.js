// Copyright 2015 JC Fisher
//
// A minimal query engine with a mongodb like syntax.
//
// query([{ foo: 1}, {foo: 2}], { foo: 1 })
// query([{ foo: 1}, {foo: 2}], { foo: { $ne: 1 } })
//
// Supported operators:
//  - $eq
//  - $ne
//  - $gt
//  - $gte
//  - $lt
//  - $lte
//  - $in
//  - $text

import filter from './filter';
import search from './search'
import branch from './branch'
import eq from './eq'
import ne from './ne'
import gt from './gt'
import gte from './gte'
import lt from './lt'
import lte from './lte'
import match from './match'
import and from './and'
import isobject from './isobject'

// Functions for each operator.
let filterTypes = {
  $eq: (value, filterValue) => eq(value, filterValue),
  $ne: (value, filterValue) => ne(value, filterValue),
  $gt: (value, filterValue) => gt(value, filterValue),
  $gte: (value, filterValue) => gte(value, filterValue),
  $lt: (value, filterValue) => lt(value, filterValue),
  $lte: (value, filterValue) => lte(value, filterValue),
  $in: (value, filterValue) => match(value, filterValue, 1) > 0,
  $text: (value, filterValue) => search(filterValue, value) > 0
}

// Run the filter against the table with the settings.
export default function query(table, q) {

  // Compose a list of functions to filter each field.
  let funcs = Object.keys(q).reduce(
    (acc, field) => acc.concat((row) => branch(
      isobject(q[field]),
      () => and(
        ...Object.keys(q[field]).map( (d) => {
          return filterTypes[d](row[field], q[field][d])
        })
      ),
      () => eq(row[field], q[field])
    )),
    []
  )

  // Execute the filter on the table.
  return filter(
    table,
    // map each filter function to true/false values for each row.
    ...funcs.map( filter => table.map( row => filter(row) ) )
  )
}
