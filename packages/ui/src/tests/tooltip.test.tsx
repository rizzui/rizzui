import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor, act } from '@testing-library/react';
import user from '@testing-library/user-event';

import Tooltip from '../components/tooltip/tooltip';
import Button from '../components/button';

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

test('Renders tooltip component with button and content', async () => {
  render(
    <Tooltip content={() => "I'm your tooltip"}>
      <Button>Default</Button>
    </Tooltip>,
  );
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveTextContent(/default/i);
  await act(async () => {
    await user.hover(buttonElement);
  });
  const tooltipElement = screen.getByRole('tooltip', {
    name: /i'm your tooltip/i,
  });
  const arrowElement = screen.getByTestId('tooltip-arrow');
  await waitFor(() => expect(tooltipElement).toBeVisible());
  await waitFor(() => expect(arrowElement).toBeVisible());
  await act(async () => {
    await user.unhover(buttonElement);
  });
  await waitFor(() => expect(tooltipElement).not.toBeVisible());
  await waitFor(() => expect(arrowElement).not.toBeVisible());
});

test('No arrow when show arrow is false', async () => {
  render(
    <Tooltip content={() => "I'm your tooltip"} showArrow={false}>
      <Button>Default</Button>
    </Tooltip>,
  );
  const buttonElement = screen.getByRole('button');
  await act(async () => {
    await user.hover(buttonElement);
  });
  const tooltipElement = screen.getByRole('tooltip', {
    name: /i'm your tooltip/i,
  });
  const arrowElement = screen.queryByTestId('tooltip-arrow');
  await waitFor(() => expect(tooltipElement).toBeVisible());
  await waitFor(() => expect(arrowElement).not.toBeInTheDocument());
});
