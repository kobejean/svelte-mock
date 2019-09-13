import { hasInstanceMatching } from './has-instance-matching'
import { hasProps } from './has-props'

export function hasInstanceWithProps(Component, props) {
    return hasInstanceMatching(
        Component,
        component => hasProps(component, props)
    )
}

// Aliases
export const hasAnInstanceWithProps = hasInstanceWithProps