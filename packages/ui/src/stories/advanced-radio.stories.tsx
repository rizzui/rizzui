// advanced-radio.stories.ts|tsx
import * as React from 'react';
import { ComponentMeta } from '@storybook/react';

import { AdvancedRadio } from '../components/advanced-radio';

export default {
  title: 'Components/AdvancedRadio',
  component: AdvancedRadio,
  parameters: {
    viewMode: 'docs',
  },
  // @ts-ignore
} as ComponentMeta<typeof AdvancedRadio>;

export const AdvancedRadioDefault = () => (
  <div className="flex flex-wrap gap-6">
    <AdvancedRadio name="age" value="any" alignment="center">
      Any
    </AdvancedRadio>
    <AdvancedRadio name="age" value="one" defaultChecked alignment="center">
      1
    </AdvancedRadio>
    <AdvancedRadio name="age" value="two" alignment="center">
      2
    </AdvancedRadio>
    <AdvancedRadio name="age" value="three" disabled alignment="center">
      3
    </AdvancedRadio>
    <AdvancedRadio name="age" value="four" alignment="center">
      4
    </AdvancedRadio>
    <AdvancedRadio name="age" value="five+" alignment="center">
      5+
    </AdvancedRadio>
  </div>
);
