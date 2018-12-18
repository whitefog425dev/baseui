/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
import * as React from 'react';
import Week from './week.js';
import {StyledMonth} from './styled-components.js';
import {
  formatDate,
  addDays,
  isSameMonth,
  getStartOfWeek,
  getStartOfMonth,
  getMonth,
  addWeeks,
} from './utils/index.js';
import type {MonthPropsT} from './types.js';

const defaultProps = {
  date: new Date(),
  excludeDates: null,
  filterDate: null,
  highlightDates: null,
  includeDates: null,
  locale: null,
  maxDate: null,
  minDate: null,
  month: null,
  onDayClick: () => {},
  onDayMouseOver: () => {},
  onDayMouseLeave: () => {},
  peekNextMonth: false,
  selected: null,
};

export default class CalendarMonth extends React.Component<MonthPropsT> {
  static defaultProps = defaultProps;

  isWeekInMonth = (startOfWeek: Date) => {
    const date = this.props.date;
    const endOfWeek = addDays(startOfWeek, 6);
    return isSameMonth(startOfWeek, date) || isSameMonth(endOfWeek, date);
  };

  renderWeeks = () => {
    const weeks = [];
    let currentWeekStart = getStartOfWeek(
      getStartOfMonth(this.props.date),
      this.props.locale,
    );
    let i = 0;
    let isWithinMonth = true;

    while (isWithinMonth) {
      weeks.push(
        <Week
          date={currentWeekStart}
          excludeDates={this.props.excludeDates}
          filterDate={this.props.filterDate}
          highlightedDate={this.props.highlightedDate}
          highlightDates={this.props.highlightDates}
          includeDates={this.props.includeDates}
          key={i}
          locale={this.props.locale}
          minDate={this.props.minDate}
          maxDate={this.props.maxDate}
          month={getMonth(this.props.date)}
          onDayClick={this.props.onDayClick}
          onDayMouseOver={this.props.onDayMouseOver}
          onDayMouseLeave={this.props.onDayMouseLeave}
          onSelect={this.props.onSelect}
          peekNextMonth={this.props.peekNextMonth}
          selected={this.props.selected}
        />,
      );
      i++;
      currentWeekStart = addWeeks(currentWeekStart, 1);
      // It will break on the next week if the week is out of the month
      isWithinMonth = this.isWeekInMonth(currentWeekStart);
    }
    return weeks;
  };

  render() {
    return (
      <StyledMonth
        role="listbox"
        aria-label={`month-${formatDate(this.props.date, 'YYYY-MM')}`}
      >
        {this.renderWeeks()}
      </StyledMonth>
    );
  }
}
