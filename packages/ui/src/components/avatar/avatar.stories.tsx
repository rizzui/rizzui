// avatar.stories.ts|tsx
import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Avatar from './avatar';
import Badge from '../badge';
import ActionIcon from '../action-icon';
import { CheckmarkIcon } from '../../icons/checkmark';
import { PlusIcon } from '../../icons/plus';

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
    <Avatar name="John Doe" initials="KM" color="invert" />
    <Avatar name="John Doe" initials="LM" color="primary" />
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
      src="https://randomuser.me/api/portraits/women/40.jpg"
      name="John Doe"
      className="ring-2 ring-gray-900 ring-offset-2"
    />
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

export const WithIcons = () => (
  <div className="flex items-center justify-around">
    <div className="relative inline-flex">
      <Avatar
        name="John Doe"
        src="https://randomuser.me/api/portraits/women/40.jpg"
      />
      <ActionIcon
        size="sm"
        rounded="full"
        variant="solid"
        color="warning"
        className="absolute bottom-0 right-0 translate-x-2 translate-y-1.5 scale-[0.65] shadow-lg"
      >
        <PlusIcon />
      </ActionIcon>
    </div>
    <div className="relative inline-flex">
      <Avatar
        src="https://randomuser.me/api/portraits/women/43.jpg"
        name="John Doe"
      />
      <ActionIcon
        size="sm"
        rounded="full"
        variant="solid"
        color="danger"
        className="absolute bottom-0 right-0 translate-x-2 translate-y-1.5 scale-[0.65] shadow-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-4 w-4"
        >
          <path
            fillRule="evenodd"
            d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
            clipRule="evenodd"
          />
        </svg>
      </ActionIcon>
    </div>
    <div className="relative inline-flex">
      <Avatar
        src="https://randomuser.me/api/portraits/women/44.jpg"
        name="John Doe"
      />
      <ActionIcon
        size="sm"
        rounded="full"
        variant="solid"
        color="success"
        className="absolute bottom-0 right-0 translate-x-2 translate-y-1.5 scale-[0.65] shadow-lg"
      >
        <CheckmarkIcon />
      </ActionIcon>
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
      className="relative inline-flex -translate-x-[5px] object-cover ring-2 ring-gray-0"
    />
    <Avatar
      customSize="42px"
      name="John Doe"
      src="https://randomuser.me/api/portraits/women/42.jpg"
      className="relative inline-flex -translate-x-[10px] object-cover ring-2 ring-gray-0"
    />
    <Avatar
      customSize="42px"
      name="John Doe"
      src="https://randomuser.me/api/portraits/women/43.jpg"
      className="relative inline-flex -translate-x-[15px] object-cover ring-2 ring-gray-0"
    />
    <Avatar
      customSize="42px"
      name="John Doe"
      src="https://randomuser.me/api/portraits/women/44.jpg"
      className="relative inline-flex -translate-x-[20px] object-cover ring-2 ring-gray-0"
    />
    <div className="bordered relative inline-flex h-[42px] w-[42px] -translate-x-[24px] items-center justify-center rounded-full object-cover text-sm font-medium text-gray-900">
      +5
    </div>
  </div>
);
