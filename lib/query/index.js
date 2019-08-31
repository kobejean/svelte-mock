const { reduce } = require('lodash')
const { getInstanceByProps } = require('./get-instance-by-props')

const defaultQueries = {
  getInstanceByProps
}

function getQueriesForComponent(Component, queries = defaultQueries) {
  return reduce(queries, function (helpers, query, key) {
    helpers[key] = query.bind(null, Component)
    return helpers
  }, {})
}

Object.assign(exports, defaultQueries)
exports.getQueriesForComponent = getQueriesForComponent
