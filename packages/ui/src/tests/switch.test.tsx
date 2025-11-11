import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import { Switch } from '../components/switch';

test('Renders switch component', () => {
  render(<Switch />);
  const switchElement = screen.getByRole('checkbox');
  
  expect(switchElement).toBeInTheDocument();
});

test('Renders switch with label', () => {
  render(<Switch label="Enable notifications" />);
  const labelElement = screen.getByText('Enable notifications');
  const switchElement = screen.getByRole('checkbox');
  
  expect(labelElement).toBeInTheDocument();
  expect(switchElement).toBeInTheDocument();
});

test('Switch can be toggled', async () => {
  render(<Switch />);
  const switchElement = screen.getByRole('checkbox') as HTMLInputElement;
  
  expect(switchElement.checked).toBe(false);
  await user.click(switchElement);
  expect(switchElement.checked).toBe(true);
});

test('Renders disabled switch', () => {
  render(<Switch disabled />);
  const switchElement = screen.getByRole('checkbox');
  
  expect(switchElement).toBeDisabled();
});

test('Renders switch with helper text', () => {
  render(
    <Switch
      label="Enable notifications"
      helperText="You will receive email notifications"
    />
  );
  const helperText = screen.getByText('You will receive email notifications');
  
  expect(helperText).toBeInTheDocument();
});

test('Renders switch with error text', () => {
  render(<Switch label="Enable notifications" error="This field is required" />);
  const errorText = screen.getByRole('alert');
  
  expect(errorText).toHaveTextContent('This field is required');
});

test('Renders switch with label on left', () => {
  render(<Switch label="Enable" labelPlacement="left" />);
  const labelElement = screen.getByText('Enable');
  const switchElement = screen.getByRole('checkbox');
  
  expect(labelElement).toBeInTheDocument();
  expect(switchElement).toBeInTheDocument();
});

test('Switch respects checked prop', () => {
  render(<Switch checked />);
  const switchElement = screen.getByRole('checkbox') as HTMLInputElement;
  
  expect(switchElement.checked).toBe(true);
});

test('Switch respects defaultChecked prop', () => {
  render(<Switch defaultChecked />);
  const switchElement = screen.getByRole('checkbox') as HTMLInputElement;
  
  expect(switchElement.defaultChecked).toBe(true);
});

