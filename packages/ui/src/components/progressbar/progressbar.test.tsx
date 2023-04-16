import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Progressbar from '.';

test('Renders progressbar component', () => {
  render(<Progressbar />);
  const progressbarElement = screen.getByRole('progressbar');
  expect(progressbarElement).toBeInTheDocument();
});

test('Aria value min and max of progressbar', () => {
  render(<Progressbar />);
  const progressbarElement = screen.getByRole('progressbar');
  expect(progressbarElement).toHaveAttribute('aria-valuemin', '0');
  expect(progressbarElement).toHaveAttribute('aria-valuemax', '100');
});

test('Progressbar component with value', () => {
  render(<Progressbar value={75} />);
  const progressbarElement = screen.getByRole('progressbar');
  expect(progressbarElement).toHaveAttribute('aria-valuenow', '75');
});

test('Progressbar with aria label', () => {
  render(<Progressbar value={50} label="50%" />);
  const progressbarElement = screen.getByRole('progressbar');
  expect(progressbarElement).toHaveAttribute('aria-label', '50%');
});

test('Progressbar with label and xl size props', () => {
  render(<Progressbar value={50} label="50%" size="xl" />);
  const progressbarLabel = screen.getByText('50%');
  expect(progressbarLabel).toBeInTheDocument();
});
