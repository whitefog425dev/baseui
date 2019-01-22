/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* eslint-disable flowtype/require-valid-file-annotation */
/* eslint-env node */

const routes = [
  {
    text: 'Getting started',
    path: '/getting-started',
    children: [
      {
        text: 'Playground',
        path: '/playground',
      },
      {
        text: 'Versioning policy',
        path: '/versioning-policy',
      },
    ],
  },
  {
    text: 'Theming',
    path: '/custom-themes',
    children: [
      {
        text: 'Theming values',
        path: '/theming-values',
      },
      {
        text: 'Understanding Overrides',
        path: '/understanding-overrides',
      },
    ],
  },
  {
    components: true,
    text: 'Components',
    children: [
      {
        text: 'Basic Inputs',
        children: [
          {
            text: 'Button',
            path: '/components/button',
          },
          {
            text: 'ButtonGroup',
            path: '/components/button-group',
          },
          {
            text: 'Checkbox',
            path: '/components/checkbox',
          },
          {
            text: 'Input',
            path: '/components/input',
          },
          {
            text: 'Slider',
            path: '/components/slider',
          },
          {
            text: 'Radio',
            path: '/components/radio',
          },
          {
            text: 'Textarea',
            path: '/components/textarea',
          },
        ],
      },
      {
        text: 'Navigation',
        children: [
          {
            text: 'Breadcrumbs',
            path: '/components/breadcrumbs',
          },
          {
            text: 'Header navigation',
            path: '/components/header-navigation',
          },
          {
            text: 'Pagination',
            path: '/components/pagination',
          },
          {
            text: 'Tab',
            path: '/components/tabs',
          },
        ],
      },
      {
        text: 'Content',
        children: [
          {
            text: 'Accordion',
            path: '/components/accordion',
          },
          {
            text: 'Avatar',
            path: '/components/avatar',
          },
          {
            text: 'Drag and Drop List',
            path: '/components/dnd-list',
          },
          {
            text: 'Icon',
            path: '/components/icon',
          },
          {
            text: 'Tag',
            path: '/components/tag',
          },
        ],
      },
      {
        text: 'Pickers',
        children: [
          {
            text: 'Menu',
            path: '/components/menu',
          },
          {
            text: 'Rating',
            path: '/components/rating',
          },
          {
            text: 'Select',
            path: '/components/select',
          },
        ],
      },
      {
        text: 'Progress & Validation',
        children: [
          {
            text: 'Notification',
            path: '/components/notification',
          },
          {
            text: 'ProgressBar',
            path: '/components/progress-bar',
          },
          {
            text: 'Progress steps',
            path: '/components/progress-steps',
          },
          {
            text: 'Spinner',
            path: '/components/spinner',
          },
          {
            text: 'Toast',
            path: '/components/toast',
          },
        ],
      },
      {
        text: 'Surfaces',
        children: [
          {
            text: 'Card',
            path: '/components/card',
          },
          {
            text: 'Modal',
            path: '/components/modal',
          },
          {
            text: 'Popover',
            path: '/components/popover',
          },
          {
            text: 'Tooltip',
            path: '/components/tooltip',
          },
        ],
      },
      {
        text: 'Utility',
        children: [
          {
            text: 'Block',
            path: '/components/block',
          },
        ],
      },
    ],
  },
];

export default routes;
