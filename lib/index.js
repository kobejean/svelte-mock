const { assign } = require('lodash')
const { makeComponent } = require('./compile')
const extensions = require('./expect')
const { getQueriesForComponent } = require('./query')

DefaultMockComponent = makeComponent('', 'MockComponent')

function makeMockComponentConstructor(imp = '', name = 'MockComponent') {
  const useDefault = imp === '' && name === 'MockComponent'

  let MockComponent;
  if (useDefault) {
    MockComponent = DefaultMockComponent
  } else if (typeof imp === 'string') {
    MockComponent = makeComponent(imp, name)
  } else {
    MockComponent = imp
  }

  return function (options) {
    return new MockComponent(options)
  }
}

function mockImplementation(Component, imp, name) {
  const constructor = makeMockComponentConstructor(imp, name)
  Component.mockImplementation(constructor)
  assign(Component, getQueriesForComponent(Component))
  return Component
}

exports.mockImplementation = mockImplementation
Object.assign(exports, extensions)
