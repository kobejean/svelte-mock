import { requireMockFixture, requireActualFixture, tick } from '@test/utils';
import { SVELTE_CHANGES } from '@test/utils/version';

const Paragraph = requireMockFixture('Paragraph.svelte');
const Fullname = requireMockFixture('Fullname.svelte');
svelteMock.mockImplementation(Paragraph);
svelteMock.mockImplementation(Fullname);

const DynamicInstantiation =
  requireActualFixture('DynamicInstantiation.svelte');

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Component.getInstanceByProps(props)', () => {
  it('should return instances with matching props', () => {
    // Given
    const target = document.createElement('div');
    const props1 = { firstname: 'Jean', lastname: 'Flaherty' };
    const props2 = { firstname: 'Rick', lastname: 'Flaherty' };
    // When
    new Fullname({ target, [SVELTE_CHANGES.OPTION_PROPS]: props1 });
    const component2 = new Fullname({
      target, [SVELTE_CHANGES.OPTION_PROPS]: props2,
    });
    // Then
    const recieved = Fullname.getInstanceByProps({
      firstname: 'Rick', lastname: 'Flaherty',
    });
    expect(recieved).toBe(component2);
  });

  it('should return instances with matching prop subset', () => {
    // Given
    const target = document.createElement('div');
    const props1 = { firstname: 'Jean', lastname: 'Flaherty' };
    const props2 = { firstname: 'Rick', lastname: 'Flaherty' };
    // When
    const component1 = new Fullname({
      target, [SVELTE_CHANGES.OPTION_PROPS]: props1,
    });
    new Fullname({ target, [SVELTE_CHANGES.OPTION_PROPS]: props2 });
    // Then
    const recieved = Fullname.getInstanceByProps({ firstname: 'Jean' });
    expect(recieved).toBe(component1);
  });

  it('should return instances with matching props after state ' +
    'updates', async () => {
    // Given
    const target = document.createElement('div');
    const props1 = { firstname: 'Jean', lastname: 'Flaherty' };
    const props2 = { firstname: 'Rick', lastname: 'Flaherty' };
    const component1 = new Fullname({
      target, [SVELTE_CHANGES.OPTION_PROPS]: props1,
    });
    const component2 = new Fullname({
      target, [SVELTE_CHANGES.OPTION_PROPS]: props2,
    });
    // When
    component1[SVELTE_CHANGES.SET_METHOD]({ firstname: 'Sachico' });
    component2[SVELTE_CHANGES.SET_METHOD]({ firstname: 'Loyd' });
    await tick();
    // Then
    const recieved = Fullname.getInstanceByProps({ firstname: 'Loyd' });
    expect(recieved).toBe(component2);
  });

  it('should return undefined if props do not match any instance', () => {
    // Given
    const target = document.createElement('div');
    const props1 = { firstname: 'Jean', lastname: 'Flaherty' };
    const props2 = { firstname: 'Rick', lastname: 'Flaherty' };
    // When
    new Fullname({ target, [SVELTE_CHANGES.OPTION_PROPS]: props1 });
    new Fullname({ target, [SVELTE_CHANGES.OPTION_PROPS]: props2 });
    // Then
    const recieved = Fullname.getInstanceByProps({ firstname: 'Loyd' });
    expect(recieved).toBe(undefined);
  });

  it('should return instances with matching props of ' +
      'dynamically instantiated component', () => {
    // Given
    const target = document.createElement('div');
    // When
    new DynamicInstantiation({ target });
    // Then
    const props = { text: 'The meaning of life is 42' };
    const recieved = Paragraph.getInstanceByProps(props);
    expect(recieved).toHaveProps(props);
  });
});
