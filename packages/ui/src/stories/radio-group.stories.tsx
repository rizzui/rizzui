// radio-group.stories.ts|tsx
import * as React from 'react';
import { ComponentMeta } from '@storybook/react';

import { RadioGroup } from '../components/radio-group';
import { Radio } from '../components/radio';
import { AdvancedRadio } from '../components/advanced-radio';

export default {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: {
    viewMode: 'docs',
  },
} as ComponentMeta<typeof RadioGroup>;

export const WithRadio = () => {
  const [value, setValue] = React.useState('');
  return (
    <RadioGroup value={value} setValue={setValue} className="flex gap-4">
      <Radio label="Apple" value="apple" />
      <Radio label="Pear" value="pear" />
      <Radio label="Orange" value="orange" disabled />
      <Radio label="Blueberry" value="blueberry" />
    </RadioGroup>
  );
};

export const WithAdvancedRadio = () => {
  const [value, setValue] = React.useState('two');
  return (
    <RadioGroup value={value} setValue={setValue} className="flex gap-4">
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
    </RadioGroup>
  );
};
