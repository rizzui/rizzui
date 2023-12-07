// avatar.stories.ts|tsx
import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from '../components/avatar';
import { Badge } from '../components/badge';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    viewMode: 'docs',
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => (
  <Avatar
    src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
    {...args}
    name="John Doe"
  />
);

export const Default = Template.bind({});

export const Variants = () => (
  <div className="flex items-center gap-6">
    <Avatar name="John Doe" initials="AB" />
    <Avatar
      src="https://randomuser.me/api/portraits/women/40.jpg"
      name="John Doe"
    />
  </div>
);

export const Sizes = () => (
  <div className="flex items-center justify-around">
    <Avatar name="John Doe" initials="SM" size="sm" />
    <Avatar
      src="https://randomuser.me/api/portraits/men/40.jpg"
      name="John Doe"
    />
    <Avatar name="John Doe" initials="L" size="lg" />
    <Avatar
      name="John Doe"
      src="https://randomuser.me/api/portraits/women/40.jpg"
      size="xl"
    />
  </div>
);

export const Rounded = () => (
  <div className="mt-4 flex items-center justify-around">
    <Avatar
      src="https://randomuser.me/api/portraits/women/40.jpg"
      name="John Doe"
      rounded="none"
    />
    <Avatar
      name="John Doe"
      src="https://randomuser.me/api/portraits/women/41.jpg"
      rounded="sm"
    />
    <Avatar
      rounded="md"
      src="https://randomuser.me/api/portraits/women/42.jpg"
      name="John Doe"
    />
    <Avatar
      rounded="lg"
      src="https://randomuser.me/api/portraits/women/43.jpg"
      name="John Doe"
    />
    <Avatar
      src="https://randomuser.me/api/portraits/women/44.jpg"
      name="John Doe"
    />
  </div>
);

export const Colors = () => (
  <div className="flex items-center justify-around">
    <Avatar name="John Doe" initials="SM" />
    <Avatar name="John Doe" initials="KM" color="primary" />
    <Avatar name="John Doe" initials="NM" color="secondary" />
    <Avatar name="John Doe" initials="AM" color="danger" />
    <Avatar name="John Doe" initials="DM" color="warning" />
    <Avatar name="John Doe" initials="FM" color="success" />
    <Avatar name="John Doe" initials="GM" color="info" />
  </div>
);

export const Borders = () => (
  <div className="flex items-center justify-around">
    <Avatar
      src="https://randomuser.me/api/portraits/women/41.jpg"
      name="John Doe"
      className="ring-2 ring-primary ring-offset-2"
    />
    <Avatar
      src="https://randomuser.me/api/portraits/women/42.jpg"
      name="John Doe"
      className="ring-2 ring-secondary ring-offset-2"
    />
    <Avatar
      src="https://randomuser.me/api/portraits/women/43.jpg"
      name="John Doe"
      className="ring-2 ring-red ring-offset-2"
    />
    <Avatar
      src="https://randomuser.me/api/portraits/women/44.jpg"
      name="John Doe"
      className="ring-2 ring-orange ring-offset-2"
    />
    <Avatar
      src="https://randomuser.me/api/portraits/women/45.jpg"
      name="John Doe"
      className="ring-2 ring-green ring-offset-2"
    />
    <Avatar
      src="https://randomuser.me/api/portraits/women/46.jpg"
      name="John Doe"
      className="ring-2 ring-blue ring-offset-2"
    />
  </div>
);

export const OnlineStatus = () => (
  <div className="flex items-center justify-around">
    <div className="relative inline-flex">
      <Avatar
        name="John Doe"
        src="https://randomuser.me/api/portraits/women/40.jpg"
      />
      <Badge
        renderAsDot
        color="success"
        enableOutlineRing
        size="lg"
        className="absolute right-0 top-0 -translate-y-[25%]"
      />
    </div>
    <div className="relative ml-3 inline-flex">
      <Avatar
        name="John Doe"
        src="https://randomuser.me/api/portraits/women/43.jpg"
      />
      <Badge
        renderAsDot
        color="danger"
        enableOutlineRing
        size="lg"
        className="absolute right-0 top-0 -translate-y-[25%]"
      />
    </div>
    <div className="relative ml-3 inline-flex">
      <Avatar
        name="John Doe"
        src="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <Badge
        renderAsDot
        color="warning"
        enableOutlineRing
        size="lg"
        className="absolute right-0 top-0 -translate-y-[30%]"
      />
    </div>
  </div>
);

export const Group = () => (
  <div className="relative my-4 flex">
    <Avatar
      customSize="42px"
      name="John Doe"
      src="https://randomuser.me/api/portraits/women/40.jpg"
      className="relative inline-flex  object-cover"
    />
    <Avatar
      customSize="42px"
      name="John Doe"
      src="https://randomuser.me/api/portraits/women/41.jpg"
      className="relative inline-flex -translate-x-[5px] object-cover ring-2 ring-background"
    />
    <Avatar
      customSize="42px"
      name="John Doe"
      src="https://randomuser.me/api/portraits/women/42.jpg"
      className="relative inline-flex -translate-x-[10px] object-cover ring-2 ring-background"
    />
    <Avatar
      customSize="42px"
      name="John Doe"
      src="https://randomuser.me/api/portraits/women/43.jpg"
      className="relative inline-flex -translate-x-[15px] object-cover ring-2 ring-background"
    />
    <Avatar
      customSize="42px"
      name="John Doe"
      src="https://randomuser.me/api/portraits/women/44.jpg"
      className="relative inline-flex -translate-x-[20px] object-cover ring-2 ring-background"
    />
    <div className="bordered relative inline-flex h-[42px] w-[42px] -translate-x-[24px] items-center justify-center rounded-full object-cover text-sm font-medium">
      +5
    </div>
  </div>
);
