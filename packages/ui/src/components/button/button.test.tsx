import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import Button from './index';

test('Renders button component with text "Default"', () => {
  render(<Button>Default</Button>);
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveTextContent('Default');
});

test('Renders button component of type "submit"', () => {
  render(<Button type="submit">Submit</Button>);
  const buttonElement = screen.getByRole('button', { name: 'Submit' });
  expect(buttonElement).toHaveAttribute('type', 'submit');
});

test('Renders disabled button', () => {
  render(<Button disabled>Submit</Button>);
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toBeDisabled();
});

test('Renders button with loading state', () => {
  render(<Button isLoading>Loading</Button>);
  const buttonTextElement = screen.getByText('Loading');
  expect(buttonTextElement).toBeInTheDocument();
  expect(buttonTextElement).toHaveClass('invisible');
});

test('Function executes and element is focused on click', async () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click me</Button>);
  const buttonElement = screen.getByRole('button', { name: 'Click me' });
  await user.click(buttonElement);
  expect(buttonElement).toHaveFocus();
  expect(handleClick).toHaveBeenCalledTimes(1);
});

describe('Accessibilty testing', () => {
  test('Element is focused on pressing tab', async () => {
    render(<Button>Button</Button>);
    const buttonElement = screen.getByRole('button', { name: 'Button' });
    await user.tab();
    expect(buttonElement).toHaveFocus();
  });

  test('Function executes on pressing enter', async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Button</Button>);
    await user.tab();
    await user.keyboard('[Enter]');
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
