import { matchesObject } from '@utils/match'

export function hasProps(component, props) {
    return matchesObject(component.get(), props)
}