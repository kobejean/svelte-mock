import { assign } from 'lodash'
import { makeComponent } from './compile'
import expect from './expect'
import { getQueriesForComponent } from './query'

// Pre-compile the default component to save performance
const DefaultMockComponent = makeComponent('', 'MockComponent')

export function makeMockComponentConstructor(imp = '', name = 'MockComponent') {
  const useDefault = imp === '' && name === 'MockComponent'

  let MockComponent;
  if (useDefault) {
    MockComponent = DefaultMockComponent
  } else if (typeof imp === 'string') {
    MockComponent = makeComponent(imp, name)
  } else {
    MockComponent = imp
  }

  return (options) => new MockComponent(options)
}

export function mockImplementation(Component, imp, name) {
  const constructor = makeMockComponentConstructor(imp, name)
  Component.mockImplementation(constructor)
  assign(Component, getQueriesForComponent(Component))
  return Component
}

export const extensions = expect
