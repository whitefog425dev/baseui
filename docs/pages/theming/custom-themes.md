---
category: Theming
page: Intro to theming
---

# Intro to theming

Base UI ships by default with the `Light` theme. We understand that in some cases
you want to change the look and feel of the components. To do so, follow the steps
outlined here

## Using themable values in component overrides

All themable values are available within components that provide the `overrides` prop.

```jsx
<Input
  overrides={{
    Input: {
      style: ({$theme}) => ({color: $theme.colors.primary}),
    },
  }}
  placeholder="Custom input that uses themable values"
/>
```

To learn more on how overrides work, check out [Better Reusable React Components with the Overrides Pattern](https://medium.com/@dschnr/better-reusable-react-components-with-the-overrides-pattern-9eca2339f646) article.

## Creating a custom theme

### Define your primitives

Primitives are used to define the colors and fonts for the components. An example for
primitives can be found in the [light theme primitives](https://github.com/uber-web/baseui/blob/master/src/themes/light-theme-primitives.js).

### Define any additional theme overrides

Theme overrides are used to change values in the theme like paddings or borders.
To learn more about what you can override, check out the [creator](https://github.com/uber-web/baseui/blob/master/src/themes/creator.js).

### Putting it all together

In practice, you can define your custom theme using this approach:

```js
import {createTheme, lightThemePrimitives} from 'baseui';

const yourTheme = createTheme(
  {
    ...lightThemePrimitives,
    // add all the properties here you'd like to override from the light theme primitives
    primaryFontFamily: '"Comic Sans MS", cursive, sans-serif',
  },
  {
    // add all the theme overrides here - under the hood it uses deep merge
    animation: {
      timing100: '0.50s',
    },
  },
);
```
