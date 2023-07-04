import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Badge from '.';

test('Renders badge component with text', () => {
  render(<Badge>Default</Badge>);
  const badgeElement = screen.getByText('Default');
  expect(badgeElement).toBeInTheDocument();
});
