import { every, keys, get } from 'lodash'

export function isComponentMatchingProps(component, props) {
  const componentProps = component.get()
  return every(keys(props), (key) => get(componentProps, key) === get(props, key))
}
