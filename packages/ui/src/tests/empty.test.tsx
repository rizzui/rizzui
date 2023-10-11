import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Empty } from '../components/empty';

test('Renders empty component', () => {
  render(<Empty />);
  const emptyStateElement = screen.getByTestId('empty-state');
  const emptyDefaultIcon = screen.getByTestId('empty-default-icon');

  expect(emptyStateElement).toBeInTheDocument();
  expect(emptyDefaultIcon).toBeInTheDocument();
});

test('Renders text of empty', () => {
  render(<Empty text="No data" />);
  const emptyStateElement = screen.getByRole('heading');
  expect(emptyStateElement).toBeInTheDocument();
  expect(emptyStateElement).toHaveTextContent('No data');
});
