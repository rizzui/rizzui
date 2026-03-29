import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { FieldHelperText } from '../components/field-helper-text';

test('Renders field helper text component', () => {
  render(<FieldHelperText>Helper text</FieldHelperText>);
  const helperElement = screen.getByText('Helper text');
  
  expect(helperElement).toBeInTheDocument();
});

test('Does not render when children is empty', () => {
  render(<FieldHelperText>{null}</FieldHelperText>);
  const helperElement = screen.queryByText('Helper text');
  
  expect(helperElement).not.toBeInTheDocument();
});

test('Renders with different sizes', () => {
  const { rerender } = render(
    <FieldHelperText size="sm">Helper text</FieldHelperText>
  );
  let helperElement = screen.getByText('Helper text');
  expect(helperElement).toHaveClass('text-[11px]');
  
  rerender(<FieldHelperText size="md">Helper text</FieldHelperText>);
  helperElement = screen.getByText('Helper text');
  expect(helperElement).toHaveClass('text-[13px]');
  
  rerender(<FieldHelperText size="lg">Helper text</FieldHelperText>);
  helperElement = screen.getByText('Helper text');
  expect(helperElement).toHaveClass('text-[13px]');
});

test('Renders as span element', () => {
  render(<FieldHelperText as="span">Helper text</FieldHelperText>);
  const helperElement = screen.getByText('Helper text');
  
  expect(helperElement.tagName).toBe('SPAN');
});

test('Renders with custom className', () => {
  render(
    <FieldHelperText className="custom-class">Helper text</FieldHelperText>
  );
  const helperElement = screen.getByText('Helper text');
  
  expect(helperElement).toHaveClass('custom-class');
});

