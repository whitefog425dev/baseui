import React from 'react';
import {Button} from 'baseui/button';
import {StatefulButtonGroup} from 'baseui/button-group';

export default () => (
  <StatefulButtonGroup
    mode="checkbox"
    kind="secondary"
    initialState={{selected: [0, 1]}}
  >
    <Button>Label</Button>
    <Button>Label</Button>
    <Button>Label</Button>
  </StatefulButtonGroup>
);
