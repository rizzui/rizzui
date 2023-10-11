// radio.stories.tsx
import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Radio } from '../components/radio';

export default {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    viewMode: 'docs',
  },
  // @ts-ignore
} as ComponentMeta<typeof Radio>;

// @ts-ignore
const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Yes',
  value: 'yes',
  className: 'm-2',
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  ...Default.args,
  label: 'John',
  value: 'john',
  helperText: 'Hi! My name is John Doe.',
};

export const WithError = Template.bind({});
WithError.args = {
  ...Default.args,
  error: 'This field is required',
};

export const RowGroup = () => (
  <div className="flex">
    <Radio label="default" value="default" className="m-2" name="row-group" />
    <Radio label="primary" value="primary" className="m-2" name="row-group" />
    <Radio value="info" label="info" className="m-2" name="row-group" />
  </div>
);

export const ColumnGroupWithErrorText = () => (
  <div className="flex flex-col">
    <Radio
      name="column-group"
      label="default"
      value="default"
      className="m-2"
      error="This field is required"
    />
    <Radio
      name="column-group"
      label="primary"
      value="primary"
      className="m-2"
      error="This field is required"
    />
    <Radio
      name="column-group"
      value="info"
      label="info"
      className="m-2"
      error="This field is required"
    />
  </div>
);

export const ColumnGroupWithStartLabel = () => (
  <div className="flex justify-center space-x-4 space-y-4">
    <div className="divide-slate-300 flex w-[500px] flex-col divide-y">
      <Radio
        name="column-label-start-group"
        label="default"
        helperText="This project would be available to anyone who have the link"
        labelPlacement="start"
        value="default"
        className="p-2"
        containerClassName="justify-between"
      />
      <Radio
        name="column-label-start-group"
        label="primary"
        helperText="This project would be available to anyone who have the link"
        labelPlacement="start"
        value="primary"
        className="p-2"
        containerClassName="justify-between"
      />
      <Radio
        name="column-label-start-group"
        label="secondary"
        helperText="This project would be available to anyone who have the link"
        labelPlacement="start"
        value="secondary"
        className="p-2"
        containerClassName="justify-between"
      />
    </div>
  </div>
);

export const ColumnGroupWithEndLabel = () => (
  <div className="flex justify-center space-x-4 space-y-4">
    <div className="divide-slate-300 flex w-[500px] flex-col divide-y">
      <Radio
        name="column-label-end-group"
        label="warning"
        value="warning"
        helperText="This project would be available to anyone who have the link"
        className="p-2"
        labelClassName="pl-2"
        helperClassName="ml-8"
      />
      <Radio
        name="column-label-end-group"
        label="success"
        value="success"
        helperText="This project would be available to anyone who have the link"
        className="p-2"
        labelClassName="pl-2"
        helperClassName="ml-8"
      />
      <Radio
        name="column-label-end-group"
        value="info"
        label="info"
        helperText="This project would be available to anyone who have the link"
        className="p-2"
        labelClassName="pl-2"
        helperClassName="ml-8"
      />
    </div>
  </div>
);
