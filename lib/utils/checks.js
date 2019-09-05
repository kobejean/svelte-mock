import { every, some, keys, get, isEmpty } from 'lodash'
import { getBoundProps } from './bind'

function hasAnInstanceMatching(Component, matchFn) {
  return some(Component.mock.results, result => matchFn(result.value))
}

export function hasAnInstance(Component) {
  return Component.mock.results.length > 0
}

export function isComponentMatchingProps(component, props) {
  const componentProps = component.get()
  const matchesProp = (value, key) => get(componentProps, key) === value
  return every(props, matchesProp)
}

export function hasAnInstanceWithProps(Component, props) {
  return hasAnInstanceMatching(
    Component,
    component => isComponentMatchingProps(component, props)
  )
}

export function isComponentMatchingBoundProps(component, boundProps) {
  const componentBoundProps = getBoundProps(component)
  const matchesProp = (value, key) => get(componentBoundProps, key) === value
  return every(boundProps, matchesProp)
}

export function hasAnInstanceWithBoundProps(Component, props) {
  return hasAnInstanceMatching(
    Component,
    component => isComponentMatchingBoundProps(component, props)
  )
}
