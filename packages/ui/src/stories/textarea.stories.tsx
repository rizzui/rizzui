// textarea.stories.ts|tsx
import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Textarea } from '../components/textarea';

export default {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    viewMode: 'docs',
  },
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => (
  <Textarea {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Message',
  placeholder: 'Enter your message',
};

export const WithCustomRowsCols = Template.bind({});
WithCustomRowsCols.args = {
  ...Default.args,
  rows: 4,
  cols: 50,
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate architecto aliquam nulla et! Amet corrupti a consectetur aliquid qui eius soluta! Quibusdam debitis natus optio quasi assumenda provident dolores animi?',
};

export const WithCharacterCount = () => {
  const [state, setState] = React.useState('Do not lose hope, nor be sad.');
  return (
    <Textarea
      label="Message"
      value={state}
      onChange={(e) => setState(e.target.value)}
      maxLength={100}
      renderCharacterCount={({ characterCount, maxLength }) => (
        <div className="text-right text-sm opacity-70 rtl:text-left">
          {characterCount}/{maxLength}
        </div>
      )}
    />
  );
};

export const WithClearButton = () => {
  const [state, setState] = React.useState(
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
  );
  return (
    <Textarea
      label="Message"
      value={state}
      clearable
      onClear={() => setState('')}
      onChange={(e) => setState(e.target.value)}
    />
  );
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Message',
  placeholder: 'Enter your message',
  disabled: true,
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  ...Default.args,
  helperText: 'Please enter your intro',
};

export const WithValidationError = Template.bind({});
WithValidationError.args = {
  ...Default.args,
  error: 'This field is required',
};
