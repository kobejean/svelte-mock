import { hasAnInstanceMatching } from './has-an-instance-matching'
import { hasBoundProps } from './has-bound-props'

export function hasAnInstanceWithBoundProps(Component, props) {
    return hasAnInstanceMatching(
        Component,
        component => hasBoundProps(component, props)
    )
}