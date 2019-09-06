import { get, pickBy } from 'lodash'

export function getBoundProps(component) {
  const props = component.get()
  const bindString = get(component, '_bind', '').toString()
  if (bindString === '') return {}
  return pickBy(
    props,
    (value, prop) => bindString.includes('changed.' + prop)
  )
}
