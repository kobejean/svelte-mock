import { every, has } from 'lodash'

export function hasSlots(component, slots = ['default']) {
    return every(slots, slot => has(component._slotted, slot))
}