import React from 'react';
import {StatefulTooltip} from 'baseui/tooltip';
import {styled} from 'baseui';

const FakeLink = styled('span', props => ({
  borderBottom: `1px dotted ${props.$theme.colors.primary500}`,
  color: props.$theme.colors.primary500,
}));

export default () => (
  <div>
    You can use tooltips in many places, including inline text{' '}
    <StatefulTooltip
      accessibilityType={'tooltip'}
      content="Tooltips display short messages."
    >
      <FakeLink tabIndex="0">such as this</FakeLink>
    </StatefulTooltip>
    . Tooltips are essentially just a Popover with a few style tweaks, so you
    can use all the features that Popover supports.
  </div>
);
