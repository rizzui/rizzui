import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Code } from '../components/typography/code';

test('Renders code component', () => {
  render(<Code>const x = 1;</Code>);
  const codeElement = screen.getByText('const x = 1;');
  
  expect(codeElement).toBeInTheDocument();
  expect(codeElement.tagName).toBe('CODE');
});

test('Renders code with custom className', () => {
  render(<Code className="custom-class">const x = 1;</Code>);
  const preElement = screen.getByText('const x = 1;').closest('pre');
  
  expect(preElement).toHaveClass('custom-class');
  expect(preElement).toHaveClass('border');
});

test('Renders code with multiple lines', () => {
  render(
    <Code>
      {`const x = 1;
const y = 2;`}
    </Code>
  );
  
  expect(screen.getByText(/const x = 1;/)).toBeInTheDocument();
  expect(screen.getByText(/const y = 2;/)).toBeInTheDocument();
});

