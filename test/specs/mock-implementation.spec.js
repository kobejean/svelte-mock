import { requireMockFixture, requireActualFixture } from '@test/utils/import';

const Paragraph = requireMockFixture('Paragraph.svelte');

const HelloWorld = requireActualFixture('HelloWorld.svelte');
const MockComponent = requireActualFixture('MockComponent.svelte');

beforeEach(() => {
  jest.clearAllMocks();
});

describe('svelteMock.mockImplementation(Component)', () => {
  it('should mock svelte component with empty text', () => {
    // Given
    svelteMock.mockImplementation(Paragraph);
    const target = document.createElement('div');
    // When
    new HelloWorld({ target });
    // Then
    expect(target.textContent).toBe('');
  });

  it('should mock svelte component with specified mock component', () => {
    // Given
    svelteMock.mockImplementation(Paragraph, MockComponent);
    const target = document.createElement('div');
    // When
    new HelloWorld({ target });
    // Then
    expect(target.textContent).toBe('Mock Component');
  });
});
