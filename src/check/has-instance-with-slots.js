import { hasInstanceMatching } from './has-instance-matching'
import { hasSlots } from './has-slots'

export function hasInstanceWithSlots(Component, slots) {
    return hasInstanceMatching(
        Component,
        component => hasSlots(component, slots)
    )
}

// Aliases
export const hasAnInstanceWithSlots = hasInstanceWithSlots