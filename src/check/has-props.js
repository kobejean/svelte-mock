import { every, get } from 'lodash'

export function hasProps(component, props) {
    const componentProps = component.get()
    const matchesProp = (value, key) => get(componentProps, key) === value
    return every(props, matchesProp)
}