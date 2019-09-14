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
  - [`toHaveEventHandlers`](#tohaveeventhandlers)
  - [`toHaveBoundProps`](#tohaveboundprops)
  - [`toHaveInstanceWithEventHandlers`](#tohaveinstancewitheventhandlers)
  - [`toHaveInstanceWithBoundProps`](#tohaveinstancewithboundprops)
  - [`toHaveInstanceWithSlots`](#tohaveinstancewithslots)
  - [`toHaveInstanceWithProps`](#tohaveinstancewithprops)
  - [`toHaveInstance`](#tohaveinstance)
  - [`toHaveSlots`](#tohavenamedslots)
  - [`toHaveProps`](#tohaveprops)
- [Query Functions](#query-functions)
  - [`getInstanceByEventHandlers`](#getinstancebyeventhandlers)
  - [`getInstanceByBoundProps`](#getinstancebyboundprops)
  - [`getInstanceBySlots`](#getinstancebyslots)
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

---

### `toHaveEventHandlers`

Passes if a component instance has the specified event handlers. 

#### Example

```html
<Component on:click="clickFn()" on:custom="customFn()" />
```

```js
expect(component).toHaveEventHandlers(['click'])
expect(component).toHaveEventHandlers(['click', 'custom'])
expect(component).not.toHaveEventHandlers(['nonExistent'])
expect(component).toHaveEventHandlers({ click: clickFn })
expect(component).not.toHaveEventHandlers({ click: wrongFn })
```

- `component` - an instance of `Component`

---

### `toHaveBoundProps`

Passes if a mocked component instance has the specified bound props.

#### Example

```html
<Component bind:first=firstValue bind:second=secondValue />
```

```js
expect(component).toHaveBoundProps(['first'])
expect(component).toHaveBoundProps(['first', 'second'])
expect(component).not.toHaveBoundProps(['nonExistent'])
expect(component).toHaveBoundProps({ first: firstValue })
expect(component).not.toHaveBoundProps({ first: wrongValue })
```

- `component` - an instance of `Component`

---

### `toHaveInstanceWithBoundProps`

Passes if a mocked component class has an instance with bound props i.e.`<Component bind:boundProp >`. 

```js
expect(Component).toHaveInstanceWithBoundProps(boundProps)
```

- `Component` - a component class to be checked for a matching instance
- `boundProps` - an object with bound props and their values

---

### `toHaveInstanceWithSlots`

Passes if a mocked component class has an instance with the specified slots. 

```js
expect(Component).toHaveInstanceWithSlots(slots)
```

- `Component` - a component class to be checked for a matching instance
- `slots` - an array of slot names to match

---

### `toHaveInstanceWithProps`

Passes if a mocked component class has an instance with props i.e.`<Component prop='prop' >`. 

```js
expect(Component).toHaveInstanceWithProps(props)
```

- `Component` - a component class to be checked for a matching instance
- `props` - an object with props and their values

---

### `toHaveInstance`

Passes if a mocked component class has been instantiated at least once.

```js
expect(Component).toHaveInstance()
```

- `Component` - a component class to be checked for an instance

---

### `toHaveSlots`

Passes if a mocked component class has the specified slots. 

```js
expect(Component).toHaveSlots(slots)
```

- `component` - a component instance to be checked for named slots
- `slots` - an array of slot names to match

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

### `getInstanceBySlots`

Returns the first instance fo a component that has the specified slots.

```js
Component.getInstanceBySlots(slots)
```

- `Component` - a component class to be checked for a matching instance
- `slots` - an array of slot names to match

---

### `getInstanceByProps`

Returns the first instance fo a component that has the specified props.

```js
Component.getInstanceByProps(props)
```

- `Component` - a component class to be searched for a matching instance
- `props` - an object with props and their values
