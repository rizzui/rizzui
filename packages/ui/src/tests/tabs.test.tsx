import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import { Tab } from '../components/tabs';

// Mock scrollTo globally for all tests
beforeAll(() => {
  Element.prototype.scrollTo = jest.fn();
});

test('Renders tabs component', () => {
  render(
    <Tab>
      <Tab.List>
        <Tab.ListItem>Tab 1</Tab.ListItem>
        <Tab.ListItem>Tab 2</Tab.ListItem>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>Panel 1</Tab.Panel>
        <Tab.Panel>Panel 2</Tab.Panel>
      </Tab.Panels>
    </Tab>
  );
  
  expect(screen.getByText('Tab 1')).toBeInTheDocument();
  expect(screen.getByText('Tab 2')).toBeInTheDocument();
  expect(screen.getByText('Panel 1')).toBeInTheDocument();
});

test('Shows first panel by default', () => {
  render(
    <Tab>
      <Tab.List>
        <Tab.ListItem>Tab 1</Tab.ListItem>
        <Tab.ListItem>Tab 2</Tab.ListItem>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>Panel 1</Tab.Panel>
        <Tab.Panel>Panel 2</Tab.Panel>
      </Tab.Panels>
    </Tab>
  );
  
  expect(screen.getByText('Panel 1')).toBeVisible();
  expect(screen.queryByText('Panel 2')).not.toBeInTheDocument();
});

test('Switches panels when tab is clicked', async () => {
  render(
    <Tab>
      <Tab.List>
        <Tab.ListItem>Tab 1</Tab.ListItem>
        <Tab.ListItem>Tab 2</Tab.ListItem>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>Panel 1</Tab.Panel>
        <Tab.Panel>Panel 2</Tab.Panel>
      </Tab.Panels>
    </Tab>
  );
  
  const tab2 = screen.getByText('Tab 2');
  await user.click(tab2);
  
  expect(screen.getByText('Panel 2')).toBeVisible();
  expect(screen.queryByText('Panel 1')).not.toBeInTheDocument();
});

test('Renders tabs with selectedIndex', () => {
  render(
    <Tab selectedIndex={1}>
      <Tab.List>
        <Tab.ListItem>Tab 1</Tab.ListItem>
        <Tab.ListItem>Tab 2</Tab.ListItem>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>Panel 1</Tab.Panel>
        <Tab.Panel>Panel 2</Tab.Panel>
      </Tab.Panels>
    </Tab>
  );
  
  expect(screen.getByText('Panel 2')).toBeVisible();
  expect(screen.queryByText('Panel 1')).not.toBeInTheDocument();
});

test('Renders vertical tabs', () => {
  const { container } = render(
    <Tab vertical>
      <Tab.List>
        <Tab.ListItem>Tab 1</Tab.ListItem>
        <Tab.ListItem>Tab 2</Tab.ListItem>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>Panel 1</Tab.Panel>
        <Tab.Panel>Panel 2</Tab.Panel>
      </Tab.Panels>
    </Tab>
  );
  
  const tabRoot = container.querySelector('.rizzui-tab-root');
  expect(tabRoot).toHaveClass('flex');
});

test('Renders tabs with custom className', () => {
  const { container } = render(
    <Tab className="custom-tabs">
      <Tab.List>
        <Tab.ListItem>Tab 1</Tab.ListItem>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>Panel 1</Tab.Panel>
      </Tab.Panels>
    </Tab>
  );
  
  const tabRoot = container.querySelector('.rizzui-tab-root');
  expect(tabRoot).toHaveClass('custom-tabs');
});

