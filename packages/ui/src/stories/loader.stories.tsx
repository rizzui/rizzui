// loader.stories.ts|tsx
import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Loader } from '../components/loader';

export default {
  title: 'Components/Loader',
  component: Loader,
  parameters: {
    viewMode: 'docs',
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Colors = () => (
  <div className="flex items-center justify-around gap-3">
    <Loader />
    <Loader color="secondary" />
    <Loader color="info" />
    <Loader color="warning" />
    <Loader color="danger" />
    <Loader color="success" />
  </div>
);

export const Sizes = () => (
  <div className="flex items-center justify-around gap-3">
    <Loader size="sm" />
    <Loader />
    <Loader size="lg" />
    <Loader size="xl" />
  </div>
);
