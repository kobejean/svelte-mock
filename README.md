# svelte-mock
[![svelte-mock Test Status](https://github.com/kobejean/svelte-mock/workflows/Test%20Node.js%20Package/badge.svg)](https://github.com/kobejean/svelte-mock/actions)
[![svelte-mock Dev Token](https://badge.devtoken.rocks/svelte-mock)](https://devtoken.rocks/package/svelte-mock)
[![NPM Latest Version](https://img.shields.io/npm/v/svelte-mock/latest)](https://www.npmjs.com/package/svelte-mock)
[![NPM Downloads](https://img.shields.io/npm/dt/svelte-mock?style=flat)](https://www.npmtrends.com/svelte-mock)
[![GitHub License](https://img.shields.io/github/license/kobejean/svelte-mock)](https://github.com/kobejean/svelte-mock/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)

### Setup

Add the following to your jest config:

```js
transform: {
  '\\.html$': 'svelte-mock/transform',
  '\\.svelte$': 'svelte-mock/transform'
},
setupFilesAfterEnv: [
  'svelte-mock/extend'
],
```

### Usage

You can mock a svelte component with the following code:

```js
jest.mock('Component.svelte')
import Component from 'Component.svelte'
svelteMock.mockImplementation(Component)
```

If you want to specify your own mock implementations you can either pass a string of svelte code or a svelte component as a second argument:

```js
svelteMock.mockImplementation(Component, 'Svelte Code')
```

or

```js
svelteMock.mockImplementation(Component, MockComponent)
```

### Expect Extensions

`expect(Component).toHaveAnInstanceWithBoundProps(boundProps)`

Passes if a mocked component class has an instance with bound props i.e.`<Component bind:boundProp >`. 
- `Component` - a component class to be checked for a matching instance
- `boundProps` - an object with bound props and their values


`expect(Component).toHaveAnInstanceWithProps(props)`

Passes if a mocked component class has an instance with props i.e.`<Component prop='prop' >`. 
- `Component` - a component class to be checked for a matching instance
- `props` - an object with props and their values


`expect(Component).toHaveAnInstance()`

Passes if a mocked component class has been instantiated at least once.
- `Component` - a component class to be checked for an instance


`expect(component).toHaveBoundProps(boundProps)`

Passes if a mocked component instance has the specified bound props.
- `component` - a component instance to be checked for bound props
- `boundProps` - an object with bound props and their values


`expect(component).toHaveProps(props)`

Passes if a mocked component instance has the specified props.
- `component` - a component instance to be checked for props
- `props` - an object with props and their values


### Query Functions

`Component.getInstanceByBoundProps(boundProps)`

Returns the first instance fo a component that has the specified bound props.
- `Component` - a component class to be searched for a matching instance
- `boundProps` - an object with bound props and their values


`Component.getInstanceByProps(props)`

Returns the first instance fo a component that has the specified props.
- `Component` - a component class to be searched for a matching instance
- `props` - an object with props and their values
