import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from '.';

export default {
  title: 'Components/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Name',
  placeholder: 'Enter your name',
};

export const WithQuantityNumber = () => {
  const [state, setState] = React.useState(0);
  return (
    <div>
      <Input
        label="Quantity"
        type="number"
        min={0}
        step={1}
        value={state}
        onChange={(e) => setState(Number(e.target.value))}
        suffix={
          <div className="-mr-3.5 grid gap-[2px] p-0.5 rtl:-ml-3.5 rtl:-mr-0">
            <button
              type="button"
              className="rounded-[3px] bg-gray-100 py-0.5 px-1.5 hover:bg-gray-200 focus:bg-gray-200"
              onClick={() => setState((prevState) => prevState + 1)}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="h-3 w-3"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 15h14l-7-8z" />
              </svg>
            </button>
            <button
              type="button"
              className="rounded-[3px]  bg-gray-100 py-0.5 px-1.5 hover:bg-gray-200 focus:bg-gray-200"
              onClick={() => setState((prevState) => prevState - 1)}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 320 512"
                className="h-3 w-3"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                  stroke="none"
                />
              </svg>
            </button>
          </div>
        }
      />
    </div>
  );
};

export const WithPrefixAndSuffix = () => (
  <div className="grid gap-6">
    <Input
      label="URL"
      type="url"
      placeholder="mysite"
      prefix="https://"
      suffix=".com"
    />
    <Input
      label="Price"
      type="number"
      placeholder="Enter your price"
      prefix={
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth={2}
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
        >
          <path d="M0 0h24v24H0z" stroke="none" />
          <path d="M16.7 8A3 3 0 0 0 14 6h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1-2.7-2M12 3v3m0 12v3" />
        </svg>
      }
      suffix=".00"
    />
    <Input
      label="Search (Clearable)"
      type="search"
      placeholder="Enter your keyword"
      prefix={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-[18px] w-[18px]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      }
      suffix={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-[18px] w-[18px]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      }
    />
  </div>
);

export const WithCharacterCount = () => {
  const MAXLENGTH = 24;
  const [state, setState] = React.useState('Chat GPT is awesome!');
  return (
    <Input
      label="Title"
      type="text"
      value={state}
      maxLength={MAXLENGTH}
      onChange={(e) => setState(() => e.target.value)}
      suffix={`${state.length}/${MAXLENGTH}`}
      suffixClassName="opacity-70"
    />
  );
};

export const WithClearButton = () => {
  const [state, setState] = React.useState('mystore');
  return (
    <Input
      label="Store name"
      type="search"
      value={state}
      clearable
      onClear={() => setState('')}
      onChange={(e) => setState(e.target.value)}
    />
  );
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Name',
  placeholder: 'Enter your name',
  disabled: true,
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  label: 'Name',
  placeholder: 'Enter your name',
  helperText: 'Please enter your full name',
};

export const WithValidationError = Template.bind({});
WithValidationError.args = {
  label: 'Name',
  placeholder: 'Enter your name',
  error: 'This field is required',
};
