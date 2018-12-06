/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
import {styled} from '../styles/index.js';
import {
  getInputStyles,
  getInputContainerStyles,
} from '../input/styled-components.js';

export const TextareaContainer = styled('div', props => {});
TextareaContainer.displayName = 'StyledTextareaContainer';

export const Textarea = styled('textarea', props => {
  return {
    ...getInputStyles(props),
    ...getInputContainerStyles(props),
  };
});
Textarea.displayName = 'StyledTextarea';
