import { matchesObject } from '@utils/match'
import { getProps } from '@inspect/get-props'

export function hasProps(component, props) {
    return matchesObject(getProps(component), props)
}
