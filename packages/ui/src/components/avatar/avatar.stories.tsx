// avatar.stories.ts|tsx
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
    size="48px"
    src="https://randomuser.me/api/portraits/women/40.jpg"
    {...args}
  />
);

export const Default = Template.bind({});

export const Variants = () => (
  <div className="flex items-center gap-6">
    <Avatar name="John Doe" initials="AB" size="48px" />
    <Avatar
      src="https://randomuser.me/api/portraits/women/40.jpg"
      size="48px"
    />
    <Avatar
      src="https://isomorphic-furyroad.vercel.app/_next/static/media/avatar-icon.ebad7416.png"
      size="48px"
    />
  </div>
);

export const Sizes = () => (
  <div className="flex items-center justify-around">
    <Avatar name="John Doe" initials="SM" size="36px" />
    <Avatar src="https://randomuser.me/api/portraits/men/40.jpg" size="48px" />
    <Avatar name="John Doe" initials="L" size="64px" />
    <Avatar
      src="https://randomuser.me/api/portraits/women/40.jpg"
      size="80px"
    />
  </div>
);

export const Rounded = () => (
  <div className="mt-4 flex items-center justify-around">
    <Avatar
      src="https://randomuser.me/api/portraits/women/40.jpg"
      size="48px"
      rounded="none"
    />
    <Avatar
      size="48px"
      src="https://randomuser.me/api/portraits/women/41.jpg"
      rounded="sm"
    />
    <Avatar
      rounded="md"
      src="https://randomuser.me/api/portraits/women/42.jpg"
      size="48px"
    />
    <Avatar
      rounded="lg"
      src="https://randomuser.me/api/portraits/women/43.jpg"
      size="48px"
    />
    <Avatar
      src="https://randomuser.me/api/portraits/women/44.jpg"
      size="48px"
    />
  </div>
);

export const Colors = () => (
  <div className="flex items-center justify-around">
    <Avatar name="John Doe" initials="SM" size="48px" color="#111" />
    <Avatar name="John Doe" initials="SM" size="48px" color="#4e36f5" />
    <Avatar name="John Doe" initials="SM" size="48px" color="#7928ca" />
    <Avatar name="John Doe" initials="SM" size="48px" color="#e00" />
    <Avatar name="John Doe" initials="SM" size="48px" color="#f5a623" />
    <Avatar name="John Doe" initials="SM" size="48px" color="#0070f3" />
    <Avatar name="John Doe" initials="SM" size="48px" color="#4e36f5" />
    <Avatar name="John Doe" initials="SM" size="48px" color="#11a849" />
  </div>
);

export const Borders = () => (
  <div className="flex items-center justify-around">
    <Avatar
      src="https://randomuser.me/api/portraits/women/40.jpg"
      size="48px"
      className="ring-2 ring-gray-900 ring-offset-2"
    />
    <Avatar
      src="https://randomuser.me/api/portraits/women/41.jpg"
      size="48px"
      className="ring-2 ring-primary ring-offset-2"
    />
    <Avatar
      src="https://randomuser.me/api/portraits/women/42.jpg"
      size="48px"
      className="ring-2 ring-secondary ring-offset-2"
    />
    <Avatar
      src="https://randomuser.me/api/portraits/women/43.jpg"
      size="48px"
      className="ring-2 ring-red ring-offset-2"
    />
    <Avatar
      src="https://randomuser.me/api/portraits/women/44.jpg"
      size="48px"
      className="ring-2 ring-orange ring-offset-2"
    />
    <Avatar
      src="https://randomuser.me/api/portraits/women/45.jpg"
      size="48px"
      className="ring-2 ring-green ring-offset-2"
    />
    <Avatar
      src="https://randomuser.me/api/portraits/women/46.jpg"
      size="48px"
      className="ring-2 ring-blue ring-offset-2"
    />
  </div>
);

export const OnlineStatus = () => (
  <div className="flex items-center justify-around">
    <div className="relative inline-flex">
      <Avatar
        size="48px"
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
        size="48px"
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
        size="48px"
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
        size="48px"
        src="https://randomuser.me/api/portraits/women/40.jpg"
      />
      <ActionIcon
        size="sm"
        rounded="full"
        variant="solid"
        color="warning"
        className="absolute right-0 bottom-0 translate-x-2 translate-y-1.5 scale-[0.65] shadow-lg"
      >
        <PlusIcon />
      </ActionIcon>
    </div>
    <div className="relative inline-flex">
      <Avatar
        src="https://randomuser.me/api/portraits/women/43.jpg"
        size="48px"
      />
      <ActionIcon
        size="sm"
        rounded="full"
        variant="solid"
        color="danger"
        className="absolute right-0 bottom-0 translate-x-2 translate-y-1.5 scale-[0.65] shadow-lg"
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
        size="48px"
      />
      <ActionIcon
        size="sm"
        rounded="full"
        variant="solid"
        color="success"
        className="absolute right-0 bottom-0 translate-x-2 translate-y-1.5 scale-[0.65] shadow-lg"
      >
        <CheckmarkIcon />
      </ActionIcon>
    </div>
  </div>
);

export const Group = () => (
  <div className="relative my-4 flex">
    <Avatar
      size="42"
      src="https://randomuser.me/api/portraits/women/40.jpg"
      className="relative inline-flex  object-cover"
    />
    <Avatar
      size="42"
      src="https://randomuser.me/api/portraits/women/41.jpg"
      className="relative inline-flex -translate-x-[5px] object-cover ring-2 ring-gray-0"
    />
    <Avatar
      size="42"
      src="https://randomuser.me/api/portraits/women/42.jpg"
      className="relative inline-flex -translate-x-[10px] object-cover ring-2 ring-gray-0"
    />
    <Avatar
      size="42"
      src="https://randomuser.me/api/portraits/women/43.jpg"
      className="relative inline-flex -translate-x-[15px] object-cover ring-2 ring-gray-0"
    />
    <Avatar
      size="42"
      src="https://randomuser.me/api/portraits/women/44.jpg"
      className="relative inline-flex -translate-x-[20px] object-cover ring-2 ring-gray-0"
    />
    <div className="bordered relative inline-flex h-[42px] w-[42px] -translate-x-[45px] items-center justify-center rounded-full object-cover text-sm font-medium text-gray-900">
      +5
    </div>
  </div>
);
