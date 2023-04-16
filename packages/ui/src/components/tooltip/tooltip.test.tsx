import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';

import Tooltip from '.';
import Button from '../button';

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

test('Renders tooltip component with button and content', async () => {
  render(
    <Tooltip content="I'm your tooltip">
      <Button>Default</Button>
    </Tooltip>
  );
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveTextContent(/default/i);

  await user.hover(buttonElement);
  const tooltipElement = screen.getByRole('tooltip', {
    name: /i'm your tooltip/i,
  });
  const arrowElement = screen.getByTestId('tooltip-arrow');
  await waitFor(() => expect(tooltipElement).toBeVisible());
  await waitFor(() => expect(arrowElement).toBeVisible());

  await user.unhover(buttonElement);
  await waitFor(() => expect(tooltipElement).not.toBeVisible());
  await waitFor(() => expect(arrowElement).not.toBeVisible());
});

test('No arrow when show arrow is false', async () => {
  render(
    <Tooltip content="I'm your tooltip" showArrow={false}>
      <Button>Default</Button>
    </Tooltip>
  );
  const buttonElement = screen.getByRole('button');
  await user.hover(buttonElement);
  const tooltipElement = screen.getByRole('tooltip', {
    name: /i'm your tooltip/i,
  });
  const arrowElement = screen.queryByTestId('tooltip-arrow');
  await waitFor(() => expect(tooltipElement).toBeVisible());
  await waitFor(() => expect(arrowElement).not.toBeInTheDocument());
});

test('Animation on opening tooltip', async () => {
  render(
    <Tooltip content="I'm your tooltip">
      <Button>Default</Button>
    </Tooltip>
  );
  const buttonElement = screen.getByRole('button');
  await user.hover(buttonElement);
  const tooltipElement = screen.getByRole('tooltip', {
    name: /i'm your tooltip/i,
  });
  await waitFor(() =>
    expect(tooltipElement).toHaveStyle(
      'transition-property: opacity,transform; transition-duration: 300ms;'
    )
  );
});
