/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
/* global document */
import * as React from 'react';
import memoize from 'memoize-one';
// Files
import {Button, StyledBaseButton, KIND} from '../button';
import {StatefulMenu as Menu} from '../menu';
import {
  Root as StyledRoot,
  MaxLabel as StyledMaxLabel,
  DropdownContainer as StyledDropdownContainer,
  DropdownMenu as StyledDropdownMenu,
  DropdownButton as StyledDropdownButton,
} from './styled-components';
import {ArrowLeft, ArrowRight, ArrowDown} from './icons';
import {getOverrideObject} from '../helpers/overrides';
import type {PaginationPropsT, PaginationStateT} from './types';

type MenuItemT = {
  label: number,
};

export default class Pagination extends React.PureComponent<
  PaginationPropsT,
  PaginationStateT,
> {
  static defaultProps = {
    prepositionLabel: 'of',
    overrides: {},
  };

  state = {isMenuOpen: false};

  dropdownContainerRef = React.createRef();

  onPageClick = (event: MouseEvent) => {
    const el: ?HTMLDivElement = this.dropdownContainerRef.current;
    /* eslint-disable-next-line flowtype/no-weak-types */
    if (el && !el.contains((event.target: any))) {
      this.setState({isMenuOpen: false});
    }
  };

  getMenuOptions = memoize(numPages => {
    const menuOptions = [];
    for (let i = 1; i <= numPages; i++) {
      menuOptions.push(({label: i}: MenuItemT));
    }
    return menuOptions;
  });

  onMenuItemSelect = (item: MenuItemT) => {
    const {onPageChange, currentPage} = this.props;
    const page = item.label;
    if (page !== currentPage) {
      onPageChange && onPageChange(page, currentPage);
      this.onDropdownButtonClick();
    }
  };

  onPrevClick = (...args: *) => {
    const {currentPage, onPageChange, onPrevClick} = this.props;
    onPageChange && onPageChange(currentPage - 1, currentPage);
    onPrevClick && onPrevClick(args);
  };

  onNextClick = (...args: *) => {
    const {currentPage, onPageChange, onNextClick} = this.props;
    onPageChange && onPageChange(currentPage + 1, currentPage);
    onNextClick && onNextClick(args);
  };

  onDropdownButtonClick = () => {
    const isMenuOpen = !this.state.isMenuOpen;
    // no __BROWSER__ check because click only happens client-side
    if (isMenuOpen) {
      document.addEventListener('click', this.onPageClick, {
        capture: true,
      });
    } else {
      document.removeEventListener('click', this.onPageClick, {
        capture: true,
      });
    }
    this.setState({isMenuOpen});
  };

  render() {
    const {
      overrides = {},
      currentPage,
      prepositionLabel = '',
      numPages,
    } = this.props;
    const {isMenuOpen} = this.state;

    const {component: Root, props: rootProps} = getOverrideObject(
      overrides.Root,
      StyledRoot,
    );
    const {component: PrevButton, props: prevButtonProps} = getOverrideObject(
      overrides.PrevButton,
      StyledBaseButton,
    );
    const {component: NextButton, props: nextButtonProps} = getOverrideObject(
      overrides.NextButton,
      StyledBaseButton,
    );
    const {component: MaxLabel, props: maxLabelProps} = getOverrideObject(
      overrides.MaxLabel,
      StyledMaxLabel,
    );
    const {
      component: DropdownContainer,
      props: dropdownContainerProps,
    } = getOverrideObject(overrides.DropdownContainer, StyledDropdownContainer);
    const {
      component: DropdownButton,
      props: dropdownButtonProps,
    } = getOverrideObject(overrides.DropdownButton, StyledDropdownButton);
    const {
      component: DropdownMenu,
      props: dropdownMenuProps,
    } = getOverrideObject(overrides.DropdownMenu, Menu);

    const options = this.getMenuOptions(numPages);

    return (
      <Root {...rootProps}>
        <Button
          onClick={this.onPrevClick}
          startEnhancer={ArrowLeft}
          kind={KIND.tertiary}
          overrides={{
            BaseButton: PrevButton,
          }}
          {...prevButtonProps}
        >
          Prev
        </Button>
        <DropdownContainer
          $ref={this.dropdownContainerRef}
          {...dropdownContainerProps}
        >
          <Button
            onClick={this.onDropdownButtonClick}
            endEnhancer={ArrowDown}
            kind={KIND.tertiary}
            overrides={{
              BaseButton: DropdownButton,
            }}
            {...dropdownButtonProps}
          >
            {currentPage}
          </Button>
          {isMenuOpen && (
            // $FlowFixMe
            <DropdownMenu
              items={options}
              onItemSelect={this.onMenuItemSelect}
              initialState={{
                highlightedIndex: Math.max(currentPage - 1, 0),
              }}
              overrides={{List: StyledDropdownMenu}}
              {...dropdownMenuProps}
            />
          )}
        </DropdownContainer>
        <MaxLabel
          {...maxLabelProps}
        >{`${prepositionLabel} ${numPages}`}</MaxLabel>
        <Button
          onClick={this.onNextClick}
          endEnhancer={ArrowRight}
          kind={KIND.tertiary}
          overrides={{
            BaseButton: NextButton,
          }}
          {...nextButtonProps}
        >
          Next
        </Button>
      </Root>
    );
  }
}
