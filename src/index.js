import { assign } from 'lodash';
import { resolvePath, resolveDefault } from '@utils/import';
import DefaultMockComponent from '@mock/MockComponent';
import * as check from '@check';
import * as from from '@from';

export function makeMockComponentConstructor(MockComponent) {
  const Constructor = (options) => new MockComponent(options);
  Constructor._isMockComponentConstructor = true;
  return Constructor;
}

export function mockImplementation(MockComponent,
  CustomMockComponent = DefaultMockComponent) {
  const constructor = makeMockComponentConstructor(CustomMockComponent);
  const mockImp = MockComponent.mockImplementation ?? MockComponent.default?.mockImplementation;
  mockImp(constructor);
  assign(MockComponent, from.getQueriesForComponent(MockComponent));
  return MockComponent;
}

export function doMock(path, imp) {
  console.warn('svelteMock.doMock() is a test feature and may not be ' +
    'supported in the future');
  path = resolvePath(path, 1);
  jest.doMock(path);
  const MockComponent = resolveDefault(jest.requireMock(path));
  return mockImplementation(MockComponent, imp);
}

assign(exports, { ...check, ...expect, ...from });
