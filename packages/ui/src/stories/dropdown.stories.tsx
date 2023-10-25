// dropdown.stories.ts|tsx
import * as React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Dropdown } from '../components/dropdown';
import { Button } from '../components/button';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    value: {
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof Dropdown>;

export const Default = () => (
  <Dropdown>
    <Dropdown.Trigger>
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
    </Dropdown.Trigger>
    <Dropdown.Menu>
      <Dropdown.Item>Account Settings</Dropdown.Item>
      <Dropdown.Item>Support</Dropdown.Item>
      <Dropdown.Item>License</Dropdown.Item>
      <Dropdown.Item>Sign Out</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);
