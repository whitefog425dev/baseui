/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
/* eslint-disable */
import React from 'react';
import {mount} from 'enzyme';

import styled from '../styled.js';
import {
  withStyletronProvider,
  withThemeProvider,
} from '../../test/test-utils.js';
import {LightTheme} from '../../themes/index.js';

jest.unmock('../styled.js');

test('styled', () => {
  const StyledMockButton = styled('button', ({$theme}) => ({
    backgroundColor: $theme.colors.primary400,
  }));

  const TestComponent = withStyletronProvider(
    withThemeProvider(() => <StyledMockButton id="testButton" />),
  );
  const wrapper = mount(<TestComponent />);
  const button = wrapper
    .find('#testButton')
    .children()
    .at(0);
  expect(button.props().$theme).toBe(LightTheme);
  wrapper.unmount();
});

test('styled override prop', () => {
  const StyledMockButton = styled('button', {
    color: 'red',
  });

  const styleFn = props => {
    return {color: props.$color};
  };

  const TestComponent = withStyletronProvider(
    withThemeProvider(() => (
      <div>
        <StyledMockButton id="testButton1" />
        <StyledMockButton id="testButton2" $style={{color: 'blue'}} />
        <StyledMockButton id="testButton3" $style={{borderRadius: '2px'}} />
        <StyledMockButton id="testButton4" $color="red" $style={styleFn} />
        <StyledMockButton id="testButton5" $color="blue" $style={styleFn} />
      </div>
    )),
  );

  const wrapper = mount(<TestComponent />);

  // First button (no overrides) should have single class for red text color
  const button1 = wrapper.find('button#testButton1').getDOMNode();
  expect(button1.classList).toHaveLength(1);
  const colorRedClass = button1.classList.item(0);

  // Second button should have single class for blue text
  const button2 = wrapper.find('button#testButton2').getDOMNode();
  expect(button2.classList).toHaveLength(1);
  expect(button2.classList.item(0)).not.toBe(colorRedClass);
  const colorBlueClass = button2.classList.item(0);

  // Third button should have 2 classes, one for red text, one for border radius
  const button3 = wrapper.find('button#testButton3').getDOMNode();
  expect(button3.classList).toHaveLength(2);
  expect(button3.classList).toContain(colorRedClass);

  // Fourth button should have single red class
  const button4 = wrapper.find('button#testButton4').getDOMNode();
  expect(button4.classList).toHaveLength(1);
  expect(button4.classList).toContain(colorRedClass);

  // Fifth button should have single blue class
  const button5 = wrapper.find('button#testButton5').getDOMNode();
  expect(button5.classList).toHaveLength(1);
  expect(button5.classList).toContain(colorBlueClass);

  wrapper.unmount();
});

test('styled override styled component', () => {
  const StyledBase = styled('div', {
    color: 'red',
  });
  const StyledBaseOverride = styled(StyledBase, {
    color: 'blue',
  });
  const BaseComp = props => <div {...props} />;
  const StyledBaseComp = styled(BaseComp, {color: 'black'});
  const TestComponent = withStyletronProvider(() => (
    <div>
      <StyledBase />
      <StyledBaseOverride />
      <StyledBaseComp />
    </div>
  ));

  const wrapper = mount(<TestComponent />);

  const base = wrapper.find(StyledBase).getDOMNode();
  expect(base.classList).toHaveLength(1);
  const redColorClass = base.classList.item(0);

  // BaseOverride should not have red color class
  const override = wrapper.find(StyledBaseOverride).getDOMNode();
  expect(override.classList).toHaveLength(1);
  expect(override.classList).not.toContain(redColorClass);

  // Making sure this doesn't throw an error
  const styledBase = wrapper.find(StyledBaseComp).getDOMNode();
  expect(styledBase.classList).toHaveLength(1);

  wrapper.unmount();
});
