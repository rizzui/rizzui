import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Box } from '../components/layouts/box';

test('Renders box component', () => {
  render(<Box>Box content</Box>);
  const boxElement = screen.getByText('Box content');
  
  expect(boxElement).toBeInTheDocument();
  expect(boxElement.tagName).toBe('DIV');
});

test('Renders box with custom as prop', () => {
  const { rerender } = render(<Box as="section">Box content</Box>);
  let boxElement = screen.getByText('Box content');
  expect(boxElement.tagName).toBe('SECTION');
  
  rerender(<Box as="article">Box content</Box>);
  boxElement = screen.getByText('Box content');
  expect(boxElement.tagName).toBe('ARTICLE');
});

test('Renders box with custom className', () => {
  render(<Box className="custom-class">Box content</Box>);
  const boxElement = screen.getByText('Box content');
  
  expect(boxElement).toHaveClass('custom-class');
  expect(boxElement).toHaveClass('block');
});

test('Renders box with children', () => {
  render(
    <Box>
      <div>First child</div>
      <div>Second child</div>
    </Box>
  );
  
  expect(screen.getByText('First child')).toBeInTheDocument();
  expect(screen.getByText('Second child')).toBeInTheDocument();
});

