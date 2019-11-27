import assert from 'assert';
import { isComponent } from './is-component';

export function assertIsMockComponent(Component) {
  assert(
      isComponent(Component),
      'Did not recieve a mock component class, but recieved: ' + Component,
  );
  assert(
      Component._isMockFunction,
      'Component class is not mocked. Must use jest.mock(\'Component.svelte\')',
  );
  const mockImp = Component.getMockImplementation();
  assert(
      mockImp._isMockComponentConstructor,
      'Mock component class does not have a valid implementation, must use ' +
      'svelteMock.mockImplementation(Component)',
  );
}
