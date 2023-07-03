import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import ActionIcon from './action-icon';

function FilterIcon({ className = 'h-auto w-5' }: { className?: string }) {
  return (
    <svg
      data-testid="filter-icon"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
      />
    </svg>
  );
}

test('Renders action icon component with icon as children', () => {
  render(
    <ActionIcon>
      <FilterIcon />
    </ActionIcon>
  );
  const buttonElement = screen.getByRole('button');
  const iconElement = screen.getByTestId('filter-icon');
  expect(buttonElement).toBeInTheDocument();
  expect(iconElement).toBeInTheDocument();
});

test('Render spinner while loading', () => {
  render(
    <ActionIcon isLoading>
      <FilterIcon />
    </ActionIcon>
  );
  const filterIconElement = screen.queryByTestId('filter-icon');
  const spinnerIconElement = screen.getByTestId('spinner-icon');
  expect(filterIconElement).not.toBeInTheDocument();
  expect(spinnerIconElement).toBeInTheDocument();
});

test('Function executes and element is focused on click', async () => {
  const handleClick = jest.fn();
  render(
    <ActionIcon onClick={handleClick}>
      <FilterIcon />
    </ActionIcon>
  );
  const buttonElement = screen.getByRole('button');
  await user.click(buttonElement);
  expect(buttonElement).toHaveFocus();
  expect(handleClick).toHaveBeenCalledTimes(1);
});

describe('Accessibilty testing', () => {
  test('Element is focused on pressing tab', async () => {
    render(
      <ActionIcon>
        <FilterIcon />
      </ActionIcon>
    );
    const buttonElement = screen.getByRole('button');
    await user.tab();
    expect(buttonElement).toHaveFocus();
  });

  test('Function executes on pressing enter', async () => {
    const handleClick = jest.fn();
    render(
      <ActionIcon onClick={handleClick}>
        <FilterIcon />
      </ActionIcon>
    );
    await user.tab();
    await user.keyboard('[Enter]');
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
