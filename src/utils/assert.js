/** @module utils */
import assert from 'assert';
import { isComponent } from '@check/class/is-component';

/**
 * Asserts that an object is a mock component constructor.
 *
 * @param {Object} object - An object to check if it is a mock component
 * constructor or not
 * @return {boolean} Returns true if `object` is a mock component constructor.
 *
 * @example
 *
 * // Svelte code
 * <Component>
 *
 * // Javascript code
 * jest.mock('Component.svelte')
 * import Component from 'Component.svelte'
 * const MockComponent = Component;
 * svelteMock.mockImplementation(MockComponent);
 *
 * assertIsMockComponent(MockComponent);     // passes assertion
 * assertIsMockComponent('not a component'); // fails assertion
 *
 */

export function assertIsMockComponent(object) {
  assert(
      isComponent(object),
      'Did not recieve a mock component class, but recieved: ' + object,
  );
  assert(
      object._isMockFunction,
      'Component class is not mocked. Must use jest.mock(\'Component.svelte\')',
  );
  const mockImp = object.getMockImplementation();
  assert(
      mockImp._isMockComponentConstructor,
      'Mock component class does not have a valid implementation, must use ' +
      'svelteMock.mockImplementation(Component)',
  );
}
