/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import * as React from 'react';

import {getOverrides} from '../helpers/overrides.js';

import {OPTION_LIST_SIZE} from './constants.js';
import MaybeChildMenu from './maybe-child-menu.js';
import {ListItem as StyledListItem} from './styled-components.js';
import type {OptionListPropsT} from './types.js';

export default function OptionList({
  item,
  getChildMenu,
  getItemLabel,
  size,
  overrides,
  $isHighlighted,
  ...restProps
}: OptionListPropsT) {
  const [ListItem, listItemProps] = getOverrides(
    overrides.ListItem,
    StyledListItem,
  );
  const sharedProps = {
    $size: size,
    $isHighlighted,
  };

  return (
    <MaybeChildMenu getChildMenu={getChildMenu} item={item}>
      <ListItem {...sharedProps} {...restProps} {...listItemProps}>
        {getItemLabel({isHighlighted: $isHighlighted, ...item})}
      </ListItem>
    </MaybeChildMenu>
  );
}

OptionList.defaultProps = {
  getItemLabel: (item: *) => (item ? item.label : ''),
  size: OPTION_LIST_SIZE.default,
  overrides: {},
};
