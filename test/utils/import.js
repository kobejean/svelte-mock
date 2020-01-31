import { isSvelteVersion } from '@utils/version';
const fixtureVersion = isSvelteVersion('3.0.0', '<') ? 'v2' : 'v3';

export function getFixturePath(filename) {
  return '@test/fixtures/' + fixtureVersion + '/' + filename;
}

export function getFixtureRelativePath(filename) {
  return '../fixtures/' + fixtureVersion + '/' + filename;
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
