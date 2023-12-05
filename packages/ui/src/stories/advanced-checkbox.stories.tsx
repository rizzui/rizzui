// advanced-checkbox.stories.ts|tsx
import * as React from 'react';
import { ComponentMeta } from '@storybook/react';

import { AdvancedCheckbox } from '../components/advanced-checkbox';

export default {
  title: 'Components/AdvancedCheckbox',
  component: AdvancedCheckbox,
  parameters: {
    viewMode: 'docs',
  },
  // @ts-ignore
} as ComponentMeta<typeof AdvancedCheckbox>;

export const AdvancedCheckboxDefault = () => (
  <div className="flex space-x-4 rtl:space-x-reverse">
    <AdvancedCheckbox name="age" value="any" alignment="center">
      Any
    </AdvancedCheckbox>
    <AdvancedCheckbox name="age" value="one" defaultChecked alignment="center">
      1
    </AdvancedCheckbox>
    <AdvancedCheckbox name="age" value="two" alignment="center">
      2
    </AdvancedCheckbox>
    <AdvancedCheckbox name="age" value="three" disabled alignment="center">
      3
    </AdvancedCheckbox>
    <AdvancedCheckbox name="age" value="four" alignment="center">
      4
    </AdvancedCheckbox>
    <AdvancedCheckbox name="age" value="five+" alignment="center">
      5+
    </AdvancedCheckbox>
  </div>
);
