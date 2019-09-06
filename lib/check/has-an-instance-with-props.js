import { every, get } from 'lodash'
import { hasAnInstanceMatching } from './has-an-instance-matching'

export function hasAnInstanceWithProps(Component, props) {
    return hasAnInstanceMatching(
        Component,
        component => isComponentMatchingProps(component, props)
    )
}

export function isComponentMatchingProps(component, props) {
    const componentProps = component.get()
    const matchesProp = (value, key) => get(componentProps, key) === value
    return every(props, matchesProp)
}