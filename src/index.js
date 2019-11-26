import { assign, isNil, get, set } from 'lodash'
import { makeComponent } from '@utils/compile'
import { isSvelteVersion, SVELTE_CHANGES } from '@utils/version'
import * as check from '@check'
import * as expect from '@expect'
import * as queries from '@query'

// Pre-compile the default component to save performance
const DefaultMockComponent = makeComponent('<slot></slot>', 'MockComponent')

function groomComponent(Component) {
  return Component
}

function groomComponentInstance(component, options) {
  const props = get(options, [SVELTE_CHANGES.OPTION_PROPS], {})
  set(component, ['$$', 'svelteMock', 'props'], props)
  // modify set method
  const originalSetMethod = component[SVELTE_CHANGES.SET_METHOD] || (() => {})
  component[SVELTE_CHANGES.SET_METHOD] = function(newProps) {
    originalSetMethod.call(this, newProps)
    const props = get(this, ['$$', 'svelteMock', 'props'], {})
    assign(props, newProps)
    set(this, ['$$', 'svelteMock', 'props'], props)
    console.log(this.$$, newProps);
  }

  return component
}

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

  MockComponent = groomComponent(MockComponent);

  const MockComponentConstructor = options => {
    return groomComponentInstance(new MockComponent(options), options)
  }
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
