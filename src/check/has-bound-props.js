import { getBoundProps } from '@inspect/get-bound-props'
import { matchesObject } from '@utils/match'

export function hasBoundProps(component, boundProps) {
    return matchesObject(getBoundProps(component), boundProps)
}
