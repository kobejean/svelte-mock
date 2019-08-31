const { makeComponent } = require('./compile')
const { extensions } = require('./expect')

function makeMockComponent(string = '') {
  const MockComponent = makeComponent(string, 'MockComponent')
  return function (options) {
    // console.log(new MockComponent(options));
    return new MockComponent(options)
  }
}

exports.makeMockComponent = makeMockComponent
Object.assign(exports, extensions)
