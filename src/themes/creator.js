/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import type {ThemeT} from '../styles/types.js';
import type {PrimitivesT} from './types.js';
import deepMerge from '../utils/deep-merge.js';

const WHITE = '#FFFFFF';

export default function createTheme(
  primitives: PrimitivesT,
  overrides?: {},
): ThemeT {
  const theme = {
    colors: {
      // Primary Palette
      primary50: primitives.primary50,
      primary100: primitives.primary100,
      primary200: primitives.primary200,
      primary300: primitives.primary300,
      primary400: primitives.primary400,
      primary: primitives.primary400,
      primary500: primitives.primary500,
      primary600: primitives.primary600,
      primary700: primitives.primary700,

      // Negative Palette
      negative50: primitives.negative50,
      negative100: primitives.negative100,
      negative200: primitives.negative200,
      negative300: primitives.negative300,
      negative400: primitives.negative400,
      negative: primitives.negative400,
      negative500: primitives.negative500,
      negative600: primitives.negative600,
      negative700: primitives.negative700,

      // Warning Palette
      warning50: primitives.warning50,
      warning100: primitives.warning100,
      warning200: primitives.warning200,
      warning300: primitives.warning300,
      warning400: primitives.warning400,
      warning: primitives.warning400,
      warning500: primitives.warning500,
      warning600: primitives.warning600,
      warning700: primitives.warning700,

      // Positive Palette
      positive50: primitives.positive50,
      positive100: primitives.positive100,
      positive200: primitives.positive200,
      positive300: primitives.positive300,
      positive400: primitives.positive400,
      positive: primitives.positive400,
      positive500: primitives.positive500,
      positive600: primitives.positive600,
      positive700: primitives.positive700,

      // Monochrome Palette
      white: primitives.mono100,
      mono100: primitives.mono100,
      mono200: primitives.mono200,
      mono300: primitives.mono300,
      mono400: primitives.mono400,
      mono500: primitives.mono500,
      mono600: primitives.mono600,
      mono700: primitives.mono700,
      mono800: primitives.mono800,
      mono900: primitives.mono900,
      mono1000: primitives.mono1000,
      black: primitives.mono1000,

      // Rating Palette,
      rating200: primitives.rating200,
      rating400: primitives.rating400,

      // Semantic Colors

      // Background
      background: primitives.mono100,
      backgroundAlt: primitives.mono100,
      backgroundInv: primitives.mono1000,

      // Foreground
      foreground: primitives.mono1000,
      foregroundAlt: primitives.mono800,
      foregroundInv: primitives.mono100,

      // Borders
      border: primitives.mono500,
      borderAlt: primitives.mono600,
      borderFocus: primitives.primary400,
      borderError: primitives.negative400,

      // Buttons
      buttonPrimaryFill: primitives.primary400,
      buttonPrimaryText: primitives.mono100, // white
      buttonPrimaryHover: primitives.primary500,
      buttonPrimaryActive: primitives.primary600,
      buttonSecondaryFill: primitives.primary50,
      buttonSecondaryText: primitives.primary400,
      buttonSecondaryHover: primitives.primary100,
      buttonSecondaryActive: primitives.primary200,
      buttonTertiaryFill: primitives.mono200,
      buttonTertiaryText: primitives.primary400,
      buttonTertiaryHover: primitives.mono400,
      buttonTertiaryActive: primitives.mono500,
      buttonMinimalFill: 'transparent',
      buttonMinimalText: primitives.primary400,
      buttonMinimalHover: primitives.mono200,
      buttonMinimalActive: primitives.mono400,
      buttonDisabledFill: primitives.mono300,
      buttonDisabledText: primitives.mono600,

      // Breadcrumbs
      breadcrumbsText: primitives.mono900,
      breadcrumbsSeparatorFill: primitives.mono700,

      // Links
      linkText: primitives.primary400,
      linkVisited: primitives.primary500,
      linkHover: primitives.primary600,

      // Shadow
      shadowFocus: 'rgba(39, 110, 241, 0.32)',
      shadowError: 'rgba(229, 73, 55, 0.32)',

      // List
      listHeaderFill: WHITE,
      listBodyFill: primitives.mono200,
      listIconFill: primitives.mono500,
      listBorder: primitives.mono500,

      // Tick
      tickFill: 'transparent',
      tickFillHover: primitives.mono400,
      tickFillActive: primitives.mono500,
      tickFillSelected: primitives.primary400,
      tickFillSelectedHover: primitives.primary500,
      tickFillSelectedHoverActive: primitives.primary600,
      tickFillDisabled: primitives.mono400,
      tickBorder: primitives.mono700,
      tickMarkFill: WHITE,

      // Slider
      sliderTrackFill: primitives.mono600,
      sliderTrackFillHover: primitives.mono700,
      sliderTrackFillActive: primitives.mono800,
      sliderTrackFillSelected: primitives.primary400,
      sliderTrackFillSelectedHover: primitives.primary500,
      sliderTrackFillSelectedActive: primitives.primary600,
      sliderTrackFillDisabled: primitives.mono600,
      sliderHandleFill: WHITE,
      sliderHandleFillHover: WHITE,
      sliderHandleFillActive: WHITE,
      sliderHandleFillSelected: WHITE,
      sliderHandleFillSelectedHover: WHITE,
      sliderHandleFillSelectedActive: WHITE,
      sliderHandleFillDisabled: primitives.mono500,
      sliderBorder: primitives.mono500,
      sliderBorderHover: primitives.primary400,
      sliderBorderDisabled: primitives.mono600,

      // Inputs
      inputFill: primitives.mono200,
      inputFillError: primitives.negative50,
      inputFillDisabled: primitives.mono300,
      inputTextDisabled: primitives.mono600,

      // Menu
      menuFillHover: primitives.mono300,

      // Notification
      notificationPrimaryBackground: primitives.primary50,
      notificationPrimaryText: primitives.primary500,
      notificationPositiveBackground: primitives.positive50,
      notificationPositiveText: primitives.positive500,
      notificationWarningBackground: primitives.warning50,
      notificationWarningText: primitives.warning500,
      notificationNegativeBackground: primitives.negative50,
      notificationNegativeText: primitives.negative500,

      // Toast
      toastText: WHITE,
      toastPrimaryBackground: primitives.primary500,
      toastPositiveBackground: primitives.positive500,
      toastWarningBackground: primitives.warning500,
      toastNegativeBackground: primitives.negative500,
    },
    typography: {
      font100: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '11px',
        fontWeight: 'normal',
        lineHeight: '16px',
      },
      font200: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '12px',
        fontWeight: 'normal',
        lineHeight: '20px',
      },
      font250: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '12px',
        fontWeight: 'bold',
        lineHeight: '20px',
      },
      font300: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '14px',
        fontWeight: 'normal',
        lineHeight: '24px',
      },
      font350: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '14px',
        fontWeight: 'bold',
        lineHeight: '24px',
      },
      font400: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '16px',
        fontWeight: 'normal',
        lineHeight: '28px',
      },
      font450: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '16px',
        fontWeight: 'bold',
        lineHeight: '28px',
      },
      font500: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '20px',
        fontWeight: 'bold',
        lineHeight: '28px',
      },
      font600: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '24px',
        fontWeight: 'bold',
        lineHeight: '36px',
      },
      font700: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '28px',
        fontWeight: 'bold',
        lineHeight: '40px',
      },
      font800: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '32px',
        fontWeight: 'bold',
        lineHeight: '48px',
      },
      font900: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '40px',
        fontWeight: 'bold',
        lineHeight: '56px',
      },
      font1000: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '56px',
        fontWeight: 'normal',
        lineHeight: '80px',
      },
    },
    sizing: {
      scale0: '2px',
      scale100: '4px',
      scale200: '6px',
      scale300: '8px',
      scale400: '10px',
      scale500: '12px',
      scale550: '14px',
      scale600: '16px',
      scale700: '20px',
      scale800: '24px',
      scale900: '32px',
      scale1000: '40px',
      scale1200: '48px',
      scale1400: '56px',
      scale1600: '64px',
      scale2400: '96px',
      scale3200: '128px',
      scale4800: '192px',
    },
    lighting: {
      shadow400: '0 1px 4px hsla(0, 0%, 0%, 0.16)',
      shadow500: '0 2px 8px hsla(0, 0%, 0%, 0.16)',
      shadow600: '0 4px 16px hsla(0, 0%, 0%, 0.16)',
      shadow700: '0 8px 24px hsla(0, 0%, 0%, 0.16)',
      overlay0: 'inset 0 0 0 1000px hsla(0, 0%, 0%, 0)',
      overlay100: 'inset 0 0 0 1000px hsla(0, 0%, 0%, 0.04)',
      overlay200: 'inset 0 0 0 1000px hsla(0, 0%, 0%, 0.08)',
      overlay300: 'inset 0 0 0 1000px hsla(0, 0%, 0%, 0.12)',
      overlay400: 'inset 0 0 0 1000px hsla(0, 0%, 0%, 0.16)',
      overlay500: 'inset 0 0 0 1000px hsla(0, 0%, 0%, 0.2)',
      overlay600: 'inset 0 0 0 1000px hsla(0, 0%, 0%, 0.24)',
    },
    borders: {
      border100: {
        borderColor: 'hsla(0, 0%, 0%, 0.04)',
        borderStyle: 'solid',
        borderWidth: '1px',
      },
      border200: {
        borderColor: 'hsla(0, 0%, 0%, 0.08)',
        borderStyle: 'solid',
        borderWidth: '1px',
      },
      border300: {
        borderColor: 'hsla(0, 0%, 0%, 0.12)',
        borderStyle: 'solid',
        borderWidth: '1px',
      },
      border400: {
        borderColor: 'hsla(0, 0%, 0%, 0.16)',
        borderStyle: 'solid',
        borderWidth: '1px',
      },
      border500: {
        borderColor: 'hsla(0, 0%, 0%, 0.2)',
        borderStyle: 'solid',
        borderWidth: '1px',
      },
      border600: {
        borderColor: 'hsla(0, 0%, 0%, 0.24)',
        borderStyle: 'solid',
        borderWidth: '1px',
      },
      radius100: '2px',
      radius200: '4px',
      radius300: '8px',
      radius400: '12px',
      useRoundedCorners: true,
    },
    animation: {
      timing100: '0.25s',
      timing400: '0.4s',
      timing700: '0.6s',
      easeOutCurve: 'cubic-bezier(.2, .8, .4, 1)',
      easeInCurve: 'cubic-bezier(.8, .2, .6, 1)',
      easeInOutCurve: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    zIndex: {
      modal: 2000,
    },
    tooltip: {
      backgroundColor: primitives.mono900,
    },
  };

  // to remove the flowfixme, we have to make deepMerge accept a ThemeT
  // $FlowFixMe
  return deepMerge(theme, overrides);
}
