// progressbar.stories.ts|tsx
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Progressbar from '.';

export default {
  title: 'Components/Progressbar',
  component: Progressbar,
} as ComponentMeta<typeof Progressbar>;

const Template: ComponentStory<typeof Progressbar> = (args) => (
  <Progressbar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: 75,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  value: 75,
  size: 'xl',
  label: '75%',
};

export const Variants = () => (
  <div className="grid max-w-7xl grid-cols-2 gap-4">
    <Progressbar value={75} />
    <Progressbar value={75} variant="flat" />
  </div>
);

export const Sizes = () => (
  <div className="grid max-w-7xl grid-cols-4 gap-4">
    <Progressbar value={75} size="sm" />
    <Progressbar value={75} />
    <Progressbar value={75} size="lg" />
    <Progressbar value={75} size="xl" />
  </div>
);

export const Rounded = () => (
  <div className="grid max-w-7xl grid-cols-5 gap-4">
    <Progressbar value={75} rounded="none" />
    <Progressbar value={75} rounded="sm" />
    <Progressbar value={75} rounded="md" />
    <Progressbar value={75} rounded="lg" />
    <Progressbar value={75} />
  </div>
);

export const Colors = () => (
  <div className="flex flex-col gap-5">
    <div className="grid grid-cols-2 gap-5">
      <Progressbar value={75} size="xl" label="75%" />
      <Progressbar value={75} size="xl" label="75%" variant="flat" />
    </div>
    <div className="grid grid-cols-2 gap-4">
      <Progressbar value={75} size="xl" label="75%" color="primary" />
      <Progressbar
        value={75}
        size="xl"
        label="75%"
        variant="flat"
        color="primary"
      />
    </div>
    <div className="grid grid-cols-2 gap-4">
      <Progressbar value={75} size="xl" label="75%" color="secondary" />
      <Progressbar
        value={75}
        size="xl"
        label="75%"
        variant="flat"
        color="secondary"
      />
    </div>
    <div className="grid grid-cols-2 gap-4">
      <Progressbar value={75} size="xl" label="75%" color="danger" />
      <Progressbar
        value={75}
        size="xl"
        label="75%"
        variant="flat"
        color="danger"
      />
    </div>
    <div className="grid grid-cols-2 gap-4">
      <Progressbar value={75} size="xl" label="75%" color="info" />
      <Progressbar
        value={75}
        size="xl"
        label="75%"
        variant="flat"
        color="info"
      />
    </div>
    <div className="grid grid-cols-2 gap-4">
      <Progressbar value={75} size="xl" label="75%" color="success" />
      <Progressbar
        value={75}
        size="xl"
        label="75%"
        variant="flat"
        color="success"
      />
    </div>
    <div className="grid grid-cols-2 gap-4">
      <Progressbar value={75} size="xl" label="75%" color="warning" />
      <Progressbar
        value={75}
        size="xl"
        label="75%"
        variant="flat"
        color="warning"
      />
    </div>
  </div>
);
