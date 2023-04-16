import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';

import Popconfirm from '.';
import Button from '../button';

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

test('Renders Popconfirm component with button and content', async () => {
  render(
    <Popconfirm content="I'm your Popconfirm">
      <Button>Default</Button>
    </Popconfirm>
  );
  const buttonElement = screen.getByRole('button', { name: /default/i });
  expect(buttonElement).toBeInTheDocument();

  await user.click(buttonElement);
  const tooltipElement = screen.getByRole('tooltip', {
    name: /i'm your popconfirm/i,
  });
  const arrowElement = screen.getByTestId('tooltip-arrow');
  await waitFor(() => expect(tooltipElement).toBeVisible());
  await waitFor(() => expect(arrowElement).toBeVisible());
});

test('Renders Popconfirm component with button and content', async () => {
  const handleClose = jest.fn();
  render(
    <Popconfirm
      content={
        <div className="w-56 text-start">
          <p className="mt-2 text-sm">
            Are you sure you want to delete the task?
          </p>
          <div className="mt-3 mb-2 flex gap-3">
            <Button onClick={handleClose} size="sm">
              Delete
            </Button>
          </div>
        </div>
      }
    >
      <Button>Default</Button>
    </Popconfirm>
  );
  await user.click(screen.getByRole('button', { name: /default/i }));
  const deleteButton = screen.getByRole('button', { name: /delete/i });
  await waitFor(() => expect(deleteButton).toBeVisible());
  await user.click(deleteButton);
  expect(handleClose).toHaveBeenCalledTimes(1);
});
