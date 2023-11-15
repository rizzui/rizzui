// popover.stories.ts|tsx
import * as React from 'react';
import { ComponentMeta } from '@storybook/react';

import { Popover } from '../components/popover';
import { Button } from '../components/button';
import { Text, Title } from '../components/typography';

export default {
  title: 'Components/Popover',
  component: Popover,
  parameters: {
    viewMode: 'docs',
  },
} as ComponentMeta<typeof Popover>;

export const Default = () => (
  <div className="h-44">
    <Popover>
      <Popover.Trigger>
        <Button variant="outline">Open Popover</Button>
      </Popover.Trigger>
      <Popover.Content>
        <Title as="h6" className="!mb-0 font-semibold">
          This is a default popover
        </Title>
        <Text>It is opened when button is clicked. </Text>
      </Popover.Content>
    </Popover>
  </div>
);
