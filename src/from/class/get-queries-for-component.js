import { transform } from 'lodash';
import { getInstanceByBoundProps } from './get-instance-by-bound-props';
import { getInstanceByEventHandlers } from './get-instance-by-event-handlers';
import { getInstanceByProps } from './get-instance-by-props';
import { getInstanceBySlots } from './get-instance-by-slots';


const defaultQueries = {
  getInstanceByBoundProps,
  getInstanceByEventHandlers,
  getInstanceByProps,
  getInstanceBySlots,
};

export function getQueriesForComponent(Component, queries = defaultQueries) {
  return transform(queries, (helpers, query, key) => {
    helpers[key] = query.bind(null, Component);
  }, {});
}
