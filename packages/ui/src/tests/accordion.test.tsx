import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import { Accordion } from '../components/accordion';

test('Renders accordion component', () => {
  render(
    <Accordion>
      <Accordion.Header>Header</Accordion.Header>
      <Accordion.Body>Body content</Accordion.Body>
    </Accordion>
  );
  const headerElement = screen.getByRole('button', { name: 'Header' });
  const bodyElement = screen.getByText('Body content');
  
  expect(headerElement).toBeInTheDocument();
  expect(bodyElement).toBeInTheDocument();
});

test('Accordion body is hidden by default', () => {
  render(
    <Accordion>
      <Accordion.Header>Header</Accordion.Header>
      <Accordion.Body>Body content</Accordion.Body>
    </Accordion>
  );
  const bodyElement = screen.getByText('Body content');
  
  expect(bodyElement).toHaveStyle({ display: 'none' });
});

test('Accordion body toggles visibility on header click', async () => {
  render(
    <Accordion>
      <Accordion.Header>Header</Accordion.Header>
      <Accordion.Body>Body content</Accordion.Body>
    </Accordion>
  );
  const headerElement = screen.getByRole('button', { name: 'Header' });
  const bodyElement = screen.getByText('Body content');
  
  expect(bodyElement).toHaveStyle({ display: 'none' });
  
  await user.click(headerElement);
  expect(bodyElement).toHaveStyle({ display: 'block' });
});

test('Accordion opens by default when defaultOpen is true', () => {
  render(
    <Accordion defaultOpen>
      <Accordion.Header>Header</Accordion.Header>
      <Accordion.Body>Body content</Accordion.Body>
    </Accordion>
  );
  const bodyElement = screen.getByText('Body content');
  
  expect(bodyElement).toHaveStyle({ display: 'block' });
});

test('Accordion header can render function children', async () => {
  render(
    <Accordion>
      <Accordion.Header>
        {({ open }) => `Header ${open ? 'Open' : 'Closed'}`}
      </Accordion.Header>
      <Accordion.Body>Body content</Accordion.Body>
    </Accordion>
  );
  
  expect(screen.getByText('Header Closed')).toBeInTheDocument();
  
  const headerElement = screen.getByRole('button');
  await user.click(headerElement);
  
  expect(screen.getByText('Header Open')).toBeInTheDocument();
});

