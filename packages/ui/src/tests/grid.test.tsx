import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Grid } from '../components/layouts/grid';

test('Renders grid component', () => {
  render(<Grid>Grid content</Grid>);
  const gridElement = screen.getByText('Grid content');
  
  expect(gridElement).toBeInTheDocument();
  expect(gridElement.tagName).toBe('DIV');
  expect(gridElement).toHaveClass('grid');
});

test('Renders grid with different column counts', () => {
  const { rerender } = render(<Grid columns="1">Content</Grid>);
  let gridElement = screen.getByText('Content');
  expect(gridElement).toHaveClass('grid-cols-1');
  
  rerender(<Grid columns="3">Content</Grid>);
  gridElement = screen.getByText('Content');
  expect(gridElement).toHaveClass('grid-cols-3');
  
  rerender(<Grid columns="12">Content</Grid>);
  gridElement = screen.getByText('Content');
  expect(gridElement).toHaveClass('grid-cols-12');
});

test('Renders grid with different row counts', () => {
  const { rerender } = render(<Grid rows="1">Content</Grid>);
  let gridElement = screen.getByText('Content');
  expect(gridElement).toHaveClass('grid-rows-1');
  
  rerender(<Grid rows="3">Content</Grid>);
  gridElement = screen.getByText('Content');
  expect(gridElement).toHaveClass('grid-rows-3');
});

test('Renders grid with different gap values', () => {
  const { rerender } = render(<Grid gap="0">Content</Grid>);
  let gridElement = screen.getByText('Content');
  expect(gridElement).toHaveClass('gap-0');
  
  rerender(<Grid gap="4">Content</Grid>);
  gridElement = screen.getByText('Content');
  expect(gridElement).toHaveClass('gap-4');
  
  rerender(<Grid gap="8">Content</Grid>);
  gridElement = screen.getByText('Content');
  expect(gridElement).toHaveClass('gap-8');
});

test('Renders grid with different align values', () => {
  const { rerender } = render(<Grid align="start">Content</Grid>);
  let gridElement = screen.getByText('Content');
  expect(gridElement).toHaveClass('items-start');
  
  rerender(<Grid align="center">Content</Grid>);
  gridElement = screen.getByText('Content');
  expect(gridElement).toHaveClass('items-center');
  
  rerender(<Grid align="end">Content</Grid>);
  gridElement = screen.getByText('Content');
  expect(gridElement).toHaveClass('items-end');
});

test('Renders grid with different justify values', () => {
  const { rerender } = render(<Grid justify="start">Content</Grid>);
  let gridElement = screen.getByText('Content');
  expect(gridElement).toHaveClass('justify-start');
  
  rerender(<Grid justify="center">Content</Grid>);
  gridElement = screen.getByText('Content');
  expect(gridElement).toHaveClass('justify-center');
  
  rerender(<Grid justify="between">Content</Grid>);
  gridElement = screen.getByText('Content');
  expect(gridElement).toHaveClass('justify-between');
});

test('Renders grid with custom as prop', () => {
  render(<Grid as="section">Content</Grid>);
  const gridElement = screen.getByText('Content');
  
  expect(gridElement.tagName).toBe('SECTION');
});

test('Renders grid with custom className', () => {
  render(<Grid className="custom-class">Content</Grid>);
  const gridElement = screen.getByText('Content');
  
  expect(gridElement).toHaveClass('custom-class');
  expect(gridElement).toHaveClass('grid');
});

test('Renders grid with Grid.Col', () => {
  render(
    <Grid columns="3">
      <Grid.Col>Col 1</Grid.Col>
      <Grid.Col>Col 2</Grid.Col>
      <Grid.Col>Col 3</Grid.Col>
    </Grid>
  );
  
  expect(screen.getByText('Col 1')).toBeInTheDocument();
  expect(screen.getByText('Col 2')).toBeInTheDocument();
  expect(screen.getByText('Col 3')).toBeInTheDocument();
});

