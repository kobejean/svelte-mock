import assert from 'assert'
import { every, has, isArray, isPlainObject } from 'lodash'

export function matchesObject(object, query) {
    assert(typeof object === 'object')
    const predicate = (() => {
        if (isArray(query)) {
            return prop => has(object, prop)
        } else if (isPlainObject(query)) {
            return (value, prop) => object[prop] === value
        }
        throw TypeError('query must be object or array')
    })()
    return every(query, predicate)
}