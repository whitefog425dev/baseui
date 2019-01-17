import React from 'react';
import {StatefulMenu} from 'baseui/menu';

const ITEMS = [
  {label: 'Item One'},
  {label: 'Item Two'},
  {label: 'Item Three', disabled: true},
  {label: 'Item Four', disabled: true},
  {label: 'Item Five'},
  {label: 'Item Six'},
  {label: 'Item Seven'},
  {label: 'Item Eight'},
  {label: 'Item Nine'},
  {label: 'Item Ten'},
  {label: 'Item Eleven'},
  {label: 'Item Twelve'},
];

export default () => (
  <StatefulMenu
    items={ITEMS}
    onItemSelect={console.log}
    overrides={{
      List: {
        style: {
          height: '150px',
          width: '350px',
        },
      },
      Option: {
        props: {
          getItemLabel: item => item.label,
        },
      },
    }}
  />
);
