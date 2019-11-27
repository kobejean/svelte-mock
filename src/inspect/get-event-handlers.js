import { isSvelteVersion } from '@utils/version';

const getEventHandlersV2 = (component) => component._handlers;
const getEventHandlersV3 = (component) => component.$$.callbacks;

export const getEventHandlers = isSvelteVersion('3.0.0', '<') ?
  getEventHandlersV2 : getEventHandlersV3;
