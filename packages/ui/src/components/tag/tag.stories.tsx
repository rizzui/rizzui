// tag.stories.ts|tsx
import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tag from '.';
import Avatar from '../avatar';

export default {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    viewMode: 'docs',
  },
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="mr-1 h-4 w-4 rtl:ml-1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
      With Icon
    </>
  ),
};

export const WithAvatar = Template.bind({});
WithAvatar.args = {
  children: (
    <>
      <Avatar
        name="John Doe"
        customSize="20px"
        className="mr-1.5 rtl:ml-1.5"
        src="https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      With Avatar
    </>
  ),
};

export const Clearable = () => {
  const [isCleared, setIsCleared] = React.useState(false);

  return (
    !isCleared && (
      <Tag variant="outline" clearable onClear={() => setIsCleared(true)}>
        Clearable
      </Tag>
    )
  );
};
