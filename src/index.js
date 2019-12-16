import { assign, isNil } from 'lodash';
import { makeComponent } from '@utils/compile';
import { isSvelteVersion } from '@utils/version';
import { resolvePath, resolveDefault } from '@utils/import';
import DefaultMockComponent from '@mocks/MockComponent';
import * as check from '@check';
import * as expect from '@expect';
import * as queries from '@query';

export function makeMockComponentConstructor(imp, name = 'MockComponent') {
  const useDefault = isNil(imp) && name === 'MockComponent';

  let MockComponent;
  if (useDefault) {
    MockComponent = DefaultMockComponent;
  } else if (isSvelteVersion('3.0.0', '>=')) {
    console.warn('Custom svelte component mock implementations are currently ' +
      'not supported with svelte v3 and up');
    MockComponent = DefaultMockComponent;
  } else if (typeof imp === 'string') {
    MockComponent = makeComponent(imp, name);
  } else {
    MockComponent = imp;
  }

  const MockComponentConstructor = (options) => new MockComponent(options);
  MockComponentConstructor._isMockComponentConstructor = true;
  return MockComponentConstructor;
}

export function mockImplementation(MockComponent, imp, name) {
  const constructor = makeMockComponentConstructor(imp, name);
  MockComponent.mockImplementation(constructor);
  assign(MockComponent, queries.getQueriesForComponent(MockComponent));
  return MockComponent;
}

export function mock(path, imp, name) {
  console.warn('svelteMock.mock() is a test feature and may not be supported' +
    'in the future');
  path = resolvePath(path, 1);
  jest.doMock(path);
  const MockComponent = resolveDefault(jest.requireMock(path));
  return mockImplementation(MockComponent, imp, name);
}

assign(exports, { check, expect, queries });
