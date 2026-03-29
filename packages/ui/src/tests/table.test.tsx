import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Table } from '../components/table';

test('Renders table component', () => {
  render(
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.Head>Name</Table.Head>
          <Table.Head>Age</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>John</Table.Cell>
          <Table.Cell>30</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
  
  expect(screen.getByText('Name')).toBeInTheDocument();
  expect(screen.getByText('Age')).toBeInTheDocument();
  expect(screen.getByText('John')).toBeInTheDocument();
  expect(screen.getByText('30')).toBeInTheDocument();
});

test('Renders table with header, body, and footer', () => {
  render(
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.Head>Name</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>John</Table.Cell>
        </Table.Row>
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.Cell>Total: 1</Table.Cell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
  
  expect(screen.getByText('Name')).toBeInTheDocument();
  expect(screen.getByText('John')).toBeInTheDocument();
  expect(screen.getByText('Total: 1')).toBeInTheDocument();
});

test('Renders table with different variants', () => {
  const { rerender, container } = render(
    <Table variant="modern">
      <Table.Body>
        <Table.Row>
          <Table.Cell>Content</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
  
  let tableElement = container.querySelector('table');
  expect(tableElement).toBeInTheDocument();
  
  rerender(
    <Table variant="minimal">
      <Table.Body>
        <Table.Row>
          <Table.Cell>Content</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
  
  tableElement = container.querySelector('table');
  expect(tableElement).toBeInTheDocument();
});

test('Renders table with custom className', () => {
  const { container } = render(
    <Table className="custom-table">
      <Table.Body>
        <Table.Row>
          <Table.Cell>Content</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
  
  const tableElement = container.querySelector('table');
  expect(tableElement).toHaveClass('custom-table');
});

test('Renders table with multiple rows', () => {
  render(
    <Table>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Row 1</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Row 2</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Row 3</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
  
  expect(screen.getByText('Row 1')).toBeInTheDocument();
  expect(screen.getByText('Row 2')).toBeInTheDocument();
  expect(screen.getByText('Row 3')).toBeInTheDocument();
});

