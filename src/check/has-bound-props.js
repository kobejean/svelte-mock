import { getBoundProps } from '@utils/bind'
import { matchesObject } from '@utils/match'

export function hasBoundProps(component, boundProps) {
    return matchesObject(getBoundProps(component), boundProps)
}
