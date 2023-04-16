import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import NativeSelect, { OptionsType } from '.';

const data = [
  {
    id: 1,
    name: 'John',
    value: 'John',
  },
  {
    id: 2,
    name: 'Doe',
    value: 'Doe',
    age: 20,
  },
  {
    id: 3,
    name: 'Miller',
    value: 'Miller',
    class: 12,
  },
  {
    id: 4,
    name: 'James',
    value: 'James',
  },
  {
    id: 5,
    name: 'Franky',
    value: 'Franky',
    disabled: true,
  },
];

export default {
  title: 'Components/NativeSelect',
  component: NativeSelect,
} as ComponentMeta<typeof NativeSelect>;

const Template: ComponentStory<typeof NativeSelect> = (args) => {
  const [value, setValue] = React.useState<OptionsType[]>([]);
  return (
    <NativeSelect {...args} selectedValue={value} setSelectedValue={setValue} />
  );
};

export const Default = Template.bind({});
Default.args = {
  options: data,
  label: 'Select Name',
  placeholder: 'Choose option from below',
};

export const WithCustomDropdownIcon = () => {
  const options = [
    {
      id: 1,
      name: 'John',
      value: 'John',
    },
    {
      id: 2,
      name: 'Doe',
      value: 'Doe',
      age: 20,
    },
    {
      id: 3,
      name: 'Miller',
      value: 'Miller',
      class: 12,
    },
    {
      id: 4,
      name: 'James',
      value: 'James',
    },
    {
      id: 5,
      name: 'Franky',
      value: 'Franky',
      disabled: true,
    },
  ];
  const [value, setValue] = React.useState<OptionsType[]>([]);
  return (
    <NativeSelect
      label="Select Name"
      placeholder="Choose option from below"
      options={options}
      selectedValue={value}
      setSelectedValue={setValue}
      dropDownIcon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="mr-2 h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      }
    />
  );
};

export const WithHelperText = () => {
  const options = [
    {
      id: 1,
      name: 'John',
      value: 'John',
    },
    {
      id: 2,
      name: 'Doe',
      value: 'Doe',
      age: 20,
    },
    {
      id: 3,
      name: 'Miller',
      value: 'Miller',
      class: 12,
    },
    {
      id: 4,
      name: 'James',
      value: 'James',
    },
    {
      id: 5,
      name: 'Franky',
      value: 'Franky',
      disabled: true,
    },
  ];
  const [value, setValue] = React.useState<OptionsType[]>([]);
  return (
    <NativeSelect
      label="Select Name"
      placeholder="Choose option from below"
      options={options}
      selectedValue={value}
      setSelectedValue={setValue}
      dropDownIcon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="mr-2 h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      }
      helperText="Please enter your full name"
    />
  );
};

export const WithErrorMessage = () => {
  const options = [
    {
      id: 1,
      name: 'John',
      value: 'John',
    },
    {
      id: 2,
      name: 'Doe',
      value: 'Doe',
      age: 20,
    },
    {
      id: 3,
      name: 'Miller',
      value: 'Miller',
      class: 12,
    },
    {
      id: 4,
      name: 'James',
      value: 'James',
    },
    {
      id: 5,
      name: 'Franky',
      value: 'Franky',
      disabled: true,
    },
  ];
  const [value, setValue] = React.useState<OptionsType[]>([]);
  return (
    <NativeSelect
      label="Select Name"
      placeholder="Choose option from below"
      options={options}
      selectedValue={value}
      setSelectedValue={setValue}
      dropDownIcon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="mr-2 h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      }
      error="This field is required"
    />
  );
};
