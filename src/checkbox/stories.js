/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
/* global module */
import {storiesOf} from '@storybook/react';
import {withReadme} from 'storybook-readme';

import CheckboxReadme from './README.md';
import examples from './examples.js';
import examplesToggle from './examples-toggle.js';

Object.entries(examples).forEach(([description, example]) =>
  storiesOf('Checkbox', module)
    .addDecorator(withReadme(CheckboxReadme))
    // $FlowFixMe
    .add(description, example),
);

Object.entries(examplesToggle).forEach(([description, example]) =>
  storiesOf('Toggle', module)
    .addDecorator(withReadme(CheckboxReadme))
    // $FlowFixMe
    .add(description, example),
);
