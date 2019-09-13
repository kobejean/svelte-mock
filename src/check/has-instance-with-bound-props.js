import { hasInstanceMatching } from './has-instance-matching'
import { hasBoundProps } from './has-bound-props'

export function hasInstanceWithBoundProps(Component, props) {
    return hasInstanceMatching(
        Component,
        component => hasBoundProps(component, props)
    )
}

// Aliases
export const hasAnInstanceWithBoundProps = hasInstanceWithBoundProps