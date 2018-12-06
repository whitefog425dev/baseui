/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
/* eslint-disable react/prefer-stateless-function */
import * as React from 'react';

import Menu from './menu.js';
import StatefulContainer from './stateful-container.js';

import type {StatefulMenuPropsT} from './types.js';

export default class StatefulMenu extends React.PureComponent<
  StatefulMenuPropsT,
> {
  static defaultProps = {
    // Mostly to satisfy flow
    ...StatefulContainer.defaultProps,
    overrides: {},
  };

  render() {
    const {overrides, ...props} = this.props;
    return (
      <StatefulContainer {...props}>
        {renderProps => <Menu {...renderProps} overrides={overrides} />}
      </StatefulContainer>
    );
  }
}
