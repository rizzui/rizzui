import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Text } from '../components/typography/text';

test('Renders text component', () => {
  render(<Text>Hello World</Text>);
  const textElement = screen.getByText('Hello World');
  
  expect(textElement).toBeInTheDocument();
  expect(textElement.tagName).toBe('P');
});

test('Renders text with different as prop', () => {
  const { rerender } = render(<Text as="span">Text</Text>);
  let textElement = screen.getByText('Text');
  expect(textElement.tagName).toBe('SPAN');
  
  rerender(<Text as="strong">Text</Text>);
  textElement = screen.getByText('Text');
  expect(textElement.tagName).toBe('STRONG');
});

test('Renders text with bold variant', () => {
  render(<Text as="b">Bold Text</Text>);
  const textElement = screen.getByText('Bold Text');
  
  expect(textElement.tagName).toBe('B');
  expect(textElement).toHaveClass('text-text-primary');
});

test('Renders text with code variant', () => {
  render(<Text as="code">const x = 1;</Text>);
  const codeElement = screen.getByText('const x = 1;');
  
  expect(codeElement.tagName).toBe('CODE');
  expect(codeElement).toHaveClass('border');
});

test('Renders text with blockquote variant', () => {
  render(<Text as="blockquote">Quote text</Text>);
  const blockquoteElement = screen.getByText('Quote text');
  
  expect(blockquoteElement.tagName).toBe('BLOCKQUOTE');
  expect(blockquoteElement).toHaveClass('border-l-4');
});

test('Renders text with custom className', () => {
  render(<Text className="custom-class">Text</Text>);
  const textElement = screen.getByText('Text');
  
  expect(textElement).toHaveClass('custom-class');
});

test('Renders text with title attribute for abbr', () => {
  render(<Text as="abbr" title="HyperText Markup Language">HTML</Text>);
  const abbrElement = screen.getByText('HTML');
  
  expect(abbrElement.tagName).toBe('ABBR');
  expect(abbrElement).toHaveAttribute('title', 'HyperText Markup Language');
});

