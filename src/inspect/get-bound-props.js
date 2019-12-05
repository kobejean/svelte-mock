import { isSvelteVersion } from '@utils/version';
import { get, transform, has } from 'lodash';
import { getProps } from './get-props';

// V2
const bindPropRegExpV2 = /childState\.(.+?);/gm;
const getBoundPropsV2 = (component) => {
  const props = getProps(component);
  const bindString = get(component, '_bind', '').toString();
  if (bindString === '') return {};
  const matches = {};
  // get matches
  let match = bindPropRegExpV2.exec(bindString);
  while (match != null) {
    const capture = match[1];
    matches[capture] = get(props, [capture]);
    match = bindPropRegExpV2.exec(bindString);
  }
  return matches;
};

// V3

const getBoundPropsV3 = (component) => {
  const props = get(component, ['$$', 'props'], {});
  const bound = transform(props, (result, index, prop) => {
    if (has(component, ['$$', 'bound', index])) {
      result[prop] = get(component, ['$$', 'ctx', index]);
    }
  }, {});
  console.log(bound, component, component.firstname);
  return bound;
};

export const getBoundProps = isSvelteVersion('3.0.0', '<') ?
  getBoundPropsV2 : getBoundPropsV3;
