import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Blockquote } from '../components/typography/blockquote';

test('Renders blockquote component', () => {
  render(<Blockquote>Quote text</Blockquote>);
  const blockquoteElement = screen.getByText('Quote text');
  
  expect(blockquoteElement).toBeInTheDocument();
  expect(blockquoteElement.tagName).toBe('BLOCKQUOTE');
});

test('Renders blockquote with custom className', () => {
  render(<Blockquote className="custom-class">Quote text</Blockquote>);
  const blockquoteElement = screen.getByText('Quote text');
  
  expect(blockquoteElement).toHaveClass('custom-class');
  expect(blockquoteElement).toHaveClass('border-l-4');
});

test('Renders blockquote with children', () => {
  render(
    <Blockquote>
      <p>First paragraph</p>
      <p>Second paragraph</p>
    </Blockquote>
  );
  
  expect(screen.getByText('First paragraph')).toBeInTheDocument();
  expect(screen.getByText('Second paragraph')).toBeInTheDocument();
});

