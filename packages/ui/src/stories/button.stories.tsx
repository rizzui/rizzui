// button.stories.ts|tsx
import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../components/button';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    viewMode: 'docs',
  },
  // @ts-ignore
} as ComponentMeta<typeof Button>;

// @ts-ignore
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
};

export const Variants = () => (
  <div className="flex items-center justify-around gap-3">
    <Button variant="text">Button</Button>
    <Button variant="outline">Button</Button>
    <Button variant="flat">Button</Button>
    <Button variant="solid">Button</Button>
  </div>
);

export const Sizes = () => (
  <div className="flex items-center justify-around gap-3">
    <Button size="sm">Button</Button>
    <Button>Button</Button>
    <Button size="lg">Button</Button>
    <Button size="xl">Button</Button>
  </div>
);

export const Rounded = () => (
  <div className="flex items-center justify-around gap-3">
    <Button rounded="none">Button</Button>
    <Button rounded="sm">Button</Button>
    <Button>Button</Button>
    <Button rounded="lg">Button</Button>
    <Button rounded="pill">Button</Button>
  </div>
);

export const Icons = () => (
  <div className="flex items-center justify-evenly gap-3">
    <Button>
      <span className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-[18px] w-[18px] flex-shrink-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
        <span>Button</span>{' '}
      </span>
    </Button>
    <Button>
      <span className="flex items-center gap-2">
        <span>Button</span>{' '}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-[18px] w-[18px] flex-shrink-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
          />
        </svg>
      </span>
    </Button>
  </div>
);

export const Loading = () => (
  <div className="flex items-center justify-around gap-3">
    <Button isLoading>Button</Button>
    <Button isLoading color="primary">
      Button
    </Button>
    <Button isLoading color="secondary">
      Button
    </Button>
    <Button isLoading color="danger">
      Button
    </Button>
  </div>
);
