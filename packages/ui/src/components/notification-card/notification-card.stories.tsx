import { ComponentStory, ComponentMeta } from '@storybook/react';
import toast, { Toaster } from 'react-hot-toast';

import NotificationCard from '.';
import { cn } from '../../lib/cn';
import Button from '../button';
import Avatar from '../avatar';

export default {
  title: 'Components/NotificationCard',
  component: NotificationCard,
} as ComponentMeta<typeof NotificationCard>;

const Template: ComponentStory<typeof NotificationCard> = (args) => (
  <NotificationCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'This is title',
  description: 'Thi is description',
  containerClassName: 'max-w-xs',
};

export const IconMedia = () => (
  <NotificationCard
    media={
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
      >
        <path
          fillRule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
          clipRule="evenodd"
        />
      </svg>
    }
    title="Icon"
    description="Placing an icon at start"
    containerClassName="max-w-xs"
  />
);

export const AvatarMedia = () => (
  <NotificationCard
    media={
      <Avatar
        size="38px"
        src="https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
    }
    title="Avatar"
    description="Avatar as media at start"
    className="ml-3"
    containerClassName="max-w-xs"
  />
);

export const LongDescription = () => (
  <NotificationCard
    title="Long Description"
    description="A notification card is a UI component that is used to display a short message or notification to the user. It is often used to alert users of important information. "
    className="[&>.aegon-notification-title]:mb-2"
    containerClassName="max-w-lg"
  />
);

export const WithSuffix = () => (
  <NotificationCard
    title="Suffix Text"
    description="A notification card is a UI component that is used to display a short message or notification to the user. It is often used to alert users of important information. "
    suffix={
      <span className="cursor-pointer font-medium text-primary">Close</span>
    }
    className="pr-12 [&>.aegon-notification-title]:mb-2"
    suffixClassName="items-center h-full"
    containerClassName="max-w-lg"
  />
);

export const WithReactHotToast = () => {
  const notification = () =>
    toast.custom(
      (t) => (
        <NotificationCard
          title="Success"
          description="This is a success notification toast."
          media={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6 text-green"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
              />
            </svg>
          }
          variant="flat"
          color="success"
          onClear={() => toast.dismiss(t.id)}
          containerClassName={cn(
            'max-w-md transition-transform ease-in-out',
            t.visible ? '' : 'translate-x-[150%] duration-300'
          )}
        />
      ),
      {
        duration: 10000,
        position: 'top-right',
      }
    );

  return (
    <>
      <Button onClick={notification}>Click to get toast notification</Button>
      <Toaster />
    </>
  );
};
