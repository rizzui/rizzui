// select.stories.ts|tsx
import * as React from 'react';
import { ComponentMeta } from '@storybook/react';

import { Select } from '../components/select';

export default {
  title: 'Components/Select',
  component: Select,
  parameters: {
    viewMode: 'docs',
  },
} as ComponentMeta<typeof Select>;

const options = [
  { label: 'Apple 🍎', value: 'apple' },
  { label: 'Banana 🍌', value: 'banana' },
  { label: 'Cherry 🍒', value: 'cherry' },
  { label: 'Orange 🍊', value: 'orange' },
  { label: 'Strawberry 🍓', value: 'strawberry' },
  { label: 'Watermelon 🍉', value: 'watermelon' },
  { label: 'Pineapple 🍍', value: 'pineapple' },
  { label: 'Mango 🥭', value: 'mango' },
  { label: 'Kiwi 🥝', value: 'kiwi' },
  { label: 'Blueberry 🫐', value: 'blueberry' },
  { label: 'Peach 🍑', value: 'peach' },
  { label: 'Plum 🍑', value: 'plum' },
  { label: 'Raspberry 🍇', value: 'raspberry' },
  { label: 'Blackberry 🫐', value: 'blackberry' },
  { label: 'Pear 🍐', value: 'pear' },
  { label: 'Grapes 🍇', value: 'grapes' },
  { label: 'Lemon 🍋', value: 'lemon' },
  { label: 'Lime 🫒', value: 'lime' },
  { label: 'Cucumber 🥒', value: 'cucumber' },
  { label: 'Avocado 🥑', value: 'avocado' },
];

export const Simple = () => {
  const [value, setValue] = React.useState<any>(null);
  return (
    <div className="min-h-[380px]">
      <Select
        options={options}
        onChange={setValue}
        value={value}
        clearable={value !== null}
        onClear={() => setValue(null)}
        label="Select"
      />
    </div>
  );
};

export const LargeSize = () => {
  const [value, setValue] = React.useState<any>(null);
  return (
    <div className="min-h-[380px]">
      <Select
        options={options}
        onChange={setValue}
        value={value}
        clearable={value !== null}
        onClear={() => setValue(null)}
        size="lg"
        rounded="pill"
        shadow="xl"
        label="Select"
      />
    </div>
  );
};

export const Disabled = () => {
  const [value, setValue] = React.useState<any>(null);
  return (
    <div className="min-h-[380px]">
      <Select
        options={options}
        onChange={setValue}
        value={value}
        clearable={value !== null}
        onClear={() => setValue(null)}
        disabled
        label="Select"
      />
    </div>
  );
};

export const ErrorText = () => {
  const [value, setValue] = React.useState<any>(null);
  return (
    <div className="min-h-[380px]">
      <Select
        options={options}
        onChange={setValue}
        value={value}
        clearable={value !== null}
        onClear={() => setValue(null)}
        error="This field is required"
        label="Select"
      />
    </div>
  );
};
