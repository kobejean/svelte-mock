import { assign, isNil } from 'lodash'
import { makeComponent } from '@utils/compile'
import * as check from '@check'
import * as expect from '@expect'
import * as queries from '@query'

// Pre-compile the default component to save performance
const DefaultMockComponent = makeComponent('<slot></slot>', 'MockComponent')

export function makeMockComponentConstructor(imp, name = 'MockComponent') {
  const useDefault = isNil(imp) && name === 'MockComponent'

  let MockComponent;
  if (useDefault) {
    MockComponent = DefaultMockComponent
  } else if (typeof imp === 'string') {
    MockComponent = makeComponent(imp, name)
  } else {
    MockComponent = imp
  }
  const MockComponentConstructor = options => new MockComponent(options)
  MockComponentConstructor._isMockComponentConstructor = true
  return MockComponentConstructor
}

export function mockImplementation(Component, imp, name) {
  const constructor = makeMockComponentConstructor(imp, name)
  Component.mockImplementation(constructor)
  assign(Component, queries.getQueriesForComponent(Component))
  return Component
}

assign(exports, { check, expect, queries })
