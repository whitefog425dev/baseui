/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
/* eslint-disable flowtype/generic-spacing */
import * as React from 'react';
import {default as TabPanel} from './tab-panel.js';
import type {ThemeT} from '../styles/types.js';
import type {OverrideT} from '../helpers/overrides.js';
import {ORIENTATION, STATE_CHANGE_TYPE} from './constants.js';

export type StatefulTabsStateT = {
  activeKey: React.Key,
};

export type StateChangeTypeT = $Keys<typeof STATE_CHANGE_TYPE>;

export type StateReducerT = (
  stateChangeType: StateChangeTypeT,
  nextState: StatefulTabsStateT,
  currentState: StatefulTabsStateT,
) => StatefulTabsStateT;

export type TabsOverridesT<T> = {
  Root?: OverrideT<T>,
  TabBar?: OverrideT<T>,
  TabContent?: OverrideT<T>,
};

export type TabOverridesT<T> = {
  Tab?: OverrideT<T>,
};

export type OnChangeHandlerT = ({activeKey: React.Key}) => void;

export type TabsPropsT = {
  /** An array of TabPanel items. */
  children: React.ChildrenArray<React.Element<typeof TabPanel>>,
  /**  Key of the the tab to be selected. */
  activeKey: React.Key,
  /** If set to true all its tabs will be disabled */
  disabled?: boolean,
  /** Change handler that is called every time a new tab is selected */
  onChange?: OnChangeHandlerT,
  /** Sets the orientation of the Tab component */
  orientation?: $Values<typeof ORIENTATION>,
  overrides?: TabsOverridesT<$Diff<SharedStylePropsArgT, {$active?: ?boolean}>>,
};

export type StatefulTabsPropsT = $Diff<TabsPropsT, {activeKey: React.Key}> & {
  /**  Initial state of the component */
  initialState?: StatefulTabsStateT,
  /**  A state change handler. */
  stateReducer: StateReducerT,
};

export type TabPanelPropsT = {
  children: React.ChildrenArray<React.Node>,
  /** Sets the tab to disabled */
  disabled?: boolean,
  active?: boolean,
  /**  Unique key for the tab. Defaults to the child index. */
  key?: React.Key,
  /** onClick handler for the Tab element */
  onClick?: (e: Event) => void,
  /** onKeyDown handler for the Tab element */
  onKeyDown?: (e: KeyboardEvent) => void,
  /** onSelect handler for the Tab element */
  onSelect?: () => void,
  overrides?: TabOverridesT<SharedStylePropsArgT>,
  /** Title of the Tab to be shown in the Tab bar */
  title?: React.Node,
};

export type TabPropsT = TabPanelPropsT & {
  id?: string,
  $orientation?: $Values<typeof ORIENTATION>,
};

export type SharedStylePropsArgT = {
  $disabled: ?boolean,
  $active?: ?boolean,
  $orientation?: $Values<typeof ORIENTATION>,
  // Styletron stuff
  $as?: string,
  // styled function wrapper related
  $style?: ?{},
  /* eslint-disable flowtype/no-weak-types */
  $ref?: React.Ref<any>,
};

export type SharedStylePropsT = SharedStylePropsArgT & {
  $theme: ThemeT,
};
