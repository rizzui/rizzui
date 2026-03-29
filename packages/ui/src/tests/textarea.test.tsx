import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import { Textarea } from '../components/textarea';

test('Renders textarea component', () => {
  render(<Textarea placeholder="Enter text" />);
  const textareaElement = screen.getByPlaceholderText('Enter text');
  
  expect(textareaElement).toBeInTheDocument();
});

test('Renders textarea with label', () => {
  render(<Textarea label="Description" placeholder="Enter description" />);
  const labelElement = screen.getByText('Description');
  const textareaElement = screen.getByPlaceholderText('Enter description');
  
  expect(labelElement).toBeInTheDocument();
  expect(textareaElement).toBeInTheDocument();
});

test('Renders textarea with helper text', () => {
  render(
    <Textarea
      label="Description"
      placeholder="Enter description"
      helperText="Enter a detailed description"
    />
  );
  const helperText = screen.getByText('Enter a detailed description');
  
  expect(helperText).toBeInTheDocument();
});

test('Renders textarea with error text', () => {
  render(
    <Textarea
      label="Description"
      placeholder="Enter description"
      error="Description is required"
    />
  );
  const errorText = screen.getByRole('alert');
  
  expect(errorText).toHaveTextContent('Description is required');
});

test('Renders disabled textarea', () => {
  render(<Textarea label="Description" placeholder="Enter description" disabled />);
  const textareaElement = screen.getByPlaceholderText('Enter description');
  
  expect(textareaElement).toBeDisabled();
});

test('Textarea can be typed into', async () => {
  render(<Textarea placeholder="Enter text" />);
  const textareaElement = screen.getByPlaceholderText('Enter text') as HTMLTextAreaElement;
  
  await user.type(textareaElement, 'Hello World');
  expect(textareaElement.value).toBe('Hello World');
});

test('Renders textarea with custom rows', () => {
  render(<Textarea rows={10} placeholder="Enter text" />);
  const textareaElement = screen.getByPlaceholderText('Enter text');
  
  expect(textareaElement).toHaveAttribute('rows', '10');
});

test('Renders clearable textarea', () => {
  render(<Textarea placeholder="Enter text" clearable />);
  const textareaElement = screen.getByPlaceholderText('Enter text');
  
  expect(textareaElement).toBeInTheDocument();
});

test('Renders textarea with different sizes', () => {
  const { rerender } = render(<Textarea size="sm" placeholder="Small" />);
  let textareaElement = screen.getByPlaceholderText('Small');
  expect(textareaElement).toHaveClass('text-xs');
  
  rerender(<Textarea size="md" placeholder="Medium" />);
  textareaElement = screen.getByPlaceholderText('Medium');
  expect(textareaElement).toHaveClass('text-sm');
  
  rerender(<Textarea size="lg" placeholder="Large" />);
  textareaElement = screen.getByPlaceholderText('Large');
  expect(textareaElement).toHaveClass('text-base');
});

