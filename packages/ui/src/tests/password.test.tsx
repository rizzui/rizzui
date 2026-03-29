import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import { Password } from '../components/password';

test('Renders password component', () => {
  render(<Password placeholder="Enter password" />);
  const passwordElement = screen.getByPlaceholderText('Enter password');
  
  expect(passwordElement).toBeInTheDocument();
  expect(passwordElement).toHaveAttribute('type', 'password');
});

test('Renders password with label', () => {
  render(<Password label="Password" placeholder="Enter password" />);
  const labelElement = screen.getByText('Password');
  const passwordElement = screen.getByPlaceholderText('Enter password');
  
  expect(labelElement).toBeInTheDocument();
  expect(passwordElement).toBeInTheDocument();
});

test('Password visibility can be toggled', async () => {
  render(<Password placeholder="Enter password" />);
  const passwordElement = screen.getByPlaceholderText('Enter password') as HTMLInputElement;
  const toggleButton = screen.getByLabelText('Show password');
  
  expect(passwordElement).toHaveAttribute('type', 'password');
  
  await user.click(toggleButton);
  expect(passwordElement).toHaveAttribute('type', 'text');
  expect(screen.getByLabelText('Hide password')).toBeInTheDocument();
});

test('Renders password with helper text', () => {
  render(
    <Password
      label="Password"
      placeholder="Enter password"
      helperText="Must be at least 8 characters"
    />
  );
  const helperText = screen.getByText('Must be at least 8 characters');
  
  expect(helperText).toBeInTheDocument();
});

test('Renders password with error text', () => {
  render(
    <Password
      label="Password"
      placeholder="Enter password"
      error="Password is required"
    />
  );
  const errorText = screen.getByRole('alert');
  
  expect(errorText).toHaveTextContent('Password is required');
});

test('Renders disabled password', () => {
  render(<Password label="Password" placeholder="Enter password" disabled />);
  const passwordElement = screen.getByPlaceholderText('Enter password');
  
  expect(passwordElement).toBeDisabled();
});

test('Password can be typed into', async () => {
  render(<Password placeholder="Enter password" />);
  const passwordElement = screen.getByPlaceholderText('Enter password') as HTMLInputElement;
  
  await user.type(passwordElement, 'secret123');
  expect(passwordElement.value).toBe('secret123');
});

test('Renders password with prefix', () => {
  render(<Password prefix="@" placeholder="Enter password" />);
  const prefixElement = screen.getByText('@');
  
  expect(prefixElement).toBeInTheDocument();
});

test('Renders clearable password', () => {
  render(<Password placeholder="Enter password" clearable />);
  const passwordElement = screen.getByPlaceholderText('Enter password');
  
  expect(passwordElement).toBeInTheDocument();
});

test('Password visibility toggle is hidden when hideVisibilityToggleIcon is true', () => {
  render(
    <Password
      placeholder="Enter password"
      hideVisibilityToggleIcon
    />
  );
  
  expect(screen.queryByLabelText('Show password')).not.toBeInTheDocument();
});

