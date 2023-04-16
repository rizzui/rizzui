import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Empty from '.';

test('Renders empty component', () => {
  render(<Empty />);
  const emptyStateElement = screen.getByTestId('empty-state');
  const emptyDefaultIcon = screen.getByTestId('empty-default-icon');

  expect(emptyStateElement).toBeInTheDocument();
  expect(emptyDefaultIcon).toBeInTheDocument();
});

test('Renders text of empty', () => {
  render(<Empty text="No data" textTag="h2" />);
  const emptyStateElement = screen.getByRole('heading');
  expect(emptyStateElement).toBeInTheDocument();
  expect(emptyStateElement).toHaveTextContent('No data');
});

test('Default height and width of default svg icon', () => {
  render(<Empty />);
  const emptyDefaultIcon = screen.getByTestId('empty-default-icon');
  expect(emptyDefaultIcon).toHaveAttribute('width', '184');
  expect(emptyDefaultIcon).toHaveAttribute('height', '152');
});
