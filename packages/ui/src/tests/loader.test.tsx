import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Loader } from '../components/loader';

test('Renders loader component', () => {
  render(<Loader />);
  const loaderElement = screen.getByTestId('loader');
  expect(loaderElement).toBeInTheDocument();
});
