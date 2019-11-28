import { get } from 'lodash';
import pathUtils from 'path';

export function resolvePath(path, callerDepth = 0) {
  if (path[0] === '.') {
    // relative path
    const callerPath = getCallerFilename(callerDepth + 1);
    const base = pathUtils.dirname(callerPath);
    return pathUtils.resolve(base, path);
  }
  return path;
}

export function resolveDefault(imported) {
  return get(imported, 'default', imported);
};

// private

function getCallerFilename(callerDepth = 1) {
  const stack = getStack();
  for (let i = -1; i < callerDepth; i++) {
    stack.shift();
  }
  return stack[0].getFileName();
}

function getStack() {
  // Save original Error.prepareStackTrace
  const origPrepareStackTrace = Error.prepareStackTrace;
  // Override with function that just returns `stack`
  Error.prepareStackTrace = function(_, stack) {
    return stack;
  };
  // Create a new `Error`, which automatically gets `stack`
  let stack;
  try {
    throw new Error();
  } catch (e) {
    stack = e.stack;
  }

  // Restore original `Error.prepareStackTrace`
  Error.prepareStackTrace = origPrepareStackTrace;
  // Remove superfluous function call on stack
  stack.shift(); // getStack --> Error
  return stack;
}
