import React from 'react';
import {Avatar} from 'baseui/avatar';

export default () => (
  <React.Fragment>
    {['scale800', 'scale1000', 'scale1200', 'scale1400', '64px'].map(
      (size, index) => (
        <Avatar
          name={`user name # ${index}`}
          size={size}
          src="https://not-a-real-image.png"
          key={size}
        />
      ),
    )}
  </React.Fragment>
);
