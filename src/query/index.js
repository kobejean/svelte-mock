import { reduce, assign } from 'lodash'
import { getInstanceByBoundProps } from './get-instance-by-bound-props'
import { getInstanceByProps } from './get-instance-by-props'
import { getInstanceBySlots } from './get-instance-by-slots'

export function getQueriesForComponent(Component, queries = defaultQueries) {
  return reduce(queries, function (helpers, query, key) {
    helpers[key] = query.bind(null, Component)
    return helpers
  }, {})
}

const defaultQueries = {
  getInstanceByBoundProps,
  getInstanceByProps,
  getInstanceBySlots,
}

assign(exports, defaultQueries)
