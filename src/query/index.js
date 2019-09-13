import { reduce, assign } from 'lodash'
import { getInstanceByBoundProps } from './get-instance-by-bound-props'
import { getInstanceByNamedSlots } from './get-instance-by-named-slots'
import { getInstanceByProps } from './get-instance-by-props'

export function getQueriesForComponent(Component, queries = defaultQueries) {
  return reduce(queries, function (helpers, query, key) {
    helpers[key] = query.bind(null, Component)
    return helpers
  }, {})
}

const defaultQueries = {
  getInstanceByBoundProps,
  getInstanceByNamedSlots,
  getInstanceByProps
}

assign(exports, defaultQueries)
