import { matchesObject } from '@utils/match'

export function hasSlots(component, slots = ['default']) {
    return matchesObject(component._slotted, slots)
}