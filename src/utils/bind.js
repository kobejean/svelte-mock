import { get, pickBy, transform } from 'lodash'

const bindPropRegExp = /(?<=childState\.)(.*?)(?=;)/gm

export function getBoundProps(component) {
  const props = component.get()
  const bindString = get(component, '_bind', '').toString()
  if (bindString === '') return {}
  const matches = bindString.match(bindPropRegExp)
  return transform(matches, (result, match) => result[match] = props[match], {})
}
