# svelte-mock
[![svelte-mock Test Status](https://github.com/kobejean/svelte-mock/workflows/Test%20Node.js%20Package/badge.svg)](https://github.com/kobejean/svelte-mock/actions)
[![svelte-mock Dev Token](https://badge.devtoken.rocks/svelte-mock)](https://devtoken.rocks/package/svelte-mock)
[![NPM Latest Version](https://img.shields.io/npm/v/svelte-mock/latest)](https://www.npmjs.com/package/svelte-mock)
[![NPM Downloads](https://img.shields.io/npm/dt/svelte-mock?style=flat)](https://www.npmtrends.com/svelte-mock)
[![GitHub License](https://img.shields.io/github/license/kobejean/svelte-mock)](https://github.com/kobejean/svelte-mock/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)

## Table of Contents

- [Setup](#setup)
- [Usage](#usage)
- [Expect Extensions](#expect-extensions)
  - [`toHaveAnInstanceWithBoundProps`](#tohaveaninstancewithboundprops)
  - [`toHaveAnInstanceWithNamedSlots`](#tohaveaninstancewithnamedslots)
  - [`toHaveAnInstanceWithProps`](#tohaveaninstancewithprops)
  - [`toHaveAnInstance`](#tohaveaninstance)
  - [`toHaveBoundProps`](#tohaveboundprops)
  - [`toHaveNamedSlots`](#tohavenamedslots)
  - [`toHaveProps`](#tohaveprops)
- [Query Functions](#query-functions)
  - [`getInstanceByBoundProps`](#getinstancebyboundprops)
  - [`getInstanceByNamedSlots`](#getinstancebynamedslots)
  - [`getInstanceByProps`](#getinstancebyprops)

## Setup

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

## Usage

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

## Expect Extensions

svelte-mock includes some useful expect extensions


### `toHaveAnInstanceWithBoundProps`

Passes if a mocked component class has an instance with bound props i.e.`<Component bind:boundProp >`. 

```js
expect(Component).toHaveAnInstanceWithBoundProps(boundProps)
```

- `Component` - a component class to be checked for a matching instance
- `boundProps` - an object with bound props and their values

---

### `toHaveAnInstanceWithNamedSlots`

Passes if a mocked component class has an instance with the specified named slots. 

```js
expect(Component).toHaveAnInstanceWithNamedSlots(namedSlots)
```

- `Component` - a component class to be checked for a matching instance
- `namedSlots` - an array of slot names to match

---

### `toHaveAnInstanceWithProps`

Passes if a mocked component class has an instance with props i.e.`<Component prop='prop' >`. 

```js
expect(Component).toHaveAnInstanceWithProps(props)
```

- `Component` - a component class to be checked for a matching instance
- `props` - an object with props and their values

---

### `toHaveAnInstance`

Passes if a mocked component class has been instantiated at least once.

```js
expect(Component).toHaveAnInstance()
```

- `Component` - a component class to be checked for an instance

---

### `toHaveBoundProps`

Passes if a mocked component instance has the specified bound props.

```js
expect(component).toHaveBoundProps(boundProps)
```

- `component` - a component instance to be checked for bound props
- `boundProps` - an object with bound props and their values

---

### `toHaveNamedSlots`

Passes if a mocked component class has the specified named slots. 

```js
expect(Component).toHaveNamedSlots(namedSlots)
```

- `component` - a component instance to be checked for named slots
- `namedSlots` - an array of slot names to match

---

### `toHaveProps`

Passes if a mocked component instance has the specified props.

```js
expect(component).toHaveProps(props)
```

- `component` - a component instance to be checked for props
- `props` - an object with props and their values

---

## Query Functions

### `getInstanceByBoundProps`

Returns the first instance fo a component that has the specified bound props.

```js
Component.getInstanceByBoundProps(boundProps)
```

- `Component` - a component class to be searched for a matching instance
- `boundProps` - an object with bound props and their values

---

### `getInstanceByNamedSlots`

Returns the first instance fo a component that has the specified named slots.

```js
Component.getInstanceByNamedSlots(namedSlots)
```

- `Component` - a component class to be checked for a matching instance
- `namedSlots` - an array of slot names to match

---

### `getInstanceByProps`

Returns the first instance fo a component that has the specified props.

```js
Component.getInstanceByProps(props)
```

- `Component` - a component class to be searched for a matching instance
- `props` - an object with props and their values