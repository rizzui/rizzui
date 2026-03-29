import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import { Avatar } from '../components/avatar';

test('Renders avatar component with name', () => {
  render(<Avatar name="John Doe" />);
  const avatarElement = screen.getByTitle('John Doe');
  
  expect(avatarElement).toBeInTheDocument();
  expect(avatarElement).toHaveTextContent('JD');
});

test('Renders avatar component with custom initials', () => {
  render(<Avatar name="John Doe" initials="JD" />);
  const avatarElement = screen.getByTitle('John Doe');
  
  expect(avatarElement).toHaveTextContent('JD');
});

test('Renders avatar component with image src', () => {
  render(<Avatar name="John Doe" src="https://example.com/avatar.jpg" />);
  const avatarImage = screen.getByAltText('John Doe');
  
  expect(avatarImage).toBeInTheDocument();
  expect(avatarImage).toHaveAttribute('src', 'https://example.com/avatar.jpg');
});

test('Renders avatar with different sizes', () => {
  const { rerender } = render(<Avatar name="John Doe" size="sm" />);
  let avatarElement = screen.getByTitle('John Doe');
  expect(avatarElement).toHaveClass('text-xs');
  
  rerender(<Avatar name="John Doe" size="md" />);
  avatarElement = screen.getByTitle('John Doe');
  expect(avatarElement).toHaveClass('text-sm');
  
  rerender(<Avatar name="John Doe" size="lg" />);
  avatarElement = screen.getByTitle('John Doe');
  expect(avatarElement).toHaveClass('text-base');
});

test('Renders avatar with different colors', () => {
  render(<Avatar name="John Doe" color="primary" />);
  const avatarElement = screen.getByTitle('John Doe');
  
  expect(avatarElement).toHaveClass('bg-primary');
});

test('Avatar is clickable when onClick is provided', async () => {
  const handleClick = jest.fn();
  render(<Avatar name="John Doe" onClick={handleClick} />);
  const avatarElement = screen.getByTitle('John Doe');
  
  expect(avatarElement).toHaveClass('cursor-pointer');
  await user.click(avatarElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});

