/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
import * as React from 'react';
import {getOverrides} from '../helpers/overrides';
import {Tag} from '../tag';

// eslint-disable-next-line flowtype/no-weak-types
export default function MultiValue(props: any) {
  const {overrides = {}, removeValue, ...rest} = props;
  const [MultiValue, multiValueProps] = getOverrides(overrides.MultiValue, Tag);
  return (
    <MultiValue
      overrides={{
        Root: {
          style: {
            marginRight: '0',
            marginBottom: '0',
          },
        },
      }}
      onActionClick={removeValue}
      {...rest}
      {...multiValueProps}
    >
      {props.children}
    </MultiValue>
  );
}
