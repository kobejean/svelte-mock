import { hasAnInstanceMatching } from './has-an-instance-matching'
import { hasNamedSlots } from './has-named-slots'

export function hasAnInstanceWithNamedSlots(Component, namedSlots) {
    return hasAnInstanceMatching(
        Component,
        component => hasNamedSlots(component, namedSlots)
    )
}