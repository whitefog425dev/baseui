import React from 'react';
import {StatefulCheckbox, STYLE_TYPE} from 'baseui/checkbox';

export default () => (
  <React.Fragment>
    <StatefulCheckbox onChange={console.log} checkmarkType={STYLE_TYPE.toggle}>
      toggle me
    </StatefulCheckbox>
    <StatefulCheckbox
      disabled
      onChange={console.log}
      checkmarkType={STYLE_TYPE.toggle}
    >
      disabled toggle
    </StatefulCheckbox>
  </React.Fragment>
);
