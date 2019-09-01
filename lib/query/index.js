import { reduce, assign } from 'lodash'
import { getInstanceByProps } from './get-instance-by-props'

export function getQueriesForComponent(Component, queries = defaultQueries) {
  return reduce(queries, function (helpers, query, key) {
    helpers[key] = query.bind(null, Component)
    return helpers
  }, {})
}

const defaultQueries = {
  getInstanceByProps
}

assign(exports, defaultQueries)
