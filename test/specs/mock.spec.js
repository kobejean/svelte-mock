import {
  requireActualFixture, getFixturePath, getFixtureRelativePath,
} from '@test/utils/import';
import { isSvelteVersion } from '@utils/version';

const MockComponent = requireActualFixture('MockComponent.svelte');

beforeEach(() => {
  jest.clearAllMocks();
});

describe('svelteMock.mock(filepath)', () => {
  it('should mock svelte component with empty text', () => {
    // Given
    svelteMock.mock(getFixturePath('Paragraph.svelte'));
    // import parent component after mocking
    const HelloWorld = requireActualFixture('HelloWorld.svelte');
    const target = document.createElement('div');
    // When
    new HelloWorld({ target });
    // Then
    expect(target.textContent).toBe('');
  });

  it('should mock svelte component with relative path', () => {
    // Given
    svelteMock.mock(getFixtureRelativePath('Paragraph.svelte'));
    // import parent component after mocking
    const HelloWorld = requireActualFixture('HelloWorld.svelte');
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
      svelteMock.mock(
          getFixturePath('Paragraph.svelte'), 'Mock Hello World',
      );
      // import parent component after mocking
      const HelloWorld = requireActualFixture('HelloWorld.svelte');
      const target = document.createElement('div');
      // When
      new HelloWorld({ target });
      // Then
      expect(target.textContent).toBe('Mock Hello World');
    });

    it('should mock svelte component with specified mock component', () => {
      // Given
      svelteMock.mock(
          getFixturePath('Paragraph.svelte'), MockComponent,
      );
      // import parent component after mocking
      const HelloWorld = requireActualFixture('HelloWorld.svelte');
      const target = document.createElement('div');
      // When
      new HelloWorld({ target });
      // Then
      expect(target.textContent).toBe('Mock Component');
    });
  }
});
