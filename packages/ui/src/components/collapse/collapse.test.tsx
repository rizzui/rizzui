import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';

import Collapse from '.';

test('Renders collapse component with content', async () => {
  render(
    <Collapse
      className="mx-8"
      header={({ toggle }) => (
        <button
          type="button"
          onClick={toggle}
          className="flex w-full cursor-pointer items-center justify-between py-5 text-xl font-semibold"
        >
          Option
        </button>
      )}
    >
      If you are unhappy with your purchase for any reason, email us within 90
      days and we will refund you in full, no questions asked. If you are
      unhappy with your purchase for any reason, email us within 90 days and we
      will refund you in full, no questions asked.If you are unhappy with your
      purchase for any reason.
    </Collapse>
  );
  const collapseElement = screen.getByTestId('collapse-parent');
  const titleElement = screen.getByRole('button', { name: /option/i });
  const descriptionElement = screen.getByText(/if you are unhappy/i, {
    exact: false,
  });
  expect(collapseElement).toHaveAttribute('aria-expanded', 'false');
  expect(titleElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
  expect(descriptionElement).toHaveStyle({ display: 'none' });
  expect(descriptionElement).not.toBeVisible();
  await user.click(titleElement);
  expect(collapseElement).toHaveAttribute('aria-expanded', 'true');
  expect(descriptionElement).toHaveStyle({ display: 'block' });
  expect(descriptionElement).toBeVisible();
  await user.click(titleElement);
  expect(collapseElement).toHaveAttribute('aria-expanded', 'false');
  waitFor(() => expect(descriptionElement).toHaveStyle({ display: 'none' }));
  waitFor(() => expect(descriptionElement).not.toBeVisible());
});

test('Default open in collapse', async () => {
  render(
    <Collapse
      defaultOpen
      className="mx-8"
      header={({ toggle }) => (
        <button
          type="button"
          onClick={toggle}
          className="flex w-full cursor-pointer items-center justify-between py-5 text-xl font-semibold"
        >
          Option
        </button>
      )}
    >
      If you are unhappy with your purchase for any reason, email us within 90
      days and we will refund you in full, no questions asked. If you are
      unhappy with your purchase for any reason, email us within 90 days and we
      will refund you in full, no questions asked.If you are unhappy with your
      purchase for any reason.
    </Collapse>
  );
  const collapseElement = screen.getByTestId('collapse-parent');
  const titleElement = screen.getByRole('button', { name: /option/i });
  const descriptionElement = screen.getByText(/if you are unhappy/i, {
    exact: false,
  });
  expect(collapseElement).toHaveAttribute('aria-expanded', 'true');
  expect(descriptionElement).toHaveStyle({ display: 'block' });
  expect(descriptionElement).toBeVisible();
  await user.click(titleElement);
  expect(collapseElement).toHaveAttribute('aria-expanded', 'false');
  waitFor(() => expect(descriptionElement).toHaveStyle({ display: 'none' }));
  waitFor(() => expect(descriptionElement).not.toBeVisible());
});
