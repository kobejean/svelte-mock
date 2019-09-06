import { assign } from 'lodash'
import { makeComponent } from './utils/compile'
import * as extensions from './expect'
import * as queries from './query'

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
  const mockComponentFactory = (options) => new MockComponent(options)
  return mockComponentFactory
}

export function mockImplementation(Component, imp, name) {
  const constructor = makeMockComponentConstructor(imp, name)
  Component.mockImplementation(constructor)
  assign(Component, queries.getQueriesForComponent(Component))
  return Component
}

assign(exports, extensions)
assign(exports, queries)
