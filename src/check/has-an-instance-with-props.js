import { hasAnInstanceMatching } from './has-an-instance-matching'
import { hasProps } from './has-props'

export function hasAnInstanceWithProps(Component, props) {
    return hasAnInstanceMatching(
        Component,
        component => hasProps(component, props)
    )
}