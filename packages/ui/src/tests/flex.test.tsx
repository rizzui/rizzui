import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Flex } from '../components/layouts/flex';

test('Renders flex component', () => {
  render(<Flex>Flex content</Flex>);
  const flexElement = screen.getByText('Flex content');
  
  expect(flexElement).toBeInTheDocument();
  expect(flexElement.tagName).toBe('DIV');
  expect(flexElement).toHaveClass('flex');
});

test('Renders flex with different directions', () => {
  const { rerender } = render(<Flex direction="row">Content</Flex>);
  let flexElement = screen.getByText('Content');
  expect(flexElement).toHaveClass('flex-row');
  
  rerender(<Flex direction="col">Content</Flex>);
  flexElement = screen.getByText('Content');
  expect(flexElement).toHaveClass('flex-col');
  
  rerender(<Flex direction="row-reverse">Content</Flex>);
  flexElement = screen.getByText('Content');
  expect(flexElement).toHaveClass('flex-row-reverse');
  
  rerender(<Flex direction="col-reverse">Content</Flex>);
  flexElement = screen.getByText('Content');
  expect(flexElement).toHaveClass('flex-col-reverse');
});

test('Renders flex with different justify values', () => {
  const { rerender } = render(<Flex justify="start">Content</Flex>);
  let flexElement = screen.getByText('Content');
  expect(flexElement).toHaveClass('justify-start');
  
  rerender(<Flex justify="center">Content</Flex>);
  flexElement = screen.getByText('Content');
  expect(flexElement).toHaveClass('justify-center');
  
  rerender(<Flex justify="between">Content</Flex>);
  flexElement = screen.getByText('Content');
  expect(flexElement).toHaveClass('justify-between');
});

test('Renders flex with different align values', () => {
  const { rerender } = render(<Flex align="start">Content</Flex>);
  let flexElement = screen.getByText('Content');
  expect(flexElement).toHaveClass('items-start');
  
  rerender(<Flex align="center">Content</Flex>);
  flexElement = screen.getByText('Content');
  expect(flexElement).toHaveClass('items-center');
  
  rerender(<Flex align="end">Content</Flex>);
  flexElement = screen.getByText('Content');
  expect(flexElement).toHaveClass('items-end');
});

test('Renders flex with different gap values', () => {
  const { rerender } = render(<Flex gap="0">Content</Flex>);
  let flexElement = screen.getByText('Content');
  expect(flexElement).toHaveClass('gap-0');
  
  rerender(<Flex gap="4">Content</Flex>);
  flexElement = screen.getByText('Content');
  expect(flexElement).toHaveClass('gap-4');
  
  rerender(<Flex gap="8">Content</Flex>);
  flexElement = screen.getByText('Content');
  expect(flexElement).toHaveClass('gap-8');
});

test('Renders flex with custom as prop', () => {
  render(<Flex as="section">Content</Flex>);
  const flexElement = screen.getByText('Content');
  
  expect(flexElement.tagName).toBe('SECTION');
});

test('Renders flex with custom className', () => {
  render(<Flex className="custom-class">Content</Flex>);
  const flexElement = screen.getByText('Content');
  
  expect(flexElement).toHaveClass('custom-class');
  expect(flexElement).toHaveClass('flex');
});

