import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PhoneNumber from '.';

export default {
  title: 'Components/PhoneNumber',
  component: PhoneNumber,
} as ComponentMeta<typeof PhoneNumber>;

const Template: ComponentStory<typeof PhoneNumber> = (args) => {
  const [phoneNumber, setPhoneNumber] = React.useState<string>();
  return (
    <div className="h-80">
      <PhoneNumber
        {...args}
        value={phoneNumber}
        onChange={(phone: string) => setPhoneNumber(phone)}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  country: 'us',
  preferredCountries: ['us'],
  label: 'Phone Number',
};

export const WithClearIcon = () => {
  const [state, setState] = React.useState('');
  return (
    <div className="h-80">
      <PhoneNumber
        value={state}
        country="us"
        label="Phone Number"
        preferredCountries={['us']}
        placeholder="+1 199 307 3725"
        onChange={(value: string) => setState(value)}
        clearable
        onClear={() => {
          setState('');
          console.log('clear');
        }}
      />
    </div>
  );
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  ...Default.args,
  helperText: 'Please enter your phone number',
};

export const WithErrorMessage = Template.bind({});
WithErrorMessage.args = {
  ...Default.args,
  error: 'This field is required',
};
