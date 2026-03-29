import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import { Input } from '../components/input';

test('Renders input component', () => {
  render(<Input placeholder="Enter text" />);
  const inputElement = screen.getByPlaceholderText('Enter text');
  
  expect(inputElement).toBeInTheDocument();
});

test('Renders input with label', () => {
  render(<Input label="Username" placeholder="Enter username" />);
  const labelElement = screen.getByText('Username');
  const inputElement = screen.getByPlaceholderText('Enter username');
  
  expect(labelElement).toBeInTheDocument();
  expect(inputElement).toBeInTheDocument();
});

test('Renders input with helper text', () => {
  render(
    <Input
      label="Email"
      placeholder="Enter email"
      helperText="Enter your email address"
    />
  );
  const helperText = screen.getByText('Enter your email address');
  
  expect(helperText).toBeInTheDocument();
});

test('Renders input with error text', () => {
  render(
    <Input
      label="Email"
      placeholder="Enter email"
      error="Email is required"
    />
  );
  const errorText = screen.getByRole('alert');
  
  expect(errorText).toHaveTextContent('Email is required');
  expect(errorText).toHaveClass('text-red');
});

test('Renders disabled input', () => {
  render(<Input label="Username" placeholder="Enter username" disabled />);
  const inputElement = screen.getByPlaceholderText('Enter username');
  
  expect(inputElement).toBeDisabled();
});

test('Renders input with prefix', () => {
  render(<Input prefix="$" placeholder="Enter amount" />);
  const prefixElement = screen.getByText('$');
  
  expect(prefixElement).toBeInTheDocument();
});

test('Renders input with suffix', () => {
  render(<Input suffix="kg" placeholder="Enter weight" />);
  const suffixElement = screen.getByText('kg');
  
  expect(suffixElement).toBeInTheDocument();
});

test('Input can be typed into', async () => {
  render(<Input placeholder="Enter text" />);
  const inputElement = screen.getByPlaceholderText('Enter text') as HTMLInputElement;
  
  await user.type(inputElement, 'Hello World');
  expect(inputElement.value).toBe('Hello World');
});

test('Renders clearable input', () => {
  render(<Input placeholder="Enter text" clearable />);
  const inputElement = screen.getByPlaceholderText('Enter text');
  
  expect(inputElement).toBeInTheDocument();
});

test('Renders input with different sizes', () => {
  const { rerender } = render(<Input size="sm" placeholder="Small" />);
  let inputContainer = screen.getByPlaceholderText('Small').closest('span');
  expect(inputContainer).toHaveClass('h-8');
  
  rerender(<Input size="md" placeholder="Medium" />);
  inputContainer = screen.getByPlaceholderText('Medium').closest('span');
  expect(inputContainer).toHaveClass('h-10');
  
  rerender(<Input size="lg" placeholder="Large" />);
  inputContainer = screen.getByPlaceholderText('Large').closest('span');
  expect(inputContainer).toHaveClass('h-12');
});

