import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Title } from '../components/typography/title';

test('Renders title component', () => {
  render(<Title>Hello World</Title>);
  const titleElement = screen.getByText('Hello World');
  
  expect(titleElement).toBeInTheDocument();
  expect(titleElement.tagName).toBe('H2');
});

test('Renders title with different heading levels', () => {
  const { rerender } = render(<Title as="h1">Heading 1</Title>);
  let titleElement = screen.getByText('Heading 1');
  expect(titleElement.tagName).toBe('H1');
  expect(titleElement).toHaveClass('text-4xl');
  
  rerender(<Title as="h2">Heading 2</Title>);
  titleElement = screen.getByText('Heading 2');
  expect(titleElement.tagName).toBe('H2');
  expect(titleElement).toHaveClass('text-3xl');
  
  rerender(<Title as="h3">Heading 3</Title>);
  titleElement = screen.getByText('Heading 3');
  expect(titleElement.tagName).toBe('H3');
  expect(titleElement).toHaveClass('text-2xl');
  
  rerender(<Title as="h4">Heading 4</Title>);
  titleElement = screen.getByText('Heading 4');
  expect(titleElement.tagName).toBe('H4');
  expect(titleElement).toHaveClass('text-xl');
  
  rerender(<Title as="h5">Heading 5</Title>);
  titleElement = screen.getByText('Heading 5');
  expect(titleElement.tagName).toBe('H5');
  expect(titleElement).toHaveClass('text-lg');
  
  rerender(<Title as="h6">Heading 6</Title>);
  titleElement = screen.getByText('Heading 6');
  expect(titleElement.tagName).toBe('H6');
  expect(titleElement).toHaveClass('text-base');
});

test('Renders title with different font weights', () => {
  const { rerender } = render(<Title fontWeight="normal">Normal</Title>);
  let titleElement = screen.getByText('Normal');
  expect(titleElement).toHaveClass('font-normal');
  
  rerender(<Title fontWeight="bold">Bold</Title>);
  titleElement = screen.getByText('Bold');
  expect(titleElement).toHaveClass('font-bold');
  
  rerender(<Title fontWeight="semibold">Semibold</Title>);
  titleElement = screen.getByText('Semibold');
  expect(titleElement).toHaveClass('font-semibold');
});

test('Renders title with custom className', () => {
  render(<Title className="custom-class">Title</Title>);
  const titleElement = screen.getByText('Title');
  
  expect(titleElement).toHaveClass('custom-class');
});

