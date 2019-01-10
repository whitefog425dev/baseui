import React from 'react';
import {Button} from 'baseui/button';

function customButton(props) {
  return <button>{props.children}</button>;
}

export default () => (
  <Button
    overrides={{
      BaseButton: customButton,
    }}
  >
    Submit
  </Button>
);
