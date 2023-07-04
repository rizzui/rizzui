// button.stories.ts|tsx
import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './button';

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
    <Button isLoading color="info">
      Button
    </Button>
    <Button isLoading color="warning">
      Button
    </Button>
    <Button isLoading color="danger">
      Button
    </Button>
    <Button isLoading color="success">
      Button
    </Button>
  </div>
);

export const Colors = () => (
  <div className="grid gap-5">
    <div className="flex items-center justify-around gap-3">
      <Button variant="text">Button</Button>
      <Button variant="text" color="primary">
        Button
      </Button>
      <Button variant="text" color="secondary">
        Button
      </Button>
      <Button variant="text" color="info">
        Button
      </Button>
      <Button variant="text" color="warning">
        Button
      </Button>
      <Button variant="text" color="danger">
        Button
      </Button>
      <Button variant="text" color="success">
        Button
      </Button>
    </div>
    {/* End of text variants */}
    <div className="flex items-center justify-around gap-3">
      <Button variant="outline">Button</Button>
      <Button variant="outline" color="primary">
        Button
      </Button>
      <Button variant="outline" color="secondary">
        Button
      </Button>
      <Button variant="outline" color="info">
        Button
      </Button>
      <Button variant="outline" color="warning">
        Button
      </Button>
      <Button variant="outline" color="danger">
        Button
      </Button>
      <Button variant="outline" color="success">
        Button
      </Button>
    </div>
    {/* End of outline variants */}
    <div className="flex items-center justify-around gap-3">
      <Button variant="flat">Button</Button>
      <Button variant="flat" color="primary">
        Button
      </Button>
      <Button variant="flat" color="secondary">
        Button
      </Button>
      <Button variant="flat" color="info">
        Button
      </Button>
      <Button variant="flat" color="warning">
        Button
      </Button>
      <Button variant="flat" color="danger">
        Button
      </Button>
      <Button variant="flat" color="success">
        Button
      </Button>
    </div>
    {/* End of flat variants */}
    <div className="flex items-center justify-around gap-3">
      <Button>Button</Button>
      <Button color="primary">Button</Button>
      <Button color="secondary">Button</Button>
      <Button color="info">Button</Button>
      <Button color="warning">Button</Button>
      <Button color="danger">Button</Button>
      <Button color="success">Button</Button>
    </div>
    {/* End of solid/default variants */}
  </div>
);
