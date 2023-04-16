import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Loader from '.';

test('Renders loader component', () => {
  render(<Loader />);
  const loaderElement = screen.getByTestId('loader');
  expect(loaderElement).toBeInTheDocument();
});

describe('Animation Testing', () => {
  test('animation blink of three dots of loader', () => {
    render(<Loader />);
    const firstDot = screen.getByTestId('first-dot');
    const secondDot = screen.getByTestId('second-dot');
    const thirdDot = screen.getByTestId('third-dot');

    expect(firstDot).toBeInTheDocument();
    expect(firstDot).toHaveClass('animate-blink');

    expect(secondDot).toBeInTheDocument();
    expect(secondDot).toHaveClass('animate-blink animation-delay-200');

    expect(thirdDot).toBeInTheDocument();
    expect(thirdDot).toHaveClass('animate-blink animation-delay-500');
  });

  test('animation scale up of three dots of loader', () => {
    render(<Loader animation="scaleUp" />);
    const firstDot = screen.getByTestId('first-dot');
    const secondDot = screen.getByTestId('second-dot');
    const thirdDot = screen.getByTestId('third-dot');
    expect(firstDot).toHaveClass('animate-scale-up');
    expect(secondDot).toHaveClass('animate-scale-up animation-delay-200');
    expect(thirdDot).toHaveClass('animate-scale-up animation-delay-500');
  });
});
