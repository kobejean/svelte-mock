import { every, get } from 'lodash'
import { hasAnInstanceMatching } from './has-an-instance-matching'
import { getBoundProps } from '@utils/bind'

export function hasAnInstanceWithBoundProps(Component, props) {
    return hasAnInstanceMatching(
        Component,
        component => isComponentMatchingBoundProps(component, props)
    )
}

export function isComponentMatchingBoundProps(component, boundProps) {
    const componentBoundProps = getBoundProps(component)
    const matchesProp = (value, key) => get(componentBoundProps, key) === value
    return every(boundProps, matchesProp)
}