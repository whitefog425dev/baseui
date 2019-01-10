/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
/* eslint-disable flowtype/generic-spacing */
import * as React from 'react';
import type {ThemeT} from '../styles/types.js';
import type {OverrideT} from '../helpers/overrides.js';
import {SIZE, ROLE, CLOSE_SOURCE} from './constants.js';

export type SizeT = $Keys<typeof SIZE>;
export type SizePropT = SizeT | number | string;

export type RoleT = $Keys<typeof ROLE>;
export type RolePropT = RoleT | string;

export type CloseSourceT = $Keys<typeof CLOSE_SOURCE>;

export type OverridesT = {
  Root?: OverrideT<SharedStylePropsArgT>,
  Backdrop?: OverrideT<SharedStylePropsArgT>,
  Dialog?: OverrideT<SharedStylePropsArgT>,
  DialogContainer?: OverrideT<SharedStylePropsArgT>,
  Close?: OverrideT<SharedStylePropsArgT>,
};

export type ElementRefT = {current: ?React.ElementRef<'div'>};

// Props shared by all flavors of modal
export type ModalPropsT = {
  /** Sets whether the Modal should be displayed by easing in and out */
  animate: boolean,
  /** Set to false if modal shouldn't autofocus on its content.
   *  Moving focus into a newly opened modal is important for accessibility purposes.
   *  If you set this to false, you should manually trigger focus on another element in the modal. */
  autofocus: boolean,
  /** Modal content. The children-as-function API may be preferable
   * for performance reasons (wont render until opened) */
  children?: React.Node | (() => React.Node),
  /** Whether the modal should be closeable by the user
   *  (either via escape, backdrop click, etc). You can set this to
   * false if your modal has an action that the user must take before closing.*/
  closeable: boolean,
  isOpen: boolean,
  /** Where to mount the modal */
  mountNode?: HTMLElement,
  /** A callback that is invoked when the modal will close.
   * Callback is passed a constant identifying what triggered the close. */
  onClose?: ({
    closeSource?: CloseSourceT,
  }) => void,
  overrides: OverridesT,
  /** Which accessibility role this modal should have. */
  role: RolePropT,
  /** Controls the size of the modal (primarily width).
   * Can be a SIZE constant or css width property value. */
  size: SizePropT,
};

export type ModalPropsWithoutChildrenT = $Diff<
  ModalPropsT,
  {children: ?React.Node},
>;

export type ModalStateT = {
  isVisible: boolean,
  mounted: boolean,
};

export type SharedStylePropsArgT = {
  children?: React.Node,
  $animate: boolean,
  $isVisible: boolean,
  $isOpen: boolean,
  $size: SizePropT,
  $role: RolePropT,
  $closeable: boolean,
  // Styletron stuff
  $as?: string,
  // styled function wrapper related
  $style?: ?{},
  // TODO(#406): Get this to work without 'any'
  /* eslint-disable-next-line flowtype/no-weak-types */
  $ref?: React.Ref<any>,
};

export type SharedStylePropsT = SharedStylePropsArgT & {
  $theme: ThemeT,
};

export type StyledComponentPropT = {
  $theme: ThemeT,
};
