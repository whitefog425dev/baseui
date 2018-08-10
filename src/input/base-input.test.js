// @flow
import React from 'react';
import {mount} from 'enzyme';
import {BaseInput} from './index';

test('BaseInput - basic functionality', () => {
  const props = {
    value: 'input value',
    placeholder: 'Placeholder',
    onFocus: jest.fn(),
    onBlur: jest.fn(),
    onChange: jest.fn(),
    override: {
      Before: jest.fn().mockImplementation(() => <span />),
      After: jest.fn().mockImplementation(() => <span />),
    },
  };

  // $FlowFixMe
  const wrapper = mount(<BaseInput {...props} />);
  expect(wrapper).toHaveState('isFocused', false);

  // Renders input, before and after
  const renderedInput = wrapper.find('input').first();
  expect(renderedInput).toExist();
  expect(renderedInput.props()).toMatchSnapshot('Base input has correct props');

  expect(renderedInput.props().onFocus).toEqual(wrapper.instance().onFocus);
  expect(renderedInput.props().onBlur).toEqual(wrapper.instance().onBlur);

  const renderedBefore = wrapper.find(props.override.Before);
  expect(renderedBefore).toHaveLength(1);
  expect(renderedBefore.props()).toMatchSnapshot('Before gets correct props');

  const renderedAfter = wrapper.find(props.override.After);
  expect(renderedAfter).toHaveLength(1);
  expect(renderedAfter.props()).toMatchSnapshot('After gets correct props');

  // onFocus handler from props is called
  renderedInput.simulate('focus');
  expect(props.onFocus).toBeCalled();
  expect(wrapper).toHaveState('isFocused', true);

  // onBlur handler from props is called
  renderedInput.simulate('blur');
  expect(props.onBlur).toBeCalled();
  expect(wrapper).toHaveState('isFocused', false);

  // onChange handler from props is called
  renderedInput.simulate('change');
  expect(props.onChange).toBeCalled();

  // Correct props passed when error state
  wrapper.setProps({error: true});

  const updatedBefore = wrapper.find(props.override.Before);
  expect(updatedBefore.props()).toMatchSnapshot(
    'Before gets correct error prop',
  );

  const updatedAfter = wrapper.find(props.override.After);
  expect(updatedAfter.props()).toMatchSnapshot('After gets correct error prop');
});

test('BaseInput - autoFocus sets the initial focus state', () => {
  const props = {
    autoFocus: true,
    onFocus: jest.fn(),
    onChange: jest.fn(),
  };

  // $FlowFixMe
  const wrapper = mount(<BaseInput {...props} />);
  // Is focused when mount
  expect(wrapper).toHaveState('isFocused', true);
});

test('BaseInput - inputRef from props', () => {
  const focus = jest.fn();
  const props = {
    autoFocus: true,
    onFocus: jest.fn(),
    onChange: jest.fn(),
    inputRef: {current: {focus}},
  };

  // $FlowFixMe
  const wrapper = mount(<BaseInput {...props} />);
  // Is focused when mount
  expect(wrapper).toHaveState('isFocused', true);
  // ref's focus methos is called
  expect(focus).toBeCalled();
});
