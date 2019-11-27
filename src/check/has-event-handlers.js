import { matchesObject } from '@utils/match';
import { getEventHandlers } from '@inspect/get-event-handlers';

export function hasEventHandlers(component, eventHandlers) {
  return matchesObject(getEventHandlers(component), eventHandlers);
}
