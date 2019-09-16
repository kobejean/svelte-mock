import { get } from 'lodash'

const bindPropRegExp = /childState\.(.+?);/gm

export function getBoundProps(component) {
  const props = component.get()
  const bindString = get(component, '_bind', '').toString()
  if (bindString === '') return {}
  const matches = {}
  // get matches
  let match = bindPropRegExp.exec(bindString)
  while (match != null) {
    const capture = match[1]
    matches[capture] = get(props, [capture])
    match = bindPropRegExp.exec(bindString)
  }
  return matches
}
