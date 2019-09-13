import { every, has } from 'lodash'

export function hasEventHandlers(component, eventHandlers) {
    return every(eventHandlers, eventHandler => has(component._handlers, eventHandler))
}