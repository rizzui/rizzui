// switch.stories.ts|tsx
import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Switch from '../components/switch/switch';

export default {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    viewMode: 'docs',
  },
  // @ts-ignore
} as ComponentMeta<typeof Switch>;

// @ts-ignore
const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Remember me',
};

export const Variants = () => (
  <div className="flex items-center justify-around gap-3">
    <Switch label="Default" />
    <Switch variant="outline" label="Outline" />
    <Switch variant="active" label="Active" />
  </div>
);

export const Sizes = () => (
  <div className="flex items-center justify-around gap-3">
    <Switch size="sm" label="Small (sm)" />
    <Switch label="Default" />
    <Switch size="lg" label="Large (lg)" />
    <Switch size="xl" label="Extra large (xl)" />
  </div>
);

export const Rounded = () => (
  <div className="flex items-center justify-around gap-3">
    <Switch rounded="none" label="Rounded (none)" />
    <Switch rounded="sm" label="Rounded (sm)" />
    <Switch rounded="md" label="Rounded (md)" />
    <Switch rounded="lg" label="Rounded (lg)" />
    <Switch label="Default" />
  </div>
);

export const Colors = () => (
  <div className="grid gap-5">
    <div className="flex items-center justify-around gap-3">
      <Switch variant="outline" />
      <Switch variant="outline" color="primary" />
      <Switch variant="outline" color="secondary" />
      <Switch variant="outline" color="info" />
      <Switch variant="outline" color="warning" />
      <Switch variant="outline" color="danger" />
      <Switch variant="outline" color="success" />
    </div>
    <div className="flex items-center justify-around gap-3">
      <Switch variant="active" />
      <Switch variant="active" color="primary" />
      <Switch variant="active" color="secondary" />
      <Switch variant="active" color="info" />
      <Switch variant="active" color="warning" />
      <Switch variant="active" color="danger" />
      <Switch variant="active" color="success" />
    </div>
    <div className="flex items-center justify-around gap-3">
      <Switch />
      <Switch color="primary" />
      <Switch color="secondary" />
      <Switch color="info" />
      <Switch color="warning" />
      <Switch color="danger" />
      <Switch color="success" />
    </div>
    <div className="flex items-center justify-around gap-3 text-sm">
      <span>Default</span>
      <span>Primary</span>
      <span>Secondary</span>
      <span>Info</span>
      <span>Warning</span>
      <span>Danger</span>
      <span>Success</span>
    </div>
  </div>
);

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...Default.args,
  variant: 'active',
  label: 'Change theme',
  onIcon: (
    // HeroIcon: Moon
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-3 w-3"
    >
      <path
        fillRule="evenodd"
        d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
        clipRule="evenodd"
      />
    </svg>
  ),
  offIcon: (
    // HeroIcon: Sun
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-3.5 w-3.5"
    >
      <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
    </svg>
  ),
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  ...Default.args,
  variant: 'outline',
  helperText: 'Please turn on the switch',
};

export const WithErrorMessage = Template.bind({});
WithErrorMessage.args = {
  ...Default.args,
  error: 'This field is required',
};
