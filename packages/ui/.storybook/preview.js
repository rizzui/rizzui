// .storybook/preview.js

import '../src/styles/global.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewMode: 'docs',
  options: {
    storySort: {
      order: [
        'Components',
        [
          'ActionIcon',
          'Alert',
          'Avatar',
          'Button',
          'Input',
          'Password',
          'Textarea',
          'PinCode',
          'Switch',
          'Checkbox',
          'AdvancedCheckbox',
          'CheckboxGroup',
          'Radio',
          'AdvancedRadio',
          'RadioGroup',
          'PhoneNumber',
          'NumberInput',
          'NativeSelect',
          'AdvancedSelect',
          'Rate',
          'RangeSlider',
          'Switch',
          'FileInput',
          'Announcement',
          'Badge',
          'Tag',
          'Progressbar',
          'Dropdown',
          'Text',
          'Tabs',
          'Table',
          'Pagination',
          'Collapse',
          'Tooltip',
          'Popconfirm',
          'Loader',
          'Stepper',
          'Empty',
          'Scroller',
          'Modal',
          'Drawer',
        ],
      ],
    },
  },
};
