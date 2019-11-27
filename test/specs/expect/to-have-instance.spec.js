import { requireMockFixture, requireActualFixture } from '@test/utils/import';

const Paragraph = requireMockFixture('Paragraph.svelte');
const Fullname = requireMockFixture('Fullname.svelte');
svelteMock.mockImplementation(Paragraph);
svelteMock.mockImplementation(Fullname);

const MultipleInstance = requireActualFixture('MultipleInstance.svelte');

beforeEach(() => {
  jest.clearAllMocks();
});

describe('expect(Component).toHaveInstance()', () => {
  it('should pass if instance is created', () => {
    // Given
    const target = document.createElement('div');
    // When
    new MultipleInstance({ target });
    // Then
    expect(Paragraph).toHaveAnInstance();
  });

  it('should fail if instance is not created', () => {
    // Then
    expect(Paragraph).not.toHaveInstance();
  });
});
