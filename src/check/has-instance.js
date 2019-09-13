export function hasInstance(Component) {
    return Component.mock.results.length > 0
}

// Aliases
export const hasAnInstance = hasInstance