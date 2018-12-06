/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
import React from 'react';
// eslint-disable-next-line import/no-named-default
import StatefulContainer from './stateful-radiogroup-container.js';
// eslint-disable-next-line import/no-named-default
import RadioGroup from './radiogroup.js';
import type {PropsT, StatefulRadioGroupPropsT} from './types.js';
// Styled elements

const StatefulRadioGroup = function(props: StatefulRadioGroupPropsT) {
  const {children} = props;
  return (
    <StatefulContainer {...props}>
      {(childrenProps: PropsT) => (
        <RadioGroup {...childrenProps}>{children}</RadioGroup>
      )}
    </StatefulContainer>
  );
};
StatefulRadioGroup.displayName = 'StatefulRadioGroup';
export default StatefulRadioGroup;
