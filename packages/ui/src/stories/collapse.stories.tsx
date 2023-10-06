// collapse.stories.ts|tsx
import * as React from 'react';
import { ComponentMeta } from '@storybook/react';

import Collapse from '../components/collapse';
import { ChevronDownIcon } from '../icons/chevron-down';
import { LinkIcon } from '../icons/link';
import { MoonIcon } from '../icons/moon';
import { SunIcon } from '../icons/sun';
import { cn } from '../lib/cn';
import Avatar from '../components/avatar';

export default {
  title: 'Components/Collapse',
  component: Collapse,
  parameters: {
    viewMode: 'docs',
  },
} as ComponentMeta<typeof Collapse>;

export const Default = () => {
  const data = [
    {
      title: 'Option A',
      content: (
        <>
          If you are unhappy with your purchase for any reason, email us within
          90 days and we will refund you in full, no questions asked. If you are
          unhappy with your purchase for any reason, email us within 90 days and
          we will refund you in full, no questions asked.If you are unhappy with
          your purchase for any reason.
        </>
      ),
    },
    {
      title: 'Option B',
      content: (
        <>
          If you are unhappy with your purchase for any reason, email us within
          90 days and we will refund you in full, no questions asked. If you are
          unhappy with your purchase for any reason, email us within 90 days and
          we will refund you in full, no questions asked.If you are unhappy with
          your purchase for any reason.
        </>
      ),
    },
    {
      title: 'Option C',
      content: (
        <>
          If you are unhappy with your purchase for any reason, email us within
          90 days and we will refund you in full, no questions asked. If you are
          unhappy with your purchase for any reason, email us within 90 days and
          we will refund you in full, no questions asked.If you are unhappy with
          your purchase for any reason.
        </>
      ),
    },
  ];
  return (
    <div>
      {data.map((item) => (
        <Collapse
          key={item.title}
          className="mx-8 border-b last-of-type:border-b-0"
          panelClassName="mb-7"
          header={({ open, toggle }) => (
            <button
              type="button"
              onClick={toggle}
              className="flex w-full cursor-pointer items-center justify-between py-5 text-xl font-semibold"
            >
              {item.title}
              <ChevronDownIcon
                className={cn(
                  'h-5 w-5 -rotate-90 transform transition-transform duration-300',
                  open && '-rotate-0',
                )}
              />
            </button>
          )}
        >
          {item.content}
        </Collapse>
      ))}
    </div>
  );
};

export const WithCustomStyle = () => {
  const data = [
    {
      title: 'Option A',
      icon: <LinkIcon />,
      avatar: (
        <Avatar
          rounded="lg"
          name="John Doe"
          src="https://randomuser.me/api/portraits/men/3.jpg"
          className="ring-2 ring-primary ring-offset-2"
        />
      ),
      defaultOpen: true,
      content: (
        <>
          If you are unhappy with your purchase for any reason, email us within
          90 days and we will refund you in full, no questions asked. If you are
          unhappy with your purchase for any reason, email us within 90 days and
          we will refund you in full, no questions asked.If you are unhappy with
          your purchase for any reason.
        </>
      ),
    },
    {
      title: 'Option B',
      icon: <MoonIcon />,
      avatar: (
        <Avatar
          rounded="lg"
          name="John Doe"
          src="https://randomuser.me/api/portraits/women/40.jpg"
          className="ring-2 ring-green ring-offset-2"
        />
      ),
      defaultOpen: false,
      content: (
        <>
          If you are unhappy with your purchase for any reason, email us within
          90 days and we will refund you in full, no questions asked. If you are
          unhappy with your purchase for any reason, email us within 90 days and
          we will refund you in full, no questions asked.If you are unhappy with
          your purchase for any reason.
        </>
      ),
    },
    {
      title: 'Option C',
      icon: <SunIcon />,
      avatar: (
        <Avatar
          rounded="lg"
          name="John Doe"
          src="https://randomuser.me/api/portraits/women/7.jpg"
          className="ring-2 ring-red ring-offset-2"
        />
      ),
      defaultOpen: false,
      content: (
        <>
          If you are unhappy with your purchase for any reason, email us within
          90 days and we will refund you in full, no questions asked. If you are
          unhappy with your purchase for any reason, email us within 90 days and
          we will refund you in full, no questions asked.If you are unhappy with
          your purchase for any reason.
        </>
      ),
    },
  ];
  return (
    <div className="rounded-3xl border">
      {data.map((item) => (
        <Collapse
          key={item.title}
          className="mx-8 my-2 border-b last-of-type:border-b-0"
          panelClassName="mb-7"
          defaultOpen={item.defaultOpen}
          header={({ open, toggle }) => (
            <button
              type="button"
              onClick={toggle}
              className="flex w-full cursor-pointer items-center justify-between py-5 text-left rtl:text-right"
            >
              <div className="flex items-center gap-4">
                {item.avatar}
                <div className="grid gap-1">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm font-light text-gray-500">
                    6 unread messages
                  </p>
                </div>
              </div>
              <div
                className={cn(
                  'h-5 w-5 transform transition-transform duration-300',
                  open && '-rotate-90',
                )}
              >
                {item.icon}
              </div>
            </button>
          )}
        >
          {item.content}
        </Collapse>
      ))}
    </div>
  );
};
