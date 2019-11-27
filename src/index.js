import { assign, isNil, get, set, mapValues } from 'lodash'
import { makeComponent } from '@utils/compile'
import { isSvelteVersion, SVELTE_CHANGES } from '@utils/version'
import * as check from '@check'
import * as expect from '@expect'
import * as queries from '@query'

// Pre-compile the default component to save performance
const DefaultMockComponent = (() => {
  if (isSvelteVersion('3.0.0', '<')) {
    return makeComponent('<slot></slot>', 'MockComponent')
  }
  return require('@mocks/MockComponent').default
})()

export function makeMockComponentConstructor(imp, name = 'MockComponent') {
  const useDefault = isNil(imp) && name === 'MockComponent'

  let MockComponent;
  if (useDefault) {
    MockComponent = DefaultMockComponent
  } else if (isSvelteVersion('3.0.0', '>=')) {
    console.warn('Custom svelte component mock implementations are currently not supported with svelte v3 and up');
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
