import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Stepper } from '../components/stepper';

test('Renders stepper component', () => {
  render(
    <Stepper>
      <Stepper.Step title="Step 1" />
      <Stepper.Step title="Step 2" />
      <Stepper.Step title="Step 3" />
    </Stepper>
  );
  
  expect(screen.getByText('Step 1')).toBeInTheDocument();
  expect(screen.getByText('Step 2')).toBeInTheDocument();
  expect(screen.getByText('Step 3')).toBeInTheDocument();
});

test('Renders stepper with current index', () => {
  render(
    <Stepper currentIndex={1}>
      <Stepper.Step title="Step 1" />
      <Stepper.Step title="Step 2" />
      <Stepper.Step title="Step 3" />
    </Stepper>
  );
  
  expect(screen.getByText('Step 1')).toBeInTheDocument();
  expect(screen.getByText('Step 2')).toBeInTheDocument();
  expect(screen.getByText('Step 3')).toBeInTheDocument();
});

test('Renders stepper with descriptions', () => {
  render(
    <Stepper>
      <Stepper.Step title="Step 1" description="First step" />
      <Stepper.Step title="Step 2" description="Second step" />
    </Stepper>
  );
  
  expect(screen.getByText('First step')).toBeInTheDocument();
  expect(screen.getByText('Second step')).toBeInTheDocument();
});

test('Renders vertical stepper', () => {
  const { container } = render(
    <Stepper direction="vertical">
      <Stepper.Step title="Step 1" />
      <Stepper.Step title="Step 2" />
    </Stepper>
  );
  
  const stepperRoot = container.querySelector('.rizzui-stepper-root');
  expect(stepperRoot).toHaveClass('flex-col');
});

test('Renders stepper with dot variant', () => {
  render(
    <Stepper dot>
      <Stepper.Step title="Step 1" />
      <Stepper.Step title="Step 2" />
    </Stepper>
  );
  
  expect(screen.getByText('Step 1')).toBeInTheDocument();
  expect(screen.getByText('Step 2')).toBeInTheDocument();
});

test('Renders stepper step with custom status', () => {
  render(
    <Stepper>
      <Stepper.Step title="Step 1" status="completed" />
      <Stepper.Step title="Step 2" status="in-progress" />
      <Stepper.Step title="Step 3" status="error" />
    </Stepper>
  );
  
  expect(screen.getByText('Step 1')).toBeInTheDocument();
  expect(screen.getByText('Step 2')).toBeInTheDocument();
  expect(screen.getByText('Step 3')).toBeInTheDocument();
});

