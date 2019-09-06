export function hasAnInstance(Component) {
    return Component.mock.results.length > 0
}