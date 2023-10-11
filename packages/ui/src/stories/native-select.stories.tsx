// native-select.stories.ts|tsx
import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NativeSelect } from '../components/native-select';

const options = ['John', 'Miller', 'James', 'Franky'];

export default {
  title: 'Components/NativeSelect',
  component: NativeSelect,
  parameters: {
    viewMode: 'docs',
  },
} as ComponentMeta<typeof NativeSelect>;

const Template: ComponentStory<typeof NativeSelect> = (args) => {
  return <NativeSelect {...args} options={options} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Select Name',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Select Name',
  disabled: true,
};

export const WithDisableOption = () => {
  const options = [
    {
      id: 1,
      label: 'John',
      value: 'John',
    },
    {
      id: 2,
      label: 'Doe',
      value: 'Doe',
    },
    {
      id: 3,
      label: 'Miller',
      value: 'Miller',
    },
    {
      id: 4,
      label: 'James',
      value: 'James',
    },
    {
      id: 5,
      label: 'Franky',
      value: 'Franky',
      disabled: true,
    },
  ];
  return <NativeSelect label="Store name" options={options} />;
};

export const WithClearButton = () => {
  const [state, setState] = React.useState('John');
  return (
    <NativeSelect
      label="Store name"
      value={state}
      options={['John', 'Miller', 'James', 'Franky']}
      onChange={(e) => setState(e.target.value)}
      clearable={!!state}
      onClear={() => setState('')}
    />
  );
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  label: 'Select Name',
  helperText: 'Please choose your name',
};

export const WithValidationError = Template.bind({});
WithValidationError.args = {
  label: 'Select Name',
  error: 'This field is required',
};
