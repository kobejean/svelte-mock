const { ComponentFromString } = require('./compile')

function mockComponent(string = '', name = 'MockComponent') {
  const Component = ComponentFromString(string, name)
  return function (options) {
    return new Component(options)
  }
}

exports.mockComponent = mockComponent
