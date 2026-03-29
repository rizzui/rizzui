import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import { PinCode } from '../components/pin-code';

test('Renders pin code component', () => {
  render(<PinCode length={4} />);
  const inputs = screen.getAllByRole('textbox');
  
  expect(inputs).toHaveLength(4);
});

test('Renders pin code with custom length', () => {
  render(<PinCode length={6} />);
  const inputs = screen.getAllByRole('textbox');
  
  expect(inputs).toHaveLength(6);
});

test('Pin code inputs accept single character', async () => {
  render(<PinCode length={4} />);
  const firstInput = screen.getAllByRole('textbox')[0] as HTMLInputElement;
  
  await user.type(firstInput, '1');
  expect(firstInput.value).toBe('1');
  
  firstInput.value = '';
  await user.type(firstInput, '2');
  expect(firstInput.value).toBe('2');
});

test('Pin code focuses next input on character entry', async () => {
  render(<PinCode length={4} />);
  const inputs = screen.getAllByRole('textbox');
  const firstInput = inputs[0] as HTMLInputElement;
  const secondInput = inputs[1] as HTMLInputElement;
  
  await user.type(firstInput, '1');
  expect(document.activeElement).toBe(secondInput);
});

test('Pin code handles backspace correctly', async () => {
  render(<PinCode length={4} />);
  const inputs = screen.getAllByRole('textbox');
  const firstInput = inputs[0] as HTMLInputElement;
  const secondInput = inputs[1] as HTMLInputElement;
  
  await user.type(firstInput, '1');
  await user.type(secondInput, '2');
  
  await user.keyboard('{Backspace}');
  expect(secondInput.value).toBe('');
  
  await user.keyboard('{Backspace}');
  expect(firstInput.value).toBe('');
});

test('Renders pin code with error text', () => {
  render(<PinCode length={4} error="Invalid pin code" />);
  const errorText = screen.getByRole('alert');
  
  expect(errorText).toHaveTextContent('Invalid pin code');
});

test('Renders disabled pin code', () => {
  render(<PinCode length={4} disabled />);
  const inputs = screen.getAllByRole('textbox');
  
  inputs.forEach((input) => {
    expect(input).toHaveClass('disabled:bg-muted/70');
  });
});

test('Renders pin code with mask', () => {
  render(<PinCode length={4} mask />);
  const inputs = screen.getAllByRole('textbox');
  
  inputs.forEach((input) => {
    expect(input).toHaveClass('[-moz-text-security:circle]');
  });
});

test('Renders pin code with number type', () => {
  render(<PinCode length={4} type="number" />);
  const inputs = screen.getAllByRole('spinbutton');
  
  expect(inputs).toHaveLength(4);
  inputs.forEach((input) => {
    expect(input).toHaveAttribute('inputMode', 'numeric');
    expect(input).toHaveAttribute('pattern', '[0-9]*');
  });
});

