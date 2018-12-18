/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
import * as React from 'react';
import Day from './day.js';
import {StyledWeek} from './styled-components.js';
import {
  getStartOfWeek,
  addDays,
  isDayDisabled,
  isSameDay,
} from './utils/index.js';
import {WEEKDAYS} from './constants.js';
import type {WeekPropsT} from './types.js';

export default class Week extends React.Component<WeekPropsT> {
  static defaultProps = {
    date: new Date(),
    highlightedDate: null,
    onDayClick: () => {},
    onDayMouseOver: () => {},
    onDayMouseLeave: () => {},
    onSelect: () => {},
    peekNextMonth: false,
  };

  renderDays = () => {
    const startOfWeek = getStartOfWeek(this.props.date, this.props.locale);
    const days = [];
    // $FlowFixMe
    return days.concat(
      WEEKDAYS.map((offset: number) => {
        const day = addDays(startOfWeek, offset);
        return (
          // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
          <Day
            date={day}
            disabled={isDayDisabled(day, this.props)}
            excludeDates={this.props.excludeDates}
            filterDate={this.props.filterDate}
            highlightDates={this.props.highlightDates}
            includeDates={this.props.includeDates}
            isHighlighted={isSameDay(day, this.props.highlightedDate)}
            key={offset}
            locale={this.props.locale}
            minDate={this.props.minDate}
            maxDate={this.props.maxDate}
            month={this.props.month}
            onSelect={this.props.onSelect}
            onClick={this.props.onDayClick}
            onMouseOver={this.props.onDayMouseOver}
            onMouseLeave={this.props.onDayMouseLeave}
            peekNextMonth={this.props.peekNextMonth}
            selected={isSameDay(day, this.props.selected)}
          />
        );
      }),
    );
  };

  render() {
    return <StyledWeek>{this.renderDays()}</StyledWeek>;
  }
}
