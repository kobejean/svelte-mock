import { isSvelteVersion } from '@utils/version';

export function getFixturePath(filename) {
  const version = isSvelteVersion('3.0.0', '<') ? 'v2' : 'v3';
  return '@test/fixtures/' + version + '/' + filename;
}

export function getFixtureRelativePath(filename) {
  const version = isSvelteVersion('3.0.0', '<') ? 'v2' : 'v3';
  return '../fixtures/' + version + '/' + filename;
}

export function resolveDefault(obj) {
  return obj.default || obj;
}

export function requireMockFixture(filename) {
  const importPath = getFixturePath(filename);
  jest.doMock(importPath);
  return resolveDefault(jest.requireMock(importPath));
}

export function requireActualFixture(filename) {
  const importPath = getFixturePath(filename);
  return resolveDefault(jest.requireActual(importPath));
}
