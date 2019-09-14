import { matchesObject } from '@utils/match'

export function hasEventHandlers(component, eventHandlers) {
    return matchesObject(component._handlers, eventHandlers)
}