import { hasInstanceMatching } from './has-instance-matching';
import { hasEventHandlers } from './has-event-handlers';

export function hasInstanceWithEventHandlers(Component, eventHandlers) {
  return hasInstanceMatching(
      Component,
      (component) => hasEventHandlers(component, eventHandlers),
  );
}

// Aliases
export const hasAnInstanceWithEventHandlers = hasInstanceWithEventHandlers;
