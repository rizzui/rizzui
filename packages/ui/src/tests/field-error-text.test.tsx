import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { FieldErrorText } from '../components/field-error-text';

test('Renders field error text component', () => {
  render(<FieldErrorText error="This field is required" />);
  const errorElement = screen.getByRole('alert');
  
  expect(errorElement).toBeInTheDocument();
  expect(errorElement).toHaveTextContent('This field is required');
  expect(errorElement).toHaveClass('text-red');
});

test('Does not render when error is null', () => {
  render(<FieldErrorText error={null} />);
  const errorElement = screen.queryByRole('alert');
  
  expect(errorElement).not.toBeInTheDocument();
});

test('Does not render when error is undefined', () => {
  render(<FieldErrorText error={undefined} />);
  const errorElement = screen.queryByRole('alert');
  
  expect(errorElement).not.toBeInTheDocument();
});

test('Renders with different sizes', () => {
  const { rerender } = render(
    <FieldErrorText error="Error" size="sm" />
  );
  let errorElement = screen.getByRole('alert');
  expect(errorElement).toHaveClass('text-[11px]');
  
  rerender(<FieldErrorText error="Error" size="md" />);
  errorElement = screen.getByRole('alert');
  expect(errorElement).toHaveClass('text-[13px]');
  
  rerender(<FieldErrorText error="Error" size="lg" />);
  errorElement = screen.getByRole('alert');
  expect(errorElement).toHaveClass('text-[13px]');
});

test('Renders as span element', () => {
  render(<FieldErrorText error="Error" as="span" />);
  const errorElement = screen.getByRole('alert');
  
  expect(errorElement.tagName).toBe('SPAN');
});

test('Renders with custom className', () => {
  render(<FieldErrorText error="Error" className="custom-class" />);
  const errorElement = screen.getByRole('alert');
  
  expect(errorElement).toHaveClass('custom-class');
  expect(errorElement).toHaveClass('text-red');
});

