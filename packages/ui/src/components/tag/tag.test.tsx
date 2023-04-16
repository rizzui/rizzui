import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import Tag from '.';

test('Render tag component with text', () => {
  render(<Tag>Default</Tag>);
  const tagElement = screen.getByText('Default');
  expect(tagElement).toBeInTheDocument();
});

test('Render tag component with icon', () => {
  render(
    <Tag>
      <svg
        data-testid="tag-location-icon"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="mr-1 h-4 w-4 rtl:ml-1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
      With Icon
    </Tag>
  );
  const tagElement = screen.getByText('With Icon');
  const tagIcon = screen.getByTestId('tag-location-icon');
  expect(tagElement).toBeInTheDocument();
  expect(tagIcon).toBeInTheDocument();
});

test('Function executes on click', async () => {
  const handleClick = jest.fn();
  render(
    <Tag clearable onClear={handleClick}>
      Clearable
    </Tag>
  );
  const tagClearIcon = screen.getByTestId('tag-clear-icon');
  await user.click(tagClearIcon);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
