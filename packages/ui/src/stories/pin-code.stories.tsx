// pin.stories.ts|tsx
import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PinCode from '../components/pin-code';

export default {
  title: 'Components/PinCode',
  component: PinCode,
  parameters: {
    viewMode: 'docs',
  },
} as ComponentMeta<typeof PinCode>;

const Template: ComponentStory<typeof PinCode> = (args) => {
  const [pin, setPin] = React.useState<string | number | undefined>();
  return <PinCode {...args} setValue={setPin} />;
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {};

export const WithCustomPlaceholder = Template.bind({});
WithCustomPlaceholder.args = {
  placeholder: '😀',
};

export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = {
  defaultValue: 1234,
};

export const WithErrorMessage = Template.bind({});
WithErrorMessage.args = {
  center: false,
  error: 'This field is required',
};
