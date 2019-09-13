import { every, has } from 'lodash'

export function hasNamedSlots(component, namedSlots) {
    const componentNamedSlots = component._slotted
    return every(namedSlots, namedSlot => has(componentNamedSlots, namedSlot))
}