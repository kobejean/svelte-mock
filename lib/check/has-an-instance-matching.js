import { some } from 'lodash'

export function hasAnInstanceMatching(Component, matchFn) {
    return some(Component.mock.results, result => matchFn(result.value))
}