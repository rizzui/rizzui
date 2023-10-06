// radio-group.stories.ts|tsx
import * as React from 'react';
import { ComponentMeta } from '@storybook/react';

import RadioGroup from '../components/radio-group';
import Radio from '../components/radio';
import AdvancedRadio from '../components/advanced-radio';

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
      <AdvancedRadio
        value="any"
        className="rounded-full border border-gray-300 px-6 py-1.5 hover:cursor-pointer hover:border-gray-900 peer-checked:border-gray-900 peer-checked:bg-gray-900 peer-checked:text-gray-0"
      >
        Any
      </AdvancedRadio>
      <AdvancedRadio
        value="one"
        className="cursor-not-allowed rounded-full border border-gray-300 px-6 py-1.5 text-gray-300"
        disabled
      >
        1
      </AdvancedRadio>
      <AdvancedRadio
        value="two"
        className="rounded-full border border-gray-300 px-6 py-1.5 hover:cursor-pointer hover:border-gray-900 peer-checked:border-gray-900 peer-checked:bg-gray-900 peer-checked:text-gray-0"
      >
        2
      </AdvancedRadio>
      <AdvancedRadio
        value="three"
        defaultChecked
        className="rounded-full border border-gray-300 px-6 py-1.5 hover:cursor-pointer hover:border-gray-900 peer-checked:border-gray-900 peer-checked:bg-gray-900 peer-checked:text-gray-0"
      >
        3
      </AdvancedRadio>
      <AdvancedRadio
        value="four"
        className="rounded-full border border-gray-300 px-6 py-1.5 hover:cursor-pointer hover:border-gray-900 peer-checked:border-gray-900 peer-checked:bg-gray-900 peer-checked:text-gray-0"
      >
        4
      </AdvancedRadio>
      <AdvancedRadio
        value="five+"
        className="rounded-full border border-gray-300 px-6 py-1.5 hover:cursor-pointer hover:border-gray-900 peer-checked:border-gray-900 peer-checked:bg-gray-900 peer-checked:text-gray-0"
      >
        5+
      </AdvancedRadio>
    </RadioGroup>
  );
};
