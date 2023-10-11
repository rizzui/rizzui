// password.stories.ts|tsx
import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Password } from '../components/password';

export default {
  title: 'Components/Password',
  component: Password,
  parameters: {
    viewMode: 'docs',
  },
  // @ts-ignore
} as ComponentMeta<typeof Password>;

// @ts-ignore
const Template: ComponentStory<typeof Password> = (args) => (
  <Password {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Password',
  placeholder: 'Enter your password',
};

export const WithPrefixAndVisibilityIcon = () => (
  <div className="grid gap-6">
    <Password
      label="Password"
      placeholder="Enter your password"
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
            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
          />
        </svg>
      }
    />
    <Password
      label="Custom Visibility Icon"
      placeholder="Enter your password"
      visibilityToggleIcon={(visible) =>
        visible ? (
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 1024 1024"
            className="h-auto w-5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m800 385.104-456.96.001-16.56-74.273C298.24 205.456 347.296 100.4 459.568 70.32c111.136-29.776 209.088 33.936 237.824 141.12l13.6 53.967c4.576 17.073 22.112 27.2 39.2 22.624 17.072-4.576 27.2-22.112 22.624-39.184L759.2 194.879C721.216 53.039 588.815-30.561 443.008 8.495 296.64 47.71 227.296 187.919 264.672 327.407l12.864 57.696H224c-70.592 0-128 57.408-128 128v384c0 70.592 57.408 128 128 128h576c70.592 0 128-57.408 128-128v-384c0-70.592-57.408-128-128-128zm64 512c0 35.28-28.72 64-64 64H224c-35.28 0-64-28.72-64-64v-384c0-35.28 28.72-64 64-64h576c35.28 0 64 28.72 64 64v384zm-352-320c-35.344 0-64 28.656-64 64 0 23.632 12.96 44.032 32 55.12v104.88c0 17.664 14.336 32 32 32s32-14.336 32-32v-104.88c19.04-11.088 32-31.504 32-55.12 0-35.344-28.656-64-64-64z"
              stroke="none"
            />
          </svg>
        ) : (
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 1024 1024"
            className="h-auto w-5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M800 384h-32V261.872C768 115.024 661.744 0 510.816 0 359.28 0 256 117.472 256 261.872V384h-32c-70.592 0-128 57.408-128 128v384c0 70.592 57.408 128 128 128h576c70.592 0 128-57.408 128-128V512c0-70.592-57.408-128-128-128zM320 261.872C320 152.784 394.56 64 510.816 64 625.872 64 704 150.912 704 261.872V384H320V261.872zM864.001 896c0 35.28-28.72 64-64 64h-576c-35.28 0-64-28.72-64-64V512c0-35.28 28.72-64 64-64h576c35.28 0 64 28.72 64 64v384zm-352-320c-35.344 0-64 28.656-64 64 0 23.632 12.96 44.032 32 55.12V800c0 17.664 14.336 32 32 32s32-14.336 32-32V695.12c19.04-11.088 32-31.504 32-55.12 0-35.344-28.656-64-64-64z"
              stroke="none"
            />
          </svg>
        )
      }
    />
  </div>
);

export const WithClearButton = () => {
  const [state, setState] = React.useState('my_password');
  return (
    <Password
      label="Password"
      value={state}
      clearable
      onClear={() => setState('')}
      onChange={(e) => setState(e.target.value)}
      placeholder="Enter your password"
    />
  );
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Password',
  placeholder: 'Enter your password',
  disabled: true,
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  label: 'Password',
  placeholder: 'Enter your password',
  helperText: 'Please enter a strong password',
};

export const WithValidationError = Template.bind({});
WithValidationError.args = {
  label: 'Password',
  placeholder: 'Enter your password',
  error: 'This field is required',
};
