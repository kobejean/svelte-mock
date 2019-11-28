// Mocked components should be mocked before other imports
const Title = svelteMock.mock('../src/Title.svelte');
// Non-mocked components should be imported after mocked components are mocked
const App = jest.requireActual('../src/App.svelte').default;

beforeEach(() => {
  jest.clearAllMocks();
});

describe('App specs', () => {
  it('Title component should be passed text prop', () => {
    // Given
    const target = document.createElement('div');
    // When
    new App({ target, props: { name: 'World' } });
    // Then
    const expected = { text: 'Hello World!' };
    expect(Title).toHaveInstanceWithProps(expected);
  });
});
