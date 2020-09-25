import { getSupportedImplementation } from '@utils/version';

const getEventHandlersV2 = (component) => component._handlers;
const getEventHandlersLatest = (component) => component.$$.callbacks;

export const getEventHandlers = (() => {
  const implementations = [
    { implementation: getEventHandlersV2, supportedUntil: '3.0.0' },
    { implementation: getEventHandlersLatest },
  ];
  return getSupportedImplementation(implementations);
})();
