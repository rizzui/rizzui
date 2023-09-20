// dropdown.stories.ts|tsx
import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor, act } from '@testing-library/react';
import user from '@testing-library/user-event';

import Dropdown, { DropdownItem } from '../components/dropdown';
import Button from '../components/button';
import { cn } from '../lib/cn';

test('Renders dropdown button, container and items', async () => {
  render(
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
          <span
            data-testid="item-1"
            className={cn('text-gray-600', active && '!text-gray-900')}
          >
            Account Settings
          </span>
        )}
      </DropdownItem>
      <DropdownItem className="px-5 py-2" activeClassName="bg-gray-100">
        {({ active }) => (
          <span
            data-testid="item-2"
            className={cn('text-gray-600', active && '!text-gray-900')}
          >
            Support
          </span>
        )}
      </DropdownItem>
    </Dropdown>,
  );
  const dropdownButton = screen.getByRole('button', { name: 'Settings' });
  expect(dropdownButton).toBeInTheDocument();
  await act(async () => {
    await user.click(dropdownButton);
  });

  const dropdownContainer = screen.getByTestId('dropdown-container');
  await waitFor(() => expect(dropdownContainer).toBeVisible());

  const dropdownItem = screen.getByTestId('item-1');
  expect(dropdownItem).toBeInTheDocument();
  await act(async () => {
    await user.click(dropdownItem);
  });
  await waitFor(() => expect(dropdownContainer).not.toBeVisible());
});
