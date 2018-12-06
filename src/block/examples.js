/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

// @flow

import React from 'react';
import {Block} from './index.js';
import examples from './examples-list.js';

export default {
  [examples.DEFAULT]: function Story1() {
    const colors = ['primary', 'negative', 'warning', 'positive'];
    const elements = [];

    for (const color of colors) {
      for (let x = 100; x <= 700; x += 100) {
        const colorString = `${color}${x}`;
        elements.push(
          <Block color={colorString} key={colorString}>
            {colorString}
          </Block>,
        );
      }
    }

    return elements;
  },
  [examples.FONTS]: function Story2() {
    const sizes = [
      100,
      200,
      250,
      300,
      350,
      400,
      450,
      500,
      600,
      700,
      800,
      900,
      1000,
    ];

    return sizes.map(size => {
      const fontString = `font${size}`;

      return (
        <Block key={size} font={fontString}>
          {fontString}
        </Block>
      );
    });
  },
  [examples.FLEXBOX]: function Story4() {
    const elements = [];

    for (let x = 0; x < 25; x++) {
      elements.push(
        <Block
          key={x}
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="200px"
          height="200px"
          margin="scale200"
          font="font400"
          color="primary"
          $style={{border: 'grey solid 2px'}}
        >
          Positioned with flexbox
        </Block>,
      );
    }

    return (
      <Block
        display="flex"
        direction="column"
        padding="scale3200"
        $style={{border: 'grey solid 4px'}}
        flexWrap
      >
        {elements}
      </Block>
    );
  },
  [examples.OVERRIDES]: function Story5() {
    return (
      <Block
        as="h2"
        font="font500"
        overrides={{
          Block: {
            style: {color: 'red'},
          },
        }}
      >
        These styles are provided by styletron
      </Block>
    );
  },
};
