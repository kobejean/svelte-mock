<div align="center" style="text-align: center;">
<h1>Svelte Mock</h1>


<a href="https://www.emojione.com/emoji/1f415">
  <img
    height="64"
    width="64"
    alt="deer"
    src="https://raw.githubusercontent.com/kobejean/svelte-mock/master/docs/media/deer.png"
  />
</a>

<p>
  Svelte-mock is a testing library to help with mocking svelte components, testing svelte component properties and making code coverage reports more accurate.
</p>

[![svelte-mock Test Status](https://github.com/kobejean/svelte-mock/workflows/Test/badge.svg)](https://github.com/kobejean/svelte-mock/actions)
[![svelte-mock Dev Token](https://badge.devtoken.rocks/svelte-mock)](https://devtoken.rocks/package/svelte-mock)
[![NPM Latest Version](https://img.shields.io/npm/v/svelte-mock/latest)](https://www.npmjs.com/package/svelte-mock)
[![NPM Downloads](https://img.shields.io/npm/dt/svelte-mock?style=flat)](https://www.npmtrends.com/svelte-mock)
[![GitHub License](https://img.shields.io/github/license/kobejean/svelte-mock)](https://github.com/kobejean/svelte-mock/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)


</div>

[Full Documentation](https://kobejean.github.io/svelte-mock/)

## Table of Contents

- [Setup](#setup)
- [Usage](#usage)
- [Expect Extensions](#expect-extensions)
  - [`toHaveInstance`](#tohaveinstance)
  - [`toHaveInstanceWithProps`](#tohaveinstancewithprops)
  - [`toHaveInstanceWithBoundProps`](#tohaveinstancewithboundprops)
  - [`toHaveInstanceWithSlots`](#tohaveinstancewithslots)
  - [`toHaveInstanceWithEventHandlers`](#tohaveinstancewitheventhandlers)
  - [`toHaveProps`](#tohaveprops)
  - [`toHaveBoundProps`](#tohaveboundprops)
  - [`toHaveSlots`](#tohaveslots)
  - [`toHaveEventHandlers`](#tohaveeventhandlers)
- [Query Functions](#query-functions)
  - [`getInstanceByProps`](#getinstancebyprops)
  - [`getInstanceByBoundProps`](#getinstancebyboundprops)
  - [`getInstanceBySlots`](#getinstancebyslots)
  - [`getInstanceByEventHandlers`](#getinstancebyeventhandlers)

## Setup

**Note:** Jest version must be 25.0.0 for code coverage to work

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

If you want to specify your own mock implementations you can pass a svelte component as a second argument:

```js
svelteMock.mockImplementation(Component, MockComponent)
```

## Expect Extensions

svelte-mock includes some useful expect extensions

---

### `toHaveInstance`

Passes if a mocked component class has been instantiated at least once.

#### Example

```html
<Component />
```

```js
expect(Component).toHaveInstance()
```

- `Component` - a svelte component class to be checked for an instance

---

### `toHaveInstanceWithProps`

Passes if a mocked component class has an instance with props.

#### Example

```html
<Component first={firstValue} second={secondValue} />
```

```js
expect(Component).toHaveInstanceWithProps(['first'])
expect(Component).toHaveInstanceWithProps(['first', 'second'])
expect(Component).not.toHaveInstanceWithProps(['nonExistent'])
expect(Component).toHaveInstanceWithProps({ first: firstValue })
expect(Component).not.toHaveInstanceWithProps({ first: wrongValue })
```

- `Component` - a svelte component class to be checked for a matching instance

---

### `toHaveInstanceWithBoundProps`

Passes if a mocked component class has an instance with bound props.

#### Example

```html
<Component bind:first=firstValue bind:second=secondValue />
```

```js
expect(Component).toHaveInstanceWithBoundProps(['first'])
expect(Component).toHaveInstanceWithBoundProps(['first', 'second'])
expect(Component).not.toHaveInstanceWithBoundProps(['nonExistent'])
expect(Component).toHaveInstanceWithBoundProps({ first: firstValue })
expect(Component).not.toHaveInstanceWithBoundProps({ first: wrongValue })
```

- `Component` - a svelte component class to be checked for a matching instance

---

### `toHaveInstanceWithSlots`

Passes if a mocked component class has an instance with the specified slots.

#### Example

```html
<Component>
  <span>First</span>
</Component>
<Component>
  <span slot="first">First</span>
  <span slot="second">Second</span>
</Component>
```

```js
// Check for unnamed slot
expect(Component).toHaveInstanceWithSlots()
// Check for named slots
expect(Component).toHaveInstanceWithSlots(['first'])
expect(Component).toHaveInstanceWithSlots(['first', 'second'])
expect(Component).not.toHaveInstanceWithSlots(['nonExistent'])
expect(Component).toHaveInstanceWithSlots({ first: firstSlot })
expect(Component).not.toHaveInstanceWithSlots({ first: wrongSlot })
```

- `Component` - a svelte component class to be checked for a matching instance

---

### `toHaveInstanceWithEventHandlers`

Passes if a mocked component class has an instance with event handlers.

#### Example

```html
<Component on:click="clickFn()" on:custom="customFn()" />
```

```js
expect(Component).toHaveInstanceWithEventHandlers(['click'])
expect(Component).toHaveInstanceWithEventHandlers(['click', 'custom'])
expect(Component).not.toHaveInstanceWithEventHandlers(['nonExistent'])
expect(Component).toHaveInstanceWithEventHandlers({ click: clickFn })
expect(Component).not.toHaveInstanceWithEventHandlers({ click: wrongFn })
```

- `Component` - a svelte component class to be checked for a matching instance

---

### `toHaveProps`

Passes if a component instance has the specified props.

#### Example

```html
<Component first={firstValue} second={secondValue} />
```

```js
expect(component).toHaveProps(['first'])
expect(component).toHaveProps(['first', 'second'])
expect(component).not.toHaveProps(['nonExistent'])
expect(component).toHaveProps({ first: firstValue })
expect(component).not.toHaveProps({ first: wrongValue })
```

- `component` - an instance of `Component`

---

### `toHaveBoundProps`

Passes if a component instance has the specified bound props.

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

### `toHaveSlots`

Passes if a component instance has the specified slots.

#### Example

```html
<Component>
  <span>First</span>
</Component>
<Component>
  <span slot="first">First</span>
  <span slot="second">Second</span>
</Component>
```

```js
// Check for unnamed slot
expect(component1).toHaveSlots()
// Check for named slots
expect(component2).toHaveSlots(['first'])
expect(component2).toHaveSlots(['first', 'second'])
expect(component2).not.toHaveSlots(['nonExistent'])
expect(component2).toHaveSlots({ first: firstSlot })
expect(component2).not.toHaveSlots({ first: wrongSlot })
```

- `component1` - an instance of `Component`
- `component2` - an instance of `Component`

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

## Query Functions

### `getInstanceByProps`

Returns the first instance for a component that has the specified props.

#### Example

```html
<Component first={firstValue} second={secondValue} />
```

```js
Component.getInstanceByProps(['first'])
Component.getInstanceByProps(['first', 'second'])
Component.getInstanceByProps({ first: firstValue })
```

- `Component` - a svelte component class to be checked for an instance

---

### `getInstanceByBoundProps`

Returns the first instance for a component that has the specified bound props.

#### Example

```html
<Component bind:first=firstValue bind:second=secondValue />
```

```js
Component.getInstanceByBoundProps(['first'])
Component.getInstanceByBoundProps(['first', 'second'])
Component.getInstanceByBoundProps({ first: firstValue })
```

- `Component` - a svelte component class to be checked for an instance

---

### `getInstanceBySlots`

Returns the first instance for a component that has the specified slots.

#### Example

```html
<Component>
  <span>First</span>
</Component>
<Component>
  <span slot="first">First</span>
  <span slot="second">Second</span>
</Component>
```

```js
// Get component with unnamed slot
Component.getInstanceBySlots()
// Check for named slots
Component.getInstanceBySlots(['first'])
Component.getInstanceBySlots(['first', 'second'])
Component.getInstanceBySlots({ first: firstSlot })
```

- `Component` - a svelte component class to be checked for an instance

---

### `getInstanceByEventHandlers`

Returns the first instance for a component that has the specified event handlers.

#### Example

```html
<Component on:click="clickFn()" on:custom="customFn()" />
```

```js
Component.getInstanceByEventHandlers(['click'])
Component.getInstanceByEventHandlers(['click', 'custom'])
Component.getInstanceByEventHandlers({ click: clickFn })
```

- `Component` - a svelte component class to be checked for an instance
