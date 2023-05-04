import { ComponentMeta } from '@storybook/react';

import Dropdown, { DropdownItem } from '.';
import { cn } from '../../lib/cn';
import Avatar from '../avatar';
import Button, { ButtonProps } from '../button';
import ActionIcon from '../action-icon';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  subcomponents: { DropdownItem },
  argTypes: {
    value: {
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof Dropdown>;

export const Default = () => (
  <Dropdown
    trigger={
      <Button variant="outline">
        Settings{' '}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="ml-2 h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </Button>
    }
    className="h-52"
    dropdownClassName="w-48 mt-4"
  >
    <DropdownItem className="mt-3 px-5 py-2" activeClassName="bg-gray-100">
      {({ active }) => (
        <span className={cn('text-gray-600', active && '!text-gray-900')}>
          Account Settings
        </span>
      )}
    </DropdownItem>
    <DropdownItem className="px-5 py-2" activeClassName="bg-gray-100">
      {({ active }) => (
        <span className={cn('text-gray-600', active && '!text-gray-900')}>
          Support
        </span>
      )}
    </DropdownItem>
    <DropdownItem className="px-5 py-2" activeClassName="bg-gray-100">
      {({ active }) => (
        <span className={cn('text-gray-600', active && '!text-gray-900')}>
          License
        </span>
      )}
    </DropdownItem>
    <DropdownItem className="mb-3 px-5 py-2" activeClassName="bg-gray-100">
      {({ active }) => (
        <span className={cn('text-gray-600', active && '!text-gray-900')}>
          Sign Out
        </span>
      )}
    </DropdownItem>
  </Dropdown>
);

export const WithIcons = () => (
  <Dropdown
    trigger={
      <ActionIcon variant="outline" rounded="full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-5 w-5 text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
      </ActionIcon>
    }
    className="h-96"
    dropdownClassName="w-48 mt-4 divide-y"
  >
    <div className="mb-2 mt-3">
      <DropdownItem className="px-5 py-2" activeClassName="bg-gray-100">
        {({ active }) => (
          <span
            className={cn(
              'flex items-center text-gray-600',
              active && '!text-gray-900'
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="mr-2 h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </svg>
            Edit
          </span>
        )}
      </DropdownItem>
      <DropdownItem className="px-5 py-2" activeClassName="bg-gray-100">
        {({ active }) => (
          <span
            className={cn(
              'flex items-center text-gray-600',
              active && '!text-gray-900'
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="mr-2 h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
              />
            </svg>
            Duplicate
          </span>
        )}
      </DropdownItem>
    </div>

    <div className="mb-2 pt-2">
      <DropdownItem className="px-5 py-2" activeClassName="bg-gray-100">
        {({ active }) => (
          <span
            className={cn(
              'flex items-center text-gray-600',
              active && '!text-gray-900'
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="mr-2 h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
              />
            </svg>
            Archive
          </span>
        )}
      </DropdownItem>
      <DropdownItem className="px-5 py-2" activeClassName="bg-gray-100">
        {({ active }) => (
          <span
            className={cn(
              'flex items-center text-gray-600',
              active && '!text-gray-900'
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="mr-2 h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Move
          </span>
        )}
      </DropdownItem>
    </div>

    <div className="mb-2 pt-2">
      <DropdownItem className="px-5 py-2" activeClassName="bg-gray-100">
        {({ active }) => (
          <span
            className={cn(
              'flex items-center text-gray-600',
              active && '!text-gray-900'
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="mr-2 h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
              />
            </svg>
            Share
          </span>
        )}
      </DropdownItem>
      <DropdownItem className="px-5 py-2" activeClassName="bg-gray-100">
        {({ active }) => (
          <span
            className={cn(
              'flex items-center text-gray-600',
              active && '!text-gray-900'
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="mr-2 h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            Add to Favourite
          </span>
        )}
      </DropdownItem>
    </div>

    <div className="mb-3 mt-2 pt-2">
      <DropdownItem className="px-5 py-2" activeClassName="bg-gray-100">
        {({ active }) => (
          <span
            className={cn(
              'flex items-center text-gray-600',
              active && '!text-gray-900'
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="mr-2 h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
            Delete
          </span>
        )}
      </DropdownItem>
    </div>
  </Dropdown>
);

export const WithHeader = () => (
  <Dropdown
    className="h-80"
    dropdownClassName="w-56 mt-4 divide-y"
    trigger={
      <Avatar
        src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
        size="45"
      />
    }
  >
    <DropdownItem className="mb-2 mt-3 px-5 py-2" activeClassName="bg-gray-100">
      {() => (
        <span className="flex text-gray-600">
          <Avatar
            src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
            size="40"
          />
          <span className="ml-2 text-start">
            <h2 className="!text-gray-900">Jhon Doe</h2>
            <h2>jhondoe@gmail.com</h2>
          </span>
        </span>
      )}
    </DropdownItem>

    <div className="mb-2 mt-3 pt-2">
      <DropdownItem className="px-5 py-2" activeClassName="bg-gray-100">
        {({ active }) => (
          <span className={cn('text-gray-600', active && '!text-gray-900')}>
            Account Settings
          </span>
        )}
      </DropdownItem>
      <DropdownItem className="px-5 py-2" activeClassName="bg-gray-100">
        {({ active }) => (
          <span className={cn('text-gray-600', active && '!text-gray-900')}>
            Support
          </span>
        )}
      </DropdownItem>
      <DropdownItem className="px-5 py-2" activeClassName="bg-gray-100">
        {({ active }) => (
          <span className={cn('text-gray-600', active && '!text-gray-900')}>
            License
          </span>
        )}
      </DropdownItem>
    </div>

    <div className="mb-3 mt-2 pt-2">
      <DropdownItem className="px-5 py-2" activeClassName="bg-gray-100">
        {({ active }) => (
          <span className={cn('text-gray-600', active && '!text-gray-900')}>
            Sign Out
          </span>
        )}
      </DropdownItem>
    </div>
  </Dropdown>
);

export const Colored = () => (
  <div className="grid h-52 max-w-7xl grid-cols-6 gap-4">
    {[
      'primary',
      'secondary',
      'danger/red',
      'info/blue',
      'success/green',
      'warning/orange',
    ].map((color) => (
      <Dropdown
        key={color}
        dropdownClassName="w-48 mt-4"
        trigger={
          <Button
            variant="flat"
            color={color.split('/')[0] as ButtonProps['color']}
          >
            {color.split('/')[0]}{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="ml-2 h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </Button>
        }
      >
        {['Account Settings', 'Support', 'License', 'Sign Out'].map(
          (item, index) => (
            <DropdownItem
              key={item}
              className={cn('px-5 py-2 text-gray-600', {
                'mt-3': index === 0,
                'mb-3': index === 3,
              })}
              activeClassName={`bg-${
                color.split('/')[1] || color
              }-lighter text-${color.split('/')[1] || color}-dark`}
            >
              {() => item}
            </DropdownItem>
          )
        )}
      </Dropdown>
    ))}
  </div>
);
