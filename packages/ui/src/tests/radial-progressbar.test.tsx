import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { RadialProgressBar } from '../components/radial-progressbar';

test('Renders radial progress bar component', () => {
  const { container } = render(<RadialProgressBar value={50} />);
  const svgElement = container.querySelector('svg');
  
  expect(svgElement).toBeInTheDocument();
});

test('Renders radial progress bar with custom value', () => {
  const { container } = render(<RadialProgressBar value={75} />);
  const svgElement = container.querySelector('svg');
  
  expect(svgElement).toBeInTheDocument();
});

test('Renders radial progress bar with custom size', () => {
  const { container } = render(<RadialProgressBar value={50} size={200} />);
  const svgElement = container.querySelector('svg');
  
  expect(svgElement).toHaveAttribute('viewBox', '0 0 200 200');
});

test('Renders radial progress bar with custom colors', () => {
  const { container } = render(
    <RadialProgressBar
      value={50}
      trackColor="#e0e0e0"
      progressColor="#000000"
    />
  );
  const svgElement = container.querySelector('svg');
  
  expect(svgElement).toBeInTheDocument();
});

test('Renders radial progress bar with gradient', () => {
  const { container } = render(
    <RadialProgressBar
      value={50}
      progressColor="#000000"
      gradientColor="#ffffff"
    />
  );
  const linearGradient = container.querySelector('linearGradient');
  
  expect(linearGradient).toBeInTheDocument();
});

test('Renders radial progress bar at 0%', () => {
  const { container } = render(<RadialProgressBar value={0} />);
  const svgElement = container.querySelector('svg');
  
  expect(svgElement).toBeInTheDocument();
});

test('Renders radial progress bar at 100%', () => {
  const { container } = render(<RadialProgressBar value={100} />);
  const svgElement = container.querySelector('svg');
  
  expect(svgElement).toBeInTheDocument();
});

