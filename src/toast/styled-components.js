/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import {styled} from '../styles/index.js';
import {getSvgStyles} from '../icon/styled-components.js';
import {KIND, PLACEMENT, TYPE} from './constants.js';
import type {
  SharedStylePropsT,
  ToasterSharedStylePropsT,
  KindTypeT,
  NotificationTypeT,
  PlacementTypeT,
} from './types.js';
import type {ThemeT} from '../styles/types.js';

function getBackgroundColor(
  kind: KindTypeT,
  type: NotificationTypeT,
  theme: ThemeT,
) {
  const isInline = type === TYPE.inline;
  return {
    [KIND.info]: isInline
      ? theme.colors.notificationPrimaryBackground
      : theme.colors.toastPrimaryBackground,
    [KIND.positive]: isInline
      ? theme.colors.notificationPositiveBackground
      : theme.colors.toastPositiveBackground,
    [KIND.warning]: isInline
      ? theme.colors.notificationWarningBackground
      : theme.colors.toastWarningBackground,
    [KIND.negative]: isInline
      ? theme.colors.notificationNegativeBackground
      : theme.colors.toastNegativeBackground,
  }[kind];
}

function getFontColor(kind: KindTypeT, theme: ThemeT) {
  return {
    [KIND.info]: theme.colors.notificationPrimaryText,
    [KIND.positive]: theme.colors.notificationPositiveText,
    [KIND.warning]: theme.colors.notificationWarningText,
    [KIND.negative]: theme.colors.notificationNegativeText,
  }[kind];
}

export function getPlacement(placement: PlacementTypeT) {
  return {
    [PLACEMENT.topLeft]: {
      top: 0,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      flexDirection: 'column',
    },
    [PLACEMENT.top]: {
      top: 0,
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'column',
    },
    [PLACEMENT.topRight]: {
      top: 0,
      alignItems: 'flex-end',
      justifyContent: 'flex-start',
      flexDirection: 'column',
    },
    [PLACEMENT.bottomRight]: {
      bottom: 0,
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      flexDirection: 'column-reverse',
    },
    [PLACEMENT.bottom]: {
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'flex-end',
      flexDirection: 'column-reverse',
    },
    [PLACEMENT.bottomLeft]: {
      bottom: 0,
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
      flexDirection: 'column-reverse',
    },
  }[placement];
}

/**
 * Main component container element
 */
export const Root = styled('div', (props: ToasterSharedStylePropsT) => {
  const {$placement} = props;
  return {
    pointerEvents: 'none',
    position: 'fixed',
    right: 0,
    left: 0,
    display: 'flex',
    ...getPlacement($placement),
  };
});
Root.displayName = 'StyledRoot';

export const Body = styled('div', (props: SharedStylePropsT) => {
  const {$isVisible, $kind, $type, $theme} = props;
  const isInline = $type === TYPE.inline;
  return {
    ...$theme.typography.font350,
    pointerEvents: 'auto',
    color: isInline ? getFontColor($kind, $theme) : $theme.colors.toastText,
    height: 'auto',
    width: '288px',
    paddingTop: $theme.sizing.scale600,
    paddingRight: $theme.sizing.scale600,
    paddingBottom: $theme.sizing.scale600,
    paddingLeft: $theme.sizing.scale600,
    marginTop: $theme.sizing.scale300,
    marginBottom: $theme.sizing.scale300,
    backgroundColor:
      getBackgroundColor($kind, $type, $theme) || $theme.colors.primary500,
    borderRadius: $theme.borders.useRoundedCorners
      ? $theme.borders.radius200
      : '0px',
    boxShadow: isInline ? 'none' : $theme.lighting.shadow600,
    opacity: $isVisible ? 1 : 0,
    transitionProperty: 'all',
    transitionDuration: $theme.animation.timing100,
    transitionTimingFunction: $theme.animation.easeInOutCurve,
  };
});
Body.displayName = 'StyledBody';

/**
 * DeleteAlt icon overrides
 */
export const CloseIconSvg = styled('svg', props => {
  return {
    ...getSvgStyles(props),
    cursor: 'pointer',
    float: 'right',
  };
});
CloseIconSvg.displayName = 'StyledCloseIconSvg';
