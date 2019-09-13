import { every, get } from 'lodash'
import { getBoundProps } from '@utils/bind'

export function hasBoundProps(component, boundProps) {
    const componentBoundProps = getBoundProps(component)
    const matchesProp = (value, key) => get(componentBoundProps, key) === value
    return every(boundProps, matchesProp)
}
