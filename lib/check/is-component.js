import { every, has } from 'lodash'
import { isSvelteVersion } from '@utils/version'

export function isComponent(Component) {
    const requiredMethods = ['set', 'on', 'destroy']
    const prefix = isSvelteVersion('3.0.0', '>=') ? '$' : ''
    return every(requiredMethods, requiredMethod => has(Component.prototype, prefix + requiredMethod))
}