import { isSvelteVersion } from '@utils/version'
import { get, pickBy, has } from 'lodash'
import { getProps } from './get-props'

// V2
const bindPropRegExpV2 = /childState\.(.+?);/gm
const getBoundPropsV2 = component => {
  const props = getProps(component)
  const bindString = get(component, '_bind', '').toString()
  if (bindString === '') return {}
  const matches = {}
  // get matches
  let match = bindPropRegExpV2.exec(bindString)
  while (match != null) {
    const capture = match[1]
    matches[capture] = get(props, [capture])
    match = bindPropRegExpV2.exec(bindString)
  }
  return matches
}

// V3

const getBoundPropsV3 = component => {
  const props = getProps(component)
  const bound = get(component, ['$$', 'bound'], {})
  return pickBy(props, (_, prop) => has(bound, prop))
}

export const getBoundProps = isSvelteVersion('3.0.0', '<') ? getBoundPropsV2 : getBoundPropsV3
