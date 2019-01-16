import React from 'react';
import {Notification, KIND} from 'baseui/notification';

export default () => (
  <React.Fragment>
    <Notification kind={KIND.positive}>Positive notification</Notification>
    <Notification kind={KIND.warning}>Warning notification</Notification>
    <Notification kind={KIND.negative}>Negative notification</Notification>
  </React.Fragment>
);
