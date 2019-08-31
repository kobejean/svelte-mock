const { toHaveInstanceWithProps } = require('./to-have-instance-with-props')
const { toHaveProps } = require('./to-have-props')

const extensions = {
  toHaveInstanceWithProps,
  toHaveProps
}

Object.assign(exports, extensions)
