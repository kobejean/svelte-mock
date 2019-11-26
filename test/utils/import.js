import { isSvelteVersion } from '@utils/version'

export function getFixturePath(fileName) {
  const version = isSvelteVersion('3.0.0', '<') ? 'v2' : 'v3'
  return '@test/fixtures/' + version + '/' + fileName
}

export function resolveDefault(obj) {
  return obj.default || obj
}
