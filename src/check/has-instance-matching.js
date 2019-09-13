import { some } from 'lodash'

export function hasInstanceMatching(Component, matchFn) {
    return some(Component.mock.results, result => matchFn(result.value))
}

// Aliases
export const hasAnInstanceMatching = hasInstanceMatching