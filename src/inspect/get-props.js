import { isSvelteVersion } from '@utils/version'

const getPropsV2 = component => component.get()
const getPropsV3 = component => component.$$.svelteMock.props

export const getProps = isSvelteVersion('3.0.0', '<') ? getPropsV2 : getPropsV3
