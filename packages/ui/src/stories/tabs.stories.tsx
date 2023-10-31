// tabs.stories.ts|tsx
import * as React from 'react';
import { ComponentMeta } from '@storybook/react';

import { Tab } from '../components/tabs';

export default {
  title: 'Components/Tabs',
  component: Tab,
  parameters: {
    viewMode: 'docs',
  },
} as ComponentMeta<typeof Tab>;

export const Simple = () => (
  <Tab>
    <Tab.List>
      <Tab.ListItem>Recent</Tab.ListItem>
      <Tab.ListItem>Popular</Tab.ListItem>
      <Tab.ListItem>Trending</Tab.ListItem>
    </Tab.List>
    <Tab.Panels>
      <Tab.Panel>Recent panel</Tab.Panel>
      <Tab.Panel>Popular panel</Tab.Panel>
      <Tab.Panel>Trending panel</Tab.Panel>
    </Tab.Panels>
  </Tab>
);

export const Vertical = () => (
  <Tab vertical>
    <Tab.List>
      <Tab.ListItem>Recent</Tab.ListItem>
      <Tab.ListItem>Popular</Tab.ListItem>
      <Tab.ListItem>Trending</Tab.ListItem>
    </Tab.List>
    <Tab.Panels>
      <Tab.Panel>Recent panel</Tab.Panel>
      <Tab.Panel>Popular panel</Tab.Panel>
      <Tab.Panel>Trending panel</Tab.Panel>
    </Tab.Panels>
  </Tab>
);
