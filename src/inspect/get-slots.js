import { isSvelteVersion } from '@utils/version'
import { get } from 'lodash'

const getSlotsV2 = component => component._slotted
const getSlotsV3 = component => get(component, ['$$', 'ctx', '$$slots'], {})

export const getSlots = isSvelteVersion('3.0.0', '<') ? getSlotsV2 : getSlotsV3
