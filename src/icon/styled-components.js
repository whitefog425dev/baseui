/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
import {styled} from '../styles/index.js';
import type {StyledComponentParamsT} from './types.js';

export function getSvgStyles({$theme, $size, $color}: StyledComponentParamsT) {
  if ($size) {
    if ($theme.sizing.hasOwnProperty($size)) {
      $size = $theme.sizing[$size];
    } else if (typeof $size === 'number') {
      $size = `${$size}px`;
    } else {
      $size = $theme.sizing.scale600;
    }
  } else {
    $size = $theme.sizing.scale600;
  }
  return {
    display: 'inline-block',
    fill: $color || 'currentColor',
    color: $color || 'currentColor',
    height: $size,
    width: $size,
  };
}

export const Svg = styled('svg', getSvgStyles);
Svg.displayName = 'StyledSvg';
