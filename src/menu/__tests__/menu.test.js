/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
import React from 'react';
import {mount} from 'enzyme';
import {List} from '../styled-components.js';
import OptionList from '../option-list.js';
import Menu from '../menu.js';

const mockItems = [{label: 'item1'}, {label: 'item2'}];

function getSharedProps() {
  return {
    items: mockItems,
    getItemLabel: item => item.label,
    rootRef: React.createRef(),
  };
}

describe('Menu Stateless Component', () => {
  test('basic renders', () => {
    const component = mount(<Menu {...getSharedProps()} />);

    expect(component.find(List)).toExist();
    expect(component.find(List)).toHaveProp({
      $ref: React.createRef(),
    });

    expect(component.find(OptionList)).toExist();

    component.setProps({
      getRequiredItemProps: (item, index) => ({
        key: String(index),
        isHighlighted: true,
      }),
    });
    expect(component.find(OptionList).first()).toHaveProp({
      $isHighlighted: true,
    });
  });

  test('renders with components overrides', () => {
    const NewOption = () => <div />;
    const props = {
      ...getSharedProps(),
      overrides: {
        Option: {
          component: NewOption,
          props: {
            custom: 'prop',
          },
        },
      },
    };
    const component = mount(<Menu {...props} />);
    expect(component.find(OptionList)).not.toExist();
    expect(component.find(NewOption)).toExist();
    expect(
      component
        .find(NewOption)
        .first()
        .prop('custom'),
    ).toEqual('prop');
  });
});
