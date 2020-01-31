import {
  requireActualFixture, getFixturePath, getFixtureRelativePath,
} from '@test/utils/import';

const MockComponent = requireActualFixture('MockComponent.svelte');

beforeEach(() => {
  jest.clearAllMocks();
});

describe('svelteMock.doMock(filepath)', () => {
  it('should mock svelte component with empty text', () => {
    // Given
    svelteMock.doMock(getFixturePath('Paragraph.svelte'));
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
    svelteMock.doMock(getFixtureRelativePath('Paragraph.svelte'));
    // import parent component after mocking
    const HelloWorld = requireActualFixture('HelloWorld.svelte');
    const target = document.createElement('div');
    // When
    new HelloWorld({ target });
    // Then
    expect(target.textContent).toBe('');
  });

  it('should mock svelte component with specified mock component', () => {
    // Given
    svelteMock.doMock(
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
});
