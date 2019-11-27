import { requireMockFixture, requireActualFixture } from '@test/utils/import';
import { isSvelteVersion } from '@utils/version';

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

  if (isSvelteVersion('3.0.0', '<')) {
    // Unsupported with svelte v3 and up

    it('should mock svelte component with specified text', () => {
      // Given
      svelteMock.mockImplementation(Paragraph, 'Mock Hello World');
      const target = document.createElement('div');
      // When
      new HelloWorld({ target });
      // Then
      expect(target.textContent).toBe('Mock Hello World');
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
  }
});
