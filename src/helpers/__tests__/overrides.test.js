// @flow
import * as React from 'react';
import {
  getOverride,
  getOverrideProps,
  toObjectOverride,
  mergeOverrides,
} from '../overrides';

function getMockComponent<T>(): React.ComponentType<T> {
  const mock: React.ComponentType<T> = () => null;
  return mock;
}

test('Helpers - Overrides - getOverride', () => {
  const CustomComponent = getMockComponent();
  expect(getOverride(null)).toEqual(null);
  expect(getOverride(CustomComponent)).toEqual(CustomComponent);
  expect(getOverride({component: CustomComponent})).toEqual(CustomComponent);
});

test('Helpers - Overrides - getOverrideProps', () => {
  const CustomComponent = getMockComponent();
  const override = {
    props: {propName: 'propsValue'},
    style: {color: 'blue'},
  };
  expect(getOverrideProps(null)).toMatchSnapshot(
    'returns empty object when no overrides',
  );
  expect(getOverrideProps(CustomComponent)).toMatchSnapshot(
    'returns empty object when override is a component',
  );
  expect(getOverrideProps(override)).toMatchSnapshot(
    'returns correct object when override has props and styles',
  );
});

test('Helpers - Overrides - toObjectOverride', () => {
  const CustomComponent = getMockComponent();
  // $FlowFixMe - Calling toObjectOverride with no args
  expect(toObjectOverride()).toBeUndefined();
  // $FlowFixMe - Calling toObjectOverride with null
  expect(toObjectOverride(null)).toBe(null);
  expect(toObjectOverride(CustomComponent)).toEqual({
    component: CustomComponent,
  });
  expect(
    toObjectOverride({
      component: (CustomComponent: React.ComponentType<*>),
      style: {width: '300px'},
    }),
  ).toEqual({
    component: CustomComponent,
    style: {width: '300px'},
  });
});

test('Helpers - Overrides - mergeOverrides', () => {
  const CustomRoot = getMockComponent();
  const CustomFoo = getMockComponent();
  const CustomBar = getMockComponent();

  const overrides1 = {
    Root: CustomRoot,
  };

  const overrides2 = {
    Root: {
      component: (CustomFoo: React.ComponentType<*>),
    },
    Bar: CustomBar,
  };

  expect(mergeOverrides(overrides1)).toEqual({
    Root: {
      component: CustomRoot,
    },
  });

  expect(mergeOverrides(overrides1, overrides2)).toEqual({
    Root: {
      component: CustomFoo,
    },
    Bar: {
      component: CustomBar,
    },
  });
});
