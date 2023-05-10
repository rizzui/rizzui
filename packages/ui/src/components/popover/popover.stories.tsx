import * as React from 'react';
import { ComponentMeta } from '@storybook/react';

import Popover from '.';
import Button from '../button';
import Avatar from '../avatar';

export default {
  title: 'Components/Popover',
  component: Popover,
  parameters: {
    viewMode: 'docs',
  },
} as ComponentMeta<typeof Popover>;

export const Default = () => (
  <div className="h-44">
    <Popover
      content={
        <div className="w-56 text-start">
          <span className="mt-2 inline-flex items-center gap-2 text-base">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              />
            </svg>
            <h2 className="font-medium">Delete the task</h2>
          </span>
          <p className="mt-2 text-sm">
            Are you sure you want to delete the task?
          </p>
          <div className="mb-2 mt-3 flex gap-3">
            <Button size="sm">Yes</Button>
            <Button size="sm" variant="outline">
              No
            </Button>
          </div>
        </div>
      }
      placement="bottom-start"
    >
      <Button variant="text" className="focus:!ring-0">
        Default
      </Button>
    </Popover>
  </div>
);

export const Actionable = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="h-44">
      <Popover
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        content={
          <div className="w-56 text-start">
            <span className="mt-2 inline-flex items-center gap-2 text-base">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
              </svg>
              <h2 className="font-medium">Delete the task</h2>
            </span>
            <p className="mt-2 text-sm">
              Are you sure you want to delete the task?
            </p>
            <div className="mb-2 mt-3 flex gap-3">
              <Button size="sm" onClick={() => setIsOpen(false)}>
                Yes
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setIsOpen(false)}
              >
                No
              </Button>
            </div>
          </div>
        }
        placement="bottom-start"
      >
        <Button variant="text" className="focus:!ring-0">
          Click on me
        </Button>
      </Popover>
    </div>
  );
};

export const WithAvatar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="h-64">
      <Popover
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        content={
          <>
            <div className="mb-3 flex items-center gap-3">
              <Avatar
                src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
                className="ring-2 ring-blue ring-offset-2"
                size="lg"
                name="John Doe"
              />
              <div className="text-left">
                <h1 className="text-base font-medium text-gray-900">
                  Fred Chaparro
                </h1>
                <p className="text-sm font-light text-gray-500">
                  @fredchaparro
                </p>
              </div>
            </div>
            <div className="max-w-[240px] text-left text-sm">
              <h2 className="text-gray-600">
                Full-stack Developer, love to work with @redq. 🎉{' '}
              </h2>
              <span className="mt-3 inline-flex gap-3 text-gray-400">
                <h2>
                  <span className="font-medium">8</span> Following
                </h2>
                <h2>
                  <span className="font-medium">10.5k</span> Followers
                </h2>
              </span>
            </div>
            <Button
              className="mt-4 w-full"
              variant="solid"
              color="info"
              size="sm"
              onClick={() => setIsOpen(false)}
            >
              Follow
            </Button>
          </>
        }
        placement="bottom-start"
        className="!top-24 !p-5"
      >
        <div className="w-14 cursor-pointer">
          <Avatar
            src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
            size="lg"
            name="John Doe"
          />
        </div>
      </Popover>
    </div>
  );
};
