import { requireMockFixture, requireActualFixture } from '@test/utils/import';

const Paragraph = requireMockFixture('Paragraph.svelte');
svelteMock.mockImplementation(Paragraph);

const EventHandlers = requireActualFixture('EventHandlers.svelte');

beforeEach(() => {
  jest.clearAllMocks();
});

describe('expect(component).toHaveEventHandlers(eventHandlers)', () => {
  it('should pass if event handler matches', () => {
    // Given
    const target = document.createElement('div');
    // When
    new EventHandlers({ target });
    // Then
    const eventHandlers = ['click'];
    const recieved = Paragraph.getInstanceByEventHandlers(['click']);
    expect(recieved).toHaveEventHandlers(eventHandlers);
  });

  it('should pass if event handlers match a subset of an instance\'s event ' +
    'handlers', () => {
    // Given
    const target = document.createElement('div');
    // When
    new EventHandlers({ target });
    // Then
    const eventHandlers = ['random'];
    const recieved = Paragraph.getInstanceByEventHandlers(eventHandlers);
    expect(recieved).toHaveEventHandlers(eventHandlers);
  });

  it('should fail if event handlers do not match', () => {
    // Given
    const target = document.createElement('div');
    // When
    new EventHandlers({ target });
    // Then
    const eventHandlers = ['random', 'nonExistent'];
    const recieved = Paragraph.getInstanceByEventHandlers(eventHandlers);
    expect(recieved).toBeUndefined();
  });

  it('should pass if event handler matches dynamically instantiated svelte component', () => {
    // Given
    const target = document.createElement('div');
    // When
    new EventHandlers({ target });
    // Then
    const eventHandlers = ['focus'];
    const recieved = Paragraph.getInstanceByEventHandlers(['focus']);
    expect(recieved).toHaveEventHandlers(eventHandlers);
  });
});
